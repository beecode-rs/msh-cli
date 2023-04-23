"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMenu = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
class BaseMenu {
    __name = '__menu';
    __type = 'list';
    __message;
    __menu;
    async __execute(command) {
        await this[command]();
        // if (cliService.exitAfterCommandExecuted) process.exit()
        await this.run();
    }
    constructor(message, choices, exitChoices) {
        if (message) {
            this.__message = message;
        }
        choices.push(new inquirer_1.default.Separator());
        (exitChoices ?? []).forEach((choice) => {
            choices.push(choice);
        });
        choices.push({ name: 'Exit', value: 'exit' });
        this.__menu = {
            choices: [...choices],
            message: this.__message,
            name: this.__name,
            type: this.__type,
        };
    }
    async run(preSelected) {
        const selected = await this._getSelectedValue(preSelected);
        switch (selected) {
            case 'exit':
                process.exit();
                break;
            default:
                await this.__execute(selected);
        }
    }
    async _getSelectedValue(perSelected) {
        if (perSelected) {
            return perSelected;
        }
        return (await inquirer_1.default.prompt(this.__menu))[this.__name];
    }
}
exports.BaseMenu = BaseMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvYmFzZS1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdEQUF5RTtBQUV6RSxNQUFzQixRQUFRO0lBQ3JCLE1BQU0sR0FBRyxRQUFRLENBQUE7SUFDakIsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUNmLFNBQVMsQ0FBUTtJQUNqQixNQUFNLENBQW9CO0lBRTFCLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBZTtRQUN0QyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBO1FBQ3JCLDBEQUEwRDtRQUMxRCxNQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNqQixDQUFDO0lBRUQsWUFBc0IsT0FBZSxFQUFFLE9BQXlCLEVBQUUsV0FBOEI7UUFDL0YsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQTtTQUN4QjtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxrQkFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQ3JDO1FBQUEsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdkMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNyQixDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDYixPQUFPLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNLLENBQUE7SUFDeEIsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBb0I7UUFDN0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUQsUUFBUSxRQUFRLEVBQUU7WUFDakIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDZCxNQUFLO1lBQ047Z0JBQ0MsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQy9CO0lBQ0YsQ0FBQztJQUVTLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxXQUFvQjtRQUNyRCxJQUFJLFdBQVcsRUFBRTtZQUNoQixPQUFPLFdBQVcsQ0FBQTtTQUNsQjtRQUVELE9BQU8sQ0FBQyxNQUFNLGtCQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0NBQ0Q7QUFoREQsNEJBZ0RDIn0=