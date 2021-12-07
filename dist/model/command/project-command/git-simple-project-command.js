"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitSimpleProjectCommand = exports.GitSimpleCommand = void 0;
const shell_service_1 = require("src/service/shell-service");
const config_1 = require("src/util/config");
var GitSimpleCommand;
(function (GitSimpleCommand) {
    GitSimpleCommand["STATUS"] = "status";
    GitSimpleCommand["FETCH"] = "fetch";
    GitSimpleCommand["PULL"] = "pull";
})(GitSimpleCommand = exports.GitSimpleCommand || (exports.GitSimpleCommand = {}));
class GitSimpleProjectCommand {
    _simpleGitCommand;
    _rootDir;
    constructor(params) {
        const { gitSimpleCommand, rootDir = (0, config_1.config)().rootDir } = params;
        this._simpleGitCommand = gitSimpleCommand;
        this._rootDir = rootDir;
    }
    async execute(project) {
        try {
            const cmd = `git -C ${this._rootDir}/${project} ${this._simpleGitCommand}`;
            const result = await shell_service_1.shellService.exec(cmd);
            return [{ name: project, errorMessage: result.stderr, stringResult: result.stdout }];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
}
exports.GitSimpleProjectCommand = GitSimpleProjectCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXNpbXBsZS1wcm9qZWN0LWNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvZ2l0LXNpbXBsZS1wcm9qZWN0LWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkRBQXdEO0FBQ3hELDRDQUF3QztBQUV4QyxJQUFZLGdCQUlYO0FBSkQsV0FBWSxnQkFBZ0I7SUFDMUIscUNBQWlCLENBQUE7SUFDakIsbUNBQWUsQ0FBQTtJQUNmLGlDQUFhLENBQUE7QUFDZixDQUFDLEVBSlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFJM0I7QUFFRCxNQUFhLHVCQUF1QjtJQUNmLGlCQUFpQixDQUFrQjtJQUNuQyxRQUFRLENBQVE7SUFFbkMsWUFBWSxNQUFnRTtRQUMxRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxHQUFHLElBQUEsZUFBTSxHQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFBO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQTtRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtJQUN6QixDQUFDO0lBRU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFlO1FBQ2xDLElBQUk7WUFDRixNQUFNLEdBQUcsR0FBRyxVQUFVLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1lBQzFFLE1BQU0sTUFBTSxHQUFHLE1BQU0sNEJBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDM0MsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7U0FDckY7UUFBQyxPQUFPLEdBQVEsRUFBRTtZQUNqQixPQUFPLENBQUMsRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7U0FDdkM7SUFDSCxDQUFDO0NBQ0Y7QUFuQkQsMERBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhlY3V0ZVJlc3VsdCwgUHJvamVjdEV4ZWN1dGFibGUgfSBmcm9tICdzcmMvbW9kZWwvY29tbWFuZC9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgc2hlbGxTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2Uvc2hlbGwtc2VydmljZSdcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ3NyYy91dGlsL2NvbmZpZydcblxuZXhwb3J0IGVudW0gR2l0U2ltcGxlQ29tbWFuZCB7XG4gIFNUQVRVUyA9ICdzdGF0dXMnLFxuICBGRVRDSCA9ICdmZXRjaCcsXG4gIFBVTEwgPSAncHVsbCcsXG59XG5cbmV4cG9ydCBjbGFzcyBHaXRTaW1wbGVQcm9qZWN0Q29tbWFuZCBpbXBsZW1lbnRzIFByb2plY3RFeGVjdXRhYmxlIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9zaW1wbGVHaXRDb21tYW5kOiBHaXRTaW1wbGVDb21tYW5kXG4gIHByb3RlY3RlZCByZWFkb25seSBfcm9vdERpcjogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IocGFyYW1zOiB7IGdpdFNpbXBsZUNvbW1hbmQ6IEdpdFNpbXBsZUNvbW1hbmQ7IHJvb3REaXI/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHsgZ2l0U2ltcGxlQ29tbWFuZCwgcm9vdERpciA9IGNvbmZpZygpLnJvb3REaXIgfSA9IHBhcmFtc1xuICAgIHRoaXMuX3NpbXBsZUdpdENvbW1hbmQgPSBnaXRTaW1wbGVDb21tYW5kXG4gICAgdGhpcy5fcm9vdERpciA9IHJvb3REaXJcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBleGVjdXRlKHByb2plY3Q6IHN0cmluZyk6IFByb21pc2U8RXhlY3V0ZVJlc3VsdFtdPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNtZCA9IGBnaXQgLUMgJHt0aGlzLl9yb290RGlyfS8ke3Byb2plY3R9ICR7dGhpcy5fc2ltcGxlR2l0Q29tbWFuZH1gXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaGVsbFNlcnZpY2UuZXhlYyhjbWQpXG4gICAgICByZXR1cm4gW3sgbmFtZTogcHJvamVjdCwgZXJyb3JNZXNzYWdlOiByZXN1bHQuc3RkZXJyLCBzdHJpbmdSZXN1bHQ6IHJlc3VsdC5zdGRvdXQgfV1cbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgcmV0dXJuIFt7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfV1cbiAgICB9XG4gIH1cbn1cbiJdfQ==