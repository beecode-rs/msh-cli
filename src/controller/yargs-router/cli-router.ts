import { gitRouter } from 'src/controller/yargs-router/git-router'
import { npmRouter } from 'src/controller/yargs-router/npm-router'
import { InitConfig } from 'src/model/command/init-config'
import { terminalWrapperFactory } from 'src/service/terminal-wrapper'
import { config } from 'src/util/config'
import yargs from 'yargs'

export class CliRouter {
  protected readonly _yargs: yargs.Argv

  public constructor(argv: string[]) {
    this._yargs = yargs(argv)
  }

  public async routeArgv(): Promise<void> {
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
    if (!config().cmd.gitEnabled) return
    this._yargs.command({
      command: 'git',
      describe: 'execute git command',
      aliases: ['g'],
      builder: (y) =>
        gitRouter.commands(y).demandCommand(1, 1).showHelpOnFail(false, 'Specify --help for available options').version(false),
      handler: async (argv: any) => {
        //return
      },
    })
  }

  protected _npmCommands(): void {
    if (!config().cmd.npmEnabled) return
    this._yargs.command({
      command: 'npm',
      aliases: ['n'],
      describe: 'execute npm command',

      builder: (y) =>
        npmRouter.commands(y).demandCommand(1, 1).showHelpOnFail(false, 'Specify --help for available options').version(false),
      handler: async (argv: any) => {
        //return
      },
    })
  }

  protected _initCommands(): void {
    this._yargs.command({
      command: 'init',
      aliases: ['i'],
      describe: 'Create init file',
      handler: async (argv: any) => {
        await terminalWrapperFactory({ command: new InitConfig() }).execute()
      },
    })
  }
}

export const cliRouterFactory = (...params: ConstructorParameters<typeof CliRouter>): CliRouter => new CliRouter(...params)
