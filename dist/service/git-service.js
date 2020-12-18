"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitService = exports.GitCommand = void 0;
const chalk_1 = __importDefault(require("chalk"));
const service_1 = require("src/service");
const util_1 = require("src/util");
var GitCommand;
(function (GitCommand) {
    GitCommand["STATUS"] = "status";
    GitCommand["FETCH"] = "fetch";
    GitCommand["PULL"] = "pull";
    GitCommand["CLONE"] = "clone";
})(GitCommand = exports.GitCommand || (exports.GitCommand = {}));
exports.gitService = {
    status: async () => {
        return exports.gitService._simpleCommand(GitCommand.STATUS);
    },
    fetch: async () => {
        return exports.gitService._simpleCommand(GitCommand.FETCH);
    },
    pull: async () => {
        return exports.gitService._simpleCommand(GitCommand.PULL);
    },
    clone: async () => {
        service_1.cliService.cd(util_1.constant.rootDir);
        const { host: gitHost, team: gitTeam, projectPrefix } = util_1.config.git;
        const promises = util_1.config.projects.map((project) => {
            const gitProject = [projectPrefix, project].filter(Boolean).join('-');
            const cmd = `git clone git@${gitHost}:${gitTeam}/${gitProject}.git ${project}`;
            return exports.gitService._execGitCommand({ project, cmd });
        });
        const results = await Promise.all(promises);
        service_1.cliService.printStdMessage(...results);
    },
    _simpleCommand: async (gitCommand) => {
        const promises = util_1.config.projects.map((project) => {
            const cmd = `git -C ${util_1.constant.rootDir}/${project} ${gitCommand}`;
            return exports.gitService._execGitCommand({ project, cmd });
        });
        const results = await Promise.all(promises);
        service_1.cliService.printStdMessage(...results);
    },
    _execGitCommand: async (params) => {
        const { cmd } = params;
        const printOnDone = chalk_1.default.green(`DONE - ${params.project}`);
        const result = await service_1.cliService.exec({ cmd, printOnDone });
        return { [params.project]: result };
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9naXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIseUNBQXlEO0FBQ3pELG1DQUEyQztBQU8zQyxJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDcEIsK0JBQWlCLENBQUE7SUFDakIsNkJBQWUsQ0FBQTtJQUNmLDJCQUFhLENBQUE7SUFDYiw2QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFMVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUtyQjtBQUVZLFFBQUEsVUFBVSxHQUFHO0lBQ3hCLE1BQU0sRUFBRSxLQUFLLElBQW1CLEVBQUU7UUFDaEMsT0FBTyxrQkFBVSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUNELEtBQUssRUFBRSxLQUFLLElBQW1CLEVBQUU7UUFDL0IsT0FBTyxrQkFBVSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUNELElBQUksRUFBRSxLQUFLLElBQW1CLEVBQUU7UUFDOUIsT0FBTyxrQkFBVSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUNELEtBQUssRUFBRSxLQUFLLElBQW1CLEVBQUU7UUFDL0Isb0JBQVUsQ0FBQyxFQUFFLENBQUMsZUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQy9CLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsYUFBTSxDQUFDLEdBQUcsQ0FBQTtRQUNsRSxNQUFNLFFBQVEsR0FBRyxhQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQy9DLE1BQU0sVUFBVSxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDckUsTUFBTSxHQUFHLEdBQUcsaUJBQWlCLE9BQU8sSUFBSSxPQUFPLElBQUksVUFBVSxRQUFRLE9BQU8sRUFBRSxDQUFBO1lBQzlFLE9BQU8sa0JBQVUsQ0FBQyxlQUFlLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUNyRCxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMzQyxvQkFBVSxDQUFDLGVBQWUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRCxjQUFjLEVBQUUsS0FBSyxFQUFFLFVBQXNCLEVBQWlCLEVBQUU7UUFDOUQsTUFBTSxRQUFRLEdBQUcsYUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMvQyxNQUFNLEdBQUcsR0FBRyxVQUFVLGVBQVEsQ0FBQyxPQUFPLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRSxDQUFBO1lBQ2pFLE9BQU8sa0JBQVUsQ0FBQyxlQUFlLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUNyRCxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMzQyxvQkFBVSxDQUFDLGVBQWUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRCxlQUFlLEVBQUUsS0FBSyxFQUFFLE1BQStCLEVBQTRCLEVBQUU7UUFDbkYsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQTtRQUN0QixNQUFNLFdBQVcsR0FBRyxlQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDM0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFBO1FBQzFELE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQTtJQUNyQyxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCB7IFByaW50U3RkTWVzc2FnZSwgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlJ1xuaW1wb3J0IHsgY29uZmlnLCBjb25zdGFudCB9IGZyb20gJ3NyYy91dGlsJ1xuXG5leHBvcnQgdHlwZSBFeGVjdXRlRm9yUHJvamVjdFBhcmFtcyA9IHtcbiAgcHJvamVjdDogc3RyaW5nXG4gIGNtZDogc3RyaW5nXG59XG5cbmV4cG9ydCBlbnVtIEdpdENvbW1hbmQge1xuICBTVEFUVVMgPSAnc3RhdHVzJyxcbiAgRkVUQ0ggPSAnZmV0Y2gnLFxuICBQVUxMID0gJ3B1bGwnLFxuICBDTE9ORSA9ICdjbG9uZScsXG59XG5cbmV4cG9ydCBjb25zdCBnaXRTZXJ2aWNlID0ge1xuICBzdGF0dXM6IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICByZXR1cm4gZ2l0U2VydmljZS5fc2ltcGxlQ29tbWFuZChHaXRDb21tYW5kLlNUQVRVUylcbiAgfSxcbiAgZmV0Y2g6IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICByZXR1cm4gZ2l0U2VydmljZS5fc2ltcGxlQ29tbWFuZChHaXRDb21tYW5kLkZFVENIKVxuICB9LFxuICBwdWxsOiBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgcmV0dXJuIGdpdFNlcnZpY2UuX3NpbXBsZUNvbW1hbmQoR2l0Q29tbWFuZC5QVUxMKVxuICB9LFxuICBjbG9uZTogYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNsaVNlcnZpY2UuY2QoY29uc3RhbnQucm9vdERpcilcbiAgICBjb25zdCB7IGhvc3Q6IGdpdEhvc3QsIHRlYW06IGdpdFRlYW0sIHByb2plY3RQcmVmaXggfSA9IGNvbmZpZy5naXRcbiAgICBjb25zdCBwcm9taXNlcyA9IGNvbmZpZy5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IGdpdFByb2plY3QgPSBbcHJvamVjdFByZWZpeCwgcHJvamVjdF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJy0nKVxuICAgICAgY29uc3QgY21kID0gYGdpdCBjbG9uZSBnaXRAJHtnaXRIb3N0fToke2dpdFRlYW19LyR7Z2l0UHJvamVjdH0uZ2l0ICR7cHJvamVjdH1gXG4gICAgICByZXR1cm4gZ2l0U2VydmljZS5fZXhlY0dpdENvbW1hbmQoeyBwcm9qZWN0LCBjbWQgfSlcbiAgICB9KVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICBjbGlTZXJ2aWNlLnByaW50U3RkTWVzc2FnZSguLi5yZXN1bHRzKVxuICB9LFxuICBfc2ltcGxlQ29tbWFuZDogYXN5bmMgKGdpdENvbW1hbmQ6IEdpdENvbW1hbmQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBwcm9taXNlcyA9IGNvbmZpZy5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IGNtZCA9IGBnaXQgLUMgJHtjb25zdGFudC5yb290RGlyfS8ke3Byb2plY3R9ICR7Z2l0Q29tbWFuZH1gXG4gICAgICByZXR1cm4gZ2l0U2VydmljZS5fZXhlY0dpdENvbW1hbmQoeyBwcm9qZWN0LCBjbWQgfSlcbiAgICB9KVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICBjbGlTZXJ2aWNlLnByaW50U3RkTWVzc2FnZSguLi5yZXN1bHRzKVxuICB9LFxuICBfZXhlY0dpdENvbW1hbmQ6IGFzeW5jIChwYXJhbXM6IEV4ZWN1dGVGb3JQcm9qZWN0UGFyYW1zKTogUHJvbWlzZTxQcmludFN0ZE1lc3NhZ2U+ID0+IHtcbiAgICBjb25zdCB7IGNtZCB9ID0gcGFyYW1zXG4gICAgY29uc3QgcHJpbnRPbkRvbmUgPSBjaGFsay5ncmVlbihgRE9ORSAtICR7cGFyYW1zLnByb2plY3R9YClcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGlTZXJ2aWNlLmV4ZWMoeyBjbWQsIHByaW50T25Eb25lIH0pXG4gICAgcmV0dXJuIHsgW3BhcmFtcy5wcm9qZWN0XTogcmVzdWx0IH1cbiAgfSxcbn1cbiJdfQ==