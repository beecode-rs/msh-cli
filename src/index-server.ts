import './index-init'

import { AppStarter } from '@beecode/msh-app-boot'

import { HttpServerApp } from '#src/app/http-server-app'

new AppStarter(new HttpServerApp()).start().catch((err: unknown) => {
	if (err instanceof Error) {
		console.error(err.message) // eslint-disable-line no-console

		return
	}
	console.log(err) // eslint-disable-line no-console
})
