// @ts-expect-error
import { ChoiceCollection } from 'inquirer'
import { MainMenu } from 'src/controller/cli-menu/main-menu'
import { BaseMenu } from 'src/util/base-menu'
import { config } from 'src/util/config'

export abstract class SubMenu extends BaseMenu {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	private async __mainMenu(): Promise<void> {
		await new MainMenu().run()
	}

	protected constructor(message: string, choices: ChoiceCollection) {
		super(message, choices, [{ name: 'Go Back', value: 'mainMenu' }])
	}

	async run(preSelected?: string): Promise<void> {
		// @ts-expect-error
		if (!config().cmd[`${this.constructor.name.toLowerCase()}Enabled`]) {
			// util.log(`${this.constructor.name.toLowerCase()} command is disabled. Check config file [.msh]`)
			return
		}

		return super.run(preSelected)
	}
}
