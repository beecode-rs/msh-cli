import { npmGlobalProjectCommandFactory } from 'src/model/command/project-command/npm-global-project-command'
import { NpmInstallProjectCommand } from 'src/model/command/project-command/npm-install-project-command'
import { projectCommandFactory } from 'src/model/command/project-command/project-command'
import { terminalWrapperFactory } from 'src/service/terminal-wrapper'
import yargs from 'yargs'

export const npmRouter = {
  commands: (yargs: yargs.Argv): yargs.Argv => {
    npmRouter._install(yargs)
    npmRouter._global(yargs)
    return yargs
  },
  _install: (yargs: yargs.Argv): void => {
    yargs.command({
      command: 'install',
      describe: 'execute npm i for all projects',
      aliases: ['i'],
      handler: async (argv: any) => {
        await terminalWrapperFactory({
          command: projectCommandFactory({
            command: new NpmInstallProjectCommand(),
          }),
        }).execute()
      },
    })
  },
  _global: (yargs: yargs.Argv): void => {
    yargs.command({
      command: 'global',
      aliases: ['g'],
      describe: 'gather npm packages to global package.json (project root level)',
      handler: async (argv: any) => {
        await terminalWrapperFactory({ command: npmGlobalProjectCommandFactory() }).execute()
      },
    })
  },
}
