import { npmGlobalProjectCommandFactory } from '#src/model/command/project-command/npm-global-project-command';
import { NpmInstallProjectCommand } from '#src/model/command/project-command/npm-install-project-command';
import { projectCommandFactory } from '#src/model/command/project-command/project-command';
import { terminalWrapperFactory } from '#src/service/terminal-wrapper';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3lhcmdzLXJvdXRlci9ucG0tcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtEQUErRCxDQUFBO0FBQzlHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFBO0FBQ3pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFBO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFBO0FBRXRFLE1BQU0sT0FBTyxTQUFTO0lBQ3JCLFFBQVEsQ0FBQyxLQUFXO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUVuQixPQUFPLEtBQUssQ0FBQTtJQUNiLENBQUM7SUFFUyxRQUFRLENBQUMsS0FBVztRQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2IsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2QsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxFQUFFLGdDQUFnQztZQUMxQyw4REFBOEQ7WUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFVLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxzQkFBc0IsQ0FBQztvQkFDNUIsT0FBTyxFQUFFLHFCQUFxQixDQUFDO3dCQUM5QixPQUFPLEVBQUUsSUFBSSx3QkFBd0IsRUFBRTtxQkFDdkMsQ0FBQztpQkFDRixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDYixDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVTLE9BQU8sQ0FBQyxLQUFXO1FBQzVCLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDYixPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDZCxPQUFPLEVBQUUsUUFBUTtZQUNqQixRQUFRLEVBQUUsaUVBQWlFO1lBQzNFLDhEQUE4RDtZQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQVUsRUFBRSxFQUFFO2dCQUM3QixNQUFNLHNCQUFzQixDQUFDLEVBQUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ3RGLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIEFyZ3YgfSBmcm9tICd5YXJncydcblxuaW1wb3J0IHsgbnBtR2xvYmFsUHJvamVjdENvbW1hbmRGYWN0b3J5IH0gZnJvbSAnI3NyYy9tb2RlbC9jb21tYW5kL3Byb2plY3QtY29tbWFuZC9ucG0tZ2xvYmFsLXByb2plY3QtY29tbWFuZCdcbmltcG9ydCB7IE5wbUluc3RhbGxQcm9qZWN0Q29tbWFuZCB9IGZyb20gJyNzcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvbnBtLWluc3RhbGwtcHJvamVjdC1jb21tYW5kJ1xuaW1wb3J0IHsgcHJvamVjdENvbW1hbmRGYWN0b3J5IH0gZnJvbSAnI3NyYy9tb2RlbC9jb21tYW5kL3Byb2plY3QtY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQnXG5pbXBvcnQgeyB0ZXJtaW5hbFdyYXBwZXJGYWN0b3J5IH0gZnJvbSAnI3NyYy9zZXJ2aWNlL3Rlcm1pbmFsLXdyYXBwZXInXG5cbmV4cG9ydCBjbGFzcyBOcG1Sb3V0ZXIge1xuXHRjb21tYW5kcyh5YXJnczogQXJndik6IEFyZ3Yge1xuXHRcdHRoaXMuX2luc3RhbGwoeWFyZ3MpXG5cdFx0dGhpcy5fZ2xvYmFsKHlhcmdzKVxuXG5cdFx0cmV0dXJuIHlhcmdzXG5cdH1cblxuXHRwcm90ZWN0ZWQgX2luc3RhbGwoeWFyZ3M6IEFyZ3YpOiB2b2lkIHtcblx0XHR5YXJncy5jb21tYW5kKHtcblx0XHRcdGFsaWFzZXM6IFsnaSddLFxuXHRcdFx0Y29tbWFuZDogJ2luc3RhbGwnLFxuXHRcdFx0ZGVzY3JpYmU6ICdleGVjdXRlIG5wbSBpIGZvciBhbGwgcHJvamVjdHMnLFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdGhhbmRsZXI6IGFzeW5jIChfYXJndjogYW55KSA9PiB7XG5cdFx0XHRcdGF3YWl0IHRlcm1pbmFsV3JhcHBlckZhY3Rvcnkoe1xuXHRcdFx0XHRcdGNvbW1hbmQ6IHByb2plY3RDb21tYW5kRmFjdG9yeSh7XG5cdFx0XHRcdFx0XHRjb21tYW5kOiBuZXcgTnBtSW5zdGFsbFByb2plY3RDb21tYW5kKCksXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdH0pLmV4ZWN1dGUoKVxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0cHJvdGVjdGVkIF9nbG9iYWwoeWFyZ3M6IEFyZ3YpOiB2b2lkIHtcblx0XHR5YXJncy5jb21tYW5kKHtcblx0XHRcdGFsaWFzZXM6IFsnZyddLFxuXHRcdFx0Y29tbWFuZDogJ2dsb2JhbCcsXG5cdFx0XHRkZXNjcmliZTogJ2dhdGhlciBucG0gcGFja2FnZXMgdG8gZ2xvYmFsIHBhY2thZ2UuanNvbiAocHJvamVjdCByb290IGxldmVsKScsXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0aGFuZGxlcjogYXN5bmMgKF9hcmd2OiBhbnkpID0+IHtcblx0XHRcdFx0YXdhaXQgdGVybWluYWxXcmFwcGVyRmFjdG9yeSh7IGNvbW1hbmQ6IG5wbUdsb2JhbFByb2plY3RDb21tYW5kRmFjdG9yeSgpIH0pLmV4ZWN1dGUoKVxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG59XG4iXX0=