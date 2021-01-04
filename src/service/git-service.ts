import { ProjectCommand } from 'src/model/project-command'
import { ProjectGitCloneCommand } from 'src/model/project-git-clone-command'
import { GitSimpleCommand, ProjectGitSimpleCommand } from 'src/model/project-git-simple-command'
import { config } from 'src/util/config'

export const gitService = {
  createCommand: (commandType: string): ProjectCommand => {
    if (commandType === 'clone') {
      if (!config.git.team) throw new Error('You need to specify GIT_TEAM env variable')
      return new ProjectGitCloneCommand({
        gitHost: config.git.host,
        gitTeam: config.git.team,
        projectPrefix: config.git.projectPrefix,
        rootDir: config.rootDir,
      })
    } else if ((<any>Object).values(GitSimpleCommand).includes(commandType)) {
      return new ProjectGitSimpleCommand({
        rootDir: config.rootDir,
        gitSimpleCommand: commandType as GitSimpleCommand,
      })
    }
    throw new Error(`Unsupported git command [${commandType}]`)
  },
}
