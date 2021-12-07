import { ExecuteResult, ProjectExecutable } from 'src/model/command/interfaces'
import { shellService } from 'src/service/shell-service'
import { config } from 'src/util/config'

export enum GitSimpleCommand {
  STATUS = 'status',
  FETCH = 'fetch',
  PULL = 'pull',
}

export class GitSimpleProjectCommand implements ProjectExecutable {
  protected readonly _simpleGitCommand: GitSimpleCommand
  protected readonly _rootDir: string

  constructor(params: { gitSimpleCommand: GitSimpleCommand; rootDir?: string }) {
    const { gitSimpleCommand, rootDir = config().rootDir } = params
    this._simpleGitCommand = gitSimpleCommand
    this._rootDir = rootDir
  }

  public async execute(project: string): Promise<ExecuteResult[]> {
    try {
      const cmd = `git -C ${this._rootDir}/${project} ${this._simpleGitCommand}`
      const result = await shellService.exec(cmd)
      return [{ name: project, errorMessage: result.stderr, stringResult: result.stdout }]
    } catch (err: any) {
      return [{ errorMessage: err.message }]
    }
  }
}
