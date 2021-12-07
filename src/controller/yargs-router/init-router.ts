import { InitConfig } from 'src/model/command/init-config'
import { terminalWrapperFactory } from 'src/service/terminal-wrapper'

export const initRouter = {
  route: async (): Promise<void> => {
    await terminalWrapperFactory({ command: new InitConfig() }).execute()
  },
}
