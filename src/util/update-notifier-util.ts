import updateNotifier from 'update-notifier'

import packageJson from '#packageJson' with { type: 'json' }

export const updateNotifierUtil = {
	check: (): void => {
		updateNotifier({ pkg: packageJson }).notify()
	},
}
