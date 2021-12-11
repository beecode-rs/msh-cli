import shell from 'shelljs'
import { logger } from 'src/util/logger'

export type ExecResult = {
  stdout: string
  stderr: string
  errorOccurred: boolean
}

export const shellDal = {
  // exec: (cmd: string): Promise<ExecResult> =>
  //   new Promise((resolve, reject) => {
  //     logger().debug(shellDal.pwd())
  //     const child = shell.exec(cmd, { async: true, silent: true })
  //     const result = { stdout: '', stderr: '', errorOccurred: false }
  //
  //     if (child.stdout) {
  //       child.stdout.on('data', (data) => {
  //         result.stdout = (result.stdout ?? '') + data.toString()
  //       })
  //       child.stdout.on('end', () => {
  //         resolve(result)
  //       })
  //     } else if (child.stderr) {
  //       child.stderr.on('end', () => {
  //         resolve(result)
  //       })
  //     }
  //
  //     if (child.stderr) {
  //       child.stderr.on('data', (data) => {
  //         result.stderr = (result.stderr ?? '') + data.toString()
  //         result.errorOccurred = (child.exitCode ?? 0) !== 0
  //       })
  //     }
  //   }),
  exec: (cmd: string): Promise<ExecResult> =>
    new Promise((resolve) => {
      logger().debug(shellDal.pwd())
      shell.exec(cmd, { silent: true }, (code, stdout, stderr) => {
        const errorOccurred = code !== 0
        return resolve({ stdout, stderr, errorOccurred })
      })
    }),
  print: (message: string): void => {
    shell.echo(message)
  },
  cd: (dir: string): void => {
    shell.cd(dir)
  },
  pwd: (): string => {
    return shell.pwd()
  },
}
