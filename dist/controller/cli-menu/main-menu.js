"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenu = void 0;
const base_menu_1 = require("../../util/base-menu");
const config_1 = require("../../util/config");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
class MainMenu extends base_menu_1.BaseMenu {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    async __execute(command) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const clazz = require(`src/exec/${command}`);
        await new clazz().run();
    }
    constructor() {
        const menuItems = [];
        if ((0, config_1.config)().cmd.gitEnabled) {
            menuItems.push({ name: 'Git', value: 'Git' });
        }
        // if (config().cmd.cleanEnabled) menuItems.push({ name: 'Clean', value: 'Clean' })
        if ((0, config_1.config)().cmd.npmEnabled) {
            menuItems.push({ name: 'NPM', value: 'NPM' });
        }
        // if (config().cmd.prEnabled) menuItems.push({ name: 'Pull Request', value: 'PR' })
        super('What do you want to do?', menuItems);
    }
}
exports.MainMenu = MainMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2xpLW1lbnUvbWFpbi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGtEQUE2QztBQUM3Qyw0Q0FBd0M7QUFFeEMsNkRBQTZEO0FBQzdELG1CQUFtQjtBQUNuQixNQUFhLFFBQVMsU0FBUSxvQkFBUTtJQUNyQyw2REFBNkQ7SUFDN0QsbUJBQW1CO0lBQ1gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFlO1FBQ3RDLDhEQUE4RDtRQUM5RCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxPQUFPLEVBQUUsQ0FBUSxDQUFBO1FBQ25ELE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBRUQ7UUFDQyxNQUFNLFNBQVMsR0FBc0MsRUFBRSxDQUFBO1FBQ3ZELElBQUksSUFBQSxlQUFNLEdBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQzVCLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1NBQzdDO1FBQ0QsbUZBQW1GO1FBQ25GLElBQUksSUFBQSxlQUFNLEdBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQzVCLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1NBQzdDO1FBQ0Qsb0ZBQW9GO1FBQ3BGLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxTQUE2QixDQUFDLENBQUE7SUFDaEUsQ0FBQztDQUNEO0FBckJELDRCQXFCQyJ9