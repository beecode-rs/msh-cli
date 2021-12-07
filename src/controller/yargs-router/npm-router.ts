import { npmGlobalProjectCommandFactory } from 'src/model/command/project-command/npm-global-project-command'
import { NpmInstallProjectCommand } from 'src/model/command/project-command/npm-install-project-command'
import { projectCommandFactory } from 'src/model/command/project-command/project-command'
import { terminalWrapperFactory } from 'src/service/terminal-wrapper'

export const npmRouter = {
  route: async (params: { npmCommand: string }): Promise<void> => {
    const { npmCommand } = params
    switch (npmCommand) {
      case 'install':
      case 'i':
        await terminalWrapperFactory({
          command: projectCommandFactory({
            command: new NpmInstallProjectCommand(),
          }),
        }).execute()
        break
      case 'global':
      case 'g':
        await terminalWrapperFactory({ command: npmGlobalProjectCommandFactory() }).execute()
        break
      default:
        throw new Error(`Unsupported npm command [${npmCommand}]`)
    }
  },
}
