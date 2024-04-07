import { ChoiceCollection } from 'inquirer';
export declare abstract class BaseMenu {
    private __name;
    private __type;
    private __message;
    private __menu;
    private __execute;
    protected constructor(message: string, choices: ChoiceCollection, exitChoices?: ChoiceCollection);
    run(preSelected?: string): Promise<void>;
    protected _getSelectedValue(perSelected?: string): Promise<string>;
}
//# sourceMappingURL=base-menu.d.ts.map