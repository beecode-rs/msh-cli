import { ExecuteResult, ProjectExecutable } from 'src/model/command/interfaces'
import { shellService } from 'src/service/shell-service'
import { config } from 'src/util/config'

export class GitTagProjectCommand implements ProjectExecutable {
  protected readonly _rootDir: string
  protected readonly _filterByName?: string

  constructor(params: { filterByName?: string; rootDir?: string }) {
    const { filterByName, rootDir = config().rootDir } = params
    this._rootDir = rootDir
    this._filterByName = filterByName
  }

  public async execute(project: string): Promise<ExecuteResult[]> {
    try {
      const filterLine = this._filterByName ? ` -l ${this._filterByName}` : ''
      const cmd = `git -C ${this._rootDir}/${project} tag -n9${filterLine}`
      const result = await shellService.exec(cmd)
      return [{ name: project, errorMessage: result.stderr, stringResult: result.stdout }]
    } catch (err: any) {
      return [{ errorMessage: err.message }]
    }
  }
}
