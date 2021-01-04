"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliInit = void 0;
const project_executor_1 = require("src/model/project-executor");
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
        const projectExecutor = new project_executor_1.ProjectExecutor({ projectExecuteCmd: command, projects: config_1.config.projects });
        await projectExecutor.execute();
    },
    createCommandFromCliArgs: (args) => {
        const command = args_service_1.argsService.argToObject({ args, options: args_service_1.argsService.cliCommandOptions });
        switch (true) {
            case command.git:
                if (!config_1.config.cmd.gitEnabled)
                    throw new Error('Git commands are not enabled. Check config: CMD_GIT_ENABLED');
                return git_service_1.gitService.createCommand(command._[0]);
            case command.npm:
                if (!config_1.config.cmd.npmEnabled)
                    throw new Error('Git commands are not enabled. Check config: CMD_NPM_ENABLED');
                return npm_service_1.npmService.createCommand(command._[0]);
            case command.version:
                cli_service_1.cliService.printVersion();
                process.exit();
                break;
            case command.help:
                cli_service_1.cliService.printHelp();
                process.exit();
                break;
            default:
                throw new Error(`Unknown command[${JSON.stringify(command)}]`);
        }
    },
    ifMoreThenOneCommandSelectedThrowErrorAndPrintHelp: (args) => {
        if (args_service_1.argsService.selectedCommandCount({ args, options: args_service_1.argsService.cliCommandOptions }) > 1) {
            cli_service_1.cliService.printHelp();
            throw new Error('ERROR !!! - CLI can run only one command at a time');
        }
    },
    ifNoCommandSelectedThrowErrorAndPrintHelp: (args) => {
        if (args_service_1.argsService.selectedCommandCount({ args, options: args_service_1.argsService.cliCommandOptions }) === 0) {
            {
                cli_service_1.cliService.printHelp();
                throw new Error('ERROR !!! - CLI needs one command to be selected');
            }
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLWluaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZS91c2VDYXNlL2NsaS1pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlFQUE0RDtBQUM1RCwyREFBbUU7QUFDbkUseURBQW9EO0FBQ3BELHlEQUFvRDtBQUNwRCx5REFBb0Q7QUFDcEQsNENBQXdDO0FBRTNCLFFBQUEsT0FBTyxHQUFHO0lBQ3JCLGlCQUFpQixFQUFFLEtBQUssRUFBRSxJQUFjLEVBQWlCLEVBQUU7UUFDekQsZUFBTyxDQUFDLGtEQUFrRCxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2hFLGVBQU8sQ0FBQyx5Q0FBeUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2RCxNQUFNLE9BQU8sR0FBRyxlQUFPLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEQsTUFBTSxlQUFlLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUN0RyxNQUFNLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNqQyxDQUFDO0lBQ0Qsd0JBQXdCLEVBQUUsQ0FBQyxJQUFjLEVBQWtCLEVBQUU7UUFDM0QsTUFBTSxPQUFPLEdBQUcsMEJBQVcsQ0FBQyxXQUFXLENBQWMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLDBCQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFBO1FBQ3RHLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxPQUFPLENBQUMsR0FBRztnQkFDZCxJQUFJLENBQUMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVO29CQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQTtnQkFDMUcsT0FBTyx3QkFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDL0MsS0FBSyxPQUFPLENBQUMsR0FBRztnQkFDZCxJQUFJLENBQUMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVO29CQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQTtnQkFDMUcsT0FBTyx3QkFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDL0MsS0FBSyxPQUFPLENBQUMsT0FBTztnQkFDbEIsd0JBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtnQkFDekIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBO2dCQUNkLE1BQUs7WUFDUCxLQUFLLE9BQU8sQ0FBQyxJQUFJO2dCQUNmLHdCQUFVLENBQUMsU0FBUyxFQUFFLENBQUE7Z0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDZCxNQUFLO1lBQ1A7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDakU7SUFDSCxDQUFDO0lBQ0Qsa0RBQWtELEVBQUUsQ0FBQyxJQUFjLEVBQVEsRUFBRTtRQUMzRSxJQUFJLDBCQUFXLENBQUMsb0JBQW9CLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLDBCQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMxRix3QkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQTtTQUN0RTtJQUNILENBQUM7SUFDRCx5Q0FBeUMsRUFBRSxDQUFDLElBQWMsRUFBUSxFQUFFO1FBQ2xFLElBQUksMEJBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsMEJBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVGO2dCQUNFLHdCQUFVLENBQUMsU0FBUyxFQUFFLENBQUE7Z0JBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQTthQUNwRTtTQUNGO0lBQ0gsQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0Q29tbWFuZCB9IGZyb20gJ3NyYy9tb2RlbC9wcm9qZWN0LWNvbW1hbmQnXG5pbXBvcnQgeyBQcm9qZWN0RXhlY3V0b3IgfSBmcm9tICdzcmMvbW9kZWwvcHJvamVjdC1leGVjdXRvcidcbmltcG9ydCB7IGFyZ3NTZXJ2aWNlLCBjbGlDb21tYW5kcyB9IGZyb20gJ3NyYy9zZXJ2aWNlL2FyZ3Mtc2VydmljZSdcbmltcG9ydCB7IGNsaVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9jbGktc2VydmljZSdcbmltcG9ydCB7IGdpdFNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9naXQtc2VydmljZSdcbmltcG9ydCB7IG5wbVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9ucG0tc2VydmljZSdcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ3NyYy91dGlsL2NvbmZpZydcblxuZXhwb3J0IGNvbnN0IGNsaUluaXQgPSB7XG4gIGV4ZWNBcmdzQXNDb21tYW5kOiBhc3luYyAoYXJnczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjbGlJbml0LmlmTW9yZVRoZW5PbmVDb21tYW5kU2VsZWN0ZWRUaHJvd0Vycm9yQW5kUHJpbnRIZWxwKGFyZ3MpXG4gICAgY2xpSW5pdC5pZk5vQ29tbWFuZFNlbGVjdGVkVGhyb3dFcnJvckFuZFByaW50SGVscChhcmdzKVxuICAgIGNvbnN0IGNvbW1hbmQgPSBjbGlJbml0LmNyZWF0ZUNvbW1hbmRGcm9tQ2xpQXJncyhhcmdzKVxuICAgIGNvbnN0IHByb2plY3RFeGVjdXRvciA9IG5ldyBQcm9qZWN0RXhlY3V0b3IoeyBwcm9qZWN0RXhlY3V0ZUNtZDogY29tbWFuZCwgcHJvamVjdHM6IGNvbmZpZy5wcm9qZWN0cyB9KVxuICAgIGF3YWl0IHByb2plY3RFeGVjdXRvci5leGVjdXRlKClcbiAgfSxcbiAgY3JlYXRlQ29tbWFuZEZyb21DbGlBcmdzOiAoYXJnczogc3RyaW5nW10pOiBQcm9qZWN0Q29tbWFuZCA9PiB7XG4gICAgY29uc3QgY29tbWFuZCA9IGFyZ3NTZXJ2aWNlLmFyZ1RvT2JqZWN0PGNsaUNvbW1hbmRzPih7IGFyZ3MsIG9wdGlvbnM6IGFyZ3NTZXJ2aWNlLmNsaUNvbW1hbmRPcHRpb25zIH0pXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGNvbW1hbmQuZ2l0OlxuICAgICAgICBpZiAoIWNvbmZpZy5jbWQuZ2l0RW5hYmxlZCkgdGhyb3cgbmV3IEVycm9yKCdHaXQgY29tbWFuZHMgYXJlIG5vdCBlbmFibGVkLiBDaGVjayBjb25maWc6IENNRF9HSVRfRU5BQkxFRCcpXG4gICAgICAgIHJldHVybiBnaXRTZXJ2aWNlLmNyZWF0ZUNvbW1hbmQoY29tbWFuZC5fWzBdKVxuICAgICAgY2FzZSBjb21tYW5kLm5wbTpcbiAgICAgICAgaWYgKCFjb25maWcuY21kLm5wbUVuYWJsZWQpIHRocm93IG5ldyBFcnJvcignR2l0IGNvbW1hbmRzIGFyZSBub3QgZW5hYmxlZC4gQ2hlY2sgY29uZmlnOiBDTURfTlBNX0VOQUJMRUQnKVxuICAgICAgICByZXR1cm4gbnBtU2VydmljZS5jcmVhdGVDb21tYW5kKGNvbW1hbmQuX1swXSlcbiAgICAgIGNhc2UgY29tbWFuZC52ZXJzaW9uOlxuICAgICAgICBjbGlTZXJ2aWNlLnByaW50VmVyc2lvbigpXG4gICAgICAgIHByb2Nlc3MuZXhpdCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIGNvbW1hbmQuaGVscDpcbiAgICAgICAgY2xpU2VydmljZS5wcmludEhlbHAoKVxuICAgICAgICBwcm9jZXNzLmV4aXQoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGNvbW1hbmRbJHtKU09OLnN0cmluZ2lmeShjb21tYW5kKX1dYClcbiAgICB9XG4gIH0sXG4gIGlmTW9yZVRoZW5PbmVDb21tYW5kU2VsZWN0ZWRUaHJvd0Vycm9yQW5kUHJpbnRIZWxwOiAoYXJnczogc3RyaW5nW10pOiB2b2lkID0+IHtcbiAgICBpZiAoYXJnc1NlcnZpY2Uuc2VsZWN0ZWRDb21tYW5kQ291bnQoeyBhcmdzLCBvcHRpb25zOiBhcmdzU2VydmljZS5jbGlDb21tYW5kT3B0aW9ucyB9KSA+IDEpIHtcbiAgICAgIGNsaVNlcnZpY2UucHJpbnRIZWxwKClcbiAgICAgIHRocm93IG5ldyBFcnJvcignRVJST1IgISEhIC0gQ0xJIGNhbiBydW4gb25seSBvbmUgY29tbWFuZCBhdCBhIHRpbWUnKVxuICAgIH1cbiAgfSxcbiAgaWZOb0NvbW1hbmRTZWxlY3RlZFRocm93RXJyb3JBbmRQcmludEhlbHA6IChhcmdzOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuICAgIGlmIChhcmdzU2VydmljZS5zZWxlY3RlZENvbW1hbmRDb3VudCh7IGFyZ3MsIG9wdGlvbnM6IGFyZ3NTZXJ2aWNlLmNsaUNvbW1hbmRPcHRpb25zIH0pID09PSAwKSB7XG4gICAgICB7XG4gICAgICAgIGNsaVNlcnZpY2UucHJpbnRIZWxwKClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFUlJPUiAhISEgLSBDTEkgbmVlZHMgb25lIGNvbW1hbmQgdG8gYmUgc2VsZWN0ZWQnKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbn1cbiJdfQ==