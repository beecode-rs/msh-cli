import { ICommand } from 'src/model/command/index'
import { initConfigService } from 'src/service/init-config-service'

export class InitConfig implements ICommand {
  public async execute(): Promise<void> {
    await initConfigService.tryToCreateConfig()
  }
}
