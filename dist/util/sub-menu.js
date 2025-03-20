import { MainMenu } from '#src/controller/cli-menu/main-menu';
import { BaseMenu } from '#src/util/base-menu';
import { config } from '#src/util/config';
export class SubMenu extends BaseMenu {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    async __mainMenu() {
        await new MainMenu().run();
    }
    constructor(message, choices) {
        super(message, choices, [{ name: 'Go Back', value: 'mainMenu' }]);
    }
    async run(preSelected) {
        // @ts-expect-error
        if (!config().cmd[`${this.constructor.name.toLowerCase()}Enabled`]) {
            // util.log(`${this.constructor.name.toLowerCase()} command is disabled. Check config file [.msh]`)
            return;
        }
        return super.run(preSelected);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9zdWItbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFDN0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QyxNQUFNLE9BQWdCLE9BQVEsU0FBUSxRQUFRO0lBQzdDLDZEQUE2RDtJQUM3RCxtQkFBbUI7SUFDWCxLQUFLLENBQUMsVUFBVTtRQUN2QixNQUFNLElBQUksUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVELFlBQXNCLE9BQWUsRUFBRSxPQUF5QjtRQUMvRCxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQW9CO1FBQzdCLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDcEUsbUdBQW1HO1lBQ25HLE9BQU07UUFDUCxDQUFDO1FBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzlCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1leHBlY3QtZXJyb3JcbmltcG9ydCB7IHR5cGUgQ2hvaWNlQ29sbGVjdGlvbiB9IGZyb20gJ2lucXVpcmVyJ1xuXG5pbXBvcnQgeyBNYWluTWVudSB9IGZyb20gJyNzcmMvY29udHJvbGxlci9jbGktbWVudS9tYWluLW1lbnUnXG5pbXBvcnQgeyBCYXNlTWVudSB9IGZyb20gJyNzcmMvdXRpbC9iYXNlLW1lbnUnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcjc3JjL3V0aWwvY29uZmlnJ1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3ViTWVudSBleHRlbmRzIEJhc2VNZW51IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdHByaXZhdGUgYXN5bmMgX19tYWluTWVudSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRhd2FpdCBuZXcgTWFpbk1lbnUoKS5ydW4oKVxuXHR9XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgY2hvaWNlczogQ2hvaWNlQ29sbGVjdGlvbikge1xuXHRcdHN1cGVyKG1lc3NhZ2UsIGNob2ljZXMsIFt7IG5hbWU6ICdHbyBCYWNrJywgdmFsdWU6ICdtYWluTWVudScgfV0pXG5cdH1cblxuXHRhc3luYyBydW4ocHJlU2VsZWN0ZWQ/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0aWYgKCFjb25maWcoKS5jbWRbYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCl9RW5hYmxlZGBdKSB7XG5cdFx0XHQvLyB1dGlsLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKX0gY29tbWFuZCBpcyBkaXNhYmxlZC4gQ2hlY2sgY29uZmlnIGZpbGUgWy5tc2hdYClcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdHJldHVybiBzdXBlci5ydW4ocHJlU2VsZWN0ZWQpXG5cdH1cbn1cbiJdfQ==