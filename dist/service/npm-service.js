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
                service_1.cliService.cd(path.join(util_1.constant.rootDir, project));
                const cmd = `npm i -s`;
                service_1.cliService
                    .exec({ cmd })
                    .then((result) => {
                    util_1.logger.debug(`exec done for project [${project}]`);
                    util_1.logger.debug(JSON.stringify({ [project]: result }));
                    resolve({ [project]: result });
                })
                    .catch(rejects);
            });
        });
        const results = await Promise.all(promises);
        service_1.cliService.printStdMessage(...results);
        service_1.cliService.cd(util_1.constant.rootDir);
    },
    global: () => {
        throw new Error('not implemented yet');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9ucG0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQW1DO0FBQ25DLDRGQUFrRDtBQUNsRCw0Q0FBbUI7QUFDbkIsMkNBQTRCO0FBQzVCLHlDQUF5RDtBQUN6RCxtQ0FBbUQ7QUFFdEMsUUFBQSxVQUFVLEdBQUc7SUFDeEIsT0FBTyxFQUFFLEtBQUssSUFBbUIsRUFBRTtRQUNqQyxNQUFNLFFBQVEsR0FBRyxhQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQy9DLE9BQU8sSUFBSSxPQUFPLENBQWtCLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO2dCQUN2RCxvQkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtnQkFDbkQsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFBO2dCQUN0QixvQkFBVTtxQkFDUCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztxQkFDYixJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDZixhQUFNLENBQUMsS0FBSyxDQUFDLDBCQUEwQixPQUFPLEdBQUcsQ0FBQyxDQUFBO29CQUNsRCxhQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtvQkFDbkQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO2dCQUNoQyxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ25CLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FB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QUMsR0FBRyxDQUFDLENBQUE7Z0JBQzNCLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO29CQUN4QixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtvQkFDL0MsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtpQkFDaEM7YUFDRjtTQUNGO1FBQ0QsYUFBTSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQ3RDLGFBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEQsYUFBTSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQ3RDLGFBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFakQsOERBQThEO1FBQzlELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFBO1FBQ3pFLGVBQWUsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFBO1FBRXpDLFlBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQ0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzNHLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNWZXIgZnJvbSAnY29tcGFyZS12ZXJzaW9ucydcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnZmFzdC1qc29uLXN0YWJsZS1zdHJpbmdpZnknXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBQcmludFN0ZE1lc3NhZ2UsIGNsaVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZSdcbmltcG9ydCB7IGNvbmZpZywgY29uc3RhbnQsIGxvZ2dlciB9IGZyb20gJ3NyYy91dGlsJ1xuXG5leHBvcnQgY29uc3QgbnBtU2VydmljZSA9IHtcbiAgaW5zdGFsbDogYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHByb21pc2VzID0gY29uZmlnLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFByaW50U3RkTWVzc2FnZT4oKHJlc29sdmUsIHJlamVjdHMpID0+IHtcbiAgICAgICAgY2xpU2VydmljZS5jZChwYXRoLmpvaW4oY29uc3RhbnQucm9vdERpciwgcHJvamVjdCkpXG4gICAgICAgIGNvbnN0IGNtZCA9IGBucG0gaSAtc2BcbiAgICAgICAgY2xpU2VydmljZVxuICAgICAgICAgIC5leGVjKHsgY21kIH0pXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBleGVjIGRvbmUgZm9yIHByb2plY3QgWyR7cHJvamVjdH1dYClcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhKU09OLnN0cmluZ2lmeSh7IFtwcm9qZWN0XTogcmVzdWx0IH0pKVxuICAgICAgICAgICAgcmVzb2x2ZSh7IFtwcm9qZWN0XTogcmVzdWx0IH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2gocmVqZWN0cylcbiAgICAgIH0pXG4gICAgfSlcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgY2xpU2VydmljZS5wcmludFN0ZE1lc3NhZ2UoLi4ucmVzdWx0cylcbiAgICBjbGlTZXJ2aWNlLmNkKGNvbnN0YW50LnJvb3REaXIpXG4gIH0sXG4gIGdsb2JhbDogKCk6IHZvaWQgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkIHlldCcpXG4gICAgY29uc3QgZ0RlcHMgPSB7fVxuICAgIGNvbnN0IGdEZXBzTmV3ZXIgPSB7fVxuICAgIGNvbnN0IGdEZXBzT2xkZXIgPSB7fVxuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIGNvbmZpZy5wcm9qZWN0cykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbiAgICAgIGNvbnN0IHBhY2thZ2VKcyA9IHJlcXVpcmUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIGAke3Byb2plY3R9L3BhY2thZ2UuanNvbmApKVxuICAgICAgY29uc3QgYWxsRGVwcyA9IHsgLi4ucGFja2FnZUpzLmRlcGVuZGVuY2llcywgLi4ucGFja2FnZUpzLmRldkRlcGVuZGVuY2llcyB9XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhhbGxEZXBzKSkge1xuICAgICAgICBnRGVwc1trZXldID0gZ0RlcHNba2V5XSB8fCB7fVxuICAgICAgICBnRGVwc1trZXldW2FsbERlcHNba2V5XV0gPSBnRGVwc1trZXldW2FsbERlcHNba2V5XV0gfHwgW11cbiAgICAgICAgZ0RlcHNba2V5XVthbGxEZXBzW2tleV1dLnB1c2gocHJvamVjdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhnRGVwcykpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhnRGVwc1trZXldKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IHNvcnRlZFZlcnNpb25zQXNjID0gT2JqZWN0LmtleXMoZ0RlcHNba2V5XSkuc29ydChjVmVyKVxuICAgICAgICBnRGVwc05ld2VyW2tleV0gPSBzb3J0ZWRWZXJzaW9uc0FzYy5wb3AoKVxuXG4gICAgICAgIGZvciAoY29uc3Qgb2xkVmVyIG9mIHNvcnRlZFZlcnNpb25zQXNjKSB7XG4gICAgICAgICAgZ0RlcHNPbGRlcltrZXldID0gZ0RlcHNPbGRlcltrZXldIHx8IHt9XG4gICAgICAgICAgZ0RlcHNPbGRlcltrZXldW29sZFZlcl0gPSBnRGVwc1trZXldW29sZFZlcl1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ0RlcHNOZXdlcltrZXldID0gT2JqZWN0LmtleXMoZ0RlcHNba2V5XSlbMF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXZlcnQgZ0RlcHNPbGRlciByZXN1bHQgdG8gcHJpbnQgYnkgcHJvamVjdFxuICAgIGNvbnN0IGdEZXBzUmV2ZXJ0ZWQgPSB7fVxuICAgIGZvciAoY29uc3QgcGFjayBvZiBPYmplY3Qua2V5cyhnRGVwc09sZGVyKSkge1xuICAgICAgY29uc3QgdmVyc2lvbnMgPSBnRGVwc09sZGVyW3BhY2tdXG4gICAgICBmb3IgKGNvbnN0IHZlciBvZiBPYmplY3Qua2V5cyh2ZXJzaW9ucykpIHtcbiAgICAgICAgY29uc3QgcHJvanMgPSB2ZXJzaW9uc1t2ZXJdXG4gICAgICAgIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qcykge1xuICAgICAgICAgIGdEZXBzUmV2ZXJ0ZWRbcHJval0gPSBnRGVwc1JldmVydGVkW3Byb2pdIHx8IHt9XG4gICAgICAgICAgZ0RlcHNSZXZlcnRlZFtwcm9qXVtwYWNrXSA9IHZlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxvZ2dlci5kZWJ1ZygnT2xkIERlcHMgKGJ5IHByb2plY3QpOicpXG4gICAgbG9nZ2VyLmRlYnVnKEpTT04uc3RyaW5naWZ5KGdEZXBzUmV2ZXJ0ZWQsIG51bGwsIDIpKVxuICAgIGxvZ2dlci5kZWJ1ZygnT2xkIERlcHMgKGJ5IHBhY2thZ2UpOicpXG4gICAgbG9nZ2VyLmRlYnVnKEpTT04uc3RyaW5naWZ5KGdEZXBzT2xkZXIsIG51bGwsIDIpKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbiAgICBjb25zdCBnbG9iYWxQYWNrYWdlSnMgPSByZXF1aXJlKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBgcGFja2FnZS5qc29uYCkpXG4gICAgZ2xvYmFsUGFja2FnZUpzLmRlcGVuZGVuY2llcyA9IGdEZXBzTmV3ZXJcblxuICAgIGZzLndyaXRlRmlsZVN5bmMoJ3BhY2thZ2UuanNvbicsIEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2Uoc3RyaW5naWZ5KGdsb2JhbFBhY2thZ2VKcykpLCBudWxsLCA0KSwgJ3V0ZjgnKVxuICB9LFxufVxuIl19