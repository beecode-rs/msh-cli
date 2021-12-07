import { gitRouter } from 'src/controller/yargs-router/git-router'
import { initRouter } from 'src/controller/yargs-router/init-router'
import { npmRouter } from 'src/controller/yargs-router/npm-router'
import { config } from 'src/util/config'
import yargs from 'yargs'

export class CliRouter {
  protected readonly _yargs: yargs.Argv

  protected readonly _globalCommands = ['git', 'npm', 'init']

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
    this._yargs.usage(`$0 <${this._globalCommands.join('|')}> [command options]`)
  }

  protected _helpVersionAlias(): void {
    this._yargs.alias('version', 'v').alias('help', 'h').fail(false)
  }

  protected _demandCommands(): void {
    this._yargs.demandCommand(1, 1, 'You need to select one command before moving on').strict()
  }

  protected _gitCommands(): void {
    this._yargs.command({
      command: 'git <git-command>',
      describe: 'execute git command',
      aliases: ['g'],
      builder: (y) =>
        y.positional('git-command', {
          description: 'GIT Commands',
          type: 'string',
          choices: ['clone', 'pull', 'fetch', 'status'],
        }),
      handler: async (argv: any) => {
        if (!config().cmd.gitEnabled) throw new Error('Git commands are not enabled. Check config: CMD_GIT_ENABLED')
        const { gitCommand } = argv
        await gitRouter.route({ gitCommand })
      },
    })
  }

  protected _npmCommands(): void {
    this._yargs.command({
      command: 'npm <npm-command>',
      aliases: ['n'],
      describe: 'execute npm command',
      builder: (y) =>
        y.positional('npm-command', {
          description: 'NPM Commands',
          type: 'string',
          choices: ['install', 'i', 'global', 'g'],
        }),
      handler: async (argv: any) => {
        if (!config().cmd.npmEnabled) throw new Error('Git commands are not enabled. Check config: CMD_NPM_ENABLED')
        const { npmCommand } = argv
        await npmRouter.route({ npmCommand })
      },
    })
  }

  protected _initCommands(): void {
    this._yargs.command({
      command: 'init',
      aliases: ['i'],
      describe: 'Create init file',
      handler: async (argv: any) => {
        await initRouter.route()
      },
    })
  }
}

export const cliRouterFactory = (...params: ConstructorParameters<typeof CliRouter>): CliRouter => new CliRouter(...params)
