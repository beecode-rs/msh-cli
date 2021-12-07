import { ChoiceCollection } from 'inquirer'
import { BaseMenu } from 'src/util/base-menu'
import { config } from 'src/util/config'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class MainMenu extends BaseMenu {
  private async __execute(command: string): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const clazz = require(`src/exec/${command}`) as any
    await new clazz().run()
  }
  constructor() {
    const menuItems: { name: string; value: string }[] = []
    if (config().cmd.gitEnabled) menuItems.push({ name: 'Git', value: 'Git' })
    // if (config().cmd.cleanEnabled) menuItems.push({ name: 'Clean', value: 'Clean' })
    if (config().cmd.npmEnabled) menuItems.push({ name: 'NPM', value: 'NPM' })
    // if (config().cmd.prEnabled) menuItems.push({ name: 'Pull Request', value: 'PR' })
    super('What do you want to do?', menuItems as ChoiceCollection)
  }
}
