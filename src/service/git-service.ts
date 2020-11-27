import chalk from 'chalk'
import { assignIn } from 'lodash'
import { cliService } from 'src/service/cli-service'
import { ExecResult, consoleService } from 'src/service/console-service'
import { config } from 'src/util/config'

export type ExecuteForProjectParams = {
  project: string
  command: GitCommand
}

export enum GitCommand {
  STATUS = 'status',
  FETCH = 'fetch',
  PULL = 'pull',
  CLONE = 'clone',
}

export type GitCommandParams = {
  projects: string[]
  command: GitCommand
}

export const gitService = {
  status: async () => {
    return gitService._simpleCommand({ projects: config.projects, command: GitCommand.STATUS })
  },
  fetch: async () => {
    return gitService._simpleCommand({ projects: config.projects, command: GitCommand.FETCH })
  },
  pull: async () => {
    return gitService._simpleCommand({ projects: config.projects, command: GitCommand.PULL })
  },
  clone: async () => {
    consoleService.cd(config.rootDir)
  },
  _simpleCommand: async (params: GitCommandParams) => {
    const { command } = params
    const promises = params.projects.map((project) => {
      gitService._execute({ project, command })
    })
    const result = await Promise.all(promises)
    cliService.printMessage(assignIn({}, ...result))
  },
  _execute: async (params: ExecuteForProjectParams): Promise<{ [key: string]: ExecResult }> => {
    const cmd = `git -C ${config.rootDir}/${params.project} ${params.command}`
    const printOnDone = chalk.green(`DONE - ${params.project}`)
    const result = await consoleService.exec({ cmd, printOnDone })
    return { [params.project]: result }
  },
}
