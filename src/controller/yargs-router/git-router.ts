import { GitCloneProjectCommand } from 'src/model/command/project-command/git-clone-project-command'
import { GitSimpleCommand, GitSimpleProjectCommand } from 'src/model/command/project-command/git-simple-project-command'
import { projectCommandFactory } from 'src/model/command/project-command/project-command'
import { terminalWrapperFactory } from 'src/service/terminal-wrapper'

export const gitRouter = {
  route: async (params: { gitCommand: string }): Promise<void> => {
    const { gitCommand } = params
    switch (gitCommand) {
      case 'clone':
        await terminalWrapperFactory({
          command: projectCommandFactory({ command: new GitCloneProjectCommand() }),
        }).execute()

        break
      case 'pull':
        await terminalWrapperFactory({
          command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.PULL }) }),
        }).execute()
        break
      case 'fetch':
        await terminalWrapperFactory({
          command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.FETCH }) }),
        }).execute()
        break
      case 'status':
        await terminalWrapperFactory({
          command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.STATUS }) }),
        }).execute()
        break
      default:
        throw new Error(`Unsupported git command [${gitCommand}]`)
    }
  },
}
