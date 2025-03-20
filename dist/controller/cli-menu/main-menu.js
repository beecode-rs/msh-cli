import { BaseMenu } from '#src/util/base-menu';
import { config } from '#src/util/config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export class MainMenu extends BaseMenu {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    async __execute(command) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        super('What do you want to do?', menuItems);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2xpLW1lbnUvbWFpbi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFFekMsNkRBQTZEO0FBQzdELG1CQUFtQjtBQUNuQixNQUFNLE9BQU8sUUFBUyxTQUFRLFFBQVE7SUFDckMsNkRBQTZEO0lBQzdELG1CQUFtQjtJQUNYLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBZTtRQUN0Qyw4REFBOEQ7UUFDOUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksT0FBTyxFQUFFLENBQVEsQ0FBQTtRQUNsRCxNQUFNLElBQUksS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVEO1FBQ0MsTUFBTSxTQUFTLEdBQXNDLEVBQUUsQ0FBQTtRQUN2RCxJQUFJLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM3QixTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUM5QyxDQUFDO1FBQ0QsbUZBQW1GO1FBQ25GLElBQUksTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBQzlDLENBQUM7UUFDRCxvRkFBb0Y7UUFDcEYsOERBQThEO1FBQzlELEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxTQUFrQixDQUFDLENBQUE7SUFDckQsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1lbnUgfSBmcm9tICcjc3JjL3V0aWwvYmFzZS1tZW51J1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnI3NyYy91dGlsL2NvbmZpZydcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLWV4cGVjdC1lcnJvclxuZXhwb3J0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgQmFzZU1lbnUge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0cHJpdmF0ZSBhc3luYyBfX2V4ZWN1dGUoY29tbWFuZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRjb25zdCBjbGF6eiA9IGltcG9ydChgc3JjL2V4ZWMvJHtjb21tYW5kfWApIGFzIGFueVxuXHRcdGF3YWl0IG5ldyBjbGF6eigpLnJ1bigpXG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRjb25zdCBtZW51SXRlbXM6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH1bXSA9IFtdXG5cdFx0aWYgKGNvbmZpZygpLmNtZC5naXRFbmFibGVkKSB7XG5cdFx0XHRtZW51SXRlbXMucHVzaCh7IG5hbWU6ICdHaXQnLCB2YWx1ZTogJ0dpdCcgfSlcblx0XHR9XG5cdFx0Ly8gaWYgKGNvbmZpZygpLmNtZC5jbGVhbkVuYWJsZWQpIG1lbnVJdGVtcy5wdXNoKHsgbmFtZTogJ0NsZWFuJywgdmFsdWU6ICdDbGVhbicgfSlcblx0XHRpZiAoY29uZmlnKCkuY21kLm5wbUVuYWJsZWQpIHtcblx0XHRcdG1lbnVJdGVtcy5wdXNoKHsgbmFtZTogJ05QTScsIHZhbHVlOiAnTlBNJyB9KVxuXHRcdH1cblx0XHQvLyBpZiAoY29uZmlnKCkuY21kLnByRW5hYmxlZCkgbWVudUl0ZW1zLnB1c2goeyBuYW1lOiAnUHVsbCBSZXF1ZXN0JywgdmFsdWU6ICdQUicgfSlcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdHN1cGVyKCdXaGF0IGRvIHlvdSB3YW50IHRvIGRvPycsIG1lbnVJdGVtcyBhcyBhbnlbXSlcblx0fVxufVxuIl19