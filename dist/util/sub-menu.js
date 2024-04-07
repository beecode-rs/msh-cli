import { MainMenu } from '../controller/cli-menu/main-menu.js';
import { BaseMenu } from '../util/base-menu.js';
import { config } from '../util/config.js';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9zdWItbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFDN0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QyxNQUFNLE9BQWdCLE9BQVEsU0FBUSxRQUFRO0lBQzdDLDZEQUE2RDtJQUM3RCxtQkFBbUI7SUFDWCxLQUFLLENBQUMsVUFBVTtRQUN2QixNQUFNLElBQUksUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVELFlBQXNCLE9BQWUsRUFBRSxPQUF5QjtRQUMvRCxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQW9CO1FBQzdCLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDcEUsbUdBQW1HO1lBQ25HLE9BQU07UUFDUCxDQUFDO1FBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzlCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENob2ljZUNvbGxlY3Rpb24gfSBmcm9tICdpbnF1aXJlcidcblxuaW1wb3J0IHsgTWFpbk1lbnUgfSBmcm9tICcjc3JjL2NvbnRyb2xsZXIvY2xpLW1lbnUvbWFpbi1tZW51J1xuaW1wb3J0IHsgQmFzZU1lbnUgfSBmcm9tICcjc3JjL3V0aWwvYmFzZS1tZW51J1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnI3NyYy91dGlsL2NvbmZpZydcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1Yk1lbnUgZXh0ZW5kcyBCYXNlTWVudSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRwcml2YXRlIGFzeW5jIF9fbWFpbk1lbnUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0YXdhaXQgbmV3IE1haW5NZW51KCkucnVuKClcblx0fVxuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNob2ljZXM6IENob2ljZUNvbGxlY3Rpb24pIHtcblx0XHRzdXBlcihtZXNzYWdlLCBjaG9pY2VzLCBbeyBuYW1lOiAnR28gQmFjaycsIHZhbHVlOiAnbWFpbk1lbnUnIH1dKVxuXHR9XG5cblx0YXN5bmMgcnVuKHByZVNlbGVjdGVkPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdGlmICghY29uZmlnKCkuY21kW2Ake3RoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpfUVuYWJsZWRgXSkge1xuXHRcdFx0Ly8gdXRpbC5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCl9IGNvbW1hbmQgaXMgZGlzYWJsZWQuIENoZWNrIGNvbmZpZyBmaWxlIFsubXNoXWApXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRyZXR1cm4gc3VwZXIucnVuKHByZVNlbGVjdGVkKVxuXHR9XG59XG4iXX0=