import chalk from 'chalk'
import { ChoiceCollection } from 'inquirer'
import { assignIn } from 'lodash'
import shell from 'shelljs'
import { cliService } from 'src/service/cli-service'
import { util } from 'src/util'
import { config } from 'src/util/config'
import { SubMenu } from 'src/util/sub-menu'

export = Git
class Git extends SubMenu {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private async gitCommand(command): Promise<void> {
    const promises: any[] = []
    for (const project of config.projects) {
      const cmd = `git -C ${config.rootDir}/${project} ${command}`
      const promise = util.execAsync(cmd).then((execResult) => {
        util.log(chalk.green(`DONE - ${project}`))
        return { [project]: execResult }
      })
      promises.push(promise)
    }
    const result = await Promise.all(promises)
    cliService.printMessage(assignIn({}, ...result))
  }
  constructor() {
    super('Git action?', [
      { name: 'Status', value: 'status' },
      { name: 'Fetch', value: 'fetch' },
      { name: 'Pull', value: 'pull' },
      { name: 'Clone', value: 'clone' },
    ] as ChoiceCollection)
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private async status(): Promise<void> {
    await this.gitCommand('status')
  }
  private async __fetch(): Promise<void> {
    await this.gitCommand('fetch')
  }
  private async __pull(): Promise<void> {
    await this.gitCommand('pull')
  }

  /**
   * Clone all project for microservices that belong to parent project
   */
  private async __clone(): Promise<void> {
    shell.cd(config.rootDir)
    const promises: any[] = []
    for (const project of config.projects) {
      const cmd = `git clone git@${config.git.host}:${config.git.team}/${config.git.projectPrefix}-${project}.git ${project}`
      const promise = util.execAsync(cmd).then((execResult) => {
        util.log(chalk.green(`DONE - ${project}`))
        return { [project]: execResult }
      })
      promises.push(promise)
    }
    const result = await Promise.all(promises)
    cliService.printMessage(assignIn({}, ...result))
  }
}
