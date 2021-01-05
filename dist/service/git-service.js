"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitService = void 0;
const git_clone_project_command_1 = require("src/model/command/project-command/git-clone-project-command");
const git_simple_project_command_1 = require("src/model/command/project-command/git-simple-project-command");
const config_1 = require("src/util/config");
exports.gitService = {
    createCommand: (commandType) => {
        if (commandType === 'clone') {
            if (!config_1.config.git.team)
                throw new Error('You need to specify GIT_TEAM env variable');
            return new git_clone_project_command_1.GitCloneProjectCommand({
                gitHost: config_1.config.git.host,
                gitTeam: config_1.config.git.team,
                projectPrefix: config_1.config.git.projectPrefix,
                rootDir: config_1.config.rootDir,
            });
        }
        if (Object.values(git_simple_project_command_1.GitSimpleCommand).includes(commandType)) {
            return new git_simple_project_command_1.GitSimpleProjectCommand({
                rootDir: config_1.config.rootDir,
                gitSimpleCommand: commandType,
            });
        }
        throw new Error(`Unsupported git command [${commandType}]`);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9naXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyR0FBb0c7QUFDcEcsNkdBQXdIO0FBQ3hILDRDQUF3QztBQUUzQixRQUFBLFVBQVUsR0FBRztJQUN4QixhQUFhLEVBQUUsQ0FBQyxXQUFtQixFQUFtQixFQUFFO1FBQ3RELElBQUksV0FBVyxLQUFLLE9BQU8sRUFBRTtZQUMzQixJQUFJLENBQUMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQTtZQUNsRixPQUFPLElBQUksa0RBQXNCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxlQUFNLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ3hCLE9BQU8sRUFBRSxlQUFNLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ3hCLGFBQWEsRUFBRSxlQUFNLENBQUMsR0FBRyxDQUFDLGFBQWE7Z0JBQ3ZDLE9BQU8sRUFBRSxlQUFNLENBQUMsT0FBTzthQUN4QixDQUFDLENBQUE7U0FDSDtRQUNELElBQVUsTUFBTyxDQUFDLE1BQU0sQ0FBQyw2Q0FBZ0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNoRSxPQUFPLElBQUksb0RBQXVCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxlQUFNLENBQUMsT0FBTztnQkFDdkIsZ0JBQWdCLEVBQUUsV0FBK0I7YUFDbEQsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixXQUFXLEdBQUcsQ0FBQyxDQUFBO0lBQzdELENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVByb2plY3RDb21tYW5kIH0gZnJvbSAnc3JjL21vZGVsL2NvbW1hbmQvcHJvamVjdC1jb21tYW5kJ1xuaW1wb3J0IHsgR2l0Q2xvbmVQcm9qZWN0Q29tbWFuZCB9IGZyb20gJ3NyYy9tb2RlbC9jb21tYW5kL3Byb2plY3QtY29tbWFuZC9naXQtY2xvbmUtcHJvamVjdC1jb21tYW5kJ1xuaW1wb3J0IHsgR2l0U2ltcGxlQ29tbWFuZCwgR2l0U2ltcGxlUHJvamVjdENvbW1hbmQgfSBmcm9tICdzcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvZ2l0LXNpbXBsZS1wcm9qZWN0LWNvbW1hbmQnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdzcmMvdXRpbC9jb25maWcnXG5cbmV4cG9ydCBjb25zdCBnaXRTZXJ2aWNlID0ge1xuICBjcmVhdGVDb21tYW5kOiAoY29tbWFuZFR5cGU6IHN0cmluZyk6IElQcm9qZWN0Q29tbWFuZCA9PiB7XG4gICAgaWYgKGNvbW1hbmRUeXBlID09PSAnY2xvbmUnKSB7XG4gICAgICBpZiAoIWNvbmZpZy5naXQudGVhbSkgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IEdJVF9URUFNIGVudiB2YXJpYWJsZScpXG4gICAgICByZXR1cm4gbmV3IEdpdENsb25lUHJvamVjdENvbW1hbmQoe1xuICAgICAgICBnaXRIb3N0OiBjb25maWcuZ2l0Lmhvc3QsXG4gICAgICAgIGdpdFRlYW06IGNvbmZpZy5naXQudGVhbSxcbiAgICAgICAgcHJvamVjdFByZWZpeDogY29uZmlnLmdpdC5wcm9qZWN0UHJlZml4LFxuICAgICAgICByb290RGlyOiBjb25maWcucm9vdERpcixcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmICgoPGFueT5PYmplY3QpLnZhbHVlcyhHaXRTaW1wbGVDb21tYW5kKS5pbmNsdWRlcyhjb21tYW5kVHlwZSkpIHtcbiAgICAgIHJldHVybiBuZXcgR2l0U2ltcGxlUHJvamVjdENvbW1hbmQoe1xuICAgICAgICByb290RGlyOiBjb25maWcucm9vdERpcixcbiAgICAgICAgZ2l0U2ltcGxlQ29tbWFuZDogY29tbWFuZFR5cGUgYXMgR2l0U2ltcGxlQ29tbWFuZCxcbiAgICAgIH0pXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZ2l0IGNvbW1hbmQgWyR7Y29tbWFuZFR5cGV9XWApXG4gIH0sXG59XG4iXX0=