import { GitRouter } from 'src/controller/yargs-router/git-router'
import { NpmRouter } from 'src/controller/yargs-router/npm-router'
import { InitConfig } from 'src/model/command/init-config'
import { terminalWrapperFactory } from 'src/service/terminal-wrapper'
import { config } from 'src/util/config'
import yargs, { Argv } from 'yargs'

export class CliRouter {
	protected readonly _yargs: Argv

	constructor(argv: string[]) {
		this._yargs = yargs(argv)
	}

	async routeArgv(): Promise<void> {
		this._setupUsage()
		this._helpVersionAlias()

		this._gitCommands()
		this._npmCommands()
		this._initCommands()

		this._demandCommands()

		await this._yargs.parseAsync()
	}

	protected _setupUsage(): void {
		this._yargs.usage(`$0 <cmd> [command options]`)
	}

	protected _helpVersionAlias(): void {
		this._yargs.alias('version', 'v').alias('help', 'h').showHelpOnFail(false, 'Specify --help for available options')
	}

	protected _demandCommands(): void {
		this._yargs.demandCommand(1, 1, 'You need to select one command before moving on').strict()
	}

	protected _gitCommands(): void {
		if (!config().cmd.gitEnabled) {
			return
		}
		this._yargs.command({
			aliases: ['g'],
			builder: (y) =>
				new GitRouter()
					.commands(y)
					.demandCommand(1, 1)
					.showHelpOnFail(false, 'Specify --help for available options')
					.version(false),
			command: 'git',
			describe: 'execute git command',
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			handler: async (_argv: any) => {
				//return
			},
		})
	}

	protected _npmCommands(): void {
		if (!config().cmd.npmEnabled) {
			return
		}
		this._yargs.command({
			aliases: ['n'],
			builder: (y) =>
				new NpmRouter()
					.commands(y)
					.demandCommand(1, 1)
					.showHelpOnFail(false, 'Specify --help for available options')
					.version(false),
			command: 'npm',

			describe: 'execute npm command',
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			handler: async (_argv: any) => {
				//return
			},
		})
	}

	protected _initCommands(): void {
		this._yargs.command({
			aliases: ['i'],
			command: 'init',
			describe: 'Create init file',
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			handler: async (_argv: any) => {
				await terminalWrapperFactory({ command: new InitConfig() }).execute()
			},
		})
	}
}

export const cliRouterFactory = (...params: ConstructorParameters<typeof CliRouter>): CliRouter => new CliRouter(...params)
