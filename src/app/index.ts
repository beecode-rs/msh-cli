import { CliApp } from 'src/app/cli-app'
import { HttpServerApp } from 'src/app/http-server-app'
import { TuiApp } from 'src/app/tui-app'
import { appCommands, argsService } from 'src/service/args-service'
import { shellService } from 'src/service/shell-service'

export const app = {
  start: (): void => {
    app._start().catch(app._onError)
  },
  _start: async (): Promise<void> => {
    const args = process.argv.slice(2)
    const appCommands = argsService.argToObject<appCommands>({ args, options: argsService.appCommandOptions })

    if (appCommands['http-server']) await new HttpServerApp().initiate()
    else if (appCommands.tui) await new TuiApp().initiate()
    else await new CliApp(args).initiate()
  },
  _onError: (err: any): void => {
    shellService.printError(err.message)
    process.exit(1)
  },
}
