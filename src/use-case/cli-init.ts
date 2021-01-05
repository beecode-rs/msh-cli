import { ICommand } from 'src/model/command'
import { InitConfig } from 'src/model/command/init-config'
import { PrintHelp } from 'src/model/command/print-help'
import { PrintVersion } from 'src/model/command/print-version'
import { ProjectCommand } from 'src/model/command/project-command'
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
    await command.execute()
  },
  createCommandFromCliArgs: (args: string[]): ICommand => {
    const command = argsService.argToObject<cliCommands>({ args, options: argsService.cliCommandOptions })
    switch (true) {
      case command.git:
        if (!config.cmd.gitEnabled) throw new Error('Git commands are not enabled. Check config: CMD_GIT_ENABLED')
        return new ProjectCommand({ projectExecuteCmd: gitService.createCommand(command._[0]), projects: config.projects })
      case command.npm:
        if (!config.cmd.npmEnabled) throw new Error('Git commands are not enabled. Check config: CMD_NPM_ENABLED')
        return new ProjectCommand({ projectExecuteCmd: npmService.createCommand(command._[0]), projects: config.projects })
      case command.init:
        return new InitConfig()
      case command.version:
        return new PrintVersion()
      case command.help:
        return new PrintHelp()
      default:
        throw new Error(`Unknown command[${JSON.stringify(command)}]`)
    }
  },
  ifMoreThenOneCommandSelectedThrowErrorAndPrintHelp: (args: string[]): void => {
    if (argsService.selectedCommandCount({ args, options: argsService.cliCommandOptions }) <= 1) return
    cliService.printHelp()
    throw new Error('ERROR !!! - CLI can run only one command at a time')
  },
  ifNoCommandSelectedThrowErrorAndPrintHelp: (args: string[]): void => {
    if (argsService.selectedCommandCount({ args, options: argsService.cliCommandOptions }) !== 0) return
    cliService.printHelp()
    throw new Error('ERROR !!! - CLI needs one command to be selected')
  },
}
