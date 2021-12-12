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
        this._yargs.usage(`$0 <cmd> [command options]`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3lhcmdzLXJvdXRlci9jbGktcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHVFQUFrRTtBQUNsRSx1RUFBa0U7QUFDbEUsK0RBQTBEO0FBQzFELG1FQUFxRTtBQUNyRSw0Q0FBd0M7QUFDeEMsa0RBQXlCO0FBRXpCLE1BQWEsU0FBUztJQUNELE1BQU0sQ0FBWTtJQUVyQyxZQUFtQixJQUFjO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBQSxlQUFLLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVNLEtBQUssQ0FBQyxTQUFTO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtRQUV4QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUVwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFFdEIsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFUyxXQUFXO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUE7SUFDakQsQ0FBQztJQUVTLGlCQUFpQjtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLHNDQUFzQyxDQUFDLENBQUE7SUFDcEgsQ0FBQztJQUVTLGVBQWU7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxpREFBaUQsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQzdGLENBQUM7SUFFUyxZQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFBLGVBQU0sR0FBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVO1lBQUUsT0FBTTtRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNsQixPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FDYixzQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsc0NBQXNDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3hILE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBUyxFQUFFLEVBQUU7Z0JBQzNCLFFBQVE7WUFDVixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVTLFlBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUEsZUFBTSxHQUFFLENBQUMsR0FBRyxDQUFDLFVBQVU7WUFBRSxPQUFNO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2xCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2QsUUFBUSxFQUFFLHFCQUFxQjtZQUUvQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNiLHNCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDeEgsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFTLEVBQUUsRUFBRTtnQkFDM0IsUUFBUTtZQUNWLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRVMsYUFBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNsQixPQUFPLEVBQUUsTUFBTTtZQUNmLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNkLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFTLEVBQUUsRUFBRTtnQkFDM0IsTUFBTSxJQUFBLHlDQUFzQixFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksd0JBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUN2RSxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBdkVELDhCQXVFQztBQUVNLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLE1BQStDLEVBQWEsRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUE7QUFBOUcsUUFBQSxnQkFBZ0Isb0JBQThGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2l0Um91dGVyIH0gZnJvbSAnc3JjL2NvbnRyb2xsZXIveWFyZ3Mtcm91dGVyL2dpdC1yb3V0ZXInXG5pbXBvcnQgeyBucG1Sb3V0ZXIgfSBmcm9tICdzcmMvY29udHJvbGxlci95YXJncy1yb3V0ZXIvbnBtLXJvdXRlcidcbmltcG9ydCB7IEluaXRDb25maWcgfSBmcm9tICdzcmMvbW9kZWwvY29tbWFuZC9pbml0LWNvbmZpZydcbmltcG9ydCB7IHRlcm1pbmFsV3JhcHBlckZhY3RvcnkgfSBmcm9tICdzcmMvc2VydmljZS90ZXJtaW5hbC13cmFwcGVyJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuaW1wb3J0IHlhcmdzIGZyb20gJ3lhcmdzJ1xuXG5leHBvcnQgY2xhc3MgQ2xpUm91dGVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF95YXJnczogeWFyZ3MuQXJndlxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihhcmd2OiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3lhcmdzID0geWFyZ3MoYXJndilcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyByb3V0ZUFyZ3YoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fc2V0dXBVc2FnZSgpXG4gICAgdGhpcy5faGVscFZlcnNpb25BbGlhcygpXG5cbiAgICB0aGlzLl9naXRDb21tYW5kcygpXG4gICAgdGhpcy5fbnBtQ29tbWFuZHMoKVxuICAgIHRoaXMuX2luaXRDb21tYW5kcygpXG5cbiAgICB0aGlzLl9kZW1hbmRDb21tYW5kcygpXG5cbiAgICBhd2FpdCB0aGlzLl95YXJncy5wYXJzZUFzeW5jKClcbiAgfVxuXG4gIHByb3RlY3RlZCBfc2V0dXBVc2FnZSgpOiB2b2lkIHtcbiAgICB0aGlzLl95YXJncy51c2FnZShgJDAgPGNtZD4gW2NvbW1hbmQgb3B0aW9uc11gKVxuICB9XG5cbiAgcHJvdGVjdGVkIF9oZWxwVmVyc2lvbkFsaWFzKCk6IHZvaWQge1xuICAgIHRoaXMuX3lhcmdzLmFsaWFzKCd2ZXJzaW9uJywgJ3YnKS5hbGlhcygnaGVscCcsICdoJykuc2hvd0hlbHBPbkZhaWwoZmFsc2UsICdTcGVjaWZ5IC0taGVscCBmb3IgYXZhaWxhYmxlIG9wdGlvbnMnKVxuICB9XG5cbiAgcHJvdGVjdGVkIF9kZW1hbmRDb21tYW5kcygpOiB2b2lkIHtcbiAgICB0aGlzLl95YXJncy5kZW1hbmRDb21tYW5kKDEsIDEsICdZb3UgbmVlZCB0byBzZWxlY3Qgb25lIGNvbW1hbmQgYmVmb3JlIG1vdmluZyBvbicpLnN0cmljdCgpXG4gIH1cblxuICBwcm90ZWN0ZWQgX2dpdENvbW1hbmRzKCk6IHZvaWQge1xuICAgIGlmICghY29uZmlnKCkuY21kLmdpdEVuYWJsZWQpIHJldHVyblxuICAgIHRoaXMuX3lhcmdzLmNvbW1hbmQoe1xuICAgICAgY29tbWFuZDogJ2dpdCcsXG4gICAgICBkZXNjcmliZTogJ2V4ZWN1dGUgZ2l0IGNvbW1hbmQnLFxuICAgICAgYWxpYXNlczogWydnJ10sXG4gICAgICBidWlsZGVyOiAoeSkgPT5cbiAgICAgICAgZ2l0Um91dGVyLmNvbW1hbmRzKHkpLmRlbWFuZENvbW1hbmQoMSwgMSkuc2hvd0hlbHBPbkZhaWwoZmFsc2UsICdTcGVjaWZ5IC0taGVscCBmb3IgYXZhaWxhYmxlIG9wdGlvbnMnKS52ZXJzaW9uKGZhbHNlKSxcbiAgICAgIGhhbmRsZXI6IGFzeW5jIChhcmd2OiBhbnkpID0+IHtcbiAgICAgICAgLy9yZXR1cm5cbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG4gIHByb3RlY3RlZCBfbnBtQ29tbWFuZHMoKTogdm9pZCB7XG4gICAgaWYgKCFjb25maWcoKS5jbWQubnBtRW5hYmxlZCkgcmV0dXJuXG4gICAgdGhpcy5feWFyZ3MuY29tbWFuZCh7XG4gICAgICBjb21tYW5kOiAnbnBtJyxcbiAgICAgIGFsaWFzZXM6IFsnbiddLFxuICAgICAgZGVzY3JpYmU6ICdleGVjdXRlIG5wbSBjb21tYW5kJyxcblxuICAgICAgYnVpbGRlcjogKHkpID0+XG4gICAgICAgIG5wbVJvdXRlci5jb21tYW5kcyh5KS5kZW1hbmRDb21tYW5kKDEsIDEpLnNob3dIZWxwT25GYWlsKGZhbHNlLCAnU3BlY2lmeSAtLWhlbHAgZm9yIGF2YWlsYWJsZSBvcHRpb25zJykudmVyc2lvbihmYWxzZSksXG4gICAgICBoYW5kbGVyOiBhc3luYyAoYXJndjogYW55KSA9PiB7XG4gICAgICAgIC8vcmV0dXJuXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICBwcm90ZWN0ZWQgX2luaXRDb21tYW5kcygpOiB2b2lkIHtcbiAgICB0aGlzLl95YXJncy5jb21tYW5kKHtcbiAgICAgIGNvbW1hbmQ6ICdpbml0JyxcbiAgICAgIGFsaWFzZXM6IFsnaSddLFxuICAgICAgZGVzY3JpYmU6ICdDcmVhdGUgaW5pdCBmaWxlJyxcbiAgICAgIGhhbmRsZXI6IGFzeW5jIChhcmd2OiBhbnkpID0+IHtcbiAgICAgICAgYXdhaXQgdGVybWluYWxXcmFwcGVyRmFjdG9yeSh7IGNvbW1hbmQ6IG5ldyBJbml0Q29uZmlnKCkgfSkuZXhlY3V0ZSgpXG4gICAgICB9LFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNsaVJvdXRlckZhY3RvcnkgPSAoLi4ucGFyYW1zOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIENsaVJvdXRlcj4pOiBDbGlSb3V0ZXIgPT4gbmV3IENsaVJvdXRlciguLi5wYXJhbXMpXG4iXX0=