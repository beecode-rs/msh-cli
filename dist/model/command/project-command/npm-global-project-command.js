"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.npmGlobalProjectCommandFactory = exports.NpmGlobalProjectCommand = void 0;
const compare_versions_1 = require("compare-versions");
const fast_json_stable_stringify_1 = __importDefault(require("fast-json-stable-stringify"));
const path_1 = __importDefault(require("path"));
const file_service_1 = require("../../../service/file-service");
const config_1 = require("../../../util/config");
const logger_1 = require("../../../util/logger");
class NpmGlobalProjectCommand {
    async execute() {
        try {
            const depsByProject = this._allDepsByProject();
            (0, logger_1.logger)().debug('all dependencies all projects', depsByProject);
            const uniquePackages = this._uniquePackages(depsByProject);
            (0, logger_1.logger)().debug('add dependencies by package', uniquePackages);
            const versionConflictWarningMessage = this._versionConflictWarningMessage(uniquePackages);
            (0, logger_1.logger)().debug('version conflict warning message', versionConflictWarningMessage);
            const highestDependencies = this._highestDependencies(uniquePackages);
            const highestDependenciesString = JSON.stringify(highestDependencies, Object.keys(highestDependencies).sort(), 2);
            (0, logger_1.logger)().debug('highest dependencies', highestDependenciesString);
            this._overrideGlobalDepsWithNewHighestDependencies(highestDependencies);
            return [
                {
                    errorMessage: versionConflictWarningMessage.join('\n\n'),
                    name: 'Global NPM Dependencies',
                    stringResult: `Gathered dependencies \n\n${highestDependenciesString}`,
                },
            ];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
    _allDepsByProject() {
        return (0, config_1.config)()
            .projects.map((project) => {
            const packageJs = this._packageJsonForProject(project);
            const projectDeps = { ...packageJs.dependencies, ...packageJs.devDependencies };
            const cleanProjectDeps = this._removeIgnoredPackages(projectDeps);
            return { [project]: cleanProjectDeps };
        })
            .reduce((acc, cur) => Object.assign(acc, cur), {});
    }
    _removeIgnoredPackages(dependencies) {
        const { globalIgnorePackages } = (0, config_1.config)().npm;
        if (globalIgnorePackages.length === 0) {
            return dependencies;
        }
        return Object.entries(dependencies)
            .filter(([packageName]) => !globalIgnorePackages.includes(packageName))
            .reduce((acc, [packageName, version]) => ({ ...acc, [packageName]: version }), {});
    }
    _uniquePackages(depsByProject) {
        const result = {};
        Object.entries(depsByProject).forEach(([project, deps]) => {
            Object.entries(deps).forEach(([packageName, version]) => {
                const pk = (result[packageName] = result[packageName] ?? { versionProject: {}, versions: [] });
                if (!pk.versions.includes(version)) {
                    pk.versions.push(version);
                }
                const pv = (pk.versionProject[version] = pk.versionProject[version] ?? []);
                pv.push(project);
            });
        });
        return result;
    }
    _versionConflictWarningMessage(uniquePackages) {
        return Object.entries(uniquePackages)
            .filter(([_, { versions }]) => versions.length > 1)
            .sort((a, b) => {
            const [pnA] = a;
            const [pnB] = b;
            if (pnA < pnB) {
                return -1;
            }
            if (pnA > pnB) {
                return 1;
            }
            return 0;
        })
            .map(([packageName, uniquePackInfo]) => {
            return `${packageName}: ${(0, fast_json_stable_stringify_1.default)(uniquePackInfo.versions)}\n${Object.entries(uniquePackInfo.versionProject)
                .map(([v, prjs]) => `${v}:${(0, fast_json_stable_stringify_1.default)(prjs)}`)
                .join('\n')}`;
        });
    }
    _highestDependencies(uniquePackages) {
        return Object.entries(uniquePackages)
            .map(([packageName, { versions }]) => ({ [packageName]: this._highestVersion(versions) }))
            .reduce((acc, cur) => Object.assign(acc, cur), {});
    }
    _highestVersion(versions) {
        const sortedVersions = versions.sort(compare_versions_1.compareVersions);
        const result = sortedVersions.pop();
        if (!result) {
            throw new Error(`Missing version in array [${(0, fast_json_stable_stringify_1.default)(versions)}]`);
        }
        return result;
    }
    _overrideGlobalDepsWithNewHighestDependencies(highestDependencies) {
        const globalPackageJs = this._packageJsonForProject();
        globalPackageJs.dependencies = highestDependencies;
        const fileData = JSON.stringify(JSON.parse((0, fast_json_stable_stringify_1.default)(globalPackageJs)), null, 2);
        file_service_1.fileService.writeToFileSync({ data: fileData, filePath: 'package.json' });
    }
    _packageJsonForProject(project) {
        return require(path_1.default.join(process.cwd(), [project, 'package.json'].filter(Boolean).join('/'))); // eslint-disable-line @typescript-eslint/no-var-requires
    }
}
exports.NpmGlobalProjectCommand = NpmGlobalProjectCommand;
const npmGlobalProjectCommandFactory = (...params) => new NpmGlobalProjectCommand(...params);
exports.npmGlobalProjectCommandFactory = npmGlobalProjectCommandFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLWdsb2JhbC1wcm9qZWN0LWNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvbnBtLWdsb2JhbC1wcm9qZWN0LWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELDRGQUFrRDtBQUNsRCxnREFBdUI7QUFFdkIsMkRBQXNEO0FBQ3RELDRDQUF3QztBQUN4Qyw0Q0FBd0M7QUFVeEMsTUFBYSx1QkFBdUI7SUFDbkMsS0FBSyxDQUFDLE9BQU87UUFDWixJQUFJO1lBQ0gsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7WUFDOUMsSUFBQSxlQUFNLEdBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLEVBQUUsYUFBYSxDQUFDLENBQUE7WUFFOUQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUMxRCxJQUFBLGVBQU0sR0FBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxjQUFjLENBQUMsQ0FBQTtZQUU3RCxNQUFNLDZCQUE2QixHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUN6RixJQUFBLGVBQU0sR0FBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsRUFBRSw2QkFBNkIsQ0FBQyxDQUFBO1lBRWpGLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQ3JFLE1BQU0seUJBQXlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDakgsSUFBQSxlQUFNLEdBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUseUJB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