import inquirer, { ChoiceCollection, QuestionCollection } from 'inquirer'

export abstract class BaseMenu {
	private __name = '__menu'
	private __type = 'list'
	private __message: string
	private __menu: QuestionCollection

	private async __execute(command: string): Promise<void> {
		await this[command]()
		// if (cliService.exitAfterCommandExecuted) process.exit()
		await this.run()
	}

	protected constructor(message: string, choices: ChoiceCollection, exitChoices?: ChoiceCollection) {
		if (message) {
			this.__message = message
		}
		choices.push(new inquirer.Separator())
		;(exitChoices ?? []).forEach((choice) => {
			choices.push(choice)
		})

		choices.push({ name: 'Exit', value: 'exit' })
		this.__menu = {
			choices: [...choices],
			message: this.__message,
			name: this.__name,
			type: this.__type,
		} as QuestionCollection
	}

	async run(preSelected?: string): Promise<void> {
		const selected = await this._getSelectedValue(preSelected)
		switch (selected) {
			case 'exit':
				process.exit()
				break
			default:
				await this.__execute(selected)
		}
	}

	protected async _getSelectedValue(perSelected?: string): Promise<string> {
		if (perSelected) {
			return perSelected
		}

		return (await inquirer.prompt(this.__menu))[this.__name]
	}
}
