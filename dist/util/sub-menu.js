"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubMenu = void 0;
const main_menu_1 = require("../controller/cli-menu/main-menu");
const base_menu_1 = require("../util/base-menu");
const config_1 = require("../util/config");
class SubMenu extends base_menu_1.BaseMenu {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    async __mainMenu() {
        await new main_menu_1.MainMenu().run();
    }
    constructor(message, choices) {
        super(message, choices, [{ name: 'Go Back', value: 'mainMenu' }]);
    }
    async run(preSelected) {
        if (!(0, config_1.config)().cmd[`${this.constructor.name.toLowerCase()}Enabled`]) {
            // util.log(`${this.constructor.name.toLowerCase()} command is disabled. Check config file [.msh]`)
            return;
        }
        return super.run(preSelected);
    }
}
exports.SubMenu = SubMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9zdWItbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpRUFBNEQ7QUFDNUQsa0RBQTZDO0FBQzdDLDRDQUF3QztBQUV4QyxNQUFzQixPQUFRLFNBQVEsb0JBQVE7SUFDN0MsNkRBQTZEO0lBQzdELG1CQUFtQjtJQUNYLEtBQUssQ0FBQyxVQUFVO1FBQ3ZCLE1BQU0sSUFBSSxvQkFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVELFlBQXNCLE9BQWUsRUFBRSxPQUF5QjtRQUMvRCxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQW9CO1FBQzdCLElBQUksQ0FBQyxJQUFBLGVBQU0sR0FBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsRUFBRTtZQUNuRSxtR0FBbUc7WUFDbkcsT0FBTTtTQUNOO1FBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzlCLENBQUM7Q0FDRDtBQW5CRCwwQkFtQkMifQ==