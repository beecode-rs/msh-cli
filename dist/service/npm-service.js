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
const config_1 = require("src/util/config");
const constant_1 = require("src/util/constant");
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
                cli_service_1.cliService.cd(path.join(constant_1.constant.rootDir, project));
                const cmd = `npm i -s`;
                cli_service_1.cliService
                    .exec({ cmd })
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
        cli_service_1.cliService.cd(constant_1.constant.rootDir);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9ucG0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQW1DO0FBQ25DLDRGQUFrRDtBQUNsRCw0Q0FBbUI7QUFDbkIsMkNBQTRCO0FBRTVCLHVGQUFnRjtBQUNoRix5REFBcUU7QUFDckUsNENBQXdDO0FBQ3hDLGdEQUE0QztBQUM1Qyw0Q0FBd0M7QUFFM0IsUUFBQSxVQUFVLEdBQUc7SUFDeEIsYUFBYSxFQUFFLENBQUMsV0FBbUIsRUFBa0IsRUFBRTtRQUNyRCxRQUFRLFdBQVcsRUFBRTtZQUNuQixLQUFLLFNBQVM7Z0JBQ1osT0FBTyxJQUFJLHNEQUF3QixDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO2dCQUNoRSxNQUFLO1lBQ1A7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsV0FBVyxHQUFHLENBQUMsQ0FBQTtTQUM5RDtJQUNILENBQUM7SUFFRCxPQUFPLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLGVBQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDL0MsT0FBTyxJQUFJLE9BQU8sQ0FBa0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQ3ZELHdCQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtnQkFDbkQsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFBO2dCQUN0Qix3QkFBVTtxQkFDUCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztxQkFDYixJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDZixlQUFNLENBQUMs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QWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0NBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUMzRyxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjVmVyIGZyb20gJ2NvbXBhcmUtdmVyc2lvbnMnXG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJ2Zhc3QtanNvbi1zdGFibGUtc3RyaW5naWZ5J1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgUHJvamVjdENvbW1hbmQgfSBmcm9tICdzcmMvbW9kZWwvcHJvamVjdC1jb21tYW5kJ1xuaW1wb3J0IHsgUHJvamVjdE5wbUluc3RhbGxDb21tYW5kIH0gZnJvbSAnc3JjL21vZGVsL3Byb2plY3QtbnBtLWluc3RhbGwtY29tbWFuZCdcbmltcG9ydCB7IFByaW50U3RkTWVzc2FnZSwgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL2NsaS1zZXJ2aWNlJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuaW1wb3J0IHsgY29uc3RhbnQgfSBmcm9tICdzcmMvdXRpbC9jb25zdGFudCdcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3NyYy91dGlsL2xvZ2dlcidcblxuZXhwb3J0IGNvbnN0IG5wbVNlcnZpY2UgPSB7XG4gIGNyZWF0ZUNvbW1hbmQ6IChjb21tYW5kVHlwZTogc3RyaW5nKTogUHJvamVjdENvbW1hbmQgPT4ge1xuICAgIHN3aXRjaCAoY29tbWFuZFR5cGUpIHtcbiAgICAgIGNhc2UgJ2luc3RhbGwnOlxuICAgICAgICByZXR1cm4gbmV3IFByb2plY3ROcG1JbnN0YWxsQ29tbWFuZCh7IHJvb3REaXI6IGNvbmZpZy5yb290RGlyIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIG5wbSBjb21tYW5kIFske2NvbW1hbmRUeXBlfV1gKVxuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsOiBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBjb25maWcucHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8UHJpbnRTdGRNZXNzYWdlPigocmVzb2x2ZSwgcmVqZWN0cykgPT4ge1xuICAgICAgICBjbGlTZXJ2aWNlLmNkKHBhdGguam9pbihjb25zdGFudC5yb290RGlyLCBwcm9qZWN0KSlcbiAgICAgICAgY29uc3QgY21kID0gYG5wbSBpIC1zYFxuICAgICAgICBjbGlTZXJ2aWNlXG4gICAgICAgICAgLmV4ZWMoeyBjbWQgfSlcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoYGV4ZWMgZG9uZSBmb3IgcHJvamVjdCBbJHtwcm9qZWN0fV1gKVxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKEpTT04uc3RyaW5naWZ5KHsgW3Byb2plY3RdOiByZXN1bHQgfSkpXG4gICAgICAgICAgICByZXNvbHZlKHsgW3Byb2plY3RdOiByZXN1bHQgfSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChyZWplY3RzKVxuICAgICAgfSlcbiAgICB9KVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICBjbGlTZXJ2aWNlLnByaW50U3RkTWVzc2FnZSguLi5yZXN1bHRzKVxuICAgIGNsaVNlcnZpY2UuY2QoY29uc3RhbnQucm9vdERpcilcbiAgfSxcbiAgZ2xvYmFsOiAoKTogdm9pZCA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQgeWV0JylcbiAgICBjb25zdCBnRGVwcyA9IHt9XG4gICAgY29uc3QgZ0RlcHNOZXdlciA9IHt9XG4gICAgY29uc3QgZ0RlcHNPbGRlciA9IHt9XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgY29uZmlnLnByb2plY3RzKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlc1xuICAgICAgY29uc3QgcGFja2FnZUpzID0gcmVxdWlyZShwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgYCR7cHJvamVjdH0vcGFja2FnZS5qc29uYCkpXG4gICAgICBjb25zdCBhbGxEZXBzID0geyAuLi5wYWNrYWdlSnMuZGVwZW5kZW5jaWVzLCAuLi5wYWNrYWdlSnMuZGV2RGVwZW5kZW5jaWVzIH1cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGFsbERlcHMpKSB7XG4gICAgICAgIGdEZXBzW2tleV0gPSBnRGVwc1trZXldIHx8IHt9XG4gICAgICAgIGdEZXBzW2tleV1bYWxsRGVwc1trZXldXSA9IGdEZXBzW2tleV1bYWxsRGVwc1trZXldXSB8fCBbXVxuICAgICAgICBnRGVwc1trZXldW2FsbERlcHNba2V5XV0ucHVzaChwcm9qZWN0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGdEZXBzKSkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGdEZXBzW2tleV0pLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3Qgc29ydGVkVmVyc2lvbnNBc2MgPSBPYmplY3Qua2V5cyhnRGVwc1trZXldKS5zb3J0KGNWZXIpXG4gICAgICAgIGdEZXBzTmV3ZXJba2V5XSA9IHNvcnRlZFZlcnNpb25zQXNjLnBvcCgpXG5cbiAgICAgICAgZm9yIChjb25zdCBvbGRWZXIgb2Ygc29ydGVkVmVyc2lvbnNBc2MpIHtcbiAgICAgICAgICBnRGVwc09sZGVyW2tleV0gPSBnRGVwc09sZGVyW2tleV0gfHwge31cbiAgICAgICAgICBnRGVwc09sZGVyW2tleV1bb2xkVmVyXSA9IGdEZXBzW2tleV1bb2xkVmVyXVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnRGVwc05ld2VyW2tleV0gPSBPYmplY3Qua2V5cyhnRGVwc1trZXldKVswXVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldmVydCBnRGVwc09sZGVyIHJlc3VsdCB0byBwcmludCBieSBwcm9qZWN0XG4gICAgY29uc3QgZ0RlcHNSZXZlcnRlZCA9IHt9XG4gICAgZm9yIChjb25zdCBwYWNrIG9mIE9iamVjdC5rZXlzKGdEZXBzT2xkZXIpKSB7XG4gICAgICBjb25zdCB2ZXJzaW9ucyA9IGdEZXBzT2xkZXJbcGFja11cbiAgICAgIGZvciAoY29uc3QgdmVyIG9mIE9iamVjdC5rZXlzKHZlcnNpb25zKSkge1xuICAgICAgICBjb25zdCBwcm9qcyA9IHZlcnNpb25zW3Zlcl1cbiAgICAgICAgZm9yIChjb25zdCBwcm9qIG9mIHByb2pzKSB7XG4gICAgICAgICAgZ0RlcHNSZXZlcnRlZFtwcm9qXSA9IGdEZXBzUmV2ZXJ0ZWRbcHJval0gfHwge31cbiAgICAgICAgICBnRGVwc1JldmVydGVkW3Byb2pdW3BhY2tdID0gdmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbG9nZ2VyLmRlYnVnKCdPbGQgRGVwcyAoYnkgcHJvamVjdCk6JylcbiAgICBsb2dnZXIuZGVidWcoSlNPTi5zdHJpbmdpZnkoZ0RlcHNSZXZlcnRlZCwgbnVsbCwgMikpXG4gICAgbG9nZ2VyLmRlYnVnKCdPbGQgRGVwcyAoYnkgcGFja2FnZSk6JylcbiAgICBsb2dnZXIuZGVidWcoSlNPTi5zdHJpbmdpZnkoZ0RlcHNPbGRlciwgbnVsbCwgMikpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlc1xuICAgIGNvbnN0IGdsb2JhbFBhY2thZ2VKcyA9IHJlcXVpcmUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIGBwYWNrYWdlLmpzb25gKSlcbiAgICBnbG9iYWxQYWNrYWdlSnMuZGVwZW5kZW5jaWVzID0gZ0RlcHNOZXdlclxuXG4gICAgZnMud3JpdGVGaWxlU3luYygncGFja2FnZS5qc29uJywgSlNPTi5zdHJpbmdpZnkoSlNPTi5wYXJzZShzdHJpbmdpZnkoZ2xvYmFsUGFja2FnZUpzKSksIG51bGwsIDQpLCAndXRmOCcpXG4gIH0sXG59XG4iXX0=