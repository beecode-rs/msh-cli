import { initConfigService } from '#src/service/init-config-service';
export class InitConfig {
    async execute() {
        // TODO create error handler annotation
        try {
            await initConfigService.tryToCreateConfig();
            return [{ stringResult: '.msh file successfully generated' }];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWwvY29tbWFuZC9pbml0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQTtBQUVwRSxNQUFNLE9BQU8sVUFBVTtJQUN0QixLQUFLLENBQUMsT0FBTztRQUNaLHVDQUF1QztRQUN2QyxJQUFJLENBQUM7WUFDSixNQUFNLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLENBQUE7WUFFM0MsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLGtDQUFrQyxFQUFFLENBQUMsQ0FBQTtZQUM3RCw4REFBOEQ7UUFDL0QsQ0FBQztRQUFDLE9BQU8sR0FBUSxFQUFFLENBQUM7WUFDbkIsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7SUFDRixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIEV4ZWN1dGFibGUsIHR5cGUgRXhlY3V0ZVJlc3VsdCB9IGZyb20gJyNzcmMvbW9kZWwvY29tbWFuZC9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgaW5pdENvbmZpZ1NlcnZpY2UgfSBmcm9tICcjc3JjL3NlcnZpY2UvaW5pdC1jb25maWctc2VydmljZSdcblxuZXhwb3J0IGNsYXNzIEluaXRDb25maWcgaW1wbGVtZW50cyBFeGVjdXRhYmxlIHtcblx0YXN5bmMgZXhlY3V0ZSgpOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHRbXT4ge1xuXHRcdC8vIFRPRE8gY3JlYXRlIGVycm9yIGhhbmRsZXIgYW5ub3RhdGlvblxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBpbml0Q29uZmlnU2VydmljZS50cnlUb0NyZWF0ZUNvbmZpZygpXG5cblx0XHRcdHJldHVybiBbeyBzdHJpbmdSZXN1bHQ6ICcubXNoIGZpbGUgc3VjY2Vzc2Z1bGx5IGdlbmVyYXRlZCcgfV1cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0fSBjYXRjaCAoZXJyOiBhbnkpIHtcblx0XHRcdHJldHVybiBbeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH1dXG5cdFx0fVxuXHR9XG59XG4iXX0=