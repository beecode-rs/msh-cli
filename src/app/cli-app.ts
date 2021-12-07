import { AppFlow } from '@beecode/msh-node-app'
import { ParseAndRouteArgs } from 'src/app/init/parse-and-route-args'

export class CliApp extends AppFlow {
  constructor() {
    super(new ParseAndRouteArgs())
  }
}
