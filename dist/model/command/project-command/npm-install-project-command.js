"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmInstallProjectCommand = void 0;
const path_1 = __importDefault(require("path"));
const shell_service_1 = require("src/service/shell-service");
const config_1 = require("src/util/config");
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
            return [{ name: project, stringResult: 'npm install successful', errorMessage: result.stdout }];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
}
exports.NpmInstallProjectCommand = NpmInstallProjectCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLWluc3RhbGwtcHJvamVjdC1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZGVsL2NvbW1hbmQvcHJvamVjdC1jb21tYW5kL25wbS1pbnN0YWxsLXByb2plY3QtY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBdUI7QUFFdkIsNkRBQXdEO0FBQ3hELDRDQUF3QztBQUV4QyxNQUFhLHdCQUF3QjtJQUNoQixRQUFRLENBQVE7SUFFbkMsWUFBWSxNQUE2QjtRQUN2QyxNQUFNLEVBQUUsT0FBTyxHQUFHLElBQUEsZUFBTSxHQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQTtRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtJQUN6QixDQUFDO0lBRU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFlO1FBQ2xDLElBQUk7WUFDRiw0QkFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtZQUNsRCxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUE7WUFDdEIsTUFBTSxNQUFNLEdBQUcsTUFBTSw0QkFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMzQyx1RkFBdUY7WUFDdkYsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1NBQ2hHO1FBQUMsT0FBTyxHQUFRLEVBQUU7WUFDakIsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1NBQ3ZDO0lBQ0gsQ0FBQztDQUNGO0FBbkJELDREQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBFeGVjdXRlUmVzdWx0LCBQcm9qZWN0RXhlY3V0YWJsZSB9IGZyb20gJ3NyYy9tb2RlbC9jb21tYW5kL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBzaGVsbFNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9zaGVsbC1zZXJ2aWNlJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuXG5leHBvcnQgY2xhc3MgTnBtSW5zdGFsbFByb2plY3RDb21tYW5kIGltcGxlbWVudHMgUHJvamVjdEV4ZWN1dGFibGUge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3Jvb3REaXI6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IHsgcm9vdERpcj86IHN0cmluZyB9KSB7XG4gICAgY29uc3QgeyByb290RGlyID0gY29uZmlnKCkucm9vdERpciB9ID0gcGFyYW1zID8/IHt9XG4gICAgdGhpcy5fcm9vdERpciA9IHJvb3REaXJcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBleGVjdXRlKHByb2plY3Q6IHN0cmluZyk6IFByb21pc2U8RXhlY3V0ZVJlc3VsdFtdPiB7XG4gICAgdHJ5IHtcbiAgICAgIHNoZWxsU2VydmljZS5jZChwYXRoLmpvaW4odGhpcy5fcm9vdERpciwgcHJvamVjdCkpXG4gICAgICBjb25zdCBjbWQgPSAnbnBtIGkgLXMnXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaGVsbFNlcnZpY2UuZXhlYyhjbWQpXG4gICAgICAvLyByZXR1cm4gW3sgbmFtZTogcHJvamVjdCwgc3RyaW5nUmVzdWx0OiByZXN1bHQuc3Rkb3V0LCBlcnJvck1lc3NhZ2U6IHJlc3VsdC5zdGRvdXQgfV1cbiAgICAgIHJldHVybiBbeyBuYW1lOiBwcm9qZWN0LCBzdHJpbmdSZXN1bHQ6ICducG0gaW5zdGFsbCBzdWNjZXNzZnVsJywgZXJyb3JNZXNzYWdlOiByZXN1bHQuc3Rkb3V0IH1dXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHJldHVybiBbeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH1dXG4gICAgfVxuICB9XG59XG4iXX0=