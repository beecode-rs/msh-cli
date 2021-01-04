"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitService = void 0;
const project_git_clone_command_1 = require("src/model/project-git-clone-command");
const project_git_simple_command_1 = require("src/model/project-git-simple-command");
const config_1 = require("src/util/config");
exports.gitService = {
    createCommand: (commandType) => {
        if (commandType === 'clone') {
            if (!config_1.config.git.team)
                throw new Error('You need to specify GIT_TEAM env variable');
            return new project_git_clone_command_1.ProjectGitCloneCommand({
                gitHost: config_1.config.git.host,
                gitTeam: config_1.config.git.team,
                projectPrefix: config_1.config.git.projectPrefix,
                rootDir: config_1.config.rootDir,
            });
        }
        else if (Object.values(project_git_simple_command_1.GitSimpleCommand).includes(commandType)) {
            return new project_git_simple_command_1.ProjectGitSimpleCommand({
                rootDir: config_1.config.rootDir,
                gitSimpleCommand: commandType,
            });
        }
        throw new Error(`Unsupported git command [${commandType}]`);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9naXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtRkFBNEU7QUFDNUUscUZBQWdHO0FBQ2hHLDRDQUF3QztBQUUzQixRQUFBLFVBQVUsR0FBRztJQUN4QixhQUFhLEVBQUUsQ0FBQyxXQUFtQixFQUFrQixFQUFFO1FBQ3JELElBQUksV0FBVyxLQUFLLE9BQU8sRUFBRTtZQUMzQixJQUFJLENBQUMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQTtZQUNsRixPQUFPLElBQUksa0RBQXNCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxlQUFNLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ3hCLE9BQU8sRUFBRSxlQUFNLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ3hCLGFBQWEsRUFBRSxlQUFNLENBQUMsR0FBRyxDQUFDLGFBQWE7Z0JBQ3ZDLE9BQU8sRUFBRSxlQUFNLENBQUMsT0FBTzthQUN4QixDQUFDLENBQUE7U0FDSDthQUFNLElBQVUsTUFBTyxDQUFDLE1BQU0sQ0FBQyw2Q0FBZ0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2RSxPQUFPLElBQUksb0RBQXVCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxlQUFNLENBQUMsT0FBTztnQkFDdkIsZ0JBQWdCLEVBQUUsV0FBK0I7YUFDbEQsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixXQUFXLEdBQUcsQ0FBQyxDQUFBO0lBQzdELENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdENvbW1hbmQgfSBmcm9tICdzcmMvbW9kZWwvcHJvamVjdC1jb21tYW5kJ1xuaW1wb3J0IHsgUHJvamVjdEdpdENsb25lQ29tbWFuZCB9IGZyb20gJ3NyYy9tb2RlbC9wcm9qZWN0LWdpdC1jbG9uZS1jb21tYW5kJ1xuaW1wb3J0IHsgR2l0U2ltcGxlQ29tbWFuZCwgUHJvamVjdEdpdFNpbXBsZUNvbW1hbmQgfSBmcm9tICdzcmMvbW9kZWwvcHJvamVjdC1naXQtc2ltcGxlLWNvbW1hbmQnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdzcmMvdXRpbC9jb25maWcnXG5cbmV4cG9ydCBjb25zdCBnaXRTZXJ2aWNlID0ge1xuICBjcmVhdGVDb21tYW5kOiAoY29tbWFuZFR5cGU6IHN0cmluZyk6IFByb2plY3RDb21tYW5kID0+IHtcbiAgICBpZiAoY29tbWFuZFR5cGUgPT09ICdjbG9uZScpIHtcbiAgICAgIGlmICghY29uZmlnLmdpdC50ZWFtKSB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIHNwZWNpZnkgR0lUX1RFQU0gZW52IHZhcmlhYmxlJylcbiAgICAgIHJldHVybiBuZXcgUHJvamVjdEdpdENsb25lQ29tbWFuZCh7XG4gICAgICAgIGdpdEhvc3Q6IGNvbmZpZy5naXQuaG9zdCxcbiAgICAgICAgZ2l0VGVhbTogY29uZmlnLmdpdC50ZWFtLFxuICAgICAgICBwcm9qZWN0UHJlZml4OiBjb25maWcuZ2l0LnByb2plY3RQcmVmaXgsXG4gICAgICAgIHJvb3REaXI6IGNvbmZpZy5yb290RGlyLFxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKCg8YW55Pk9iamVjdCkudmFsdWVzKEdpdFNpbXBsZUNvbW1hbmQpLmluY2x1ZGVzKGNvbW1hbmRUeXBlKSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0R2l0U2ltcGxlQ29tbWFuZCh7XG4gICAgICAgIHJvb3REaXI6IGNvbmZpZy5yb290RGlyLFxuICAgICAgICBnaXRTaW1wbGVDb21tYW5kOiBjb21tYW5kVHlwZSBhcyBHaXRTaW1wbGVDb21tYW5kLFxuICAgICAgfSlcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBnaXQgY29tbWFuZCBbJHtjb21tYW5kVHlwZX1dYClcbiAgfSxcbn1cbiJdfQ==