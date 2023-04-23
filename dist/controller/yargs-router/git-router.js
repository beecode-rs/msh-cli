"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitRouter = void 0;
const git_clone_project_command_1 = require("../../model/command/project-command/git-clone-project-command");
const git_simple_project_command_1 = require("../../model/command/project-command/git-simple-project-command");
const git_tag_project_command_1 = require("../../model/command/project-command/git-tag-project-command");
const project_command_1 = require("../../model/command/project-command/project-command");
const terminal_wrapper_1 = require("../../service/terminal-wrapper");
class GitRouter {
    _clone(yargs) {
        yargs.command({
            command: 'clone',
            describe: 'execute git clone',
            handler: async (_argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({
                    command: (0, project_command_1.projectCommandFactory)({ command: new git_clone_project_command_1.GitCloneProjectCommand() }),
                }).execute();
            },
        });
    }
    _fetch(yargs) {
        yargs.command({
            command: 'fetch',
            describe: 'execute git fetch',
            handler: async (_argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({
                    command: (0, project_command_1.projectCommandFactory)({ command: new git_simple_project_command_1.GitSimpleProjectCommand({ gitSimpleCommand: git_simple_project_command_1.GitSimpleCommand.FETCH }) }),
                }).execute();
            },
        });
    }
    _pull(yargs) {
        yargs.command({
            command: 'pull',
            describe: 'execute git pull',
            handler: async (_argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({
                    command: (0, project_command_1.projectCommandFactory)({ command: new git_simple_project_command_1.GitSimpleProjectCommand({ gitSimpleCommand: git_simple_project_command_1.GitSimpleCommand.PULL }) }),
                }).execute();
            },
        });
    }
    _status(yargs) {
        yargs.command({
            command: 'status',
            describe: 'execute git status',
            handler: async (_argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({
                    command: (0, project_command_1.projectCommandFactory)({ command: new git_simple_project_command_1.GitSimpleProjectCommand({ gitSimpleCommand: git_simple_project_command_1.GitSimpleCommand.STATUS }) }),
                }).execute();
            },
        });
    }
    _tag(yargs) {
        yargs.command({
            builder: (y) => {
                y.options('name', {
                    alias: 'n',
                    describe: 'filter tag by name (* is allowed)',
                    type: 'string',
                });
                return y;
            },
            command: 'tag',
            describe: 'execute git tag',
            handler: async (argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({
                    command: (0, project_command_1.projectCommandFactory)({ command: new git_tag_project_command_1.GitTagProjectCommand({ filterByName: argv.name }) }),
                }).execute();
            },
        });
    }
    commands(yargs) {
        this._clone(yargs);
        this._pull(yargs);
        this._fetch(yargs);
        this._status(yargs);
        this._tag(yargs);
        return yargs;
    }
}
exports.GitRouter = GitRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3lhcmdzLXJvdXRlci9naXQtcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJHQUFvRztBQUNwRyw2R0FBd0g7QUFDeEgsdUdBQWdHO0FBQ2hHLHVGQUF5RjtBQUN6RixtRUFBcUU7QUFHckUsTUFBYSxTQUFTO0lBQ1gsTUFBTSxDQUFDLEtBQWlCO1FBQ2pDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDYixPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBVSxFQUFFLEVBQUU7Z0JBQzdCLE1BQU0sSUFBQSx5Q0FBc0IsRUFBQztvQkFDNUIsT0FBTyxFQUFFLElBQUEsdUNBQXFCLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxrREFBc0IsRUFBRSxFQUFFLENBQUM7aUJBQ3pFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNiLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRVMsTUFBTSxDQUFDLEtBQWlCO1FBQ2pDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDYixPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBVSxFQUFFLEVBQUU7Z0JBQzdCLE1BQU0sSUFBQSx5Q0FBc0IsRUFBQztvQkFDNUIsT0FBTyxFQUFFLElBQUEsdUNBQXFCLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxvREFBdUIsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLDZDQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDdEgsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2IsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFFUyxLQUFLLENBQUMsS0FBaUI7UUFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNiLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQVUsRUFBRSxFQUFFO2dCQUM3QixNQUFNLElBQUEseUNBQXNCLEVBQUM7b0JBQzVCLE9BQU8sRUFBRSxJQUFBLHVDQUFxQixFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksb0RBQXVCLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSw2Q0FBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ3JILENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNiLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRVMsT0FBTyxDQUFDLEtBQWlCO1FBQ2xDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDYixPQUFPLEVBQUUsUUFBUTtZQUNqQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBVSxFQUFFLEVBQUU7Z0JBQzdCLE1BQU0sSUFBQSx5Q0FBc0IsRUFBQztvQkFDNUIsT0FBTyxFQUFFLElBQUEsdUNBQXFCLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxvREFBdUIsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLDZDQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDdkgsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2IsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFFUyxJQUFJLENBQUMsS0FBaUI7UUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNiLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNkLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO29CQUNqQixLQUFLLEVBQUUsR0FBRztvQkFDVixRQUFRLEVBQUUsbUNBQW1DO29CQUM3QyxJQUFJLEVBQUUsUUFBUTtpQkFDZCxDQUFDLENBQUE7Z0JBRUYsT0FBTyxDQUFDLENBQUE7WUFDVCxDQUFDO1lBQ0QsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBUyxFQUFFLEVBQUU7Z0JBQzVCLE1BQU0sSUFBQSx5Q0FBc0IsRUFBQztvQkFDNUIsT0FBTyxFQUFFLElBQUEsdUNBQXFCLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSw4Q0FBb0IsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNsRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDYixDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFpQjtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFaEIsT0FBTyxLQUFLLENBQUE7SUFDYixDQUFDO0NBQ0Q7QUEvRUQsOEJBK0VDIn0=