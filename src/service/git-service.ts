import chalk from 'chalk'
import { PrintStdMessage, cliService } from 'src/service'
import { config } from 'src/util'

export type ExecuteForProjectParams = {
  project: string
  cmd: string
}

export enum GitCommand {
  STATUS = 'status',
  FETCH = 'fetch',
  PULL = 'pull',
  CLONE = 'clone',
}

export const gitService = {
  status: async (): Promise<void> => {
    return gitService._simpleCommand(GitCommand.STATUS)
  },
  fetch: async (): Promise<void> => {
    return gitService._simpleCommand(GitCommand.FETCH)
  },
  pull: async (): Promise<void> => {
    return gitService._simpleCommand(GitCommand.PULL)
  },
  clone: async (): Promise<void> => {
    cliService.cd(config.rootDir)
    const { host: gitHost, team: gitTeam, projectPrefix } = config.git
    const promises = config.projects.map((project) => {
      const gitProject = [projectPrefix, project].filter(Boolean).join('-')
      const cmd = `git clone git@${gitHost}:${gitTeam}/${gitProject}.git ${project}`
      return gitService._execGitCommand({ project, cmd })
    })
    const results = await Promise.all(promises)
    cliService.printStdMessage(...results)
  },
  _simpleCommand: async (gitCommand: GitCommand): Promise<void> => {
    const promises = config.projects.map((project) => {
      const cmd = `git -C ${config.rootDir}/${project} ${gitCommand}`
      return gitService._execGitCommand({ project, cmd })
    })
    const results = await Promise.all(promises)
    cliService.printStdMessage(...results)
  },
  _execGitCommand: async (params: ExecuteForProjectParams): Promise<PrintStdMessage> => {
    const { cmd } = params
    const printOnDone = chalk.green(`DONE - ${params.project}`)
    const result = await cliService.exec({ cmd, printOnDone })
    return { [params.project]: result }
  },
}
