import { npmGlobalProjectCommandFactory } from '../../model/command/project-command/npm-global-project-command.js';
import { NpmInstallProjectCommand } from '../../model/command/project-command/npm-install-project-command.js';
import { projectCommandFactory } from '../../model/command/project-command/project-command.js';
import { terminalWrapperFactory } from '../../service/terminal-wrapper.js';
export class NpmRouter {
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handler: async (_argv) => {
                await terminalWrapperFactory({
                    command: projectCommandFactory({
                        command: new NpmInstallProjectCommand(),
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handler: async (_argv) => {
                await terminalWrapperFactory({ command: npmGlobalProjectCommandFactory() }).execute();
            },
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3lhcmdzLXJvdXRlci9ucG0tcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtEQUErRCxDQUFBO0FBQzlHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFBO0FBQ3pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFBO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFBO0FBRXRFLE1BQU0sT0FBTyxTQUFTO0lBQ3JCLFFBQVEsQ0FBQyxLQUFXO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUVuQixPQUFPLEtBQUssQ0FBQTtJQUNiLENBQUM7SUFFUyxRQUFRLENBQUMsS0FBVztRQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2IsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2QsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxFQUFFLGdDQUFnQztZQUMxQyw4REFBOEQ7WUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFVLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxzQkFBc0IsQ0FBQztvQkFDNUIsT0FBTyxFQUFFLHFCQUFxQixDQUFDO3dCQUM5QixPQUFPLEVBQUUsSUFBSSx3QkFBd0IsRUFBRTtxQkFDdkMsQ0FBQztpQkFDRixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDYixDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVTLE9BQU8sQ0FBQyxLQUFXO1FBQzVCLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDYixPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDZCxPQUFPLEVBQUUsUUFBUTtZQUNqQixRQUFRLEVBQUUsaUVBQWlFO1lBQzNFLDhEQUE4RDtZQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQVUsRUFBRSxFQUFFO2dCQUM3QixNQUFNLHNCQUFzQixDQUFDLEVBQUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ3RGLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcmd2IH0gZnJvbSAneWFyZ3MnXG5cbmltcG9ydCB7IG5wbUdsb2JhbFByb2plY3RDb21tYW5kRmFjdG9yeSB9IGZyb20gJyNzcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvbnBtLWdsb2JhbC1wcm9qZWN0LWNvbW1hbmQnXG5pbXBvcnQgeyBOcG1JbnN0YWxsUHJvamVjdENvbW1hbmQgfSBmcm9tICcjc3JjL21vZGVsL2NvbW1hbmQvcHJvamVjdC1jb21tYW5kL25wbS1pbnN0YWxsLXByb2plY3QtY29tbWFuZCdcbmltcG9ydCB7IHByb2plY3RDb21tYW5kRmFjdG9yeSB9IGZyb20gJyNzcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvcHJvamVjdC1jb21tYW5kJ1xuaW1wb3J0IHsgdGVybWluYWxXcmFwcGVyRmFjdG9yeSB9IGZyb20gJyNzcmMvc2VydmljZS90ZXJtaW5hbC13cmFwcGVyJ1xuXG5leHBvcnQgY2xhc3MgTnBtUm91dGVyIHtcblx0Y29tbWFuZHMoeWFyZ3M6IEFyZ3YpOiBBcmd2IHtcblx0XHR0aGlzLl9pbnN0YWxsKHlhcmdzKVxuXHRcdHRoaXMuX2dsb2JhbCh5YXJncylcblxuXHRcdHJldHVybiB5YXJnc1xuXHR9XG5cblx0cHJvdGVjdGVkIF9pbnN0YWxsKHlhcmdzOiBBcmd2KTogdm9pZCB7XG5cdFx0eWFyZ3MuY29tbWFuZCh7XG5cdFx0XHRhbGlhc2VzOiBbJ2knXSxcblx0XHRcdGNvbW1hbmQ6ICdpbnN0YWxsJyxcblx0XHRcdGRlc2NyaWJlOiAnZXhlY3V0ZSBucG0gaSBmb3IgYWxsIHByb2plY3RzJyxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRoYW5kbGVyOiBhc3luYyAoX2FyZ3Y6IGFueSkgPT4ge1xuXHRcdFx0XHRhd2FpdCB0ZXJtaW5hbFdyYXBwZXJGYWN0b3J5KHtcblx0XHRcdFx0XHRjb21tYW5kOiBwcm9qZWN0Q29tbWFuZEZhY3Rvcnkoe1xuXHRcdFx0XHRcdFx0Y29tbWFuZDogbmV3IE5wbUluc3RhbGxQcm9qZWN0Q29tbWFuZCgpLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHR9KS5leGVjdXRlKClcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdHByb3RlY3RlZCBfZ2xvYmFsKHlhcmdzOiBBcmd2KTogdm9pZCB7XG5cdFx0eWFyZ3MuY29tbWFuZCh7XG5cdFx0XHRhbGlhc2VzOiBbJ2cnXSxcblx0XHRcdGNvbW1hbmQ6ICdnbG9iYWwnLFxuXHRcdFx0ZGVzY3JpYmU6ICdnYXRoZXIgbnBtIHBhY2thZ2VzIHRvIGdsb2JhbCBwYWNrYWdlLmpzb24gKHByb2plY3Qgcm9vdCBsZXZlbCknLFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdGhhbmRsZXI6IGFzeW5jIChfYXJndjogYW55KSA9PiB7XG5cdFx0XHRcdGF3YWl0IHRlcm1pbmFsV3JhcHBlckZhY3RvcnkoeyBjb21tYW5kOiBucG1HbG9iYWxQcm9qZWN0Q29tbWFuZEZhY3RvcnkoKSB9KS5leGVjdXRlKClcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxufVxuIl19