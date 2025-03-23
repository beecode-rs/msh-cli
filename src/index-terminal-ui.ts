import './index-init'

import { AppStarter } from '@beecode/msh-app-boot'

import { TuiApp } from '#src/app/tui-app'

new AppStarter(new TuiApp()).start().catch((err: unknown) => {
	if (err instanceof Error) {
		console.error(err.message) // eslint-disable-line no-console

		return
	}

	console.log(err) // eslint-disable-line no-console
})
