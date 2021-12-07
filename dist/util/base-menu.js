"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMenu = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
// import { cliService } from 'src/service/cli-service'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvYmFzZS1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdEQUFrRjtBQUNsRix1REFBdUQ7QUFFdkQsTUFBc0IsUUFBUTtJQUNwQixNQUFNLEdBQUcsUUFBUSxDQUFBO0lBQ2pCLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDZixTQUFTLENBQVE7SUFDakIsTUFBTSxDQUE2QjtJQUVuQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQWU7UUFDckMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQTtRQUNyQiwwREFBMEQ7UUFDMUQsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQUVELFlBQXNCLE9BQWUsRUFBRSxPQUF5QixFQUFFLFdBQThCO1FBQzlGLElBQUksT0FBTztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFBO1FBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxrQkFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7UUFDdEMsS0FBSyxNQUFNLE1BQU0sSUFBSSxXQUFXLElBQUksRUFBRTtZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDNUQsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO1NBQ1MsQ0FBQTtJQUNsQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFvQjtRQUNuQyxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLGtCQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM5RixRQUFRLFFBQVEsRUFBRTtZQUNoQixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBO2dCQUNkLE1BQUs7WUFDUDtnQkFDRSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDakM7SUFDSCxDQUFDO0NBQ0Y7QUFuQ0QsNEJBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlucXVpcmVyLCB7IEFuc3dlcnMsIENob2ljZUNvbGxlY3Rpb24sIFF1ZXN0aW9uQ29sbGVjdGlvbiB9IGZyb20gJ2lucXVpcmVyJ1xuLy8gaW1wb3J0IHsgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL2NsaS1zZXJ2aWNlJ1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZU1lbnUge1xuICBwcml2YXRlIF9fbmFtZSA9ICdfX21lbnUnXG4gIHByaXZhdGUgX190eXBlID0gJ2xpc3QnXG4gIHByaXZhdGUgX19tZXNzYWdlOiBzdHJpbmdcbiAgcHJpdmF0ZSBfX21lbnU6IFF1ZXN0aW9uQ29sbGVjdGlvbjxBbnN3ZXJzPlxuXG4gIHByaXZhdGUgYXN5bmMgX19leGVjdXRlKGNvbW1hbmQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXNbY29tbWFuZF0oKVxuICAgIC8vIGlmIChjbGlTZXJ2aWNlLmV4aXRBZnRlckNvbW1hbmRFeGVjdXRlZCkgcHJvY2Vzcy5leGl0KClcbiAgICBhd2FpdCB0aGlzLnJ1bigpXG4gIH1cblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBjaG9pY2VzOiBDaG9pY2VDb2xsZWN0aW9uLCBleGl0Q2hvaWNlcz86IENob2ljZUNvbGxlY3Rpb24pIHtcbiAgICBpZiAobWVzc2FnZSkgdGhpcy5fX21lc3NhZ2UgPSBtZXNzYWdlXG4gICAgY2hvaWNlcy5wdXNoKG5ldyBpbnF1aXJlci5TZXBhcmF0b3IoKSlcbiAgICBmb3IgKGNvbnN0IGNob2ljZSBvZiBleGl0Q2hvaWNlcyB8fCBbXSkgY2hvaWNlcy5wdXNoKGNob2ljZSlcbiAgICBjaG9pY2VzLnB1c2goeyBuYW1lOiAnRXhpdCcsIHZhbHVlOiAnZXhpdCcgfSlcbiAgICB0aGlzLl9fbWVudSA9IHtcbiAgICAgIHR5cGU6IHRoaXMuX190eXBlLFxuICAgICAgbmFtZTogdGhpcy5fX25hbWUsXG4gICAgICBtZXNzYWdlOiB0aGlzLl9fbWVzc2FnZSxcbiAgICAgIGNob2ljZXM6IFsuLi5jaG9pY2VzXSxcbiAgICB9IGFzIFF1ZXN0aW9uQ29sbGVjdGlvbjxBbnN3ZXJzPlxuICB9XG5cbiAgcHVibGljIGFzeW5jIHJ1bihwcmVTZWxlY3RlZD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gcHJlU2VsZWN0ZWQgPyBwcmVTZWxlY3RlZCA6IChhd2FpdCBpbnF1aXJlci5wcm9tcHQodGhpcy5fX21lbnUpKVt0aGlzLl9fbmFtZV1cbiAgICBzd2l0Y2ggKHNlbGVjdGVkKSB7XG4gICAgICBjYXNlICdleGl0JzpcbiAgICAgICAgcHJvY2Vzcy5leGl0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGF3YWl0IHRoaXMuX19leGVjdXRlKHNlbGVjdGVkKVxuICAgIH1cbiAgfVxufVxuIl19