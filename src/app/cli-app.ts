import { AppFlow } from '@beecode/msh-app-boot'

import { ParseAndRouteArgs } from '#/app/init/parse-and-route-args'

export class CliApp extends AppFlow {
	constructor() {
		super(new ParseAndRouteArgs())
	}
}
