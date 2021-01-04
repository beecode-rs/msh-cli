import { ProjectCommand } from 'src/model/project-command'
import { PrintStdMessage, cliService } from 'src/service/cli-service'

export enum GitSimpleCommand {
  STATUS = 'status',
  FETCH = 'fetch',
  PULL = 'pull',
}

export type ProjectGitSimpleCommandParams = {
  gitSimpleCommand: GitSimpleCommand
  rootDir: string
}

export class ProjectGitSimpleCommand implements ProjectCommand {
  private readonly __simpleGitCommand: GitSimpleCommand
  private readonly __rootDir: string

  constructor(params: ProjectGitSimpleCommandParams) {
    this.__simpleGitCommand = params.gitSimpleCommand
    this.__rootDir = params.rootDir
  }

  public async execute(project: string): Promise<PrintStdMessage> {
    const cmd = `git -C ${this.__rootDir}/${project} ${this.__simpleGitCommand}`
    const result = await cliService.exec({ cmd })
    return { [project]: result }
  }
}
