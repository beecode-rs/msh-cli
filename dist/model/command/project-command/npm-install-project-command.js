"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmInstallProjectCommand = void 0;
const path_1 = __importDefault(require("path"));
const shell_service_1 = require("../../../service/shell-service");
const config_1 = require("../../../util/config");
class NpmInstallProjectCommand {
    _rootDir;
    constructor(params) {
        const { rootDir = (0, config_1.config)().rootDir } = params ?? {};
        this._rootDir = rootDir;
    }
    async execute(project) {
        try {
            shell_service_1.shellService.cd(path_1.default.join(this._rootDir, project));
            const cmd = 'npm i -s';
            const result = await shell_service_1.shellService.exec(cmd);
            // return [{ name: project, stringResult: result.stdout, errorMessage: result.stdout }]
            return [{ errorMessage: result.stdout, name: project, stringResult: 'npm install successful' }];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
}
exports.NpmInstallProjectCommand = NpmInstallProjectCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLWluc3RhbGwtcHJvamVjdC1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZGVsL2NvbW1hbmQvcHJvamVjdC1jb21tYW5kL25wbS1pbnN0YWxsLXByb2plY3QtY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBdUI7QUFFdkIsNkRBQXdEO0FBQ3hELDRDQUF3QztBQUV4QyxNQUFhLHdCQUF3QjtJQUNqQixRQUFRLENBQVE7SUFFbkMsWUFBWSxNQUE2QjtRQUN4QyxNQUFNLEVBQUUsT0FBTyxHQUFHLElBQUEsZUFBTSxHQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQTtRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtJQUN4QixDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFlO1FBQzVCLElBQUk7WUFDSCw0QkFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtZQUNsRCxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUE7WUFDdEIsTUFBTSxNQUFNLEdBQUcsTUFBTSw0QkFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUUzQyx1RkFBdUY7WUFDdkYsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFBO1NBQy9GO1FBQUMsT0FBTyxHQUFRLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1NBQ3RDO0lBQ0YsQ0FBQztDQUNEO0FBcEJELDREQW9CQyJ9