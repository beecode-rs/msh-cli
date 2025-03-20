import { GitCloneProjectCommand } from '#src/model/command/project-command/git-clone-project-command';
import { GitSimpleCommand, GitSimpleProjectCommand } from '#src/model/command/project-command/git-simple-project-command';
import { GitTagProjectCommand } from '#src/model/command/project-command/git-tag-project-command';
import { projectCommandFactory } from '#src/model/command/project-command/project-command';
import { terminalWrapperFactory } from '#src/service/terminal-wrapper';
export class GitRouter {
    _clone(yargs) {
        yargs.command({
            command: 'clone',
            describe: 'execute git clone',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handler: async (_argv) => {
                await terminalWrapperFactory({
                    command: projectCommandFactory({ command: new GitCloneProjectCommand() }),
                }).execute();
            },
        });
    }
    _fetch(yargs) {
        yargs.command({
            command: 'fetch',
            describe: 'execute git fetch',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handler: async (_argv) => {
                await terminalWrapperFactory({
                    command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.FETCH }) }),
                }).execute();
            },
        });
    }
    _pull(yargs) {
        yargs.command({
            command: 'pull',
            describe: 'execute git pull',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handler: async (_argv) => {
                await terminalWrapperFactory({
                    command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.PULL }) }),
                }).execute();
            },
        });
    }
    _status(yargs) {
        yargs.command({
            command: 'status',
            describe: 'execute git status',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handler: async (_argv) => {
                await terminalWrapperFactory({
                    command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.STATUS }) }),
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handler: async (argv) => {
                await terminalWrapperFactory({
                    command: projectCommandFactory({ command: new GitTagProjectCommand({ filterByName: argv.name }) }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3lhcmdzLXJvdXRlci9naXQtcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFBO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtEQUErRCxDQUFBO0FBQ3pILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDREQUE0RCxDQUFBO0FBQ2pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFBO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFBO0FBRXRFLE1BQU0sT0FBTyxTQUFTO0lBQ1gsTUFBTSxDQUFDLEtBQVc7UUFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNiLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsOERBQThEO1lBQzlELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBVSxFQUFFLEVBQUU7Z0JBQzdCLE1BQU0sc0JBQXNCLENBQUM7b0JBQzVCLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLHNCQUFzQixFQUFFLEVBQUUsQ0FBQztpQkFDekUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2IsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFFUyxNQUFNLENBQUMsS0FBVztRQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2IsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3Qiw4REFBOEQ7WUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFVLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxzQkFBc0IsQ0FBQztvQkFDNUIsT0FBTyxFQUFFLHFCQUFxQixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksdUJBQXVCLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ3RILENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNiLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRVMsS0FBSyxDQUFDLEtBQVc7UUFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNiLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLGtCQUFrQjtZQUM1Qiw4REFBOEQ7WUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFVLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxzQkFBc0IsQ0FBQztvQkFDNUIsT0FBTyxFQUFFLHFCQUFxQixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksdUJBQXVCLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ3JILENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNiLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRVMsT0FBTyxDQUFDLEtBQVc7UUFDNUIsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNiLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsOERBQThEO1lBQzlELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBVSxFQUFFLEVBQUU7Z0JBQzdCLE1BQU0sc0JBQXNCLENBQUM7b0JBQzVCLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLHVCQUF1QixDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUN2SCxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDYixDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVTLElBQUksQ0FBQyxLQUFXO1FBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDYixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDZCxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDakIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsSUFBSSxFQUFFLFFBQVE7aUJBQ2QsQ0FBQyxDQUFBO2dCQUVGLE9BQU8sQ0FBQyxDQUFBO1lBQ1QsQ0FBQztZQUNELE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQiw4REFBOEQ7WUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFTLEVBQUUsRUFBRTtnQkFDNUIsTUFBTSxzQkFBc0IsQ0FBQztvQkFDNUIsT0FBTyxFQUFFLHFCQUFxQixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksb0JBQW9CLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDbEcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2IsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsS0FBVztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFaEIsT0FBTyxLQUFLLENBQUE7SUFDYixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIEFyZ3YgfSBmcm9tICd5YXJncydcblxuaW1wb3J0IHsgR2l0Q2xvbmVQcm9qZWN0Q29tbWFuZCB9IGZyb20gJyNzcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvZ2l0LWNsb25lLXByb2plY3QtY29tbWFuZCdcbmltcG9ydCB7IEdpdFNpbXBsZUNvbW1hbmQsIEdpdFNpbXBsZVByb2plY3RDb21tYW5kIH0gZnJvbSAnI3NyYy9tb2RlbC9jb21tYW5kL3Byb2plY3QtY29tbWFuZC9naXQtc2ltcGxlLXByb2plY3QtY29tbWFuZCdcbmltcG9ydCB7IEdpdFRhZ1Byb2plY3RDb21tYW5kIH0gZnJvbSAnI3NyYy9tb2RlbC9jb21tYW5kL3Byb2plY3QtY29tbWFuZC9naXQtdGFnLXByb2plY3QtY29tbWFuZCdcbmltcG9ydCB7IHByb2plY3RDb21tYW5kRmFjdG9yeSB9IGZyb20gJyNzcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvcHJvamVjdC1jb21tYW5kJ1xuaW1wb3J0IHsgdGVybWluYWxXcmFwcGVyRmFjdG9yeSB9IGZyb20gJyNzcmMvc2VydmljZS90ZXJtaW5hbC13cmFwcGVyJ1xuXG5leHBvcnQgY2xhc3MgR2l0Um91dGVyIHtcblx0cHJvdGVjdGVkIF9jbG9uZSh5YXJnczogQXJndik6IHZvaWQge1xuXHRcdHlhcmdzLmNvbW1hbmQoe1xuXHRcdFx0Y29tbWFuZDogJ2Nsb25lJyxcblx0XHRcdGRlc2NyaWJlOiAnZXhlY3V0ZSBnaXQgY2xvbmUnLFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdGhhbmRsZXI6IGFzeW5jIChfYXJndjogYW55KSA9PiB7XG5cdFx0XHRcdGF3YWl0IHRlcm1pbmFsV3JhcHBlckZhY3Rvcnkoe1xuXHRcdFx0XHRcdGNvbW1hbmQ6IHByb2plY3RDb21tYW5kRmFjdG9yeSh7IGNvbW1hbmQ6IG5ldyBHaXRDbG9uZVByb2plY3RDb21tYW5kKCkgfSksXG5cdFx0XHRcdH0pLmV4ZWN1dGUoKVxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0cHJvdGVjdGVkIF9mZXRjaCh5YXJnczogQXJndik6IHZvaWQge1xuXHRcdHlhcmdzLmNvbW1hbmQoe1xuXHRcdFx0Y29tbWFuZDogJ2ZldGNoJyxcblx0XHRcdGRlc2NyaWJlOiAnZXhlY3V0ZSBnaXQgZmV0Y2gnLFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdGhhbmRsZXI6IGFzeW5jIChfYXJndjogYW55KSA9PiB7XG5cdFx0XHRcdGF3YWl0IHRlcm1pbmFsV3JhcHBlckZhY3Rvcnkoe1xuXHRcdFx0XHRcdGNvbW1hbmQ6IHByb2plY3RDb21tYW5kRmFjdG9yeSh7IGNvbW1hbmQ6IG5ldyBHaXRTaW1wbGVQcm9qZWN0Q29tbWFuZCh7IGdpdFNpbXBsZUNvbW1hbmQ6IEdpdFNpbXBsZUNvbW1hbmQuRkVUQ0ggfSkgfSksXG5cdFx0XHRcdH0pLmV4ZWN1dGUoKVxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0cHJvdGVjdGVkIF9wdWxsKHlhcmdzOiBBcmd2KTogdm9pZCB7XG5cdFx0eWFyZ3MuY29tbWFuZCh7XG5cdFx0XHRjb21tYW5kOiAncHVsbCcsXG5cdFx0XHRkZXNjcmliZTogJ2V4ZWN1dGUgZ2l0IHB1bGwnLFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdGhhbmRsZXI6IGFzeW5jIChfYXJndjogYW55KSA9PiB7XG5cdFx0XHRcdGF3YWl0IHRlcm1pbmFsV3JhcHBlckZhY3Rvcnkoe1xuXHRcdFx0XHRcdGNvbW1hbmQ6IHByb2plY3RDb21tYW5kRmFjdG9yeSh7IGNvbW1hbmQ6IG5ldyBHaXRTaW1wbGVQcm9qZWN0Q29tbWFuZCh7IGdpdFNpbXBsZUNvbW1hbmQ6IEdpdFNpbXBsZUNvbW1hbmQuUFVMTCB9KSB9KSxcblx0XHRcdFx0fSkuZXhlY3V0ZSgpXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRwcm90ZWN0ZWQgX3N0YXR1cyh5YXJnczogQXJndik6IHZvaWQge1xuXHRcdHlhcmdzLmNvbW1hbmQoe1xuXHRcdFx0Y29tbWFuZDogJ3N0YXR1cycsXG5cdFx0XHRkZXNjcmliZTogJ2V4ZWN1dGUgZ2l0IHN0YXR1cycsXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0aGFuZGxlcjogYXN5bmMgKF9hcmd2OiBhbnkpID0+IHtcblx0XHRcdFx0YXdhaXQgdGVybWluYWxXcmFwcGVyRmFjdG9yeSh7XG5cdFx0XHRcdFx0Y29tbWFuZDogcHJvamVjdENvbW1hbmRGYWN0b3J5KHsgY29tbWFuZDogbmV3IEdpdFNpbXBsZVByb2plY3RDb21tYW5kKHsgZ2l0U2ltcGxlQ29tbWFuZDogR2l0U2ltcGxlQ29tbWFuZC5TVEFUVVMgfSkgfSksXG5cdFx0XHRcdH0pLmV4ZWN1dGUoKVxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0cHJvdGVjdGVkIF90YWcoeWFyZ3M6IEFyZ3YpOiB2b2lkIHtcblx0XHR5YXJncy5jb21tYW5kKHtcblx0XHRcdGJ1aWxkZXI6ICh5KSA9PiB7XG5cdFx0XHRcdHkub3B0aW9ucygnbmFtZScsIHtcblx0XHRcdFx0XHRhbGlhczogJ24nLFxuXHRcdFx0XHRcdGRlc2NyaWJlOiAnZmlsdGVyIHRhZyBieSBuYW1lICgqIGlzIGFsbG93ZWQpJyxcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0fSlcblxuXHRcdFx0XHRyZXR1cm4geVxuXHRcdFx0fSxcblx0XHRcdGNvbW1hbmQ6ICd0YWcnLFxuXHRcdFx0ZGVzY3JpYmU6ICdleGVjdXRlIGdpdCB0YWcnLFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdGhhbmRsZXI6IGFzeW5jIChhcmd2OiBhbnkpID0+IHtcblx0XHRcdFx0YXdhaXQgdGVybWluYWxXcmFwcGVyRmFjdG9yeSh7XG5cdFx0XHRcdFx0Y29tbWFuZDogcHJvamVjdENvbW1hbmRGYWN0b3J5KHsgY29tbWFuZDogbmV3IEdpdFRhZ1Byb2plY3RDb21tYW5kKHsgZmlsdGVyQnlOYW1lOiBhcmd2Lm5hbWUgfSkgfSksXG5cdFx0XHRcdH0pLmV4ZWN1dGUoKVxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y29tbWFuZHMoeWFyZ3M6IEFyZ3YpOiBBcmd2IHtcblx0XHR0aGlzLl9jbG9uZSh5YXJncylcblx0XHR0aGlzLl9wdWxsKHlhcmdzKVxuXHRcdHRoaXMuX2ZldGNoKHlhcmdzKVxuXHRcdHRoaXMuX3N0YXR1cyh5YXJncylcblx0XHR0aGlzLl90YWcoeWFyZ3MpXG5cblx0XHRyZXR1cm4geWFyZ3Ncblx0fVxufVxuIl19