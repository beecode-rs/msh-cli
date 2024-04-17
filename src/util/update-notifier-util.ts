import packageJson from '../../package.json' assert { type: 'json' }
import updateNotifier from 'update-notifier'

export const updateNotifierUtil = {
	check: async (): Promise<void> => {
		updateNotifier({ pkg: packageJson }).notify()
	},
}
