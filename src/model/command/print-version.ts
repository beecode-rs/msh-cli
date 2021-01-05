import { ICommand } from 'src/model/command/index'
import { cliService } from 'src/service/cli-service'

export class PrintVersion implements ICommand {
  public async execute(): Promise<void> {
    cliService.printVersion()
  }
}
