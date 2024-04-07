import { LifeCycle } from '@beecode/msh-app-boot'

import { cliRouterFactory } from '#src/controller/yargs-router/cli-router'

export class ParseAndRouteArgs extends LifeCycle {
	protected readonly _argv: string[]

	constructor() {
		super({ name: 'ArgsToCommand' })
		this._argv = process.argv.slice(2)
	}

	protected async _createFn(): Promise<void> {
		await cliRouterFactory(process.argv.slice(2)).routeArgv()
	}

	protected async _destroyFn(): Promise<void> {
		// throw new Error('Method not implemented.')
	}
}
