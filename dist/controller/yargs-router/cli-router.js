"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliRouterFactory = exports.CliRouter = void 0;
const git_router_1 = require("src/controller/yargs-router/git-router");
const npm_router_1 = require("src/controller/yargs-router/npm-router");
const init_config_1 = require("src/model/command/init-config");
const terminal_wrapper_1 = require("src/service/terminal-wrapper");
const config_1 = require("src/util/config");
const yargs_1 = __importDefault(require("yargs"));
class CliRouter {
    _yargs;
    _globalCommands = ['git', 'npm', 'init'];
    constructor(argv) {
        this._yargs = (0, yargs_1.default)(argv);
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
        this._yargs.usage(`$0 <${this._globalCommands.join('|')}> [command options]`);
    }
    _helpVersionAlias() {
        this._yargs.alias('version', 'v').alias('help', 'h').showHelpOnFail(false, 'Specify --help for available options');
    }
    _demandCommands() {
        this._yargs.demandCommand(1, 1, 'You need to select one command before moving on').strict();
    }
    _gitCommands() {
        if (!(0, config_1.config)().cmd.gitEnabled)
            return;
        this._yargs.command({
            command: 'git',
            describe: 'execute git command',
            aliases: ['g'],
            builder: (y) => git_router_1.gitRouter.commands(y).demandCommand(1, 1).showHelpOnFail(false, 'Specify --help for available options').version(false),
            handler: async (argv) => {
                //return
            },
        });
    }
    _npmCommands() {
        if (!(0, config_1.config)().cmd.npmEnabled)
            return;
        this._yargs.command({
            command: 'npm',
            aliases: ['n'],
            describe: 'execute npm command',
            builder: (y) => npm_router_1.npmRouter.commands(y).demandCommand(1, 1).showHelpOnFail(false, 'Specify --help for available options').version(false),
            handler: async (argv) => {
                //return
            },
        });
    }
    _initCommands() {
        this._yargs.command({
            command: 'init',
            aliases: ['i'],
            describe: 'Create init file',
            handler: async (argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({ command: new init_config_1.InitConfig() }).execute();
            },
        });
    }
}
exports.CliRouter = CliRouter;
const cliRouterFactory = (...params) => new CliRouter(...params);
exports.cliRouterFactory = cliRouterFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3lhcmdzLXJvdXRlci9jbGktcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHVFQUFrRTtBQUNsRSx1RUFBa0U7QUFDbEUsK0RBQTBEO0FBQzFELG1FQUFxRTtBQUNyRSw0Q0FBd0M7QUFDeEMsa0RBQXlCO0FBRXpCLE1BQWEsU0FBUztJQUNELE1BQU0sQ0FBWTtJQUVsQixlQUFlLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBRTNELFlBQW1CLElBQWM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFBLGVBQUssRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBRU0sS0FBSyxDQUFDLFNBQVM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1FBRXhCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBRXBCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUV0QixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDaEMsQ0FBQztJQUVTLFdBQVc7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBRVMsaUJBQWlCO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsc0NBQXNDLENBQUMsQ0FBQTtJQUNwSCxDQUFDO0lBRVMsZUFBZTtRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGlEQUFpRCxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDN0YsQ0FBQztJQUVTLFlBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUEsZUFBTSxHQUFFLENBQUMsR0FBRyxDQUFDLFVBQVU7WUFBRSxPQUFNO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2xCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDZCxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNiLHNCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDeEgsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFTLEVBQUUsRUFBRTtnQkFDM0IsUUFBUTtZQUNWLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRVMsWUFBWTtRQUNwQixJQUFJLENBQUMsSUFBQSxlQUFNLEdBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVTtZQUFFLE9BQU07UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDbEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDZCxRQUFRLEVBQUUscUJBQXFCO1lBRS9CLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ2Isc0JBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLHNDQUFzQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN4SCxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQVMsRUFBRSxFQUFFO2dCQUMzQixRQUFRO1lBQ1YsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFUyxhQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2xCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixPQUFPLEVBQUUsS0FBSyxFQUFFLElBQVMsRUFBRSxFQUFFO2dCQUMzQixNQUFNLElBQUEseUNBQXNCLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSx3QkFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ3ZFLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUF6RUQsOEJBeUVDO0FBRU0sTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsTUFBK0MsRUFBYSxFQUFFLENBQUMsSUFBSSxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQTtBQUE5RyxRQUFBLGdCQUFnQixvQkFBOEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnaXRSb3V0ZXIgfSBmcm9tICdzcmMvY29udHJvbGxlci95YXJncy1yb3V0ZXIvZ2l0LXJvdXRlcidcbmltcG9ydCB7IG5wbVJvdXRlciB9IGZyb20gJ3NyYy9jb250cm9sbGVyL3lhcmdzLXJvdXRlci9ucG0tcm91dGVyJ1xuaW1wb3J0IHsgSW5pdENvbmZpZyB9IGZyb20gJ3NyYy9tb2RlbC9jb21tYW5kL2luaXQtY29uZmlnJ1xuaW1wb3J0IHsgdGVybWluYWxXcmFwcGVyRmFjdG9yeSB9IGZyb20gJ3NyYy9zZXJ2aWNlL3Rlcm1pbmFsLXdyYXBwZXInXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdzcmMvdXRpbC9jb25maWcnXG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MnXG5cbmV4cG9ydCBjbGFzcyBDbGlSb3V0ZXIge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3lhcmdzOiB5YXJncy5Bcmd2XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9nbG9iYWxDb21tYW5kcyA9IFsnZ2l0JywgJ25wbScsICdpbml0J11cblxuICBwdWJsaWMgY29uc3RydWN0b3IoYXJndjogc3RyaW5nW10pIHtcbiAgICB0aGlzLl95YXJncyA9IHlhcmdzKGFyZ3YpXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcm91dGVBcmd2KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3NldHVwVXNhZ2UoKVxuICAgIHRoaXMuX2hlbHBWZXJzaW9uQWxpYXMoKVxuXG4gICAgdGhpcy5fZ2l0Q29tbWFuZHMoKVxuICAgIHRoaXMuX25wbUNvbW1hbmRzKClcbiAgICB0aGlzLl9pbml0Q29tbWFuZHMoKVxuXG4gICAgdGhpcy5fZGVtYW5kQ29tbWFuZHMoKVxuXG4gICAgYXdhaXQgdGhpcy5feWFyZ3MucGFyc2VBc3luYygpXG4gIH1cblxuICBwcm90ZWN0ZWQgX3NldHVwVXNhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5feWFyZ3MudXNhZ2UoYCQwIDwke3RoaXMuX2dsb2JhbENvbW1hbmRzLmpvaW4oJ3wnKX0+IFtjb21tYW5kIG9wdGlvbnNdYClcbiAgfVxuXG4gIHByb3RlY3RlZCBfaGVscFZlcnNpb25BbGlhcygpOiB2b2lkIHtcbiAgICB0aGlzLl95YXJncy5hbGlhcygndmVyc2lvbicsICd2JykuYWxpYXMoJ2hlbHAnLCAnaCcpLnNob3dIZWxwT25GYWlsKGZhbHNlLCAnU3BlY2lmeSAtLWhlbHAgZm9yIGF2YWlsYWJsZSBvcHRpb25zJylcbiAgfVxuXG4gIHByb3RlY3RlZCBfZGVtYW5kQ29tbWFuZHMoKTogdm9pZCB7XG4gICAgdGhpcy5feWFyZ3MuZGVtYW5kQ29tbWFuZCgxLCAxLCAnWW91IG5lZWQgdG8gc2VsZWN0IG9uZSBjb21tYW5kIGJlZm9yZSBtb3Zpbmcgb24nKS5zdHJpY3QoKVxuICB9XG5cbiAgcHJvdGVjdGVkIF9naXRDb21tYW5kcygpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZygpLmNtZC5naXRFbmFibGVkKSByZXR1cm5cbiAgICB0aGlzLl95YXJncy5jb21tYW5kKHtcbiAgICAgIGNvbW1hbmQ6ICdnaXQnLFxuICAgICAgZGVzY3JpYmU6ICdleGVjdXRlIGdpdCBjb21tYW5kJyxcbiAgICAgIGFsaWFzZXM6IFsnZyddLFxuICAgICAgYnVpbGRlcjogKHkpID0+XG4gICAgICAgIGdpdFJvdXRlci5jb21tYW5kcyh5KS5kZW1hbmRDb21tYW5kKDEsIDEpLnNob3dIZWxwT25GYWlsKGZhbHNlLCAnU3BlY2lmeSAtLWhlbHAgZm9yIGF2YWlsYWJsZSBvcHRpb25zJykudmVyc2lvbihmYWxzZSksXG4gICAgICBoYW5kbGVyOiBhc3luYyAoYXJndjogYW55KSA9PiB7XG4gICAgICAgIC8vcmV0dXJuXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICBwcm90ZWN0ZWQgX25wbUNvbW1hbmRzKCk6IHZvaWQge1xuICAgIGlmICghY29uZmlnKCkuY21kLm5wbUVuYWJsZWQpIHJldHVyblxuICAgIHRoaXMuX3lhcmdzLmNvbW1hbmQoe1xuICAgICAgY29tbWFuZDogJ25wbScsXG4gICAgICBhbGlhc2VzOiBbJ24nXSxcbiAgICAgIGRlc2NyaWJlOiAnZXhlY3V0ZSBucG0gY29tbWFuZCcsXG5cbiAgICAgIGJ1aWxkZXI6ICh5KSA9PlxuICAgICAgICBucG1Sb3V0ZXIuY29tbWFuZHMoeSkuZGVtYW5kQ29tbWFuZCgxLCAxKS5zaG93SGVscE9uRmFpbChmYWxzZSwgJ1NwZWNpZnkgLS1oZWxwIGZvciBhdmFpbGFibGUgb3B0aW9ucycpLnZlcnNpb24oZmFsc2UpLFxuICAgICAgaGFuZGxlcjogYXN5bmMgKGFyZ3Y6IGFueSkgPT4ge1xuICAgICAgICAvL3JldHVyblxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgcHJvdGVjdGVkIF9pbml0Q29tbWFuZHMoKTogdm9pZCB7XG4gICAgdGhpcy5feWFyZ3MuY29tbWFuZCh7XG4gICAgICBjb21tYW5kOiAnaW5pdCcsXG4gICAgICBhbGlhc2VzOiBbJ2knXSxcbiAgICAgIGRlc2NyaWJlOiAnQ3JlYXRlIGluaXQgZmlsZScsXG4gICAgICBoYW5kbGVyOiBhc3luYyAoYXJndjogYW55KSA9PiB7XG4gICAgICAgIGF3YWl0IHRlcm1pbmFsV3JhcHBlckZhY3RvcnkoeyBjb21tYW5kOiBuZXcgSW5pdENvbmZpZygpIH0pLmV4ZWN1dGUoKVxuICAgICAgfSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjbGlSb3V0ZXJGYWN0b3J5ID0gKC4uLnBhcmFtczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBDbGlSb3V0ZXI+KTogQ2xpUm91dGVyID0+IG5ldyBDbGlSb3V0ZXIoLi4ucGFyYW1zKVxuIl19