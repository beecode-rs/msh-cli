import { AppFlow } from '@beecode/msh-app-boot'

import { ParseAndRouteArgs } from '#src/app/init/parse-and-route-args.js'

export class CliApp extends AppFlow {
	constructor() {
		super(new ParseAndRouteArgs())
	}
}
