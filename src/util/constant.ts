import packageJson from '../../package.json' assert { type: 'json' }
import { singletonPattern } from '@beecode/msh-util/singleton/pattern'

export const constant = singletonPattern(() =>
	Object.freeze({
		projectName: packageJson.name,
		projectVersion: packageJson.version,
	})
)
