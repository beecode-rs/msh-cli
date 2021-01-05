"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMenu = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
class BaseMenu {
    constructor(message, choices, exitChoices) {
        this.__name = '__menu';
        this.__type = 'list';
        if (message)
            this.__message = message;
        choices.push(new inquirer_1.default.Separator());
        for (const choice of exitChoices || [])
            choices.push(choice);
        choices.push({ name: 'Exit', value: 'exit' });
        this.__menu = {
            type: this.__type,
            name: this.__name,
            message: this.__message,
            choices: [...choices],
        };
    }
    async __execute(command) {
        await this[command]();
        // if (cliService.exitAfterCommandExecuted) process.exit()
        await this.run();
    }
    async run(preSelected) {
        const selected = preSelected ? preSelected : (await inquirer_1.default.prompt(this.__menu))[this.__name];
        switch (selected) {
            case 'exit':
                process.exit();
                break;
            default:
                await this.__execute(selected);
        }
    }
}
exports.BaseMenu = BaseMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvYmFzZS1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdEQUFrRjtBQUdsRixNQUFzQixRQUFRO0lBWTVCLFlBQXNCLE9BQWUsRUFBRSxPQUF5QixFQUFFLFdBQThCO1FBWHhGLFdBQU0sR0FBRyxRQUFRLENBQUE7UUFDakIsV0FBTSxHQUFHLE1BQU0sQ0FBQTtRQVdyQixJQUFJLE9BQU87WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQTtRQUNyQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksa0JBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBO1FBQ3RDLEtBQUssTUFBTSxNQUFNLElBQUksV0FBVyxJQUFJLEVBQUU7WUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzVELE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUztZQUN2QixPQUFPLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztTQUNTLENBQUE7SUFDbEMsQ0FBQztJQWpCTyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQWU7UUFDckMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQTtRQUNyQiwwREFBMEQ7UUFDMUQsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQWVNLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBb0I7UUFDbkMsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDOUYsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxNQUFNO2dCQUNULE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDZCxNQUFLO1lBQ1A7Z0JBQ0UsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQ2pDO0lBQ0gsQ0FBQztDQUNGO0FBbkNELDRCQW1DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbnF1aXJlciwgeyBBbnN3ZXJzLCBDaG9pY2VDb2xsZWN0aW9uLCBRdWVzdGlvbkNvbGxlY3Rpb24gfSBmcm9tICdpbnF1aXJlcidcbmltcG9ydCB7IGNsaVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9jbGktc2VydmljZSdcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VNZW51IHtcbiAgcHJpdmF0ZSBfX25hbWUgPSAnX19tZW51J1xuICBwcml2YXRlIF9fdHlwZSA9ICdsaXN0J1xuICBwcml2YXRlIF9fbWVzc2FnZTogc3RyaW5nXG4gIHByaXZhdGUgX19tZW51OiBRdWVzdGlvbkNvbGxlY3Rpb248QW5zd2Vycz5cblxuICBwcml2YXRlIGFzeW5jIF9fZXhlY3V0ZShjb21tYW5kOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzW2NvbW1hbmRdKClcbiAgICAvLyBpZiAoY2xpU2VydmljZS5leGl0QWZ0ZXJDb21tYW5kRXhlY3V0ZWQpIHByb2Nlc3MuZXhpdCgpXG4gICAgYXdhaXQgdGhpcy5ydW4oKVxuICB9XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgY2hvaWNlczogQ2hvaWNlQ29sbGVjdGlvbiwgZXhpdENob2ljZXM/OiBDaG9pY2VDb2xsZWN0aW9uKSB7XG4gICAgaWYgKG1lc3NhZ2UpIHRoaXMuX19tZXNzYWdlID0gbWVzc2FnZVxuICAgIGNob2ljZXMucHVzaChuZXcgaW5xdWlyZXIuU2VwYXJhdG9yKCkpXG4gICAgZm9yIChjb25zdCBjaG9pY2Ugb2YgZXhpdENob2ljZXMgfHwgW10pIGNob2ljZXMucHVzaChjaG9pY2UpXG4gICAgY2hvaWNlcy5wdXNoKHsgbmFtZTogJ0V4aXQnLCB2YWx1ZTogJ2V4aXQnIH0pXG4gICAgdGhpcy5fX21lbnUgPSB7XG4gICAgICB0eXBlOiB0aGlzLl9fdHlwZSxcbiAgICAgIG5hbWU6IHRoaXMuX19uYW1lLFxuICAgICAgbWVzc2FnZTogdGhpcy5fX21lc3NhZ2UsXG4gICAgICBjaG9pY2VzOiBbLi4uY2hvaWNlc10sXG4gICAgfSBhcyBRdWVzdGlvbkNvbGxlY3Rpb248QW5zd2Vycz5cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBydW4ocHJlU2VsZWN0ZWQ/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHByZVNlbGVjdGVkID8gcHJlU2VsZWN0ZWQgOiAoYXdhaXQgaW5xdWlyZXIucHJvbXB0KHRoaXMuX19tZW51KSlbdGhpcy5fX25hbWVdXG4gICAgc3dpdGNoIChzZWxlY3RlZCkge1xuICAgICAgY2FzZSAnZXhpdCc6XG4gICAgICAgIHByb2Nlc3MuZXhpdCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhd2FpdCB0aGlzLl9fZXhlY3V0ZShzZWxlY3RlZClcbiAgICB9XG4gIH1cbn1cbiJdfQ==