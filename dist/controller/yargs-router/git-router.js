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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3lhcmdzLXJvdXRlci9naXQtcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFBO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtEQUErRCxDQUFBO0FBQ3pILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDREQUE0RCxDQUFBO0FBQ2pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFBO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFBO0FBRXRFLE1BQU0sT0FBTyxTQUFTO0lBQ1gsTUFBTSxDQUFDLEtBQVc7UUFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNiLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsOERBQThEO1lBQzlELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBVSxFQUFFLEVBQUU7Z0JBQzdCLE1BQU0sc0JBQXNCLENBQUM7b0JBQzVCLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLHNCQUFzQixFQUFFLEVBQUUsQ0FBQztpQkFDekUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2IsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFFUyxNQUFNLENBQUMsS0FBVztRQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2IsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3Qiw4REFBOEQ7WUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFVLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxzQkFBc0IsQ0FBQztvQkFDNUIsT0FBTyxFQUFFLHFCQUFxQixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksdUJBQXVCLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ3RILENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNiLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRVMsS0FBSyxDQUFDLEtBQVc7UUFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNiLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLGtCQUFrQjtZQUM1Qiw4REFBOEQ7WUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFVLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxzQkFBc0IsQ0FBQztvQkFDNUIsT0FBTyxFQUFFLHFCQUFxQixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksdUJBQXVCLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ3JILENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNiLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRVMsT0FBTyxDQUFDLEtBQVc7UUFDNUIsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNiLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsOERBQThEO1lBQzlELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBVSxFQUFFLEVBQUU7Z0JBQzdCLE1BQU0sc0JBQXNCLENBQUM7b0JBQzVCLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLHVCQUF1QixDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUN2SCxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDYixDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVTLElBQUksQ0FBQyxLQUFXO1FBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDYixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDZCxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDakIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsSUFBSSxFQUFFLFFBQVE7aUJBQ2QsQ0FBQyxDQUFBO2dCQUVGLE9BQU8sQ0FBQyxDQUFBO1lBQ1QsQ0FBQztZQUNELE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQiw4REFBOEQ7WUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFTLEVBQUUsRUFBRTtnQkFDNUIsTUFBTSxzQkFBc0IsQ0FBQztvQkFDNUIsT0FBTyxFQUFFLHFCQUFxQixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksb0JBQW9CLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDbEcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2IsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsS0FBVztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFaEIsT0FBTyxLQUFLLENBQUE7SUFDYixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcmd2IH0gZnJvbSAneWFyZ3MnXG5cbmltcG9ydCB7IEdpdENsb25lUHJvamVjdENvbW1hbmQgfSBmcm9tICcjc3JjL21vZGVsL2NvbW1hbmQvcHJvamVjdC1jb21tYW5kL2dpdC1jbG9uZS1wcm9qZWN0LWNvbW1hbmQnXG5pbXBvcnQgeyBHaXRTaW1wbGVDb21tYW5kLCBHaXRTaW1wbGVQcm9qZWN0Q29tbWFuZCB9IGZyb20gJyNzcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvZ2l0LXNpbXBsZS1wcm9qZWN0LWNvbW1hbmQnXG5pbXBvcnQgeyBHaXRUYWdQcm9qZWN0Q29tbWFuZCB9IGZyb20gJyNzcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvZ2l0LXRhZy1wcm9qZWN0LWNvbW1hbmQnXG5pbXBvcnQgeyBwcm9qZWN0Q29tbWFuZEZhY3RvcnkgfSBmcm9tICcjc3JjL21vZGVsL2NvbW1hbmQvcHJvamVjdC1jb21tYW5kL3Byb2plY3QtY29tbWFuZCdcbmltcG9ydCB7IHRlcm1pbmFsV3JhcHBlckZhY3RvcnkgfSBmcm9tICcjc3JjL3NlcnZpY2UvdGVybWluYWwtd3JhcHBlcidcblxuZXhwb3J0IGNsYXNzIEdpdFJvdXRlciB7XG5cdHByb3RlY3RlZCBfY2xvbmUoeWFyZ3M6IEFyZ3YpOiB2b2lkIHtcblx0XHR5YXJncy5jb21tYW5kKHtcblx0XHRcdGNvbW1hbmQ6ICdjbG9uZScsXG5cdFx0XHRkZXNjcmliZTogJ2V4ZWN1dGUgZ2l0IGNsb25lJyxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRoYW5kbGVyOiBhc3luYyAoX2FyZ3Y6IGFueSkgPT4ge1xuXHRcdFx0XHRhd2FpdCB0ZXJtaW5hbFdyYXBwZXJGYWN0b3J5KHtcblx0XHRcdFx0XHRjb21tYW5kOiBwcm9qZWN0Q29tbWFuZEZhY3RvcnkoeyBjb21tYW5kOiBuZXcgR2l0Q2xvbmVQcm9qZWN0Q29tbWFuZCgpIH0pLFxuXHRcdFx0XHR9KS5leGVjdXRlKClcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdHByb3RlY3RlZCBfZmV0Y2goeWFyZ3M6IEFyZ3YpOiB2b2lkIHtcblx0XHR5YXJncy5jb21tYW5kKHtcblx0XHRcdGNvbW1hbmQ6ICdmZXRjaCcsXG5cdFx0XHRkZXNjcmliZTogJ2V4ZWN1dGUgZ2l0IGZldGNoJyxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRoYW5kbGVyOiBhc3luYyAoX2FyZ3Y6IGFueSkgPT4ge1xuXHRcdFx0XHRhd2FpdCB0ZXJtaW5hbFdyYXBwZXJGYWN0b3J5KHtcblx0XHRcdFx0XHRjb21tYW5kOiBwcm9qZWN0Q29tbWFuZEZhY3RvcnkoeyBjb21tYW5kOiBuZXcgR2l0U2ltcGxlUHJvamVjdENvbW1hbmQoeyBnaXRTaW1wbGVDb21tYW5kOiBHaXRTaW1wbGVDb21tYW5kLkZFVENIIH0pIH0pLFxuXHRcdFx0XHR9KS5leGVjdXRlKClcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdHByb3RlY3RlZCBfcHVsbCh5YXJnczogQXJndik6IHZvaWQge1xuXHRcdHlhcmdzLmNvbW1hbmQoe1xuXHRcdFx0Y29tbWFuZDogJ3B1bGwnLFxuXHRcdFx0ZGVzY3JpYmU6ICdleGVjdXRlIGdpdCBwdWxsJyxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRoYW5kbGVyOiBhc3luYyAoX2FyZ3Y6IGFueSkgPT4ge1xuXHRcdFx0XHRhd2FpdCB0ZXJtaW5hbFdyYXBwZXJGYWN0b3J5KHtcblx0XHRcdFx0XHRjb21tYW5kOiBwcm9qZWN0Q29tbWFuZEZhY3RvcnkoeyBjb21tYW5kOiBuZXcgR2l0U2ltcGxlUHJvamVjdENvbW1hbmQoeyBnaXRTaW1wbGVDb21tYW5kOiBHaXRTaW1wbGVDb21tYW5kLlBVTEwgfSkgfSksXG5cdFx0XHRcdH0pLmV4ZWN1dGUoKVxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0cHJvdGVjdGVkIF9zdGF0dXMoeWFyZ3M6IEFyZ3YpOiB2b2lkIHtcblx0XHR5YXJncy5jb21tYW5kKHtcblx0XHRcdGNvbW1hbmQ6ICdzdGF0dXMnLFxuXHRcdFx0ZGVzY3JpYmU6ICdleGVjdXRlIGdpdCBzdGF0dXMnLFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdGhhbmRsZXI6IGFzeW5jIChfYXJndjogYW55KSA9PiB7XG5cdFx0XHRcdGF3YWl0IHRlcm1pbmFsV3JhcHBlckZhY3Rvcnkoe1xuXHRcdFx0XHRcdGNvbW1hbmQ6IHByb2plY3RDb21tYW5kRmFjdG9yeSh7IGNvbW1hbmQ6IG5ldyBHaXRTaW1wbGVQcm9qZWN0Q29tbWFuZCh7IGdpdFNpbXBsZUNvbW1hbmQ6IEdpdFNpbXBsZUNvbW1hbmQuU1RBVFVTIH0pIH0pLFxuXHRcdFx0XHR9KS5leGVjdXRlKClcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdHByb3RlY3RlZCBfdGFnKHlhcmdzOiBBcmd2KTogdm9pZCB7XG5cdFx0eWFyZ3MuY29tbWFuZCh7XG5cdFx0XHRidWlsZGVyOiAoeSkgPT4ge1xuXHRcdFx0XHR5Lm9wdGlvbnMoJ25hbWUnLCB7XG5cdFx0XHRcdFx0YWxpYXM6ICduJyxcblx0XHRcdFx0XHRkZXNjcmliZTogJ2ZpbHRlciB0YWcgYnkgbmFtZSAoKiBpcyBhbGxvd2VkKScsXG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0cmV0dXJuIHlcblx0XHRcdH0sXG5cdFx0XHRjb21tYW5kOiAndGFnJyxcblx0XHRcdGRlc2NyaWJlOiAnZXhlY3V0ZSBnaXQgdGFnJyxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRoYW5kbGVyOiBhc3luYyAoYXJndjogYW55KSA9PiB7XG5cdFx0XHRcdGF3YWl0IHRlcm1pbmFsV3JhcHBlckZhY3Rvcnkoe1xuXHRcdFx0XHRcdGNvbW1hbmQ6IHByb2plY3RDb21tYW5kRmFjdG9yeSh7IGNvbW1hbmQ6IG5ldyBHaXRUYWdQcm9qZWN0Q29tbWFuZCh7IGZpbHRlckJ5TmFtZTogYXJndi5uYW1lIH0pIH0pLFxuXHRcdFx0XHR9KS5leGVjdXRlKClcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNvbW1hbmRzKHlhcmdzOiBBcmd2KTogQXJndiB7XG5cdFx0dGhpcy5fY2xvbmUoeWFyZ3MpXG5cdFx0dGhpcy5fcHVsbCh5YXJncylcblx0XHR0aGlzLl9mZXRjaCh5YXJncylcblx0XHR0aGlzLl9zdGF0dXMoeWFyZ3MpXG5cdFx0dGhpcy5fdGFnKHlhcmdzKVxuXG5cdFx0cmV0dXJuIHlhcmdzXG5cdH1cbn1cbiJdfQ==