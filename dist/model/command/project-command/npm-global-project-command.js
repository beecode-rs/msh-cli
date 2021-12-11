"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.npmGlobalProjectCommandFactory = exports.NpmGlobalProjectCommand = void 0;
const compare_versions_1 = __importDefault(require("compare-versions"));
const fast_json_stable_stringify_1 = __importDefault(require("fast-json-stable-stringify"));
const path_1 = __importDefault(require("path"));
const file_service_1 = require("src/service/file-service");
const config_1 = require("src/util/config");
const logger_1 = require("src/util/logger");
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
                    name: 'Global NPM Dependencies',
                    errorMessage: versionConflictWarningMessage.join('\n\n'),
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
        if (globalIgnorePackages.length === 0)
            return dependencies;
        return Object.entries(dependencies)
            .filter(([packageName]) => !globalIgnorePackages.includes(packageName))
            .reduce((acc, [packageName, version]) => ({ ...acc, [packageName]: version }), {});
    }
    _uniquePackages(depsByProject) {
        const result = {};
        Object.entries(depsByProject).forEach(([project, deps]) => {
            Object.entries(deps).forEach(([packageName, version]) => {
                const pk = (result[packageName] = result[packageName] ?? { versions: [], versionProject: {} });
                if (!pk.versions.includes(version))
                    pk.versions.push(version);
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
            if (pnA < pnB)
                return -1;
            if (pnA > pnB)
                return 1;
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
        const sortedVersions = versions.sort(compare_versions_1.default);
        const result = sortedVersions.pop();
        if (!result)
            throw new Error(`Missing version in array [${(0, fast_json_stable_stringify_1.default)(versions)}]`);
        return result;
    }
    _overrideGlobalDepsWithNewHighestDependencies(highestDependencies) {
        const globalPackageJs = this._packageJsonForProject();
        globalPackageJs.dependencies = highestDependencies;
        const fileData = JSON.stringify(JSON.parse((0, fast_json_stable_stringify_1.default)(globalPackageJs)), null, 2);
        file_service_1.fileService.writeToFileSync({ filePath: 'package.json', data: fileData });
    }
    _packageJsonForProject(project) {
        return require(path_1.default.join(process.cwd(), [project, 'package.json'].filter(Boolean).join('/'))); // eslint-disable-line @typescript-eslint/no-var-requires
    }
}
exports.NpmGlobalProjectCommand = NpmGlobalProjectCommand;
const npmGlobalProjectCommandFactory = (...params) => new NpmGlobalProjectCommand(...params);
exports.npmGlobalProjectCommandFactory = npmGlobalProjectCommandFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLWdsb2JhbC1wcm9qZWN0LWNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvbnBtLWdsb2JhbC1wcm9qZWN0LWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0VBQW1DO0FBQ25DLDRGQUFrRDtBQUNsRCxnREFBdUI7QUFFdkIsMkRBQXNEO0FBQ3RELDRDQUF3QztBQUN4Qyw0Q0FBd0M7QUFPeEMsTUFBYSx1QkFBdUI7SUFDM0IsS0FBSyxDQUFDLE9BQU87UUFDbEIsSUFBSTtZQUNGLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1lBQzlDLElBQUEsZUFBTSxHQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLGFBQWEsQ0FBQyxDQUFBO1lBRTlELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDMUQsSUFBQSxlQUFNLEdBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEVBQUUsY0FBYyxDQUFDLENBQUE7WUFFN0QsTUFBTSw2QkFBNkIsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDekYsSUFBQSxlQUFNLEdBQUUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsNkJBQTZCLENBQUMsQ0FBQTtZQUVqRixNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUNyRSxNQUFNLHlCQUF5QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ2pILElBQUEsZUFBTSxHQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLHlC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QixDQUFDLE9BQWdCO1FBQy9DLE9BQU8sT0FBTyxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMseURBQXlEO0lBQ3pKLENBQUM7Q0FDRjtBQXRHRCwwREFzR0M7QUFFTSxNQUFNLDhCQUE4QixHQUFHLENBQzVDLEdBQUcsTUFBNkQsRUFDdkMsRUFBRSxDQUFDLElBQUksdUJBQXVCLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQTtBQUZ2RCxRQUFBLDhCQUE4QixrQ0FFeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY1ZlciBmcm9tICdjb21wYXJlLXZlcnNpb25zJ1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICdmYXN0LWpzb24tc3RhYmxlLXN0cmluZ2lmeSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBFeGVjdXRhYmxlLCBFeGVjdXRlUmVzdWx0IH0gZnJvbSAnc3JjL21vZGVsL2NvbW1hbmQvaW50ZXJmYWNlcydcbmltcG9ydCB7IGZpbGVTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UvZmlsZS1zZXJ2aWNlJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnc3JjL3V0aWwvbG9nZ2VyJ1xuXG5leHBvcnQgdHlwZSBWZXJzaW9uT25Qcm9qZWN0cyA9IHsgW2s6IHN0cmluZ106IHN0cmluZ1tdIH1cbmV4cG9ydCB0eXBlIFVuaXF1ZVBhY2thZ2VzID0geyBbazogc3RyaW5nXTogeyB2ZXJzaW9uczogc3RyaW5nW107IHZlcnNpb25Qcm9qZWN0OiBWZXJzaW9uT25Qcm9qZWN0cyB9IH1cbmV4cG9ydCB0eXBlIERlcGVuZGVuY2llc09iamVjdCA9IHsgW2s6IHN0cmluZ106IHN0cmluZyB9XG5leHBvcnQgdHlwZSBQcm9qZWN0V2l0aERlcGVuZGVuY2llcyA9IHsgW2s6IHN0cmluZ106IERlcGVuZGVuY2llc09iamVjdCB9XG5cbmV4cG9ydCBjbGFzcyBOcG1HbG9iYWxQcm9qZWN0Q29tbWFuZCBpbXBsZW1lbnRzIEV4ZWN1dGFibGUge1xuICBwdWJsaWMgYXN5bmMgZXhlY3V0ZSgpOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHRbXT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkZXBzQnlQcm9qZWN0ID0gdGhpcy5fYWxsRGVwc0J5UHJvamVjdCgpXG4gICAgICBsb2dnZXIoKS5kZWJ1ZygnYWxsIGRlcGVuZGVuY2llcyBhbGwgcHJvamVjdHMnLCBkZXBzQnlQcm9qZWN0KVxuXG4gICAgICBjb25zdCB1bmlxdWVQYWNrYWdlcyA9IHRoaXMuX3VuaXF1ZVBhY2thZ2VzKGRlcHNCeVByb2plY3QpXG4gICAgICBsb2dnZXIoKS5kZWJ1ZygnYWRkIGRlcGVuZGVuY2llcyBieSBwYWNrYWdlJywgdW5pcXVlUGFja2FnZXMpXG5cbiAgICAgIGNvbnN0IHZlcnNpb25Db25mbGljdFdhcm5pbmdNZXNzYWdlID0gdGhpcy5fdmVyc2lvbkNvbmZsaWN0V2FybmluZ01lc3NhZ2UodW5pcXVlUGFja2FnZXMpXG4gICAgICBsb2dnZXIoKS5kZWJ1ZygndmVyc2lvbiBjb25mbGljdCB3YXJuaW5nIG1lc3NhZ2UnLCB2ZXJzaW9uQ29uZmxpY3RXYXJuaW5nTWVzc2FnZSlcblxuICAgICAgY29uc3QgaGlnaGVzdERlcGVuZGVuY2llcyA9IHRoaXMuX2hpZ2hlc3REZXBlbmRlbmNpZXModW5pcXVlUGFja2FnZXMpXG4gICAgICBjb25zdCBoaWdoZXN0RGVwZW5kZW5jaWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaGlnaGVzdERlcGVuZGVuY2llcywgT2JqZWN0LmtleXMoaGlnaGVzdERlcGVuZGVuY2llcykuc29ydCgpLCAyKVxuICAgICAgbG9nZ2VyKCkuZGVidWcoJ2hpZ2hlc3QgZGVwZW5kZW5jaWVzJywgaGlnaGVzdERlcGVuZGVuY2llc1N0cmluZylcblxuICAgICAgdGhpcy5fb3ZlcnJpZGVHbG9iYWxEZXBzV2l0aE5ld0hpZ2hlc3REZXBlbmRlbmNpZXMoaGlnaGVzdERlcGVuZGVuY2llcylcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnR2xvYmFsIE5QTSBEZXBlbmRlbmNpZXMnLFxuICAgICAgICAgIGVycm9yTWVzc2FnZTogdmVyc2lvbkNvbmZsaWN0V2FybmluZ01lc3NhZ2Uuam9pbignXFxuXFxuJyksXG4gICAgICAgICAgc3RyaW5nUmVzdWx0OiBgR2F0aGVyZWQgZGVwZW5kZW5jaWVzIFxcblxcbiR7aGlnaGVzdERlcGVuZGVuY2llc1N0cmluZ31gLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICByZXR1cm4gW3sgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9XVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfYWxsRGVwc0J5UHJvamVjdCgpOiBQcm9qZWN0V2l0aERlcGVuZGVuY2llcyB7XG4gICAgcmV0dXJuIGNvbmZpZygpXG4gICAgICAucHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhY2thZ2VKcyA9IHRoaXMuX3BhY2thZ2VKc29uRm9yUHJvamVjdChwcm9qZWN0KVxuICAgICAgICBjb25zdCBwcm9qZWN0RGVwcyA9IHsgLi4ucGFja2FnZUpzLmRlcGVuZGVuY2llcywgLi4ucGFja2FnZUpzLmRldkRlcGVuZGVuY2llcyB9XG4gICAgICAgIGNvbnN0IGNsZWFuUHJvamVjdERlcHMgPSB0aGlzLl9yZW1vdmVJZ25vcmVkUGFja2FnZXMocHJvamVjdERlcHMpXG4gICAgICAgIHJldHVybiB7IFtwcm9qZWN0XTogY2xlYW5Qcm9qZWN0RGVwcyB9XG4gICAgICB9KVxuICAgICAgLnJlZHVjZSgoYWNjLCBjdXIpID0+IE9iamVjdC5hc3NpZ24oYWNjLCBjdXIpLCB7fSlcbiAgfVxuXG4gIHByb3RlY3RlZCBfcmVtb3ZlSWdub3JlZFBhY2thZ2VzKGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzT2JqZWN0KTogRGVwZW5kZW5jaWVzT2JqZWN0IHtcbiAgICBjb25zdCB7IGdsb2JhbElnbm9yZVBhY2thZ2VzIH0gPSBjb25maWcoKS5ucG1cbiAgICBpZiAoZ2xvYmFsSWdub3JlUGFja2FnZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZGVwZW5kZW5jaWVzXG5cbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoZGVwZW5kZW5jaWVzKVxuICAgICAgLmZpbHRlcigoW3BhY2thZ2VOYW1lXSkgPT4gIWdsb2JhbElnbm9yZVBhY2thZ2VzLmluY2x1ZGVzKHBhY2thZ2VOYW1lKSlcbiAgICAgIC5yZWR1Y2UoKGFjYywgW3BhY2thZ2VOYW1lLCB2ZXJzaW9uXSkgPT4gKHsgLi4uYWNjLCBbcGFja2FnZU5hbWVdOiB2ZXJzaW9uIH0pLCB7fSlcbiAgfVxuXG4gIHByb3RlY3RlZCBfdW5pcXVlUGFja2FnZXMoZGVwc0J5UHJvamVjdDogUHJvamVjdFdpdGhEZXBlbmRlbmNpZXMpOiBVbmlxdWVQYWNrYWdlcyB7XG4gICAgY29uc3QgcmVzdWx0OiBVbmlxdWVQYWNrYWdlcyA9IHt9XG4gICAgT2JqZWN0LmVudHJpZXMoZGVwc0J5UHJvamVjdCkuZm9yRWFjaCgoW3Byb2plY3QsIGRlcHNdKSA9PiB7XG4gICAgICBPYmplY3QuZW50cmllcyhkZXBzKS5mb3JFYWNoKChbcGFja2FnZU5hbWUsIHZlcnNpb25dKSA9PiB7XG4gICAgICAgIGNvbnN0IHBrID0gKHJlc3VsdFtwYWNrYWdlTmFtZV0gPSByZXN1bHRbcGFja2FnZU5hbWVdID8/IHsgdmVyc2lvbnM6IFtdLCB2ZXJzaW9uUHJvamVjdDoge30gfSlcbiAgICAgICAgaWYgKCFway52ZXJzaW9ucy5pbmNsdWRlcyh2ZXJzaW9uKSkgcGsudmVyc2lvbnMucHVzaCh2ZXJzaW9uKVxuICAgICAgICBjb25zdCBwdiA9IChway52ZXJzaW9uUHJvamVjdFt2ZXJzaW9uXSA9IHBrLnZlcnNpb25Qcm9qZWN0W3ZlcnNpb25dID8/IFtdKVxuICAgICAgICBwdi5wdXNoKHByb2plY3QpXG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgcHJvdGVjdGVkIF92ZXJzaW9uQ29uZmxpY3RXYXJuaW5nTWVzc2FnZSh1bmlxdWVQYWNrYWdlczogVW5pcXVlUGFja2FnZXMpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHVuaXF1ZVBhY2thZ2VzKVxuICAgICAgLmZpbHRlcigoW18sIHsgdmVyc2lvbnMgfV0pID0+IHZlcnNpb25zLmxlbmd0aCA+IDEpXG4gICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBbcG5BXSA9IGFcbiAgICAgICAgY29uc3QgW3BuQl0gPSBiXG4gICAgICAgIGlmIChwbkEgPCBwbkIpIHJldHVybiAtMVxuICAgICAgICBpZiAocG5BID4gcG5CKSByZXR1cm4gMVxuICAgICAgICByZXR1cm4gMFxuICAgICAgfSlcbiAgICAgIC5tYXAoKFtwYWNrYWdlTmFtZSwgdW5pcXVlUGFja0luZm9dKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtwYWNrYWdlTmFtZX06ICR7c3RyaW5naWZ5KHVuaXF1ZVBhY2tJbmZvLnZlcnNpb25zKX1cXG4ke09iamVjdC5lbnRyaWVzKHVuaXF1ZVBhY2tJbmZvLnZlcnNpb25Qcm9qZWN0KVxuICAgICAgICAgIC5tYXAoKFt2LCBwcmpzXSkgPT4gYCR7dn06JHtzdHJpbmdpZnkocHJqcyl9YClcbiAgICAgICAgICAuam9pbignXFxuJyl9YFxuICAgICAgfSlcbiAgfVxuXG4gIHByb3RlY3RlZCBfaGlnaGVzdERlcGVuZGVuY2llcyh1bmlxdWVQYWNrYWdlczogVW5pcXVlUGFja2FnZXMpOiBEZXBlbmRlbmNpZXNPYmplY3Qge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh1bmlxdWVQYWNrYWdlcylcbiAgICAgIC5tYXAoKFtwYWNrYWdlTmFtZSwgeyB2ZXJzaW9ucyB9XSkgPT4gKHsgW3BhY2thZ2VOYW1lXTogdGhpcy5faGlnaGVzdFZlcnNpb24odmVyc2lvbnMpIH0pKVxuICAgICAgLnJlZHVjZSgoYWNjLCBjdXIpID0+IE9iamVjdC5hc3NpZ24oYWNjLCBjdXIpLCB7fSlcbiAgfVxuXG4gIHByb3RlY3RlZCBfaGlnaGVzdFZlcnNpb24odmVyc2lvbnM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICBjb25zdCBzb3J0ZWRWZXJzaW9ucyA9IHZlcnNpb25zLnNvcnQoY1ZlcilcbiAgICBjb25zdCByZXN1bHQgPSBzb3J0ZWRWZXJzaW9ucy5wb3AoKVxuICAgIGlmICghcmVzdWx0KSB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgdmVyc2lvbiBpbiBhcnJheSBbJHtzdHJpbmdpZnkodmVyc2lvbnMpfV1gKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHByb3RlY3RlZCBfb3ZlcnJpZGVHbG9iYWxEZXBzV2l0aE5ld0hpZ2hlc3REZXBlbmRlbmNpZXMoaGlnaGVzdERlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzT2JqZWN0KTogdm9pZCB7XG4gICAgY29uc3QgZ2xvYmFsUGFja2FnZUpzID0gdGhpcy5fcGFja2FnZUpzb25Gb3JQcm9qZWN0KClcbiAgICBnbG9iYWxQYWNrYWdlSnMuZGVwZW5kZW5jaWVzID0gaGlnaGVzdERlcGVuZGVuY2llc1xuICAgIGNvbnN0IGZpbGVEYXRhID0gSlNPTi5zdHJpbmdpZnkoSlNPTi5wYXJzZShzdHJpbmdpZnkoZ2xvYmFsUGFja2FnZUpzKSksIG51bGwsIDIpXG4gICAgZmlsZVNlcnZpY2Uud3JpdGVUb0ZpbGVTeW5jKHsgZmlsZVBhdGg6ICdwYWNrYWdlLmpzb24nLCBkYXRhOiBmaWxlRGF0YSB9KVxuICB9XG5cbiAgcHJvdGVjdGVkIF9wYWNrYWdlSnNvbkZvclByb2plY3QocHJvamVjdD86IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHJlcXVpcmUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFtwcm9qZWN0LCAncGFja2FnZS5qc29uJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJy8nKSkpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBucG1HbG9iYWxQcm9qZWN0Q29tbWFuZEZhY3RvcnkgPSAoXG4gIC4uLnBhcmFtczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBOcG1HbG9iYWxQcm9qZWN0Q29tbWFuZD5cbik6IE5wbUdsb2JhbFByb2plY3RDb21tYW5kID0+IG5ldyBOcG1HbG9iYWxQcm9qZWN0Q29tbWFuZCguLi5wYXJhbXMpXG4iXX0=