import './index-init'

import { AppStarter } from '@beecode/msh-app-boot'
import { TuiApp } from 'src/app/tui-app'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
new AppStarter(new TuiApp()).start().catch((err: any) => console.log(err)) // eslint-disable-line no-console
