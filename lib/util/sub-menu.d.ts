import { ChoiceCollection } from 'inquirer';
import { BaseMenu } from '../util/base-menu.js';
export declare abstract class SubMenu extends BaseMenu {
    private __mainMenu;
    protected constructor(message: string, choices: ChoiceCollection);
    run(preSelected?: string): Promise<void>;
}
//# sourceMappingURL=sub-menu.d.ts.map