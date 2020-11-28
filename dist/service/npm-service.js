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
const service_1 = require("src/service");
const util_1 = require("src/util");
exports.npmService = {
    install: async () => {
        const promises = util_1.config.projects.map((project) => {
            return new Promise((resolve, rejects) => {
                service_1.cliService.cd(project);
                const cmd = `npm i -s`;
                service_1.cliService
                    .exec({ cmd })
                    .then((result) => {
                    util_1.logger.debug(`exec done for project [${project}]`);
                    util_1.logger.debug(JSON.stringify({ [project]: result }));
                    resolve({ [project]: result });
                })
                    .catch(rejects);
                service_1.cliService.cd('..');
            });
        });
        const results = await Promise.all(promises);
        service_1.cliService.printStdMessage(...results);
    },
    global: () => {
        const gDeps = {};
        const gDepsNewer = {};
        const gDepsOlder = {};
        for (const project of util_1.config.projects) {
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
        util_1.logger.debug('Old Deps (by project):');
        util_1.logger.debug(JSON.stringify(gDepsReverted, null, 2));
        util_1.logger.debug('Old Deps (by package):');
        util_1.logger.debug(JSON.stringify(gDepsOlder, null, 2));
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const globalPackageJs = require(path.join(process.cwd(), `package.json`));
        globalPackageJs.dependencies = gDepsNewer;
        fs_1.default.writeFileSync('package.json', JSON.stringify(JSON.parse(fast_json_stable_stringify_1.default(globalPackageJs)), null, 4), 'utf8');
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9ucG0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQW1DO0FBQ25DLDRGQUFrRDtBQUNsRCw0Q0FBbUI7QUFDbkIsMkNBQTRCO0FBQzVCLHlDQUF5RDtBQUN6RCxtQ0FBeUM7QUFFNUIsUUFBQSxVQUFVLEdBQUc7SUFDeEIsT0FBTyxFQUFFLEtBQUssSUFBbUIsRUFBRTtRQUNqQyxNQUFNLFFBQVEsR0FBRyxhQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQy9DLE9BQU8sSUFBSSxPQUFPLENBQWtCLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO2dCQUN2RCxvQkFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDdEIsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFBO2dCQUN0QixvQkFBVTtxQkFDUCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztxQkFDYixJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDZixhQUFNLENBQUMsS0FBSyxDQUFDLDBCQUEwQixPQUFPLEdBQUcsQ0FBQyxDQUFBO29CQUNsRCxhQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtvQkFDbkQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO2dCQUNoQyxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUNqQixvQkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNyQixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMs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SUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO29CQUMvQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO2lCQUNoQzthQUNGO1NBQ0Y7UUFDRCxhQUFNLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDdEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRCxhQUFNLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDdEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVqRCw4REFBOEQ7UUFDOUQsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUE7UUFDekUsZUFBZSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUE7UUFFekMsWUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9DQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDM0csQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY1ZlciBmcm9tICdjb21wYXJlLXZlcnNpb25zJ1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICdmYXN0LWpzb24tc3RhYmxlLXN0cmluZ2lmeSdcbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IFByaW50U3RkTWVzc2FnZSwgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlJ1xuaW1wb3J0IHsgY29uZmlnLCBsb2dnZXIgfSBmcm9tICdzcmMvdXRpbCdcblxuZXhwb3J0IGNvbnN0IG5wbVNlcnZpY2UgPSB7XG4gIGluc3RhbGw6IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBwcm9taXNlcyA9IGNvbmZpZy5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxQcmludFN0ZE1lc3NhZ2U+KChyZXNvbHZlLCByZWplY3RzKSA9PiB7XG4gICAgICAgIGNsaVNlcnZpY2UuY2QocHJvamVjdClcbiAgICAgICAgY29uc3QgY21kID0gYG5wbSBpIC1zYFxuICAgICAgICBjbGlTZXJ2aWNlXG4gICAgICAgICAgLmV4ZWMoeyBjbWQgfSlcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoYGV4ZWMgZG9uZSBmb3IgcHJvamVjdCBbJHtwcm9qZWN0fV1gKVxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKEpTT04uc3RyaW5naWZ5KHsgW3Byb2plY3RdOiByZXN1bHQgfSkpXG4gICAgICAgICAgICByZXNvbHZlKHsgW3Byb2plY3RdOiByZXN1bHQgfSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChyZWplY3RzKVxuICAgICAgICBjbGlTZXJ2aWNlLmNkKCcuLicpXG4gICAgICB9KVxuICAgIH0pXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgIGNsaVNlcnZpY2UucHJpbnRTdGRNZXNzYWdlKC4uLnJlc3VsdHMpXG4gIH0sXG4gIGdsb2JhbDogKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGdEZXBzID0ge31cbiAgICBjb25zdCBnRGVwc05ld2VyID0ge31cbiAgICBjb25zdCBnRGVwc09sZGVyID0ge31cblxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBjb25maWcucHJvamVjdHMpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXG4gICAgICBjb25zdCBwYWNrYWdlSnMgPSByZXF1aXJlKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBgJHtwcm9qZWN0fS9wYWNrYWdlLmpzb25gKSlcbiAgICAgIGNvbnN0IGFsbERlcHMgPSB7IC4uLnBhY2thZ2VKcy5kZXBlbmRlbmNpZXMsIC4uLnBhY2thZ2VKcy5kZXZEZXBlbmRlbmNpZXMgfVxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoYWxsRGVwcykpIHtcbiAgICAgICAgZ0RlcHNba2V5XSA9IGdEZXBzW2tleV0gfHwge31cbiAgICAgICAgZ0RlcHNba2V5XVthbGxEZXBzW2tleV1dID0gZ0RlcHNba2V5XVthbGxEZXBzW2tleV1dIHx8IFtdXG4gICAgICAgIGdEZXBzW2tleV1bYWxsRGVwc1trZXldXS5wdXNoKHByb2plY3QpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZ0RlcHMpKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZ0RlcHNba2V5XSkubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBzb3J0ZWRWZXJzaW9uc0FzYyA9IE9iamVjdC5rZXlzKGdEZXBzW2tleV0pLnNvcnQoY1ZlcilcbiAgICAgICAgZ0RlcHNOZXdlcltrZXldID0gc29ydGVkVmVyc2lvbnNBc2MucG9wKClcblxuICAgICAgICBmb3IgKGNvbnN0IG9sZFZlciBvZiBzb3J0ZWRWZXJzaW9uc0FzYykge1xuICAgICAgICAgIGdEZXBzT2xkZXJba2V5XSA9IGdEZXBzT2xkZXJba2V5XSB8fCB7fVxuICAgICAgICAgIGdEZXBzT2xkZXJba2V5XVtvbGRWZXJdID0gZ0RlcHNba2V5XVtvbGRWZXJdXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdEZXBzTmV3ZXJba2V5XSA9IE9iamVjdC5rZXlzKGdEZXBzW2tleV0pWzBdXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV2ZXJ0IGdEZXBzT2xkZXIgcmVzdWx0IHRvIHByaW50IGJ5IHByb2plY3RcbiAgICBjb25zdCBnRGVwc1JldmVydGVkID0ge31cbiAgICBmb3IgKGNvbnN0IHBhY2sgb2YgT2JqZWN0LmtleXMoZ0RlcHNPbGRlcikpIHtcbiAgICAgIGNvbnN0IHZlcnNpb25zID0gZ0RlcHNPbGRlcltwYWNrXVxuICAgICAgZm9yIChjb25zdCB2ZXIgb2YgT2JqZWN0LmtleXModmVyc2lvbnMpKSB7XG4gICAgICAgIGNvbnN0IHByb2pzID0gdmVyc2lvbnNbdmVyXVxuICAgICAgICBmb3IgKGNvbnN0IHByb2ogb2YgcHJvanMpIHtcbiAgICAgICAgICBnRGVwc1JldmVydGVkW3Byb2pdID0gZ0RlcHNSZXZlcnRlZFtwcm9qXSB8fCB7fVxuICAgICAgICAgIGdEZXBzUmV2ZXJ0ZWRbcHJval1bcGFja10gPSB2ZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsb2dnZXIuZGVidWcoJ09sZCBEZXBzIChieSBwcm9qZWN0KTonKVxuICAgIGxvZ2dlci5kZWJ1ZyhKU09OLnN0cmluZ2lmeShnRGVwc1JldmVydGVkLCBudWxsLCAyKSlcbiAgICBsb2dnZXIuZGVidWcoJ09sZCBEZXBzIChieSBwYWNrYWdlKTonKVxuICAgIGxvZ2dlci5kZWJ1ZyhKU09OLnN0cmluZ2lmeShnRGVwc09sZGVyLCBudWxsLCAyKSlcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXG4gICAgY29uc3QgZ2xvYmFsUGFja2FnZUpzID0gcmVxdWlyZShwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgYHBhY2thZ2UuanNvbmApKVxuICAgIGdsb2JhbFBhY2thZ2VKcy5kZXBlbmRlbmNpZXMgPSBnRGVwc05ld2VyXG5cbiAgICBmcy53cml0ZUZpbGVTeW5jKCdwYWNrYWdlLmpzb24nLCBKU09OLnN0cmluZ2lmeShKU09OLnBhcnNlKHN0cmluZ2lmeShnbG9iYWxQYWNrYWdlSnMpKSwgbnVsbCwgNCksICd1dGY4JylcbiAgfSxcbn1cbiJdfQ==