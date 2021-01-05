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
const npm_install_project_command_1 = require("src/model/command/project-command/npm-install-project-command");
const config_1 = require("src/util/config");
const logger_1 = require("src/util/logger");
exports.npmService = {
    createCommand: (commandType) => {
        switch (commandType) {
            case 'install':
                return new npm_install_project_command_1.NpmInstallProjectCommand({ rootDir: config_1.config.rootDir });
            default:
                throw new Error(`Unsupported npm command [${commandType}]`);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9ucG0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQW1DO0FBQ25DLDRGQUFrRDtBQUNsRCw0Q0FBbUI7QUFDbkIsMkNBQTRCO0FBRTVCLCtHQUF3RztBQUN4Ryw0Q0FBd0M7QUFDeEMsNENBQXdDO0FBRTNCLFFBQUEsVUFBVSxHQUFHO0lBQ3hCLGFBQWEsRUFBRSxDQUFDLFdBQW1CLEVBQW1CLEVBQUU7UUFDdEQsUUFBUSxXQUFXLEVBQUU7WUFDbkIsS0FBSyxTQUFTO2dCQUNaLE9BQU8sSUFBSSxzREFBd0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtZQUNsRTtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixXQUFXLEdBQUcsQ0FBQyxDQUFBO1NBQzlEO0lBQ0gsQ0FBQztJQUNELE1BQU0sRUFBRSxHQUFTLEVBQUU7UUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNoQixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFDckIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBRXJCLEtBQUssTUFBTSxPQUFPLElBQUksZUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNyQyw4REFBOEQ7WUFDOUQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsT0FBTyxlQUFlLENBQUMsQ0FBQyxDQUFBO1lBQzlFLE1BQU0sT0FBTyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUMsWUFBWSxFQUFFLEdBQUcsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFBO1lBQzNFLEtBQUss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RXpDLFlBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQ0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzNHLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNWZXIgZnJvbSAnY29tcGFyZS12ZXJzaW9ucydcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnZmFzdC1qc29uLXN0YWJsZS1zdHJpbmdpZnknXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBJUHJvamVjdENvbW1hbmQgfSBmcm9tICdzcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQnXG5pbXBvcnQgeyBOcG1JbnN0YWxsUHJvamVjdENvbW1hbmQgfSBmcm9tICdzcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvbnBtLWluc3RhbGwtcHJvamVjdC1jb21tYW5kJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnc3JjL3V0aWwvbG9nZ2VyJ1xuXG5leHBvcnQgY29uc3QgbnBtU2VydmljZSA9IHtcbiAgY3JlYXRlQ29tbWFuZDogKGNvbW1hbmRUeXBlOiBzdHJpbmcpOiBJUHJvamVjdENvbW1hbmQgPT4ge1xuICAgIHN3aXRjaCAoY29tbWFuZFR5cGUpIHtcbiAgICAgIGNhc2UgJ2luc3RhbGwnOlxuICAgICAgICByZXR1cm4gbmV3IE5wbUluc3RhbGxQcm9qZWN0Q29tbWFuZCh7IHJvb3REaXI6IGNvbmZpZy5yb290RGlyIH0pXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIG5wbSBjb21tYW5kIFske2NvbW1hbmRUeXBlfV1gKVxuICAgIH1cbiAgfSxcbiAgZ2xvYmFsOiAoKTogdm9pZCA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQgeWV0JylcbiAgICBjb25zdCBnRGVwcyA9IHt9XG4gICAgY29uc3QgZ0RlcHNOZXdlciA9IHt9XG4gICAgY29uc3QgZ0RlcHNPbGRlciA9IHt9XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgY29uZmlnLnByb2plY3RzKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlc1xuICAgICAgY29uc3QgcGFja2FnZUpzID0gcmVxdWlyZShwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgYCR7cHJvamVjdH0vcGFja2FnZS5qc29uYCkpXG4gICAgICBjb25zdCBhbGxEZXBzID0geyAuLi5wYWNrYWdlSnMuZGVwZW5kZW5jaWVzLCAuLi5wYWNrYWdlSnMuZGV2RGVwZW5kZW5jaWVzIH1cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGFsbERlcHMpKSB7XG4gICAgICAgIGdEZXBzW2tleV0gPSBnRGVwc1trZXldIHx8IHt9XG4gICAgICAgIGdEZXBzW2tleV1bYWxsRGVwc1trZXldXSA9IGdEZXBzW2tleV1bYWxsRGVwc1trZXldXSB8fCBbXVxuICAgICAgICBnRGVwc1trZXldW2FsbERlcHNba2V5XV0ucHVzaChwcm9qZWN0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGdEZXBzKSkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGdEZXBzW2tleV0pLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3Qgc29ydGVkVmVyc2lvbnNBc2MgPSBPYmplY3Qua2V5cyhnRGVwc1trZXldKS5zb3J0KGNWZXIpXG4gICAgICAgIGdEZXBzTmV3ZXJba2V5XSA9IHNvcnRlZFZlcnNpb25zQXNjLnBvcCgpXG5cbiAgICAgICAgZm9yIChjb25zdCBvbGRWZXIgb2Ygc29ydGVkVmVyc2lvbnNBc2MpIHtcbiAgICAgICAgICBnRGVwc09sZGVyW2tleV0gPSBnRGVwc09sZGVyW2tleV0gfHwge31cbiAgICAgICAgICBnRGVwc09sZGVyW2tleV1bb2xkVmVyXSA9IGdEZXBzW2tleV1bb2xkVmVyXVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnRGVwc05ld2VyW2tleV0gPSBPYmplY3Qua2V5cyhnRGVwc1trZXldKVswXVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldmVydCBnRGVwc09sZGVyIHJlc3VsdCB0byBwcmludCBieSBwcm9qZWN0XG4gICAgY29uc3QgZ0RlcHNSZXZlcnRlZCA9IHt9XG4gICAgZm9yIChjb25zdCBwYWNrIG9mIE9iamVjdC5rZXlzKGdEZXBzT2xkZXIpKSB7XG4gICAgICBjb25zdCB2ZXJzaW9ucyA9IGdEZXBzT2xkZXJbcGFja11cbiAgICAgIGZvciAoY29uc3QgdmVyIG9mIE9iamVjdC5rZXlzKHZlcnNpb25zKSkge1xuICAgICAgICBjb25zdCBwcm9qcyA9IHZlcnNpb25zW3Zlcl1cbiAgICAgICAgZm9yIChjb25zdCBwcm9qIG9mIHByb2pzKSB7XG4gICAgICAgICAgZ0RlcHNSZXZlcnRlZFtwcm9qXSA9IGdEZXBzUmV2ZXJ0ZWRbcHJval0gfHwge31cbiAgICAgICAgICBnRGVwc1JldmVydGVkW3Byb2pdW3BhY2tdID0gdmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbG9nZ2VyLmRlYnVnKCdPbGQgRGVwcyAoYnkgcHJvamVjdCk6JylcbiAgICBsb2dnZXIuZGVidWcoSlNPTi5zdHJpbmdpZnkoZ0RlcHNSZXZlcnRlZCwgbnVsbCwgMikpXG4gICAgbG9nZ2VyLmRlYnVnKCdPbGQgRGVwcyAoYnkgcGFja2FnZSk6JylcbiAgICBsb2dnZXIuZGVidWcoSlNPTi5zdHJpbmdpZnkoZ0RlcHNPbGRlciwgbnVsbCwgMikpXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlc1xuICAgIGNvbnN0IGdsb2JhbFBhY2thZ2VKcyA9IHJlcXVpcmUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIGBwYWNrYWdlLmpzb25gKSlcbiAgICBnbG9iYWxQYWNrYWdlSnMuZGVwZW5kZW5jaWVzID0gZ0RlcHNOZXdlclxuXG4gICAgZnMud3JpdGVGaWxlU3luYygncGFja2FnZS5qc29uJywgSlNPTi5zdHJpbmdpZnkoSlNPTi5wYXJzZShzdHJpbmdpZnkoZ2xvYmFsUGFja2FnZUpzKSksIG51bGwsIDQpLCAndXRmOCcpXG4gIH0sXG59XG4iXX0=