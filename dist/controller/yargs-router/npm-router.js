"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmRouter = void 0;
const npm_global_project_command_1 = require("../../model/command/project-command/npm-global-project-command");
const npm_install_project_command_1 = require("../../model/command/project-command/npm-install-project-command");
const project_command_1 = require("../../model/command/project-command/project-command");
const terminal_wrapper_1 = require("../../service/terminal-wrapper");
class NpmRouter {
    commands(yargs) {
        this._install(yargs);
        this._global(yargs);
        return yargs;
    }
    _install(yargs) {
        yargs.command({
            aliases: ['i'],
            command: 'install',
            describe: 'execute npm i for all projects',
            handler: async (_argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({
                    command: (0, project_command_1.projectCommandFactory)({
                        command: new npm_install_project_command_1.NpmInstallProjectCommand(),
                    }),
                }).execute();
            },
        });
    }
    _global(yargs) {
        yargs.command({
            aliases: ['g'],
            command: 'global',
            describe: 'gather npm packages to global package.json (project root level)',
            handler: async (_argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({ command: (0, npm_global_project_command_1.npmGlobalProjectCommandFactory)() }).execute();
            },
        });
    }
}
exports.NpmRouter = NpmRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3lhcmdzLXJvdXRlci9ucG0tcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZHQUE2RztBQUM3RywrR0FBd0c7QUFDeEcsdUZBQXlGO0FBQ3pGLG1FQUFxRTtBQUdyRSxNQUFhLFNBQVM7SUFDckIsUUFBUSxDQUFDLEtBQWlCO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUVuQixPQUFPLEtBQUssQ0FBQTtJQUNiLENBQUM7SUFFUyxRQUFRLENBQUMsS0FBaUI7UUFDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNiLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNkLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsRUFBRSxnQ0FBZ0M7WUFDMUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFVLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxJQUFBLHlDQUFzQixFQUFDO29CQUM1QixPQUFPLEVBQUUsSUFBQSx1Q0FBcUIsRUFBQzt3QkFDOUIsT0FBTyxFQUFFLElBQUksc0RBQXdCLEVBQUU7cUJBQ3ZDLENBQUM7aUJBQ0YsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2IsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFFUyxPQUFPLENBQUMsS0FBaUI7UUFDbEMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNiLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNkLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFFBQVEsRUFBRSxpRUFBaUU7WUFDM0UsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFVLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxJQUFBLHlDQUFzQixFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUEsMkRBQThCLEdBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDdEYsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7Q0FDRDtBQWpDRCw4QkFpQ0MifQ==