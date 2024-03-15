import { Argv } from 'yargs'

import { npmGlobalProjectCommandFactory } from '#src/model/command/project-command/npm-global-project-command'
import { NpmInstallProjectCommand } from '#src/model/command/project-command/npm-install-project-command'
import { projectCommandFactory } from '#src/model/command/project-command/project-command'
import { terminalWrapperFactory } from '#src/service/terminal-wrapper'

export class NpmRouter {
	commands(yargs: Argv): Argv {
		this._install(yargs)
		this._global(yargs)

		return yargs
	}

	protected _install(yargs: Argv): void {
		yargs.command({
			aliases: ['i'],
			command: 'install',
			describe: 'execute npm i for all projects',
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			handler: async (_argv: any) => {
				await terminalWrapperFactory({
					command: projectCommandFactory({
						command: new NpmInstallProjectCommand(),
					}),
				}).execute()
			},
		})
	}

	protected _global(yargs: Argv): void {
		yargs.command({
			aliases: ['g'],
			command: 'global',
			describe: 'gather npm packages to global package.json (project root level)',
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			handler: async (_argv: any) => {
				await terminalWrapperFactory({ command: npmGlobalProjectCommandFactory() }).execute()
			},
		})
	}
}
