import { BaseMenu } from '#src/util/base-menu.js'
import { config } from '#src/util/config.js'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export class MainMenu extends BaseMenu {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	private async __execute(command: string): Promise<void> {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const clazz = import(`src/exec/${command}`) as any
		await new clazz().run()
	}

	constructor() {
		const menuItems: { name: string; value: string }[] = []
		if (config().cmd.gitEnabled) {
			menuItems.push({ name: 'Git', value: 'Git' })
		}
		// if (config().cmd.cleanEnabled) menuItems.push({ name: 'Clean', value: 'Clean' })
		if (config().cmd.npmEnabled) {
			menuItems.push({ name: 'NPM', value: 'NPM' })
		}
		// if (config().cmd.prEnabled) menuItems.push({ name: 'Pull Request', value: 'PR' })
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		super('What do you want to do?', menuItems as any[])
	}
}
