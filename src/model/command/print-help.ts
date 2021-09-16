import { ICommand } from 'src/model/command'
import { cliService } from 'src/service/cli-service'

export class PrintHelp implements ICommand {
  public async execute(): Promise<void> {
    cliService.printHelp()
  }
}
