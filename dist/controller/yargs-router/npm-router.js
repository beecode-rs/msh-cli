"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.npmRouter = void 0;
const npm_global_project_command_1 = require("src/model/command/project-command/npm-global-project-command");
const npm_install_project_command_1 = require("src/model/command/project-command/npm-install-project-command");
const project_command_1 = require("src/model/command/project-command/project-command");
const terminal_wrapper_1 = require("src/service/terminal-wrapper");
exports.npmRouter = {
    commands: (yargs) => {
        exports.npmRouter._install(yargs);
        exports.npmRouter._global(yargs);
        return yargs;
    },
    _install: (yargs) => {
        yargs.command({
            command: 'install',
            describe: 'execute npm i for all projects',
            aliases: ['i'],
            handler: async (argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({
                    command: (0, project_command_1.projectCommandFactory)({
                        command: new npm_install_project_command_1.NpmInstallProjectCommand(),
                    }),
                }).execute();
            },
        });
    },
    _global: (yargs) => {
        yargs.command({
            command: 'global',
            aliases: ['g'],
            describe: 'gather npm packages to global package.json (project root level)',
            handler: async (argv) => {
                await (0, terminal_wrapper_1.terminalWrapperFactory)({ command: (0, npm_global_project_command_1.npmGlobalProjectCommandFactory)() }).execute();
            },
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3lhcmdzLXJvdXRlci9ucG0tcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZHQUE2RztBQUM3RywrR0FBd0c7QUFDeEcsdUZBQXlGO0FBQ3pGLG1FQUFxRTtBQUd4RCxRQUFBLFNBQVMsR0FBRztJQUN2QixRQUFRLEVBQUUsQ0FBQyxLQUFpQixFQUFjLEVBQUU7UUFDMUMsaUJBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDekIsaUJBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDeEIsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBQ0QsUUFBUSxFQUFFLENBQUMsS0FBaUIsRUFBUSxFQUFFO1FBQ3BDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDWixPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLEVBQUUsZ0NBQWdDO1lBQzFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNkLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBUyxFQUFFLEVBQUU7Z0JBQzNCLE1BQU0sSUFBQSx5Q0FBc0IsRUFBQztvQkFDM0IsT0FBTyxFQUFFLElBQUEsdUNBQXFCLEVBQUM7d0JBQzdCLE9BQU8sRUFBRSxJQUFJLHNEQUF3QixFQUFFO3FCQUN4QyxDQUFDO2lCQUNILENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNkLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsT0FBTyxFQUFFLENBQUMsS0FBaUIsRUFBUSxFQUFFO1FBQ25DLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDWixPQUFPLEVBQUUsUUFBUTtZQUNqQixPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDZCxRQUFRLEVBQUUsaUVBQWlFO1lBQzNFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBUyxFQUFFLEVBQUU7Z0JBQzNCLE1BQU0sSUFBQSx5Q0FBc0IsRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFBLDJEQUE4QixHQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ3ZGLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5wbUdsb2JhbFByb2plY3RDb21tYW5kRmFjdG9yeSB9IGZyb20gJ3NyYy9tb2RlbC9jb21tYW5kL3Byb2plY3QtY29tbWFuZC9ucG0tZ2xvYmFsLXByb2plY3QtY29tbWFuZCdcbmltcG9ydCB7IE5wbUluc3RhbGxQcm9qZWN0Q29tbWFuZCB9IGZyb20gJ3NyYy9tb2RlbC9jb21tYW5kL3Byb2plY3QtY29tbWFuZC9ucG0taW5zdGFsbC1wcm9qZWN0LWNvbW1hbmQnXG5pbXBvcnQgeyBwcm9qZWN0Q29tbWFuZEZhY3RvcnkgfSBmcm9tICdzcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvcHJvamVjdC1jb21tYW5kJ1xuaW1wb3J0IHsgdGVybWluYWxXcmFwcGVyRmFjdG9yeSB9IGZyb20gJ3NyYy9zZXJ2aWNlL3Rlcm1pbmFsLXdyYXBwZXInXG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MnXG5cbmV4cG9ydCBjb25zdCBucG1Sb3V0ZXIgPSB7XG4gIGNvbW1hbmRzOiAoeWFyZ3M6IHlhcmdzLkFyZ3YpOiB5YXJncy5Bcmd2ID0+IHtcbiAgICBucG1Sb3V0ZXIuX2luc3RhbGwoeWFyZ3MpXG4gICAgbnBtUm91dGVyLl9nbG9iYWwoeWFyZ3MpXG4gICAgcmV0dXJuIHlhcmdzXG4gIH0sXG4gIF9pbnN0YWxsOiAoeWFyZ3M6IHlhcmdzLkFyZ3YpOiB2b2lkID0+IHtcbiAgICB5YXJncy5jb21tYW5kKHtcbiAgICAgIGNvbW1hbmQ6ICdpbnN0YWxsJyxcbiAgICAgIGRlc2NyaWJlOiAnZXhlY3V0ZSBucG0gaSBmb3IgYWxsIHByb2plY3RzJyxcbiAgICAgIGFsaWFzZXM6IFsnaSddLFxuICAgICAgaGFuZGxlcjogYXN5bmMgKGFyZ3Y6IGFueSkgPT4ge1xuICAgICAgICBhd2FpdCB0ZXJtaW5hbFdyYXBwZXJGYWN0b3J5KHtcbiAgICAgICAgICBjb21tYW5kOiBwcm9qZWN0Q29tbWFuZEZhY3Rvcnkoe1xuICAgICAgICAgICAgY29tbWFuZDogbmV3IE5wbUluc3RhbGxQcm9qZWN0Q29tbWFuZCgpLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KS5leGVjdXRlKClcbiAgICAgIH0sXG4gICAgfSlcbiAgfSxcbiAgX2dsb2JhbDogKHlhcmdzOiB5YXJncy5Bcmd2KTogdm9pZCA9PiB7XG4gICAgeWFyZ3MuY29tbWFuZCh7XG4gICAgICBjb21tYW5kOiAnZ2xvYmFsJyxcbiAgICAgIGFsaWFzZXM6IFsnZyddLFxuICAgICAgZGVzY3JpYmU6ICdnYXRoZXIgbnBtIHBhY2thZ2VzIHRvIGdsb2JhbCBwYWNrYWdlLmpzb24gKHByb2plY3Qgcm9vdCBsZXZlbCknLFxuICAgICAgaGFuZGxlcjogYXN5bmMgKGFyZ3Y6IGFueSkgPT4ge1xuICAgICAgICBhd2FpdCB0ZXJtaW5hbFdyYXBwZXJGYWN0b3J5KHsgY29tbWFuZDogbnBtR2xvYmFsUHJvamVjdENvbW1hbmRGYWN0b3J5KCkgfSkuZXhlY3V0ZSgpXG4gICAgICB9LFxuICAgIH0pXG4gIH0sXG59XG4iXX0=