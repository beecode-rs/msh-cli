import inquirer, { Answers, ChoiceCollection, QuestionCollection } from 'inquirer'
import { cliService } from 'src/service/cli-service'

export abstract class BaseMenu {
  private __name = '__menu'
  private __type = 'list'
  private __message: string
  private __menu: QuestionCollection<Answers>

  private async __execute(command: string): Promise<void> {
    await this[command]()
    // if (cliService.exitAfterCommandExecuted) process.exit()
    await this.run()
  }

  protected constructor(message: string, choices: ChoiceCollection, exitChoices?: ChoiceCollection) {
    if (message) this.__message = message
    choices.push(new inquirer.Separator())
    for (const choice of exitChoices || []) choices.push(choice)
    choices.push({ name: 'Exit', value: 'exit' })
    this.__menu = {
      type: this.__type,
      name: this.__name,
      message: this.__message,
      choices: [...choices],
    } as QuestionCollection<Answers>
  }

  public async run(preSelected?: string): Promise<void> {
    const selected = preSelected ? preSelected : (await inquirer.prompt(this.__menu))[this.__name]
    switch (selected) {
      case 'exit':
        process.exit()
        break
      default:
        await this.__execute(selected)
    }
  }
}
