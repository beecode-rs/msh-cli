import { GitCloneProjectCommand } from 'src/model/command/project-command/git-clone-project-command'
import { GitSimpleCommand, GitSimpleProjectCommand } from 'src/model/command/project-command/git-simple-project-command'
import { GitTagProjectCommand } from 'src/model/command/project-command/git-tag-project-command'
import { projectCommandFactory } from 'src/model/command/project-command/project-command'
import { terminalWrapperFactory } from 'src/service/terminal-wrapper'
import yargs from 'yargs'

export class GitRouter {
	protected _clone(yargs: yargs.Argv): void {
		yargs.command({
			command: 'clone',
			describe: 'execute git clone',
			handler: async (_argv: any) => {
				await terminalWrapperFactory({
					command: projectCommandFactory({ command: new GitCloneProjectCommand() }),
				}).execute()
			},
		})
	}

	protected _fetch(yargs: yargs.Argv): void {
		yargs.command({
			command: 'fetch',
			describe: 'execute git fetch',
			handler: async (_argv: any) => {
				await terminalWrapperFactory({
					command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.FETCH }) }),
				}).execute()
			},
		})
	}

	protected _pull(yargs: yargs.Argv): void {
		yargs.command({
			command: 'pull',
			describe: 'execute git pull',
			handler: async (_argv: any) => {
				await terminalWrapperFactory({
					command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.PULL }) }),
				}).execute()
			},
		})
	}

	protected _status(yargs: yargs.Argv): void {
		yargs.command({
			command: 'status',
			describe: 'execute git status',
			handler: async (_argv: any) => {
				await terminalWrapperFactory({
					command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.STATUS }) }),
				}).execute()
			},
		})
	}

	protected _tag(yargs: yargs.Argv): void {
		yargs.command({
			builder: (y) => {
				y.options('name', {
					alias: 'n',
					describe: 'filter tag by name (* is allowed)',
					type: 'string',
				})

				return y
			},
			command: 'tag',
			describe: 'execute git tag',
			handler: async (argv: any) => {
				await terminalWrapperFactory({
					command: projectCommandFactory({ command: new GitTagProjectCommand({ filterByName: argv.name }) }),
				}).execute()
			},
		})
	}

	commands(yargs: yargs.Argv): yargs.Argv {
		this._clone(yargs)
		this._pull(yargs)
		this._fetch(yargs)
		this._status(yargs)
		this._tag(yargs)

		return yargs
	}
}
