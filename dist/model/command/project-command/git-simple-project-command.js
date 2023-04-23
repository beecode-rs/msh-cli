"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitSimpleProjectCommand = exports.GitSimpleCommand = void 0;
const shell_service_1 = require("../../../service/shell-service");
const config_1 = require("../../../util/config");
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
            return [{ errorMessage: result.stderr, name: project, stringResult: result.stdout }];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
}
exports.GitSimpleProjectCommand = GitSimpleProjectCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXNpbXBsZS1wcm9qZWN0LWNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvZ2l0LXNpbXBsZS1wcm9qZWN0LWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkRBQXdEO0FBQ3hELDRDQUF3QztBQUV4QyxJQUFZLGdCQUlYO0FBSkQsV0FBWSxnQkFBZ0I7SUFDM0IscUNBQWlCLENBQUE7SUFDakIsbUNBQWUsQ0FBQTtJQUNmLGlDQUFhLENBQUE7QUFDZCxDQUFDLEVBSlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFJM0I7QUFFRCxNQUFhLHVCQUF1QjtJQUNoQixpQkFBaUIsQ0FBa0I7SUFDbkMsUUFBUSxDQUFRO0lBRW5DLFlBQVksTUFBZ0U7UUFDM0UsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sR0FBRyxJQUFBLGVBQU0sR0FBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQTtRQUMvRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUE7UUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBZTtRQUM1QixJQUFJO1lBQ0gsTUFBTSxHQUFHLEdBQUcsVUFBVSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUMxRSxNQUFNLE1BQU0sR0FBRyxNQUFNLDRCQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRTNDLE9BQU8sQ0FBQyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1NBQ3BGO1FBQUMsT0FBTyxHQUFRLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1NBQ3RDO0lBQ0YsQ0FBQztDQUNEO0FBcEJELDBEQW9CQyJ9