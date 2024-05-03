import { BaseMenu } from '#src/util/base-menu';
import { config } from '#src/util/config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export class MainMenu extends BaseMenu {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    async __execute(command) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const clazz = import(`src/exec/${command}`);
        await new clazz().run();
    }
    constructor() {
        const menuItems = [];
        if (config().cmd.gitEnabled) {
            menuItems.push({ name: 'Git', value: 'Git' });
        }
        // if (config().cmd.cleanEnabled) menuItems.push({ name: 'Clean', value: 'Clean' })
        if (config().cmd.npmEnabled) {
            menuItems.push({ name: 'NPM', value: 'NPM' });
        }
        // if (config().cmd.prEnabled) menuItems.push({ name: 'Pull Request', value: 'PR' })
        super('What do you want to do?', menuItems);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2xpLW1lbnUvbWFpbi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFFekMsNkRBQTZEO0FBQzdELG1CQUFtQjtBQUNuQixNQUFNLE9BQU8sUUFBUyxTQUFRLFFBQVE7SUFDckMsNkRBQTZEO0lBQzdELG1CQUFtQjtJQUNYLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBZTtRQUN0Qyw4REFBOEQ7UUFDOUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksT0FBTyxFQUFFLENBQVEsQ0FBQTtRQUNsRCxNQUFNLElBQUksS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVEO1FBQ0MsTUFBTSxTQUFTLEdBQXNDLEVBQUUsQ0FBQTtRQUN2RCxJQUFJLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM3QixTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUM5QyxDQUFDO1FBQ0QsbUZBQW1GO1FBQ25GLElBQUksTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBQzlDLENBQUM7UUFDRCxvRkFBb0Y7UUFDcEYsS0FBSyxDQUFDLHlCQUF5QixFQUFFLFNBQTZCLENBQUMsQ0FBQTtJQUNoRSxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaG9pY2VDb2xsZWN0aW9uIH0gZnJvbSAnaW5xdWlyZXInXG5cbmltcG9ydCB7IEJhc2VNZW51IH0gZnJvbSAnI3NyYy91dGlsL2Jhc2UtbWVudSdcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJyNzcmMvdXRpbC9jb25maWcnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1leHBlY3QtZXJyb3JcbmV4cG9ydCBjbGFzcyBNYWluTWVudSBleHRlbmRzIEJhc2VNZW51IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdHByaXZhdGUgYXN5bmMgX19leGVjdXRlKGNvbW1hbmQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXG5cdFx0Y29uc3QgY2xhenogPSBpbXBvcnQoYHNyYy9leGVjLyR7Y29tbWFuZH1gKSBhcyBhbnlcblx0XHRhd2FpdCBuZXcgY2xhenooKS5ydW4oKVxuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Y29uc3QgbWVudUl0ZW1zOiB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9W10gPSBbXVxuXHRcdGlmIChjb25maWcoKS5jbWQuZ2l0RW5hYmxlZCkge1xuXHRcdFx0bWVudUl0ZW1zLnB1c2goeyBuYW1lOiAnR2l0JywgdmFsdWU6ICdHaXQnIH0pXG5cdFx0fVxuXHRcdC8vIGlmIChjb25maWcoKS5jbWQuY2xlYW5FbmFibGVkKSBtZW51SXRlbXMucHVzaCh7IG5hbWU6ICdDbGVhbicsIHZhbHVlOiAnQ2xlYW4nIH0pXG5cdFx0aWYgKGNvbmZpZygpLmNtZC5ucG1FbmFibGVkKSB7XG5cdFx0XHRtZW51SXRlbXMucHVzaCh7IG5hbWU6ICdOUE0nLCB2YWx1ZTogJ05QTScgfSlcblx0XHR9XG5cdFx0Ly8gaWYgKGNvbmZpZygpLmNtZC5wckVuYWJsZWQpIG1lbnVJdGVtcy5wdXNoKHsgbmFtZTogJ1B1bGwgUmVxdWVzdCcsIHZhbHVlOiAnUFInIH0pXG5cdFx0c3VwZXIoJ1doYXQgZG8geW91IHdhbnQgdG8gZG8/JywgbWVudUl0ZW1zIGFzIENob2ljZUNvbGxlY3Rpb24pXG5cdH1cbn1cbiJdfQ==