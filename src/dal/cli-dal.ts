import shell from 'shelljs'
import { LogLevel, config, logger } from 'src/util'

export type ExecResult = {
  stdout: string
  stderr: string
  errorOccurred: boolean
}
export type ExecParams = {
  cmd: string
  printOnDone?: string
}
export const cliDal = {
  exec: (params: ExecParams): Promise<ExecResult> => {
    if (config.logLevel === LogLevel.DEBUG) {
      logger.debug(cliDal.pwd())
    }
    return new Promise((resolve) => {
      shell.exec(params.cmd, { silent: true }, (code, stdout, stderr) => {
        if (params.printOnDone) cliDal.print(params.printOnDone)
        const execResult = { stdout, stderr, errorOccurred: false }
        if (code !== 0) execResult.errorOccurred = true
        return resolve(execResult)
      })
    })
  },
  print: (message: string): void => {
    // eslint-disable-next-line no-console
    console.log(message)
  },
  cd: (dir: string): void => {
    shell.cd(dir)
  },
  pwd: (): string => {
    return shell.pwd()
  },
}
