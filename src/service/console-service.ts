import shell from 'shelljs'

export type ExecResult = {
  stdout: string
  stderr: string
  errorOccurred: boolean
}

export type ExecParams = {
  cmd: string
  printOnDone?: string
}

export const consoleService = {
  exec: (params: ExecParams): Promise<ExecResult> => {
    return new Promise((resolve) => {
      shell.exec(params.cmd, { silent: true }, (code, stdout, stderr) => {
        if (params.printOnDone) consoleService.print(params.printOnDone)
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
}
