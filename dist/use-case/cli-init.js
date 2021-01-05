"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliInit = void 0;
const init_config_1 = require("src/model/command/init-config");
const print_help_1 = require("src/model/command/print-help");
const print_version_1 = require("src/model/command/print-version");
const project_command_1 = require("src/model/command/project-command");
const args_service_1 = require("src/service/args-service");
const cli_service_1 = require("src/service/cli-service");
const git_service_1 = require("src/service/git-service");
const npm_service_1 = require("src/service/npm-service");
const config_1 = require("src/util/config");
exports.cliInit = {
    execArgsAsCommand: async (args) => {
        exports.cliInit.ifMoreThenOneCommandSelectedThrowErrorAndPrintHelp(args);
        exports.cliInit.ifNoCommandSelectedThrowErrorAndPrintHelp(args);
        const command = exports.cliInit.createCommandFromCliArgs(args);
        await command.execute();
    },
    createCommandFromCliArgs: (args) => {
        const command = args_service_1.argsService.argToObject({ args, options: args_service_1.argsService.cliCommandOptions });
        switch (true) {
            case command.git:
                if (!config_1.config.cmd.gitEnabled)
                    throw new Error('Git commands are not enabled. Check config: CMD_GIT_ENABLED');
                return new project_command_1.ProjectCommand({ projectExecuteCmd: git_service_1.gitService.createCommand(command._[0]), projects: config_1.config.projects });
            case command.npm:
                if (!config_1.config.cmd.npmEnabled)
                    throw new Error('Git commands are not enabled. Check config: CMD_NPM_ENABLED');
                return new project_command_1.ProjectCommand({ projectExecuteCmd: npm_service_1.npmService.createCommand(command._[0]), projects: config_1.config.projects });
            case command.init:
                return new init_config_1.InitConfig();
            case command.version:
                return new print_version_1.PrintVersion();
            case command.help:
                return new print_help_1.PrintHelp();
            default:
                throw new Error(`Unknown command[${JSON.stringify(command)}]`);
        }
    },
    ifMoreThenOneCommandSelectedThrowErrorAndPrintHelp: (args) => {
        if (args_service_1.argsService.selectedCommandCount({ args, options: args_service_1.argsService.cliCommandOptions }) <= 1)
            return;
        cli_service_1.cliService.printHelp();
        throw new Error('ERROR !!! - CLI can run only one command at a time');
    },
    ifNoCommandSelectedThrowErrorAndPrintHelp: (args) => {
        if (args_service_1.argsService.selectedCommandCount({ args, options: args_service_1.argsService.cliCommandOptions }) !== 0)
            return;
        cli_service_1.cliService.printHelp();
        throw new Error('ERROR !!! - CLI needs one command to be selected');
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLWluaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXNlLWNhc2UvY2xpLWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsK0RBQTBEO0FBQzFELDZEQUF3RDtBQUN4RCxtRUFBOEQ7QUFDOUQsdUVBQWtFO0FBQ2xFLDJEQUFtRTtBQUNuRSx5REFBb0Q7QUFDcEQseURBQW9EO0FBQ3BELHlEQUFvRDtBQUNwRCw0Q0FBd0M7QUFFM0IsUUFBQSxPQUFPLEdBQUc7SUFDckIsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLElBQWMsRUFBaUIsRUFBRTtRQUN6RCxlQUFPLENBQUMsa0RBQWtELENBQUMsSUFBSSxDQUFDLENBQUE7UUFDaEUsZUFBTyxDQUFDLHlDQUF5QyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZELE1BQU0sT0FBTyxHQUFHLGVBQU8sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0RCxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBQ0Qsd0JBQXdCLEVBQUUsQ0FBQyxJQUFjLEVBQVksRUFBRTtRQUNyRCxNQUFNLE9BQU8sR0FBRywwQkFBVyxDQUFDLFdBQVcsQ0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsMEJBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUE7UUFDdEcsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLE9BQU8sQ0FBQyxHQUFHO2dCQUNkLElBQUksQ0FBQyxlQUFNLENBQUMsR0FBRyxDQUFDLFVBQVU7b0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFBO2dCQUMxRyxPQUFPLElBQUksZ0NBQWMsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLHdCQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsZUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7WUFDckgsS0FBSyxPQUFPLENBQUMsR0FBRztnQkFDZCxJQUFJLENBQUMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVO29CQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQTtnQkFDMUcsT0FBTyxJQUFJLGdDQUFjLENBQUMsRUFBRSxpQkFBaUIsRUFBRSx3QkFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLGVBQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQ3JILEtBQUssT0FBTyxDQUFDLElBQUk7Z0JBQ2YsT0FBTyxJQUFJLHdCQUFVLEVBQUUsQ0FBQTtZQUN6QixLQUFLLE9BQU8sQ0FBQyxPQUFPO2dCQUNsQixPQUFPLElBQUksNEJBQVksRUFBRSxDQUFBO1lBQzNCLEtBQUssT0FBTyxDQUFDLElBQUk7Z0JBQ2YsT0FBTyxJQUFJLHNCQUFTLEVBQUUsQ0FBQTtZQUN4QjtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNqRTtJQUNILENBQUM7SUFDRCxrREFBa0QsRUFBRSxDQUFDLElBQWMsRUFBUSxFQUFFO1FBQzNFLElBQUksMEJBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsMEJBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU07UUFDbkcsd0JBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUNELHlDQUF5QyxFQUFFLENBQUMsSUFBYyxFQUFRLEVBQUU7UUFDbEUsSUFBSSwwQkFBVyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSwwQkFBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTTtRQUNwRyx3QkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQTtJQUNyRSxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDb21tYW5kIH0gZnJvbSAnc3JjL21vZGVsL2NvbW1hbmQnXG5pbXBvcnQgeyBJbml0Q29uZmlnIH0gZnJvbSAnc3JjL21vZGVsL2NvbW1hbmQvaW5pdC1jb25maWcnXG5pbXBvcnQgeyBQcmludEhlbHAgfSBmcm9tICdzcmMvbW9kZWwvY29tbWFuZC9wcmludC1oZWxwJ1xuaW1wb3J0IHsgUHJpbnRWZXJzaW9uIH0gZnJvbSAnc3JjL21vZGVsL2NvbW1hbmQvcHJpbnQtdmVyc2lvbidcbmltcG9ydCB7IFByb2plY3RDb21tYW5kIH0gZnJvbSAnc3JjL21vZGVsL2NvbW1hbmQvcHJvamVjdC1jb21tYW5kJ1xuaW1wb3J0IHsgYXJnc1NlcnZpY2UsIGNsaUNvbW1hbmRzIH0gZnJvbSAnc3JjL3NlcnZpY2UvYXJncy1zZXJ2aWNlJ1xuaW1wb3J0IHsgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL2NsaS1zZXJ2aWNlJ1xuaW1wb3J0IHsgZ2l0U2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL2dpdC1zZXJ2aWNlJ1xuaW1wb3J0IHsgbnBtU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL25wbS1zZXJ2aWNlJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuXG5leHBvcnQgY29uc3QgY2xpSW5pdCA9IHtcbiAgZXhlY0FyZ3NBc0NvbW1hbmQ6IGFzeW5jIChhcmdzOiBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNsaUluaXQuaWZNb3JlVGhlbk9uZUNvbW1hbmRTZWxlY3RlZFRocm93RXJyb3JBbmRQcmludEhlbHAoYXJncylcbiAgICBjbGlJbml0LmlmTm9Db21tYW5kU2VsZWN0ZWRUaHJvd0Vycm9yQW5kUHJpbnRIZWxwKGFyZ3MpXG4gICAgY29uc3QgY29tbWFuZCA9IGNsaUluaXQuY3JlYXRlQ29tbWFuZEZyb21DbGlBcmdzKGFyZ3MpXG4gICAgYXdhaXQgY29tbWFuZC5leGVjdXRlKClcbiAgfSxcbiAgY3JlYXRlQ29tbWFuZEZyb21DbGlBcmdzOiAoYXJnczogc3RyaW5nW10pOiBJQ29tbWFuZCA9PiB7XG4gICAgY29uc3QgY29tbWFuZCA9IGFyZ3NTZXJ2aWNlLmFyZ1RvT2JqZWN0PGNsaUNvbW1hbmRzPih7IGFyZ3MsIG9wdGlvbnM6IGFyZ3NTZXJ2aWNlLmNsaUNvbW1hbmRPcHRpb25zIH0pXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGNvbW1hbmQuZ2l0OlxuICAgICAgICBpZiAoIWNvbmZpZy5jbWQuZ2l0RW5hYmxlZCkgdGhyb3cgbmV3IEVycm9yKCdHaXQgY29tbWFuZHMgYXJlIG5vdCBlbmFibGVkLiBDaGVjayBjb25maWc6IENNRF9HSVRfRU5BQkxFRCcpXG4gICAgICAgIHJldHVybiBuZXcgUHJvamVjdENvbW1hbmQoeyBwcm9qZWN0RXhlY3V0ZUNtZDogZ2l0U2VydmljZS5jcmVhdGVDb21tYW5kKGNvbW1hbmQuX1swXSksIHByb2plY3RzOiBjb25maWcucHJvamVjdHMgfSlcbiAgICAgIGNhc2UgY29tbWFuZC5ucG06XG4gICAgICAgIGlmICghY29uZmlnLmNtZC5ucG1FbmFibGVkKSB0aHJvdyBuZXcgRXJyb3IoJ0dpdCBjb21tYW5kcyBhcmUgbm90IGVuYWJsZWQuIENoZWNrIGNvbmZpZzogQ01EX05QTV9FTkFCTEVEJylcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0Q29tbWFuZCh7IHByb2plY3RFeGVjdXRlQ21kOiBucG1TZXJ2aWNlLmNyZWF0ZUNvbW1hbmQoY29tbWFuZC5fWzBdKSwgcHJvamVjdHM6IGNvbmZpZy5wcm9qZWN0cyB9KVxuICAgICAgY2FzZSBjb21tYW5kLmluaXQ6XG4gICAgICAgIHJldHVybiBuZXcgSW5pdENvbmZpZygpXG4gICAgICBjYXNlIGNvbW1hbmQudmVyc2lvbjpcbiAgICAgICAgcmV0dXJuIG5ldyBQcmludFZlcnNpb24oKVxuICAgICAgY2FzZSBjb21tYW5kLmhlbHA6XG4gICAgICAgIHJldHVybiBuZXcgUHJpbnRIZWxwKClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjb21tYW5kWyR7SlNPTi5zdHJpbmdpZnkoY29tbWFuZCl9XWApXG4gICAgfVxuICB9LFxuICBpZk1vcmVUaGVuT25lQ29tbWFuZFNlbGVjdGVkVGhyb3dFcnJvckFuZFByaW50SGVscDogKGFyZ3M6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG4gICAgaWYgKGFyZ3NTZXJ2aWNlLnNlbGVjdGVkQ29tbWFuZENvdW50KHsgYXJncywgb3B0aW9uczogYXJnc1NlcnZpY2UuY2xpQ29tbWFuZE9wdGlvbnMgfSkgPD0gMSkgcmV0dXJuXG4gICAgY2xpU2VydmljZS5wcmludEhlbHAoKVxuICAgIHRocm93IG5ldyBFcnJvcignRVJST1IgISEhIC0gQ0xJIGNhbiBydW4gb25seSBvbmUgY29tbWFuZCBhdCBhIHRpbWUnKVxuICB9LFxuICBpZk5vQ29tbWFuZFNlbGVjdGVkVGhyb3dFcnJvckFuZFByaW50SGVscDogKGFyZ3M6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG4gICAgaWYgKGFyZ3NTZXJ2aWNlLnNlbGVjdGVkQ29tbWFuZENvdW50KHsgYXJncywgb3B0aW9uczogYXJnc1NlcnZpY2UuY2xpQ29tbWFuZE9wdGlvbnMgfSkgIT09IDApIHJldHVyblxuICAgIGNsaVNlcnZpY2UucHJpbnRIZWxwKClcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VSUk9SICEhISAtIENMSSBuZWVkcyBvbmUgY29tbWFuZCB0byBiZSBzZWxlY3RlZCcpXG4gIH0sXG59XG4iXX0=