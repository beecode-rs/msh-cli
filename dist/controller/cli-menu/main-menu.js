"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenu = void 0;
const base_menu_1 = require("src/util/base-menu");
const config_1 = require("src/util/config");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
class MainMenu extends base_menu_1.BaseMenu {
    async __execute(command) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const clazz = require(`src/exec/${command}`);
        await new clazz().run();
    }
    constructor() {
        const menuItems = [];
        if (config_1.config.cmd.gitEnabled)
            menuItems.push({ name: 'Git', value: 'Git' });
        // if (config.cmd.cleanEnabled) menuItems.push({ name: 'Clean', value: 'Clean' })
        if (config_1.config.cmd.npmEnabled)
            menuItems.push({ name: 'NPM', value: 'NPM' });
        // if (config.cmd.prEnabled) menuItems.push({ name: 'Pull Request', value: 'PR' })
        super('What do you want to do?', menuItems);
    }
}
exports.MainMenu = MainMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2xpLW1lbnUvbWFpbi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGtEQUE2QztBQUM3Qyw0Q0FBd0M7QUFFeEMsNkRBQTZEO0FBQzdELGFBQWE7QUFDYixNQUFhLFFBQVMsU0FBUSxvQkFBUTtJQUM1QixLQUFLLENBQUMsU0FBUyxDQUFDLE9BQWU7UUFDckMsOERBQThEO1FBQzlELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLE9BQU8sRUFBRSxDQUFRLENBQUE7UUFDbkQsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ3pCLENBQUM7SUFDRDtRQUNFLE1BQU0sU0FBUyxHQUFzQyxFQUFFLENBQUE7UUFDdkQsSUFBSSxlQUFNLENBQUMsR0FBRyxDQUFDLFVBQVU7WUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUN4RSxpRkFBaUY7UUFDakYsSUFBSSxlQUFNLENBQUMsR0FBRyxDQUFDLFVBQVU7WUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUN4RSxrRkFBa0Y7UUFDbEYsS0FBSyxDQUFDLHlCQUF5QixFQUFFLFNBQTZCLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0NBQ0Y7QUFkRCw0QkFjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENob2ljZUNvbGxlY3Rpb24gfSBmcm9tICdpbnF1aXJlcidcbmltcG9ydCB7IEJhc2VNZW51IH0gZnJvbSAnc3JjL3V0aWwvYmFzZS1tZW51J1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBCYXNlTWVudSB7XG4gIHByaXZhdGUgYXN5bmMgX19leGVjdXRlKGNvbW1hbmQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXG4gICAgY29uc3QgY2xhenogPSByZXF1aXJlKGBzcmMvZXhlYy8ke2NvbW1hbmR9YCkgYXMgYW55XG4gICAgYXdhaXQgbmV3IGNsYXp6KCkucnVuKClcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBtZW51SXRlbXM6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH1bXSA9IFtdXG4gICAgaWYgKGNvbmZpZy5jbWQuZ2l0RW5hYmxlZCkgbWVudUl0ZW1zLnB1c2goeyBuYW1lOiAnR2l0JywgdmFsdWU6ICdHaXQnIH0pXG4gICAgLy8gaWYgKGNvbmZpZy5jbWQuY2xlYW5FbmFibGVkKSBtZW51SXRlbXMucHVzaCh7IG5hbWU6ICdDbGVhbicsIHZhbHVlOiAnQ2xlYW4nIH0pXG4gICAgaWYgKGNvbmZpZy5jbWQubnBtRW5hYmxlZCkgbWVudUl0ZW1zLnB1c2goeyBuYW1lOiAnTlBNJywgdmFsdWU6ICdOUE0nIH0pXG4gICAgLy8gaWYgKGNvbmZpZy5jbWQucHJFbmFibGVkKSBtZW51SXRlbXMucHVzaCh7IG5hbWU6ICdQdWxsIFJlcXVlc3QnLCB2YWx1ZTogJ1BSJyB9KVxuICAgIHN1cGVyKCdXaGF0IGRvIHlvdSB3YW50IHRvIGRvPycsIG1lbnVJdGVtcyBhcyBDaG9pY2VDb2xsZWN0aW9uKVxuICB9XG59XG4iXX0=