"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliRouterFactory = exports.CliRouter = void 0;
const git_router_1 = require("../../controller/yargs-router/git-router");
const npm_router_1 = require("../../controller/yargs-router/npm-router");
const init_config_1 = require("../../model/command/init-config");
const terminal_wrapper_1 = require("../../service/terminal-wrapper");
const config_1 = require("../../util/config");
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
        if (!(0, config_1.config)().cmd.gitEnabled) {
            return;
        }
        this._yargs.command({
            aliases: ['g'],
            builder: (y) => new git_router_1.GitRouter()
                .commands(y)
                .demandCommand(1, 1)
                .showHelpOnFail(false, 'Specify --help for available options')
                .version(false),
            command: 'git',
            describe: 'execute git command',
            handler: async (_argv) => {
                //return
            },
        });
    }
    _npmCommands() {
        if (!(0, config_1.config)().cmd.npmEnabled) {
            return;
        }
        this._yargs.command({
            aliases: ['n'],
            builder: (y) => new npm_router_1.NpmRouter()
                .commands(y)
                .demandCommand(1, 1)
                .showHelpOnFail(false, 'Specify --help for available options')
                .version(false),
            command: 'npm',
            describe: 'execute npm command',
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
            handler: async (_argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({ command: new init_config_1.InitConfig() }).execute();
            },
        });
    }
}
exports.CliRouter = CliRouter;
const cliRouterFactory = (...params) => new CliRouter(...params);
exports.cliRouterFactory = cliRouterFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3lhcmdzLXJvdXRlci9jbGktcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHVFQUFrRTtBQUNsRSx1RUFBa0U7QUFDbEUsK0RBQTBEO0FBQzFELG1FQUFxRTtBQUNyRSw0Q0FBd0M7QUFDeEMsa0RBQXlCO0FBRXpCLE1BQWEsU0FBUztJQUNGLE1BQU0sQ0FBWTtJQUVyQyxZQUFZLElBQWM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFBLGVBQUssRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBRUQsS0FBSyxDQUFDLFNBQVM7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7UUFFeEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFFcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBRXRCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRVMsV0FBVztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFUyxpQkFBaUI7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxzQ0FBc0MsQ0FBQyxDQUFBO0lBQ25ILENBQUM7SUFFUyxlQUFlO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsaURBQWlELENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUM1RixDQUFDO0lBRVMsWUFBWTtRQUNyQixJQUFJLENBQUMsSUFBQSxlQUFNLEdBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQzdCLE9BQU07U0FDTjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ25CLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNkLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ2QsSUFBSSxzQkFBUyxFQUFFO2lCQUNiLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQ1gsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ25CLGNBQWMsQ0FBQyxLQUFLLEVBQUUsc0NBQXNDLENBQUM7aUJBQzdELE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDakIsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBVSxFQUFFLEVBQUU7Z0JBQzdCLFFBQVE7WUFDVCxDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVTLFlBQVk7UUFDckIsSUFBSSxDQUFDLElBQUEsZUFBTSxHQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUM3QixPQUFNO1NBQ047UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNuQixPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDZCxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNkLElBQUksc0JBQVMsRUFBRTtpQkFDYixRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNYLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQixjQUFjLENBQUMsS0FBSyxFQUFFLHNDQUFzQyxDQUFDO2lCQUM3RCxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxLQUFLO1lBRWQsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQVUsRUFBRSxFQUFFO2dCQUM3QixRQUFRO1lBQ1QsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFFUyxhQUFhO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ25CLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNkLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQVUsRUFBRSxFQUFFO2dCQUM3QixNQUFNLElBQUEseUNBQXNCLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSx3QkFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ3RFLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0NBQ0Q7QUFuRkQsOEJBbUZDO0FBRU0sTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsTUFBK0MsRUFBYSxFQUFFLENBQUMsSUFBSSxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQTtBQUE5RyxRQUFBLGdCQUFnQixvQkFBOEYifQ==