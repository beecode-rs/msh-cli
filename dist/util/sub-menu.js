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
    // eslint-disable-next-line @typescript-eslint/require-await
    async run(preSelected) {
        // @ts-expect-error z
        if (!config().cmd[`${this.constructor.name.toLowerCase()}Enabled`]) {
            // util.log(`${this.constructor.name.toLowerCase()} command is disabled. Check config file [.msh]`)
            return;
        }
        return super.run(preSelected);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9zdWItbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFDN0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QyxNQUFNLE9BQWdCLE9BQVEsU0FBUSxRQUFRO0lBQzdDLDZEQUE2RDtJQUM3RCxtQkFBbUI7SUFDWCxLQUFLLENBQUMsVUFBVTtRQUN2QixNQUFNLElBQUksUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVELFlBQXNCLE9BQWUsRUFBRSxPQUF5QjtRQUMvRCxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFFRCw0REFBNEQ7SUFDNUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFvQjtRQUM3QixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ3BFLG1HQUFtRztZQUNuRyxPQUFNO1FBQ1AsQ0FBQztRQUVELE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM5QixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtZXhwZWN0LWVycm9yXG5pbXBvcnQgeyB0eXBlIENob2ljZUNvbGxlY3Rpb24gfSBmcm9tICdpbnF1aXJlcidcblxuaW1wb3J0IHsgTWFpbk1lbnUgfSBmcm9tICcjc3JjL2NvbnRyb2xsZXIvY2xpLW1lbnUvbWFpbi1tZW51J1xuaW1wb3J0IHsgQmFzZU1lbnUgfSBmcm9tICcjc3JjL3V0aWwvYmFzZS1tZW51J1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnI3NyYy91dGlsL2NvbmZpZydcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1Yk1lbnUgZXh0ZW5kcyBCYXNlTWVudSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRwcml2YXRlIGFzeW5jIF9fbWFpbk1lbnUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0YXdhaXQgbmV3IE1haW5NZW51KCkucnVuKClcblx0fVxuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNob2ljZXM6IENob2ljZUNvbGxlY3Rpb24pIHtcblx0XHRzdXBlcihtZXNzYWdlLCBjaG9pY2VzLCBbeyBuYW1lOiAnR28gQmFjaycsIHZhbHVlOiAnbWFpbk1lbnUnIH1dKVxuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWF3YWl0XG5cdGFzeW5jIHJ1bihwcmVTZWxlY3RlZD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgelxuXHRcdGlmICghY29uZmlnKCkuY21kW2Ake3RoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpfUVuYWJsZWRgXSkge1xuXHRcdFx0Ly8gdXRpbC5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCl9IGNvbW1hbmQgaXMgZGlzYWJsZWQuIENoZWNrIGNvbmZpZyBmaWxlIFsubXNoXWApXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRyZXR1cm4gc3VwZXIucnVuKHByZVNlbGVjdGVkKVxuXHR9XG59XG4iXX0=