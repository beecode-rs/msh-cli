import chalk from 'chalk'
import shell from 'shelljs'
import { config } from 'src/util/config'

const util = {
  execAsync: (command: string): Promise<{ stdout: string; stderr: string; error: boolean }> => {
    return new Promise<{ stdout: string; stderr: string; error: boolean }>((resolve) => {
      {
        shell.exec(command, { silent: true }, (code, stdout, stderr) => {
          const execResult = { stdout, stderr, error: false }
          if (code !== 0) execResult.error = true
          return resolve(execResult)
        })
      }
    })
  },

  log: (msg: string | any): void => {
    /* tslint:disable */
    if (typeof msg === 'object') {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(msg, null, 4))
    } else {
      // eslint-disable-next-line no-console
      console.log(msg)
    }
    /* tslint:enable */
  },
  printConfig: (): void => {
    const gitUserName = config.git.username ? `     username : ${chalk.cyan(config.git.username)}` : ``
    const pullRequestSkip =
      config.pullRequestSkip && config.pullRequestSkip.length > 0
        ? `PullRequest skip:\n[ ${chalk.cyan(config.pullRequestSkip.join(chalk.white(' | ')))} ]\n`
        : ``
    const dockerBaseImages =
      config.dockerBaseImages && config.dockerBaseImages.length > 0
        ? `Docker base images:\n[ ${chalk.cyan(config.dockerBaseImages.join(chalk.white(' | ')))} ]\n`
        : ``

    util.log(`
RootDir: ${chalk.cyan(config.rootDir)}
Git:
${gitUserName}
     team     : ${chalk.cyan(config.git.team)}
     host     : ${chalk.cyan(config.git.host)}
     prefix   : ${chalk.cyan(config.git.projectPrefix)}

Project List:
[ ${chalk.cyan(config.projects.join(chalk.white(' | ')))} ]

${pullRequestSkip}
${dockerBaseImages}
`)
  },
}
export { util }
