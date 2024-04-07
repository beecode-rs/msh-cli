import { BaseMenu } from '../../util/base-menu.js';
import { config } from '../../util/config.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export class MainMenu extends BaseMenu {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    async __execute(command) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const clazz = require(`src/exec/${command}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2xpLW1lbnUvbWFpbi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFFekMsNkRBQTZEO0FBQzdELG1CQUFtQjtBQUNuQixNQUFNLE9BQU8sUUFBUyxTQUFRLFFBQVE7SUFDckMsNkRBQTZEO0lBQzdELG1CQUFtQjtJQUNYLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBZTtRQUN0Qyw4REFBOEQ7UUFDOUQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksT0FBTyxFQUFFLENBQVEsQ0FBQTtRQUNuRCxNQUFNLElBQUksS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVEO1FBQ0MsTUFBTSxTQUFTLEdBQXNDLEVBQUUsQ0FBQTtRQUN2RCxJQUFJLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM3QixTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUM5QyxDQUFDO1FBQ0QsbUZBQW1GO1FBQ25GLElBQUksTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBQzlDLENBQUM7UUFDRCxvRkFBb0Y7UUFDcEYsS0FBSyxDQUFDLHlCQUF5QixFQUFFLFNBQTZCLENBQUMsQ0FBQTtJQUNoRSxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaG9pY2VDb2xsZWN0aW9uIH0gZnJvbSAnaW5xdWlyZXInXG5cbmltcG9ydCB7IEJhc2VNZW51IH0gZnJvbSAnI3NyYy91dGlsL2Jhc2UtbWVudSdcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJyNzcmMvdXRpbC9jb25maWcnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1leHBlY3QtZXJyb3JcbmV4cG9ydCBjbGFzcyBNYWluTWVudSBleHRlbmRzIEJhc2VNZW51IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdHByaXZhdGUgYXN5bmMgX19leGVjdXRlKGNvbW1hbmQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXG5cdFx0Y29uc3QgY2xhenogPSByZXF1aXJlKGBzcmMvZXhlYy8ke2NvbW1hbmR9YCkgYXMgYW55XG5cdFx0YXdhaXQgbmV3IGNsYXp6KCkucnVuKClcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGNvbnN0IG1lbnVJdGVtczogeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfVtdID0gW11cblx0XHRpZiAoY29uZmlnKCkuY21kLmdpdEVuYWJsZWQpIHtcblx0XHRcdG1lbnVJdGVtcy5wdXNoKHsgbmFtZTogJ0dpdCcsIHZhbHVlOiAnR2l0JyB9KVxuXHRcdH1cblx0XHQvLyBpZiAoY29uZmlnKCkuY21kLmNsZWFuRW5hYmxlZCkgbWVudUl0ZW1zLnB1c2goeyBuYW1lOiAnQ2xlYW4nLCB2YWx1ZTogJ0NsZWFuJyB9KVxuXHRcdGlmIChjb25maWcoKS5jbWQubnBtRW5hYmxlZCkge1xuXHRcdFx0bWVudUl0ZW1zLnB1c2goeyBuYW1lOiAnTlBNJywgdmFsdWU6ICdOUE0nIH0pXG5cdFx0fVxuXHRcdC8vIGlmIChjb25maWcoKS5jbWQucHJFbmFibGVkKSBtZW51SXRlbXMucHVzaCh7IG5hbWU6ICdQdWxsIFJlcXVlc3QnLCB2YWx1ZTogJ1BSJyB9KVxuXHRcdHN1cGVyKCdXaGF0IGRvIHlvdSB3YW50IHRvIGRvPycsIG1lbnVJdGVtcyBhcyBDaG9pY2VDb2xsZWN0aW9uKVxuXHR9XG59XG4iXX0=