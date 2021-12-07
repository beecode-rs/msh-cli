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
        if ((0, config_1.config)().cmd.gitEnabled)
            menuItems.push({ name: 'Git', value: 'Git' });
        // if (config().cmd.cleanEnabled) menuItems.push({ name: 'Clean', value: 'Clean' })
        if ((0, config_1.config)().cmd.npmEnabled)
            menuItems.push({ name: 'NPM', value: 'NPM' });
        // if (config().cmd.prEnabled) menuItems.push({ name: 'Pull Request', value: 'PR' })
        super('What do you want to do?', menuItems);
    }
}
exports.MainMenu = MainMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2xpLW1lbnUvbWFpbi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGtEQUE2QztBQUM3Qyw0Q0FBd0M7QUFFeEMsNkRBQTZEO0FBQzdELGFBQWE7QUFDYixNQUFhLFFBQVMsU0FBUSxvQkFBUTtJQUM1QixLQUFLLENBQUMsU0FBUyxDQUFDLE9BQWU7UUFDckMsOERBQThEO1FBQzlELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLE9BQU8sRUFBRSxDQUFRLENBQUE7UUFDbkQsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ3pCLENBQUM7SUFDRDtRQUNFLE1BQU0sU0FBUyxHQUFzQyxFQUFFLENBQUE7UUFDdkQsSUFBSSxJQUFBLGVBQU0sR0FBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVO1lBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7UUFDMUUsbUZBQW1GO1FBQ25GLElBQUksSUFBQSxlQUFNLEdBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVTtZQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBQzFFLG9GQUFvRjtRQUNwRixLQUFLLENBQUMseUJBQXlCLEVBQUUsU0FBNkIsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7Q0FDRjtBQWRELDRCQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hvaWNlQ29sbGVjdGlvbiB9IGZyb20gJ2lucXVpcmVyJ1xuaW1wb3J0IHsgQmFzZU1lbnUgfSBmcm9tICdzcmMvdXRpbC9iYXNlLW1lbnUnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdzcmMvdXRpbC9jb25maWcnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjbGFzcyBNYWluTWVudSBleHRlbmRzIEJhc2VNZW51IHtcbiAgcHJpdmF0ZSBhc3luYyBfX2V4ZWN1dGUoY29tbWFuZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbiAgICBjb25zdCBjbGF6eiA9IHJlcXVpcmUoYHNyYy9leGVjLyR7Y29tbWFuZH1gKSBhcyBhbnlcbiAgICBhd2FpdCBuZXcgY2xhenooKS5ydW4oKVxuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG1lbnVJdGVtczogeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfVtdID0gW11cbiAgICBpZiAoY29uZmlnKCkuY21kLmdpdEVuYWJsZWQpIG1lbnVJdGVtcy5wdXNoKHsgbmFtZTogJ0dpdCcsIHZhbHVlOiAnR2l0JyB9KVxuICAgIC8vIGlmIChjb25maWcoKS5jbWQuY2xlYW5FbmFibGVkKSBtZW51SXRlbXMucHVzaCh7IG5hbWU6ICdDbGVhbicsIHZhbHVlOiAnQ2xlYW4nIH0pXG4gICAgaWYgKGNvbmZpZygpLmNtZC5ucG1FbmFibGVkKSBtZW51SXRlbXMucHVzaCh7IG5hbWU6ICdOUE0nLCB2YWx1ZTogJ05QTScgfSlcbiAgICAvLyBpZiAoY29uZmlnKCkuY21kLnByRW5hYmxlZCkgbWVudUl0ZW1zLnB1c2goeyBuYW1lOiAnUHVsbCBSZXF1ZXN0JywgdmFsdWU6ICdQUicgfSlcbiAgICBzdXBlcignV2hhdCBkbyB5b3Ugd2FudCB0byBkbz8nLCBtZW51SXRlbXMgYXMgQ2hvaWNlQ29sbGVjdGlvbilcbiAgfVxufVxuIl19