import { BaseMenu } from '#src/util/base-menu.js'

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
		const menuItems: { name: string; value: string }[] = [
			{ name: 'Git', value: 'Git' },
			{ name: 'NPM', value: 'NPM' },
		]
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		super('What do you want to do?', menuItems as any[])
	}
}
