"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitRouter = void 0;
const git_clone_project_command_1 = require("src/model/command/project-command/git-clone-project-command");
const git_simple_project_command_1 = require("src/model/command/project-command/git-simple-project-command");
const git_tag_project_command_1 = require("src/model/command/project-command/git-tag-project-command");
const project_command_1 = require("src/model/command/project-command/project-command");
const terminal_wrapper_1 = require("src/service/terminal-wrapper");
exports.gitRouter = {
    commands: (yargs) => {
        exports.gitRouter._clone(yargs);
        exports.gitRouter._pull(yargs);
        exports.gitRouter._fetch(yargs);
        exports.gitRouter._status(yargs);
        exports.gitRouter._tag(yargs);
        return yargs;
    },
    _clone: (yargs) => {
        yargs.command({
            command: 'clone',
            describe: 'execute git clone',
            handler: async (argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({
                    command: (0, project_command_1.projectCommandFactory)({ command: new git_clone_project_command_1.GitCloneProjectCommand() }),
                }).execute();
            },
        });
    },
    _pull: (yargs) => {
        yargs.command({
            command: 'pull',
            describe: 'execute git pull',
            handler: async (argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({
                    command: (0, project_command_1.projectCommandFactory)({ command: new git_simple_project_command_1.GitSimpleProjectCommand({ gitSimpleCommand: git_simple_project_command_1.GitSimpleCommand.PULL }) }),
                }).execute();
            },
        });
    },
    _fetch: (yargs) => {
        yargs.command({
            command: 'fetch',
            describe: 'execute git fetch',
            handler: async (argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({
                    command: (0, project_command_1.projectCommandFactory)({ command: new git_simple_project_command_1.GitSimpleProjectCommand({ gitSimpleCommand: git_simple_project_command_1.GitSimpleCommand.FETCH }) }),
                }).execute();
            },
        });
    },
    _status: (yargs) => {
        yargs.command({
            command: 'status',
            describe: 'execute git status',
            handler: async (argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({
                    command: (0, project_command_1.projectCommandFactory)({ command: new git_simple_project_command_1.GitSimpleProjectCommand({ gitSimpleCommand: git_simple_project_command_1.GitSimpleCommand.STATUS }) }),
                }).execute();
            },
        });
    },
    _tag: (yargs) => {
        yargs.command({
            command: 'tag',
            describe: 'execute git tag',
            builder: (y) => {
                y.options('name', {
                    alias: 'n',
                    describe: 'filter tag by name (* is allowed)',
                    type: 'string',
                });
                return y;
            },
            handler: async (argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({
                    command: (0, project_command_1.projectCommandFactory)({ command: new git_tag_project_command_1.GitTagProjectCommand({ filterByName: argv.name }) }),
                }).execute();
            },
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3lhcmdzLXJvdXRlci9naXQtcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJHQUFvRztBQUNwRyw2R0FBd0g7QUFDeEgsdUdBQWdHO0FBQ2hHLHVGQUF5RjtBQUN6RixtRUFBcUU7QUFHeEQsUUFBQSxTQUFTLEdBQUc7SUFDdkIsUUFBUSxFQUFFLENBQUMsS0FBaUIsRUFBYyxFQUFFO1FBQzFDLGlCQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3ZCLGlCQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RCLGlCQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3ZCLGlCQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hCLGlCQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3JCLE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUNELE1BQU0sRUFBRSxDQUFDLEtBQWlCLEVBQVEsRUFBRTtRQUNsQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixPQUFPLEVBQUUsS0FBSyxFQUFFLElBQVMsRUFBRSxFQUFFO2dCQUMzQixNQUFNLElBQUEseUNBQXNCLEVBQUM7b0JBQzNCLE9BQU8sRUFBRSxJQUFBLHVDQUFxQixFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksa0RBQXNCLEVBQUUsRUFBRSxDQUFDO2lCQUMxRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDZCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUssRUFBRSxDQUFDLEtBQWlCLEVBQVEsRUFBRTtRQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1osT0FBTyxFQUFFLE1BQU07WUFDZixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBUyxFQUFFLEVBQUU7Z0JBQzNCLE1BQU0sSUFBQSx5Q0FBc0IsRUFBQztvQkFDM0IsT0FBTyxFQUFFLElBQUEsdUNBQXFCLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxvREFBdUIsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLDZDQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDdEgsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2QsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNLEVBQUUsQ0FBQyxLQUFpQixFQUFRLEVBQUU7UUFDbEMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNaLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFTLEVBQUUsRUFBRTtnQkFDM0IsTUFBTSxJQUFBLHlDQUFzQixFQUFDO29CQUMzQixPQUFPLEVBQUUsSUFBQSx1Q0FBcUIsRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLG9EQUF1QixDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsNkNBQWdCLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUN2SCxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDZCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE9BQU8sRUFBRSxDQUFDLEtBQWlCLEVBQVEsRUFBRTtRQUNuQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1osT0FBTyxFQUFFLFFBQVE7WUFDakIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixPQUFPLEVBQUUsS0FBSyxFQUFFLElBQVMsRUFBRSxFQUFFO2dCQUMzQixNQUFNLElBQUEseUNBQXNCLEVBQUM7b0JBQzNCLE9BQU8sRUFBRSxJQUFBLHVDQUFxQixFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksb0RBQXVCLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSw2Q0FBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ3hILENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNkLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsS0FBaUIsRUFBUSxFQUFFO1FBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDWixPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQ2hCLEtBQUssRUFBRSxHQUFHO29CQUNWLFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLElBQUksRUFBRSxRQUFRO2lCQUNmLENBQUMsQ0FBQTtnQkFDRixPQUFPLENBQUMsQ0FBQTtZQUNWLENBQUM7WUFDRCxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQVMsRUFBRSxFQUFFO2dCQUMzQixNQUFNLElBQUEseUNBQXNCLEVBQUM7b0JBQzNCLE9BQU8sRUFBRSxJQUFBLHVDQUFxQixFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksOENBQW9CLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDbkcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2QsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2l0Q2xvbmVQcm9qZWN0Q29tbWFuZCB9IGZyb20gJ3NyYy9tb2RlbC9jb21tYW5kL3Byb2plY3QtY29tbWFuZC9naXQtY2xvbmUtcHJvamVjdC1jb21tYW5kJ1xuaW1wb3J0IHsgR2l0U2ltcGxlQ29tbWFuZCwgR2l0U2ltcGxlUHJvamVjdENvbW1hbmQgfSBmcm9tICdzcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvZ2l0LXNpbXBsZS1wcm9qZWN0LWNvbW1hbmQnXG5pbXBvcnQgeyBHaXRUYWdQcm9qZWN0Q29tbWFuZCB9IGZyb20gJ3NyYy9tb2RlbC9jb21tYW5kL3Byb2plY3QtY29tbWFuZC9naXQtdGFnLXByb2plY3QtY29tbWFuZCdcbmltcG9ydCB7IHByb2plY3RDb21tYW5kRmFjdG9yeSB9IGZyb20gJ3NyYy9tb2RlbC9jb21tYW5kL3Byb2plY3QtY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQnXG5pbXBvcnQgeyB0ZXJtaW5hbFdyYXBwZXJGYWN0b3J5IH0gZnJvbSAnc3JjL3NlcnZpY2UvdGVybWluYWwtd3JhcHBlcidcbmltcG9ydCB5YXJncyBmcm9tICd5YXJncydcblxuZXhwb3J0IGNvbnN0IGdpdFJvdXRlciA9IHtcbiAgY29tbWFuZHM6ICh5YXJnczogeWFyZ3MuQXJndik6IHlhcmdzLkFyZ3YgPT4ge1xuICAgIGdpdFJvdXRlci5fY2xvbmUoeWFyZ3MpXG4gICAgZ2l0Um91dGVyLl9wdWxsKHlhcmdzKVxuICAgIGdpdFJvdXRlci5fZmV0Y2goeWFyZ3MpXG4gICAgZ2l0Um91dGVyLl9zdGF0dXMoeWFyZ3MpXG4gICAgZ2l0Um91dGVyLl90YWcoeWFyZ3MpXG4gICAgcmV0dXJuIHlhcmdzXG4gIH0sXG4gIF9jbG9uZTogKHlhcmdzOiB5YXJncy5Bcmd2KTogdm9pZCA9PiB7XG4gICAgeWFyZ3MuY29tbWFuZCh7XG4gICAgICBjb21tYW5kOiAnY2xvbmUnLFxuICAgICAgZGVzY3JpYmU6ICdleGVjdXRlIGdpdCBjbG9uZScsXG4gICAgICBoYW5kbGVyOiBhc3luYyAoYXJndjogYW55KSA9PiB7XG4gICAgICAgIGF3YWl0IHRlcm1pbmFsV3JhcHBlckZhY3Rvcnkoe1xuICAgICAgICAgIGNvbW1hbmQ6IHByb2plY3RDb21tYW5kRmFjdG9yeSh7IGNvbW1hbmQ6IG5ldyBHaXRDbG9uZVByb2plY3RDb21tYW5kKCkgfSksXG4gICAgICAgIH0pLmV4ZWN1dGUoKVxuICAgICAgfSxcbiAgICB9KVxuICB9LFxuICBfcHVsbDogKHlhcmdzOiB5YXJncy5Bcmd2KTogdm9pZCA9PiB7XG4gICAgeWFyZ3MuY29tbWFuZCh7XG4gICAgICBjb21tYW5kOiAncHVsbCcsXG4gICAgICBkZXNjcmliZTogJ2V4ZWN1dGUgZ2l0IHB1bGwnLFxuICAgICAgaGFuZGxlcjogYXN5bmMgKGFyZ3Y6IGFueSkgPT4ge1xuICAgICAgICBhd2FpdCB0ZXJtaW5hbFdyYXBwZXJGYWN0b3J5KHtcbiAgICAgICAgICBjb21tYW5kOiBwcm9qZWN0Q29tbWFuZEZhY3RvcnkoeyBjb21tYW5kOiBuZXcgR2l0U2ltcGxlUHJvamVjdENvbW1hbmQoeyBnaXRTaW1wbGVDb21tYW5kOiBHaXRTaW1wbGVDb21tYW5kLlBVTEwgfSkgfSksXG4gICAgICAgIH0pLmV4ZWN1dGUoKVxuICAgICAgfSxcbiAgICB9KVxuICB9LFxuICBfZmV0Y2g6ICh5YXJnczogeWFyZ3MuQXJndik6IHZvaWQgPT4ge1xuICAgIHlhcmdzLmNvbW1hbmQoe1xuICAgICAgY29tbWFuZDogJ2ZldGNoJyxcbiAgICAgIGRlc2NyaWJlOiAnZXhlY3V0ZSBnaXQgZmV0Y2gnLFxuICAgICAgaGFuZGxlcjogYXN5bmMgKGFyZ3Y6IGFueSkgPT4ge1xuICAgICAgICBhd2FpdCB0ZXJtaW5hbFdyYXBwZXJGYWN0b3J5KHtcbiAgICAgICAgICBjb21tYW5kOiBwcm9qZWN0Q29tbWFuZEZhY3RvcnkoeyBjb21tYW5kOiBuZXcgR2l0U2ltcGxlUHJvamVjdENvbW1hbmQoeyBnaXRTaW1wbGVDb21tYW5kOiBHaXRTaW1wbGVDb21tYW5kLkZFVENIIH0pIH0pLFxuICAgICAgICB9KS5leGVjdXRlKClcbiAgICAgIH0sXG4gICAgfSlcbiAgfSxcbiAgX3N0YXR1czogKHlhcmdzOiB5YXJncy5Bcmd2KTogdm9pZCA9PiB7XG4gICAgeWFyZ3MuY29tbWFuZCh7XG4gICAgICBjb21tYW5kOiAnc3RhdHVzJyxcbiAgICAgIGRlc2NyaWJlOiAnZXhlY3V0ZSBnaXQgc3RhdHVzJyxcbiAgICAgIGhhbmRsZXI6IGFzeW5jIChhcmd2OiBhbnkpID0+IHtcbiAgICAgICAgYXdhaXQgdGVybWluYWxXcmFwcGVyRmFjdG9yeSh7XG4gICAgICAgICAgY29tbWFuZDogcHJvamVjdENvbW1hbmRGYWN0b3J5KHsgY29tbWFuZDogbmV3IEdpdFNpbXBsZVByb2plY3RDb21tYW5kKHsgZ2l0U2ltcGxlQ29tbWFuZDogR2l0U2ltcGxlQ29tbWFuZC5TVEFUVVMgfSkgfSksXG4gICAgICAgIH0pLmV4ZWN1dGUoKVxuICAgICAgfSxcbiAgICB9KVxuICB9LFxuICBfdGFnOiAoeWFyZ3M6IHlhcmdzLkFyZ3YpOiB2b2lkID0+IHtcbiAgICB5YXJncy5jb21tYW5kKHtcbiAgICAgIGNvbW1hbmQ6ICd0YWcnLFxuICAgICAgZGVzY3JpYmU6ICdleGVjdXRlIGdpdCB0YWcnLFxuICAgICAgYnVpbGRlcjogKHkpID0+IHtcbiAgICAgICAgeS5vcHRpb25zKCduYW1lJywge1xuICAgICAgICAgIGFsaWFzOiAnbicsXG4gICAgICAgICAgZGVzY3JpYmU6ICdmaWx0ZXIgdGFnIGJ5IG5hbWUgKCogaXMgYWxsb3dlZCknLFxuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4geVxuICAgICAgfSxcbiAgICAgIGhhbmRsZXI6IGFzeW5jIChhcmd2OiBhbnkpID0+IHtcbiAgICAgICAgYXdhaXQgdGVybWluYWxXcmFwcGVyRmFjdG9yeSh7XG4gICAgICAgICAgY29tbWFuZDogcHJvamVjdENvbW1hbmRGYWN0b3J5KHsgY29tbWFuZDogbmV3IEdpdFRhZ1Byb2plY3RDb21tYW5kKHsgZmlsdGVyQnlOYW1lOiBhcmd2Lm5hbWUgfSkgfSksXG4gICAgICAgIH0pLmV4ZWN1dGUoKVxuICAgICAgfSxcbiAgICB9KVxuICB9LFxufVxuIl19