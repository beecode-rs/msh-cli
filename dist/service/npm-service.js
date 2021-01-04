"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.npmService = void 0;
const compare_versions_1 = __importDefault(require("compare-versions"));
const fast_json_stable_stringify_1 = __importDefault(require("fast-json-stable-stringify"));
const fs_1 = __importDefault(require("fs"));
const path = __importStar(require("path"));
const project_npm_install_command_1 = require("src/model/project-npm-install-command");
const cli_service_1 = require("src/service/cli-service");
const shell_service_1 = require("src/service/shell-service");
const config_1 = require("src/util/config");
const logger_1 = require("src/util/logger");
exports.npmService = {
    createCommand: (commandType) => {
        switch (commandType) {
            case 'install':
                return new project_npm_install_command_1.ProjectNpmInstallCommand({ rootDir: config_1.config.rootDir });
                break;
            default:
                throw new Error(`Unsupported npm command [${commandType}]`);
        }
    },
    install: async () => {
        const promises = config_1.config.projects.map((project) => {
            return new Promise((resolve, rejects) => {
                shell_service_1.shellService.cd(path.join(config_1.config.rootDir, project));
                const cmd = `npm i -s`;
                shell_service_1.shellService
                    .exec(cmd)
                    .then((result) => {
                    logger_1.logger.debug(`exec done for project [${project}]`);
                    logger_1.logger.debug(JSON.stringify({ [project]: result }));
                    resolve({ [project]: result });
                })
                    .catch(rejects);
            });
        });
        const results = await Promise.all(promises);
        cli_service_1.cliService.printStdMessage(...results);
        shell_service_1.shellService.cd(config_1.config.rootDir);
    },
    global: () => {
        throw new Error('not implemented yet');
        const gDeps = {};
        const gDepsNewer = {};
        const gDepsOlder = {};
        for (const project of config_1.config.projects) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const packageJs = require(path.join(process.cwd(), `${project}/package.json`));
            const allDeps = { ...packageJs.dependencies, ...packageJs.devDependencies };
            for (const key of Object.keys(allDeps)) {
                gDeps[key] = gDeps[key] || {};
                gDeps[key][allDeps[key]] = gDeps[key][allDeps[key]] || [];
                gDeps[key][allDeps[key]].push(project);
            }
        }
        for (const key of Object.keys(gDeps)) {
            if (Object.keys(gDeps[key]).length > 1) {
                const sortedVersionsAsc = Object.keys(gDeps[key]).sort(compare_versions_1.default);
                gDepsNewer[key] = sortedVersionsAsc.pop();
                for (const oldVer of sortedVersionsAsc) {
                    gDepsOlder[key] = gDepsOlder[key] || {};
                    gDepsOlder[key][oldVer] = gDeps[key][oldVer];
                }
            }
            else {
                gDepsNewer[key] = Object.keys(gDeps[key])[0];
            }
        }
        // revert gDepsOlder result to print by project
        const gDepsReverted = {};
        for (const pack of Object.keys(gDepsOlder)) {
            const versions = gDepsOlder[pack];
            for (const ver of Object.keys(versions)) {
                const projs = versions[ver];
                for (const proj of projs) {
                    gDepsReverted[proj] = gDepsReverted[proj] || {};
                    gDepsReverted[proj][pack] = ver;
                }
            }
        }
        logger_1.logger.debug('Old Deps (by project):');
        logger_1.logger.debug(JSON.stringify(gDepsReverted, null, 2));
        logger_1.logger.debug('Old Deps (by package):');
        logger_1.logger.debug(JSON.stringify(gDepsOlder, null, 2));
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const globalPackageJs = require(path.join(process.cwd(), `package.json`));
        globalPackageJs.dependencies = gDepsNewer;
        fs_1.default.writeFileSync('package.json', JSON.stringify(JSON.parse(fast_json_stable_stringify_1.default(globalPackageJs)), null, 4), 'utf8');
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9ucG0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQW1DO0FBQ25DLDRGQUFrRDtBQUNsRCw0Q0FBbUI7QUFDbkIsMkNBQTRCO0FBRTVCLHVGQUFnRjtBQUNoRix5REFBcUU7QUFDckUsNkRBQXdEO0FBQ3hELDRDQUF3QztBQUN4Qyw0Q0FBd0M7QUFFM0IsUUFBQSxVQUFVLEdBQUc7SUFDeEIsYUFBYSxFQUFFLENBQUMsV0FBbUIsRUFBa0IsRUFBRTtRQUNyRCxRQUFRLFdBQVcsRUFBRTtZQUNuQixLQUFLLFNBQVM7Z0JBQ1osT0FBTyxJQUFJLHNEQUF3QixDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO2dCQUNoRSxNQUFLO1lBQ1A7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsV0FBVyxHQUFHLENBQUMsQ0FBQTtTQUM5RDtJQUNILENBQUM7SUFFRCxPQUFPLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLGVBQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDL0MsT0FBTyxJQUFJLE9BQU8sQ0FBa0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQ3ZELDRCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO2dCQUNuRCxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUE7Z0JBQ3RCLDRCQUFZO3FCQUNULElBQUksQ0FBQyxHQUFHLENBQUM7cUJBQ1QsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7b0JBQ2YsZUFBTSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsT0FBTyxHQUFHLENBQUMsQ0FBQTtvQkFDbEQsZUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7b0JBQ25ELE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNuQixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzNDLHdCQUFVLENBQUMsZUFBZSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUE7UUFDdEMsNEJBQVksQ0FBQyxFQUFFLENBQUMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFDRCxNQUFNLEVBQUUsR0FBUyxFQUFFO1FBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUN0QyxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDaEIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBQ3JCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUVyQixLQUFLLE1BQU0sT0FBTyxJQUFJLGVBQU0sQ0FBQyxRQUFRLEVBQUU7WUFDckMsOERBQThEO1lBQzlELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLE9BQU8sZUFBZSxDQUFDLENBQUMsQ0FBQTtZQUM5RSxNQUFNLE9BQU8sR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxHQUFHLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtZQUMzRSxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3RDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO2dCQUM3QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDekQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUN2QztTQUNGO1FBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QyxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUFJLENBQUMsQ0FBQTtnQkFDNUQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFBO2dCQUV6QyxLQUFLLE1BQU0sTUFBTSxJQUFJLGlCQUFpQixFQUFFO29CQUN0QyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtvQkFDdkMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtpQkFDN0M7YUFDRjtpQkFBTTtnQkFDTCxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUM3QztTQUNGO1FBRUQsK0NBQStDO1FBQy9DLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQTtRQUN4QixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDMUMsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pDLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDdkMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUMzQixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtvQkFDeEIsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7b0JBQy9DLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7aUJBQ2hDO2FBQ0Y7U0FDRjtRQUNELGVBQU0sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUN0QyxlQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BELGVBQU0sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUN0QyxlQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRWpELDhEQUE4RDtRQUM5RCxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQTtRQUN6RSxlQUFlLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQTtRQUV6QyxZQUFFLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0NBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUMzRyxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjVmVyIGZyb20gJ2NvbXBhcmUtdmVyc2lvbnMnXG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJ2Zhc3QtanNvbi1zdGFibGUtc3RyaW5naWZ5J1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgUHJvamVjdENvbW1hbmQgfSBmcm9tICdzcmMvbW9kZWwvcHJvamVjdC1jb21tYW5kJ1xuaW1wb3J0IHsgUHJvamVjdE5wbUluc3RhbGxDb21tYW5kIH0gZnJvbSAnc3JjL21vZGVsL3Byb2plY3QtbnBtLWluc3RhbGwtY29tbWFuZCdcbmltcG9ydCB7IFByaW50U3RkTWVzc2FnZSwgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL2NsaS1zZXJ2aWNlJ1xuaW1wb3J0IHsgc2hlbGxTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2Uvc2hlbGwtc2VydmljZSdcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ3NyYy91dGlsL2NvbmZpZydcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3NyYy91dGlsL2xvZ2dlcidcblxuZXhwb3J0IGNvbnN0IG5wbVNlcnZpY2UgPSB7XG4gIGNyZWF0ZUNvbW1hbmQ6IChjb21tYW5kVHlwZTogc3RyaW5nKTogUHJvamVjdENvbW1hbmQgPT4ge1xuICAgIHN3aXRjaCAoY29tbWFuZFR5cGUpIHtcbiAgICAgIGNhc2UgJ2luc3RhbGwnOlxuICAgICAgICByZXR1cm4gbmV3IFByb2plY3ROcG1JbnN0YWxsQ29tbWFuZCh7IHJvb3REaXI6IGNvbmZpZy5yb290RGlyIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIG5wbSBjb21tYW5kIFske2NvbW1hbmRUeXBlfV1gKVxuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsOiBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBjb25maWcucHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8UHJpbnRTdGRNZXNzYWdlPigocmVzb2x2ZSwgcmVqZWN0cykgPT4ge1xuICAgICAgICBzaGVsbFNlcnZpY2UuY2QocGF0aC5qb2luKGNvbmZpZy5yb290RGlyLCBwcm9qZWN0KSlcbiAgICAgICAgY29uc3QgY21kID0gYG5wbSBpIC1zYFxuICAgICAgICBzaGVsbFNlcnZpY2VcbiAgICAgICAgICAuZXhlYyhjbWQpXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBleGVjIGRvbmUgZm9yIHByb2plY3QgWyR7cHJvamVjdH1dYClcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhKU09OLnN0cmluZ2lmeSh7IFtwcm9qZWN0XTogcmVzdWx0IH0pKVxuICAgICAgICAgICAgcmVzb2x2ZSh7IFtwcm9qZWN0XTogcmVzdWx0IH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2gocmVqZWN0cylcbiAgICAgIH0pXG4gICAgfSlcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgY2xpU2VydmljZS5wcmludFN0ZE1lc3NhZ2UoLi4ucmVzdWx0cylcbiAgICBzaGVsbFNlcnZpY2UuY2QoY29uZmlnLnJvb3REaXIpXG4gIH0sXG4gIGdsb2JhbDogKCk6IHZvaWQgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkIHlldCcpXG4gICAgY29uc3QgZ0RlcHMgPSB7fVxuICAgIGNvbnN0IGdEZXBzTmV3ZXIgPSB7fVxuICAgIGNvbnN0IGdEZXBzT2xkZXIgPSB7fVxuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIGNvbmZpZy5wcm9qZWN0cykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbiAgICAgIGNvbnN0IHBhY2thZ2VKcyA9IHJlcXVpcmUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIGAke3Byb2plY3R9L3BhY2thZ2UuanNvbmApKVxuICAgICAgY29uc3QgYWxsRGVwcyA9IHsgLi4ucGFja2FnZUpzLmRlcGVuZGVuY2llcywgLi4ucGFja2FnZUpzLmRldkRlcGVuZGVuY2llcyB9XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhhbGxEZXBzKSkge1xuICAgICAgICBnRGVwc1trZXldID0gZ0RlcHNba2V5XSB8fCB7fVxuICAgICAgICBnRGVwc1trZXldW2FsbERlcHNba2V5XV0gPSBnRGVwc1trZXldW2FsbERlcHNba2V5XV0gfHwgW11cbiAgICAgICAgZ0RlcHNba2V5XVthbGxEZXBzW2tleV1dLnB1c2gocHJvamVjdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhnRGVwcykpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhnRGVwc1trZXldKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IHNvcnRlZFZlcnNpb25zQXNjID0gT2JqZWN0LmtleXMoZ0RlcHNba2V5XSkuc29ydChjVmVyKVxuICAgICAgICBnRGVwc05ld2VyW2tleV0gPSBzb3J0ZWRWZXJzaW9uc0FzYy5wb3AoKVxuXG4gICAgICAgIGZvciAoY29uc3Qgb2xkVmVyIG9mIHNvcnRlZFZlcnNpb25zQXNjKSB7XG4gICAgICAgICAgZ0RlcHNPbGRlcltrZXldID0gZ0RlcHNPbGRlcltrZXldIHx8IHt9XG4gICAgICAgICAgZ0RlcHNPbGRlcltrZXldW29sZFZlcl0gPSBnRGVwc1trZXldW29sZFZlcl1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ0RlcHNOZXdlcltrZXldID0gT2JqZWN0LmtleXMoZ0RlcHNba2V5XSlbMF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXZlcnQgZ0RlcHNPbGRlciByZXN1bHQgdG8gcHJpbnQgYnkgcHJvamVjdFxuICAgIGNvbnN0IGdEZXBzUmV2ZXJ0ZWQgPSB7fVxuICAgIGZvciAoY29uc3QgcGFjayBvZiBPYmplY3Qua2V5cyhnRGVwc09sZGVyKSkge1xuICAgICAgY29uc3QgdmVyc2lvbnMgPSBnRGVwc09sZGVyW3BhY2tdXG4gICAgICBmb3IgKGNvbnN0IHZlciBvZiBPYmplY3Qua2V5cyh2ZXJzaW9ucykpIHtcbiAgICAgICAgY29uc3QgcHJvanMgPSB2ZXJzaW9uc1t2ZXJdXG4gICAgICAgIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qcykge1xuICAgICAgICAgIGdEZXBzUmV2ZXJ0ZWRbcHJval0gPSBnRGVwc1JldmVydGVkW3Byb2pdIHx8IHt9XG4gICAgICAgICAgZ0RlcHNSZXZlcnRlZFtwcm9qXVtwYWNrXSA9IHZlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxvZ2dlci5kZWJ1ZygnT2xkIERlcHMgKGJ5IHByb2plY3QpOicpXG4gICAgbG9nZ2VyLmRlYnVnKEpTT04uc3RyaW5naWZ5KGdEZXBzUmV2ZXJ0ZWQsIG51bGwsIDIpKVxuICAgIGxvZ2dlci5kZWJ1ZygnT2xkIERlcHMgKGJ5IHBhY2thZ2UpOicpXG4gICAgbG9nZ2VyLmRlYnVnKEpTT04uc3RyaW5naWZ5KGdEZXBzT2xkZXIsIG51bGwsIDIpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbiAgICBjb25zdCBnbG9iYWxQYWNrYWdlSnMgPSByZXF1aXJlKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBgcGFja2FnZS5qc29uYCkpXG4gICAgZ2xvYmFsUGFja2FnZUpzLmRlcGVuZGVuY2llcyA9IGdEZXBzTmV3ZXJcblxuICAgIGZzLndyaXRlRmlsZVN5bmMoJ3BhY2thZ2UuanNvbicsIEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2Uoc3RyaW5naWZ5KGdsb2JhbFBhY2thZ2VKcykpLCBudWxsLCA0KSwgJ3V0ZjgnKVxuICB9LFxufVxuIl19