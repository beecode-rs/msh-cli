import 'src/index-init'

import { AppStarter } from '@beecode/msh-app-boot'
import { CliApp } from 'src/app/cli-app'
import { updateNotifierUtil } from 'src/util/update-notifier-util'

updateNotifierUtil.check().catch((err) => console.log(err)) // eslint-disable-line no-console

new AppStarter(new CliApp()).start().catch((err) => console.log(err)) // eslint-disable-line no-console
