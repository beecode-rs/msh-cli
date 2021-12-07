"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubMenu = void 0;
const main_menu_1 = require("src/controller/cli-menu/main-menu");
const base_menu_1 = require("src/util/base-menu");
const config_1 = require("src/util/config");
class SubMenu extends base_menu_1.BaseMenu {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9zdWItbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpRUFBNEQ7QUFDNUQsa0RBQTZDO0FBQzdDLDRDQUF3QztBQUV4QyxNQUFzQixPQUFRLFNBQVEsb0JBQVE7SUFDcEMsS0FBSyxDQUFDLFVBQVU7UUFDdEIsTUFBTSxJQUFJLG9CQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBQ0QsWUFBc0IsT0FBZSxFQUFFLE9BQXlCO1FBQzlELEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBb0I7UUFDbkMsSUFBSSxDQUFDLElBQUEsZUFBTSxHQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxFQUFFO1lBQ2xFLG1HQUFtRztZQUNuRyxPQUFNO1NBQ1A7UUFDRCxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0IsQ0FBQztDQUNGO0FBZkQsMEJBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaG9pY2VDb2xsZWN0aW9uIH0gZnJvbSAnaW5xdWlyZXInXG5pbXBvcnQgeyBNYWluTWVudSB9IGZyb20gJ3NyYy9jb250cm9sbGVyL2NsaS1tZW51L21haW4tbWVudSdcbmltcG9ydCB7IEJhc2VNZW51IH0gZnJvbSAnc3JjL3V0aWwvYmFzZS1tZW51J1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3ViTWVudSBleHRlbmRzIEJhc2VNZW51IHtcbiAgcHJpdmF0ZSBhc3luYyBfX21haW5NZW51KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IG5ldyBNYWluTWVudSgpLnJ1bigpXG4gIH1cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgY2hvaWNlczogQ2hvaWNlQ29sbGVjdGlvbikge1xuICAgIHN1cGVyKG1lc3NhZ2UsIGNob2ljZXMsIFt7IG5hbWU6ICdHbyBCYWNrJywgdmFsdWU6ICdtYWluTWVudScgfV0pXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcnVuKHByZVNlbGVjdGVkPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCFjb25maWcoKS5jbWRbYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCl9RW5hYmxlZGBdKSB7XG4gICAgICAvLyB1dGlsLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKX0gY29tbWFuZCBpcyBkaXNhYmxlZC4gQ2hlY2sgY29uZmlnIGZpbGUgWy5tc2hdYClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXR1cm4gc3VwZXIucnVuKHByZVNlbGVjdGVkKVxuICB9XG59XG4iXX0=