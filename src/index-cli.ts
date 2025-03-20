import '#src/index-init'

import { AppStarter } from '@beecode/msh-app-boot'

import { CliApp } from '#src/app/cli-app'
import { updateNotifierUtil } from '#src/util/update-notifier-util'

void updateNotifierUtil.check()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
new AppStarter(new CliApp()).start().catch((err: any) => {
	console.log(err) // eslint-disable-line no-console
})
