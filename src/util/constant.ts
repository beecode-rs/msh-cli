import { singletonPattern } from '@beecode/msh-util/lib/singleton/pattern'

const packageJson = require('../../package.json') // eslint-disable-line

export const constant = singletonPattern(() =>
	Object.freeze({
		projectName: packageJson.name,
		projectVersion: packageJson.version,
	})
)
