import yargs from 'yargs';
import { GitRouter } from '#src/controller/yargs-router/git-router';
import { NpmRouter } from '#src/controller/yargs-router/npm-router';
import { InitConfig } from '#src/model/command/init-config';
import { terminalWrapperFactory } from '#src/service/terminal-wrapper';
import { config } from '#src/util/config';
export class CliRouter {
    _yargs;
    constructor(argv) {
        this._yargs = yargs(argv);
    }
    async routeArgv() {
        this._setupUsage();
        this._helpVersionAlias();
        this._gitCommands();
        this._npmCommands();
        this._initCommands();
        this._demandCommands();
        await this._yargs.parseAsync();
    }
    _setupUsage() {
        this._yargs.usage(`$0 <cmd> [command options]`);
    }
    _helpVersionAlias() {
        this._yargs.alias('version', 'v').alias('help', 'h').showHelpOnFail(false, 'Specify --help for available options');
    }
    _demandCommands() {
        this._yargs.demandCommand(1, 1, 'You need to select one command before moving on').strict();
    }
    _gitCommands() {
        if (!config().cmd.gitEnabled) {
            return;
        }
        this._yargs.command({
            aliases: ['g'],
            builder: (y) => new GitRouter()
                .commands(y)
                .demandCommand(1, 1)
                .showHelpOnFail(false, 'Specify --help for available options')
                .version(false),
            command: 'git',
            describe: 'execute git command',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handler: async (_argv) => {
                //return
            },
        });
    }
    _npmCommands() {
        if (!config().cmd.npmEnabled) {
            return;
        }
        this._yargs.command({
            aliases: ['n'],
            builder: (y) => new NpmRouter()
                .commands(y)
                .demandCommand(1, 1)
                .showHelpOnFail(false, 'Specify --help for available options')
                .version(false),
            command: 'npm',
            describe: 'execute npm command',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handler: async (_argv) => {
                //return
            },
        });
    }
    _initCommands() {
        this._yargs.command({
            aliases: ['i'],
            command: 'init',
            describe: 'Create init file',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handler: async (_argv) => {
                await terminalWrapperFactory({ command: new InitConfig() }).execute();
            },
        });
    }
}
export const cliRouterFactory = (...params) => new CliRouter(...params);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3lhcmdzLXJvdXRlci9jbGktcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBb0IsTUFBTSxPQUFPLENBQUE7QUFFeEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlDQUF5QyxDQUFBO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQTtBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUE7QUFDM0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0JBQStCLENBQUE7QUFDdEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBRXpDLE1BQU0sT0FBTyxTQUFTO0lBQ0YsTUFBTSxDQUFNO0lBRS9CLFlBQVksSUFBYztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBRUQsS0FBSyxDQUFDLFNBQVM7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7UUFFeEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFFcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBRXRCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRVMsV0FBVztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFUyxpQkFBaUI7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxzQ0FBc0MsQ0FBQyxDQUFBO0lBQ25ILENBQUM7SUFFUyxlQUFlO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsaURBQWlELENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUM1RixDQUFDO0lBRVMsWUFBWTtRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzlCLE9BQU07UUFDUCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDbkIsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FDZCxJQUFJLFNBQVMsRUFBRTtpQkFDYixRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNYLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQixjQUFjLENBQUMsS0FBSyxFQUFFLHNDQUFzQyxDQUFDO2lCQUM3RCxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQiw4REFBOEQ7WUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFVLEVBQUUsRUFBRTtnQkFDN0IsUUFBUTtZQUNULENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRVMsWUFBWTtRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzlCLE9BQU07UUFDUCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDbkIsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FDZCxJQUFJLFNBQVMsRUFBRTtpQkFDYixRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNYLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQixjQUFjLENBQUMsS0FBSyxFQUFFLHNDQUFzQyxDQUFDO2lCQUM3RCxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxLQUFLO1lBRWQsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQiw4REFBOEQ7WUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFVLEVBQUUsRUFBRTtnQkFDN0IsUUFBUTtZQUNULENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRVMsYUFBYTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNuQixPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDZCxPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsOERBQThEO1lBQzlELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBVSxFQUFFLEVBQUU7Z0JBQzdCLE1BQU0sc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDdEUsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7Q0FDRDtBQUVELE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQUMsR0FBRyxNQUErQyxFQUFhLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHlhcmdzLCB7IHR5cGUgQXJndiB9IGZyb20gJ3lhcmdzJ1xuXG5pbXBvcnQgeyBHaXRSb3V0ZXIgfSBmcm9tICcjc3JjL2NvbnRyb2xsZXIveWFyZ3Mtcm91dGVyL2dpdC1yb3V0ZXInXG5pbXBvcnQgeyBOcG1Sb3V0ZXIgfSBmcm9tICcjc3JjL2NvbnRyb2xsZXIveWFyZ3Mtcm91dGVyL25wbS1yb3V0ZXInXG5pbXBvcnQgeyBJbml0Q29uZmlnIH0gZnJvbSAnI3NyYy9tb2RlbC9jb21tYW5kL2luaXQtY29uZmlnJ1xuaW1wb3J0IHsgdGVybWluYWxXcmFwcGVyRmFjdG9yeSB9IGZyb20gJyNzcmMvc2VydmljZS90ZXJtaW5hbC13cmFwcGVyJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnI3NyYy91dGlsL2NvbmZpZydcblxuZXhwb3J0IGNsYXNzIENsaVJvdXRlciB7XG5cdHByb3RlY3RlZCByZWFkb25seSBfeWFyZ3M6IEFyZ3ZcblxuXHRjb25zdHJ1Y3Rvcihhcmd2OiBzdHJpbmdbXSkge1xuXHRcdHRoaXMuX3lhcmdzID0geWFyZ3MoYXJndilcblx0fVxuXG5cdGFzeW5jIHJvdXRlQXJndigpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0aGlzLl9zZXR1cFVzYWdlKClcblx0XHR0aGlzLl9oZWxwVmVyc2lvbkFsaWFzKClcblxuXHRcdHRoaXMuX2dpdENvbW1hbmRzKClcblx0XHR0aGlzLl9ucG1Db21tYW5kcygpXG5cdFx0dGhpcy5faW5pdENvbW1hbmRzKClcblxuXHRcdHRoaXMuX2RlbWFuZENvbW1hbmRzKClcblxuXHRcdGF3YWl0IHRoaXMuX3lhcmdzLnBhcnNlQXN5bmMoKVxuXHR9XG5cblx0cHJvdGVjdGVkIF9zZXR1cFVzYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMuX3lhcmdzLnVzYWdlKGAkMCA8Y21kPiBbY29tbWFuZCBvcHRpb25zXWApXG5cdH1cblxuXHRwcm90ZWN0ZWQgX2hlbHBWZXJzaW9uQWxpYXMoKTogdm9pZCB7XG5cdFx0dGhpcy5feWFyZ3MuYWxpYXMoJ3ZlcnNpb24nLCAndicpLmFsaWFzKCdoZWxwJywgJ2gnKS5zaG93SGVscE9uRmFpbChmYWxzZSwgJ1NwZWNpZnkgLS1oZWxwIGZvciBhdmFpbGFibGUgb3B0aW9ucycpXG5cdH1cblxuXHRwcm90ZWN0ZWQgX2RlbWFuZENvbW1hbmRzKCk6IHZvaWQge1xuXHRcdHRoaXMuX3lhcmdzLmRlbWFuZENvbW1hbmQoMSwgMSwgJ1lvdSBuZWVkIHRvIHNlbGVjdCBvbmUgY29tbWFuZCBiZWZvcmUgbW92aW5nIG9uJykuc3RyaWN0KClcblx0fVxuXG5cdHByb3RlY3RlZCBfZ2l0Q29tbWFuZHMoKTogdm9pZCB7XG5cdFx0aWYgKCFjb25maWcoKS5jbWQuZ2l0RW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdHRoaXMuX3lhcmdzLmNvbW1hbmQoe1xuXHRcdFx0YWxpYXNlczogWydnJ10sXG5cdFx0XHRidWlsZGVyOiAoeSkgPT5cblx0XHRcdFx0bmV3IEdpdFJvdXRlcigpXG5cdFx0XHRcdFx0LmNvbW1hbmRzKHkpXG5cdFx0XHRcdFx0LmRlbWFuZENvbW1hbmQoMSwgMSlcblx0XHRcdFx0XHQuc2hvd0hlbHBPbkZhaWwoZmFsc2UsICdTcGVjaWZ5IC0taGVscCBmb3IgYXZhaWxhYmxlIG9wdGlvbnMnKVxuXHRcdFx0XHRcdC52ZXJzaW9uKGZhbHNlKSxcblx0XHRcdGNvbW1hbmQ6ICdnaXQnLFxuXHRcdFx0ZGVzY3JpYmU6ICdleGVjdXRlIGdpdCBjb21tYW5kJyxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRoYW5kbGVyOiBhc3luYyAoX2FyZ3Y6IGFueSkgPT4ge1xuXHRcdFx0XHQvL3JldHVyblxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0cHJvdGVjdGVkIF9ucG1Db21tYW5kcygpOiB2b2lkIHtcblx0XHRpZiAoIWNvbmZpZygpLmNtZC5ucG1FbmFibGVkKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0dGhpcy5feWFyZ3MuY29tbWFuZCh7XG5cdFx0XHRhbGlhc2VzOiBbJ24nXSxcblx0XHRcdGJ1aWxkZXI6ICh5KSA9PlxuXHRcdFx0XHRuZXcgTnBtUm91dGVyKClcblx0XHRcdFx0XHQuY29tbWFuZHMoeSlcblx0XHRcdFx0XHQuZGVtYW5kQ29tbWFuZCgxLCAxKVxuXHRcdFx0XHRcdC5zaG93SGVscE9uRmFpbChmYWxzZSwgJ1NwZWNpZnkgLS1oZWxwIGZvciBhdmFpbGFibGUgb3B0aW9ucycpXG5cdFx0XHRcdFx0LnZlcnNpb24oZmFsc2UpLFxuXHRcdFx0Y29tbWFuZDogJ25wbScsXG5cblx0XHRcdGRlc2NyaWJlOiAnZXhlY3V0ZSBucG0gY29tbWFuZCcsXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0aGFuZGxlcjogYXN5bmMgKF9hcmd2OiBhbnkpID0+IHtcblx0XHRcdFx0Ly9yZXR1cm5cblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdHByb3RlY3RlZCBfaW5pdENvbW1hbmRzKCk6IHZvaWQge1xuXHRcdHRoaXMuX3lhcmdzLmNvbW1hbmQoe1xuXHRcdFx0YWxpYXNlczogWydpJ10sXG5cdFx0XHRjb21tYW5kOiAnaW5pdCcsXG5cdFx0XHRkZXNjcmliZTogJ0NyZWF0ZSBpbml0IGZpbGUnLFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdGhhbmRsZXI6IGFzeW5jIChfYXJndjogYW55KSA9PiB7XG5cdFx0XHRcdGF3YWl0IHRlcm1pbmFsV3JhcHBlckZhY3RvcnkoeyBjb21tYW5kOiBuZXcgSW5pdENvbmZpZygpIH0pLmV4ZWN1dGUoKVxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBjbGlSb3V0ZXJGYWN0b3J5ID0gKC4uLnBhcmFtczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBDbGlSb3V0ZXI+KTogQ2xpUm91dGVyID0+IG5ldyBDbGlSb3V0ZXIoLi4ucGFyYW1zKVxuIl19