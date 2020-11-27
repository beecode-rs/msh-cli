"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitService = exports.GitCommand = void 0;
const chalk_1 = __importDefault(require("chalk"));
const lodash_1 = require("lodash");
const cli_service_1 = require("src/service/cli-service");
const console_service_1 = require("src/service/console-service");
const config_1 = require("src/util/config");
var GitCommand;
(function (GitCommand) {
    GitCommand["STATUS"] = "status";
    GitCommand["FETCH"] = "fetch";
    GitCommand["PULL"] = "pull";
    GitCommand["CLONE"] = "clone";
})(GitCommand = exports.GitCommand || (exports.GitCommand = {}));
exports.gitService = {
    status: async () => {
        return exports.gitService._simpleCommand({ projects: config_1.config.projects, command: GitCommand.STATUS });
    },
    fetch: async () => {
        return exports.gitService._simpleCommand({ projects: config_1.config.projects, command: GitCommand.FETCH });
    },
    pull: async () => {
        return exports.gitService._simpleCommand({ projects: config_1.config.projects, command: GitCommand.PULL });
    },
    clone: async () => {
        console_service_1.consoleService.cd(config_1.config.rootDir);
    },
    _simpleCommand: async (params) => {
        const { command } = params;
        const promises = params.projects.map((project) => {
            exports.gitService._execute({ project, command });
        });
        const result = await Promise.all(promises);
        cli_service_1.cliService.printMessage(lodash_1.assignIn({}, ...result));
    },
    _execute: async (params) => {
        const cmd = `git -C ${config_1.config.rootDir}/${params.project} ${params.command}`;
        const printOnDone = chalk_1.default.green(`DONE - ${params.project}`);
        const result = await console_service_1.consoleService.exec({ cmd, printOnDone });
        return { [params.project]: result };
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9naXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsbUNBQWlDO0FBQ2pDLHlEQUFvRDtBQUNwRCxpRUFBd0U7QUFDeEUsNENBQXdDO0FBT3hDLElBQVksVUFLWDtBQUxELFdBQVksVUFBVTtJQUNwQiwrQkFBaUIsQ0FBQTtJQUNqQiw2QkFBZSxDQUFBO0lBQ2YsMkJBQWEsQ0FBQTtJQUNiLDZCQUFlLENBQUE7QUFDakIsQ0FBQyxFQUxXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBS3JCO0FBT1ksUUFBQSxVQUFVLEdBQUc7SUFDeEIsTUFBTSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2pCLE9BQU8sa0JBQVUsQ0FBQyxjQUFjLENBQUMsRUFBRSxRQUFRLEVBQUUsZUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDN0YsQ0FBQztJQUNELEtBQUssRUFBRSxLQUFLLElBQUksRUFBRTtRQUNoQixPQUFPLGtCQUFVLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLGVBQU0sQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQzVGLENBQUM7SUFDRCxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDZixPQUFPLGtCQUFVLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLGVBQU0sQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQzNGLENBQUM7SUFDRCxLQUFLLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDaEIsZ0NBQWMsQ0FBQyxFQUFFLENBQUMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFDRCxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQXdCLEVBQUUsRUFBRTtRQUNqRCxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFBO1FBQzFCLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDL0Msa0JBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUMzQyxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMxQyx3QkFBVSxDQUFDLFlBQVksQ0FBQyxpQkFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUNELFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBK0IsRUFBMEMsRUFBRTtRQUMxRixNQUFNLEdBQUcsR0FBRyxVQUFVLGVBQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDMUUsTUFBTSxXQUFXLEdBQUcsZUFBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQzNELE1BQU0sTUFBTSxHQUFHLE1BQU0sZ0NBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUM5RCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUE7SUFDckMsQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgeyBhc3NpZ25JbiB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IGNsaVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9jbGktc2VydmljZSdcbmltcG9ydCB7IEV4ZWNSZXN1bHQsIGNvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UvY29uc29sZS1zZXJ2aWNlJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuXG5leHBvcnQgdHlwZSBFeGVjdXRlRm9yUHJvamVjdFBhcmFtcyA9IHtcbiAgcHJvamVjdDogc3RyaW5nXG4gIGNvbW1hbmQ6IEdpdENvbW1hbmRcbn1cblxuZXhwb3J0IGVudW0gR2l0Q29tbWFuZCB7XG4gIFNUQVRVUyA9ICdzdGF0dXMnLFxuICBGRVRDSCA9ICdmZXRjaCcsXG4gIFBVTEwgPSAncHVsbCcsXG4gIENMT05FID0gJ2Nsb25lJyxcbn1cblxuZXhwb3J0IHR5cGUgR2l0Q29tbWFuZFBhcmFtcyA9IHtcbiAgcHJvamVjdHM6IHN0cmluZ1tdXG4gIGNvbW1hbmQ6IEdpdENvbW1hbmRcbn1cblxuZXhwb3J0IGNvbnN0IGdpdFNlcnZpY2UgPSB7XG4gIHN0YXR1czogYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBnaXRTZXJ2aWNlLl9zaW1wbGVDb21tYW5kKHsgcHJvamVjdHM6IGNvbmZpZy5wcm9qZWN0cywgY29tbWFuZDogR2l0Q29tbWFuZC5TVEFUVVMgfSlcbiAgfSxcbiAgZmV0Y2g6IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gZ2l0U2VydmljZS5fc2ltcGxlQ29tbWFuZCh7IHByb2plY3RzOiBjb25maWcucHJvamVjdHMsIGNvbW1hbmQ6IEdpdENvbW1hbmQuRkVUQ0ggfSlcbiAgfSxcbiAgcHVsbDogYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBnaXRTZXJ2aWNlLl9zaW1wbGVDb21tYW5kKHsgcHJvamVjdHM6IGNvbmZpZy5wcm9qZWN0cywgY29tbWFuZDogR2l0Q29tbWFuZC5QVUxMIH0pXG4gIH0sXG4gIGNsb25lOiBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZVNlcnZpY2UuY2QoY29uZmlnLnJvb3REaXIpXG4gIH0sXG4gIF9zaW1wbGVDb21tYW5kOiBhc3luYyAocGFyYW1zOiBHaXRDb21tYW5kUGFyYW1zKSA9PiB7XG4gICAgY29uc3QgeyBjb21tYW5kIH0gPSBwYXJhbXNcbiAgICBjb25zdCBwcm9taXNlcyA9IHBhcmFtcy5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGdpdFNlcnZpY2UuX2V4ZWN1dGUoeyBwcm9qZWN0LCBjb21tYW5kIH0pXG4gICAgfSlcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICBjbGlTZXJ2aWNlLnByaW50TWVzc2FnZShhc3NpZ25Jbih7fSwgLi4ucmVzdWx0KSlcbiAgfSxcbiAgX2V4ZWN1dGU6IGFzeW5jIChwYXJhbXM6IEV4ZWN1dGVGb3JQcm9qZWN0UGFyYW1zKTogUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IEV4ZWNSZXN1bHQgfT4gPT4ge1xuICAgIGNvbnN0IGNtZCA9IGBnaXQgLUMgJHtjb25maWcucm9vdERpcn0vJHtwYXJhbXMucHJvamVjdH0gJHtwYXJhbXMuY29tbWFuZH1gXG4gICAgY29uc3QgcHJpbnRPbkRvbmUgPSBjaGFsay5ncmVlbihgRE9ORSAtICR7cGFyYW1zLnByb2plY3R9YClcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb25zb2xlU2VydmljZS5leGVjKHsgY21kLCBwcmludE9uRG9uZSB9KVxuICAgIHJldHVybiB7IFtwYXJhbXMucHJvamVjdF06IHJlc3VsdCB9XG4gIH0sXG59XG4iXX0=