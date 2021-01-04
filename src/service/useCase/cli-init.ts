import { ProjectCommand } from 'src/model/project-command'
import { ProjectExecutor } from 'src/model/project-executor'
import { argsService, cliCommands } from 'src/service/args-service'
import { cliService } from 'src/service/cli-service'
import { gitService } from 'src/service/git-service'
import { npmService } from 'src/service/npm-service'
import { config } from 'src/util/config'

export const cliInit = {
  execArgsAsCommand: async (args: string[]): Promise<void> => {
    cliInit.ifMoreThenOneCommandSelectedThrowErrorAndPrintHelp(args)
    cliInit.ifNoCommandSelectedThrowErrorAndPrintHelp(args)
    const command = cliInit.createCommandFromCliArgs(args)
    const projectExecutor = new ProjectExecutor({ projectExecuteCmd: command, projects: config.projects })
    await projectExecutor.execute()
  },
  createCommandFromCliArgs: (args: string[]): ProjectCommand => {
    const command = argsService.argToObject<cliCommands>({ args, options: argsService.cliCommandOptions })
    switch (true) {
      case command.git:
        if (!config.cmd.gitEnabled) throw new Error('Git commands are not enabled. Check config: CMD_GIT_ENABLED')
        return gitService.createCommand(command._[0])
      case command.npm:
        if (!config.cmd.npmEnabled) throw new Error('Git commands are not enabled. Check config: CMD_NPM_ENABLED')
        return npmService.createCommand(command._[0])
      case command.version:
        cliService.printVersion()
        process.exit()
        break
      case command.help:
        cliService.printHelp()
        process.exit()
        break
      default:
        throw new Error(`Unknown command[${JSON.stringify(command)}]`)
    }
  },
  ifMoreThenOneCommandSelectedThrowErrorAndPrintHelp: (args: string[]): void => {
    if (argsService.selectedCommandCount({ args, options: argsService.cliCommandOptions }) > 1) {
      cliService.printHelp()
      throw new Error('ERROR !!! - CLI can run only one command at a time')
    }
  },
  ifNoCommandSelectedThrowErrorAndPrintHelp: (args: string[]): void => {
    if (argsService.selectedCommandCount({ args, options: argsService.cliCommandOptions }) === 0) {
      {
        cliService.printHelp()
        throw new Error('ERROR !!! - CLI needs one command to be selected')
      }
    }
  },
}
