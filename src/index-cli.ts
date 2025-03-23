import '#src/index-init'

import { AppStarter } from '@beecode/msh-app-boot'

import { CliApp } from '#src/app/cli-app'
import { updateNotifierUtil } from '#src/util/update-notifier-util'

updateNotifierUtil.check()

new AppStarter(new CliApp()).start().catch((err: unknown) => {
	if (err instanceof Error) {
		console.error(err.message) // eslint-disable-line no-console

		return
	}
	console.log(err) // eslint-disable-line no-console
})
