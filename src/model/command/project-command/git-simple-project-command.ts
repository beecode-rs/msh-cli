import { ExecResult } from 'src/dal/shell-dal'
import { IProjectCommand } from 'src/model/command/project-command'
import { shellService } from 'src/service/shell-service'

export enum GitSimpleCommand {
  STATUS = 'status',
  FETCH = 'fetch',
  PULL = 'pull',
}

export type GitSimpleProjectCommandParams = {
  gitSimpleCommand: GitSimpleCommand
  rootDir: string
}

export class GitSimpleProjectCommand implements IProjectCommand {
  private readonly __simpleGitCommand: GitSimpleCommand
  private readonly __rootDir: string

  constructor(params: GitSimpleProjectCommandParams) {
    this.__simpleGitCommand = params.gitSimpleCommand
    this.__rootDir = params.rootDir
  }

  public async execute(project: string): Promise<ExecResult> {
    const cmd = `git -C ${this.__rootDir}/${project} ${this.__simpleGitCommand}`
    return shellService.exec(cmd)
  }
}
