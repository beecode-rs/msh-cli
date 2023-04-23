import { npmGlobalProjectCommandFactory } from 'src/model/command/project-command/npm-global-project-command'
import { NpmInstallProjectCommand } from 'src/model/command/project-command/npm-install-project-command'
import { projectCommandFactory } from 'src/model/command/project-command/project-command'
import { terminalWrapperFactory } from 'src/service/terminal-wrapper'
import yargs from 'yargs'

export class NpmRouter {
	commands(yargs: yargs.Argv): yargs.Argv {
		this._install(yargs)
		this._global(yargs)

		return yargs
	}

	protected _install(yargs: yargs.Argv): void {
		yargs.command({
			aliases: ['i'],
			command: 'install',
			describe: 'execute npm i for all projects',
			handler: async (_argv: any) => {
				await terminalWrapperFactory({
					command: projectCommandFactory({
						command: new NpmInstallProjectCommand(),
					}),
				}).execute()
			},
		})
	}

	protected _global(yargs: yargs.Argv): void {
		yargs.command({
			aliases: ['g'],
			command: 'global',
			describe: 'gather npm packages to global package.json (project root level)',
			handler: async (_argv: any) => {
				await terminalWrapperFactory({ command: npmGlobalProjectCommandFactory() }).execute()
			},
		})
	}
}
