"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubMenu = void 0;
const main_menu_1 = require("src/main-menu");
const base_menu_1 = require("src/util/base-menu");
const config_1 = require("src/util/config");
const index_1 = require("src/util/index");
class SubMenu extends base_menu_1.BaseMenu {
    async __mainMenu() {
        await new main_menu_1.MainMenu().run();
    }
    constructor(message, choices) {
        super(message, choices, [{ name: 'Go Back', value: 'mainMenu' }]);
    }
    async run(preSelected) {
        if (!config_1.config.cmd[`${this.constructor.name.toLowerCase()}Enabled`]) {
            index_1.util.log(`${this.constructor.name.toLowerCase()} command is disabled. Check config file [.msh]`);
            return;
        }
        return super.run(preSelected);
    }
}
exports.SubMenu = SubMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9zdWItbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw2Q0FBd0M7QUFDeEMsa0RBQTZDO0FBQzdDLDRDQUF3QztBQUN4QywwQ0FBcUM7QUFFckMsTUFBc0IsT0FBUSxTQUFRLG9CQUFRO0lBQ3BDLEtBQUssQ0FBQyxVQUFVO1FBQ3RCLE1BQU0sSUFBSSxvQkFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUNELFlBQXNCLE9BQWUsRUFBRSxPQUF5QjtRQUM5RCxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQW9CO1FBQ25DLElBQUksQ0FBQyxlQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxFQUFFO1lBQ2hFLFlBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsZ0RBQWdELENBQUMsQ0FBQTtZQUNoRyxPQUFNO1NBQ1A7UUFDRCxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0IsQ0FBQztDQUNGO0FBZkQsMEJBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaG9pY2VDb2xsZWN0aW9uIH0gZnJvbSAnaW5xdWlyZXInXG5pbXBvcnQgeyBNYWluTWVudSB9IGZyb20gJ3NyYy9tYWluLW1lbnUnXG5pbXBvcnQgeyBCYXNlTWVudSB9IGZyb20gJ3NyYy91dGlsL2Jhc2UtbWVudSdcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ3NyYy91dGlsL2NvbmZpZydcbmltcG9ydCB7IHV0aWwgfSBmcm9tICdzcmMvdXRpbC9pbmRleCdcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1Yk1lbnUgZXh0ZW5kcyBCYXNlTWVudSB7XG4gIHByaXZhdGUgYXN5bmMgX19tYWluTWVudSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBuZXcgTWFpbk1lbnUoKS5ydW4oKVxuICB9XG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNob2ljZXM6IENob2ljZUNvbGxlY3Rpb24pIHtcbiAgICBzdXBlcihtZXNzYWdlLCBjaG9pY2VzLCBbeyBuYW1lOiAnR28gQmFjaycsIHZhbHVlOiAnbWFpbk1lbnUnIH1dKVxuICB9XG5cbiAgcHVibGljIGFzeW5jIHJ1bihwcmVTZWxlY3RlZD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghY29uZmlnLmNtZFtgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKX1FbmFibGVkYF0pIHtcbiAgICAgIHV0aWwubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpfSBjb21tYW5kIGlzIGRpc2FibGVkLiBDaGVjayBjb25maWcgZmlsZSBbLm1zaF1gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJldHVybiBzdXBlci5ydW4ocHJlU2VsZWN0ZWQpXG4gIH1cbn1cbiJdfQ==