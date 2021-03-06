"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitSimpleProjectCommand = exports.GitSimpleCommand = void 0;
const shell_service_1 = require("src/service/shell-service");
var GitSimpleCommand;
(function (GitSimpleCommand) {
    GitSimpleCommand["STATUS"] = "status";
    GitSimpleCommand["FETCH"] = "fetch";
    GitSimpleCommand["PULL"] = "pull";
})(GitSimpleCommand = exports.GitSimpleCommand || (exports.GitSimpleCommand = {}));
class GitSimpleProjectCommand {
    constructor(params) {
        this.__simpleGitCommand = params.gitSimpleCommand;
        this.__rootDir = params.rootDir;
    }
    async execute(project) {
        const cmd = `git -C ${this.__rootDir}/${project} ${this.__simpleGitCommand}`;
        return shell_service_1.shellService.exec(cmd);
    }
}
exports.GitSimpleProjectCommand = GitSimpleProjectCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXNpbXBsZS1wcm9qZWN0LWNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvZ2l0LXNpbXBsZS1wcm9qZWN0LWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsNkRBQXdEO0FBRXhELElBQVksZ0JBSVg7QUFKRCxXQUFZLGdCQUFnQjtJQUMxQixxQ0FBaUIsQ0FBQTtJQUNqQixtQ0FBZSxDQUFBO0lBQ2YsaUNBQWEsQ0FBQTtBQUNmLENBQUMsRUFKVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUkzQjtBQU9ELE1BQWEsdUJBQXVCO0lBSWxDLFlBQVksTUFBcUM7UUFDL0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQTtRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUE7SUFDakMsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBZTtRQUNsQyxNQUFNLEdBQUcsR0FBRyxVQUFVLElBQUksQ0FBQyxTQUFTLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1FBQzVFLE9BQU8sNEJBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDL0IsQ0FBQztDQUNGO0FBYkQsMERBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeGVjUmVzdWx0IH0gZnJvbSAnc3JjL2RhbC9zaGVsbC1kYWwnXG5pbXBvcnQgeyBJUHJvamVjdENvbW1hbmQgfSBmcm9tICdzcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQnXG5pbXBvcnQgeyBzaGVsbFNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9zaGVsbC1zZXJ2aWNlJ1xuXG5leHBvcnQgZW51bSBHaXRTaW1wbGVDb21tYW5kIHtcbiAgU1RBVFVTID0gJ3N0YXR1cycsXG4gIEZFVENIID0gJ2ZldGNoJyxcbiAgUFVMTCA9ICdwdWxsJyxcbn1cblxuZXhwb3J0IHR5cGUgR2l0U2ltcGxlUHJvamVjdENvbW1hbmRQYXJhbXMgPSB7XG4gIGdpdFNpbXBsZUNvbW1hbmQ6IEdpdFNpbXBsZUNvbW1hbmRcbiAgcm9vdERpcjogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBHaXRTaW1wbGVQcm9qZWN0Q29tbWFuZCBpbXBsZW1lbnRzIElQcm9qZWN0Q29tbWFuZCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX19zaW1wbGVHaXRDb21tYW5kOiBHaXRTaW1wbGVDb21tYW5kXG4gIHByaXZhdGUgcmVhZG9ubHkgX19yb290RGlyOiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM6IEdpdFNpbXBsZVByb2plY3RDb21tYW5kUGFyYW1zKSB7XG4gICAgdGhpcy5fX3NpbXBsZUdpdENvbW1hbmQgPSBwYXJhbXMuZ2l0U2ltcGxlQ29tbWFuZFxuICAgIHRoaXMuX19yb290RGlyID0gcGFyYW1zLnJvb3REaXJcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBleGVjdXRlKHByb2plY3Q6IHN0cmluZyk6IFByb21pc2U8RXhlY1Jlc3VsdD4ge1xuICAgIGNvbnN0IGNtZCA9IGBnaXQgLUMgJHt0aGlzLl9fcm9vdERpcn0vJHtwcm9qZWN0fSAke3RoaXMuX19zaW1wbGVHaXRDb21tYW5kfWBcbiAgICByZXR1cm4gc2hlbGxTZXJ2aWNlLmV4ZWMoY21kKVxuICB9XG59XG4iXX0=