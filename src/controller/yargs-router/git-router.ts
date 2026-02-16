import { type Argv } from 'yargs'

import { GitCloneProjectCommand } from '#src/model/command/project-command/git-clone-project-command.js'
import { GitSimpleCommand, GitSimpleProjectCommand } from '#src/model/command/project-command/git-simple-project-command.js'
import { GitTagProjectCommand } from '#src/model/command/project-command/git-tag-project-command.js'
import { projectCommandFactory } from '#src/model/command/project-command/project-command.js'
import { terminalWrapperFactory } from '#src/service/terminal-wrapper.js'

export class GitRouter {
	protected _clone(yargs: Argv): void {
		yargs.command({
			command: 'clone',
			describe: 'execute git clone',
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			handler: async (_argv: any) => {
				await terminalWrapperFactory({
					command: projectCommandFactory({ command: new GitCloneProjectCommand() }),
				}).execute()
			},
		})
	}

	protected _fetch(yargs: Argv): void {
		yargs.command({
			command: 'fetch',
			describe: 'execute git fetch',
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			handler: async (_argv: any) => {
				await terminalWrapperFactory({
					command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.FETCH }) }),
				}).execute()
			},
		})
	}

	protected _pull(yargs: Argv): void {
		yargs.command({
			command: 'pull',
			describe: 'execute git pull',
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			handler: async (_argv: any) => {
				await terminalWrapperFactory({
					command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.PULL }) }),
				}).execute()
			},
		})
	}

	protected _status(yargs: Argv): void {
		yargs.command({
			command: 'status',
			describe: 'execute git status',
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			handler: async (_argv: any) => {
				await terminalWrapperFactory({
					command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.STATUS }) }),
				}).execute()
			},
		})
	}

	protected _tag(yargs: Argv): void {
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
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			handler: async (argv: any) => {
				await terminalWrapperFactory({
					command: projectCommandFactory({ command: new GitTagProjectCommand({ filterByName: argv.name }) }),
				}).execute()
			},
		})
	}

	commands(yargs: Argv): Argv {
		this._clone(yargs)
		this._pull(yargs)
		this._fetch(yargs)
		this._status(yargs)
		this._tag(yargs)

		return yargs
	}
}
