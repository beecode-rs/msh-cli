import { IProjectCommand } from 'src/model/command/project-command'
import { GitCloneProjectCommand } from 'src/model/command/project-command/git-clone-project-command'
import { GitSimpleCommand, GitSimpleProjectCommand } from 'src/model/command/project-command/git-simple-project-command'
import { config } from 'src/util/config'

export const gitService = {
  createCommand: (commandType: string): IProjectCommand => {
    if (commandType === 'clone') {
      if (!config.git.team) throw new Error('You need to specify GIT_TEAM env variable')
      return new GitCloneProjectCommand({
        gitHost: config.git.host,
        gitTeam: config.git.team,
        projectPrefix: config.git.projectPrefix,
        rootDir: config.rootDir,
      })
    }
    if ((<any>Object).values(GitSimpleCommand).includes(commandType)) {
      return new GitSimpleProjectCommand({
        rootDir: config.rootDir,
        gitSimpleCommand: commandType as GitSimpleCommand,
      })
    }
    throw new Error(`Unsupported git command [${commandType}]`)
  },
}
