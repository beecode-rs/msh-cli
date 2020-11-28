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
        if (config_1.config.cmd.cleanEnabled)
            menuItems.push({ name: 'Clean', value: 'Clean' });
        if (config_1.config.cmd.npmEnabled)
            menuItems.push({ name: 'NPM', value: 'NPM' });
        if (config_1.config.cmd.prEnabled)
            menuItems.push({ name: 'Pull Request', value: 'PR' });
        super('What do you want to do?', menuItems);
    }
}
exports.MainMenu = MainMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2xpLW1lbnUvbWFpbi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGtEQUE2QztBQUM3Qyw0Q0FBd0M7QUFFeEMsNkRBQTZEO0FBQzdELGFBQWE7QUFDYixNQUFhLFFBQVMsU0FBUSxvQkFBUTtJQUM1QixLQUFLLENBQUMsU0FBUyxDQUFDLE9BQWU7UUFDckMsOERBQThEO1FBQzlELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLE9BQU8sRUFBRSxDQUFRLENBQUE7UUFDbkQsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ3pCLENBQUM7SUFDRDtRQUNFLE1BQU0sU0FBUyxHQUFzQyxFQUFFLENBQUE7UUFDdkQsSUFBSSxlQUFNLENBQUMsR0FBRyxDQUFDLFVBQVU7WUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUN4RSxJQUFJLGVBQU0sQ0FBQyxHQUFHLENBQUMsWUFBWTtZQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQzlFLElBQUksZUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVO1lBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7UUFDeEUsSUFBSSxlQUFNLENBQUMsR0FBRyxDQUFDLFNBQVM7WUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUMvRSxLQUFLLENBQUMseUJBQXlCLEVBQUUsU0FBNkIsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7Q0FDRjtBQWRELDRCQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hvaWNlQ29sbGVjdGlvbiB9IGZyb20gJ2lucXVpcmVyJ1xuaW1wb3J0IHsgQmFzZU1lbnUgfSBmcm9tICdzcmMvdXRpbC9iYXNlLW1lbnUnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdzcmMvdXRpbC9jb25maWcnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjbGFzcyBNYWluTWVudSBleHRlbmRzIEJhc2VNZW51IHtcbiAgcHJpdmF0ZSBhc3luYyBfX2V4ZWN1dGUoY29tbWFuZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbiAgICBjb25zdCBjbGF6eiA9IHJlcXVpcmUoYHNyYy9leGVjLyR7Y29tbWFuZH1gKSBhcyBhbnlcbiAgICBhd2FpdCBuZXcgY2xhenooKS5ydW4oKVxuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG1lbnVJdGVtczogeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfVtdID0gW11cbiAgICBpZiAoY29uZmlnLmNtZC5naXRFbmFibGVkKSBtZW51SXRlbXMucHVzaCh7IG5hbWU6ICdHaXQnLCB2YWx1ZTogJ0dpdCcgfSlcbiAgICBpZiAoY29uZmlnLmNtZC5jbGVhbkVuYWJsZWQpIG1lbnVJdGVtcy5wdXNoKHsgbmFtZTogJ0NsZWFuJywgdmFsdWU6ICdDbGVhbicgfSlcbiAgICBpZiAoY29uZmlnLmNtZC5ucG1FbmFibGVkKSBtZW51SXRlbXMucHVzaCh7IG5hbWU6ICdOUE0nLCB2YWx1ZTogJ05QTScgfSlcbiAgICBpZiAoY29uZmlnLmNtZC5wckVuYWJsZWQpIG1lbnVJdGVtcy5wdXNoKHsgbmFtZTogJ1B1bGwgUmVxdWVzdCcsIHZhbHVlOiAnUFInIH0pXG4gICAgc3VwZXIoJ1doYXQgZG8geW91IHdhbnQgdG8gZG8/JywgbWVudUl0ZW1zIGFzIENob2ljZUNvbGxlY3Rpb24pXG4gIH1cbn1cbiJdfQ==