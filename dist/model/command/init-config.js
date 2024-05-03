import { initConfigService } from '#src/service/init-config-service';
export class InitConfig {
    async execute() {
        // TODO create error handler annotation
        try {
            await initConfigService.tryToCreateConfig();
            return [{ stringResult: '.msh file successfully generated' }];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWwvY29tbWFuZC9pbml0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQTtBQUVwRSxNQUFNLE9BQU8sVUFBVTtJQUN0QixLQUFLLENBQUMsT0FBTztRQUNaLHVDQUF1QztRQUN2QyxJQUFJLENBQUM7WUFDSixNQUFNLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLENBQUE7WUFFM0MsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLGtDQUFrQyxFQUFFLENBQUMsQ0FBQTtRQUM5RCxDQUFDO1FBQUMsT0FBTyxHQUFRLEVBQUUsQ0FBQztZQUNuQixPQUFPLENBQUMsRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDdkMsQ0FBQztJQUNGLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4ZWN1dGFibGUsIEV4ZWN1dGVSZXN1bHQgfSBmcm9tICcjc3JjL21vZGVsL2NvbW1hbmQvaW50ZXJmYWNlcydcbmltcG9ydCB7IGluaXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnI3NyYy9zZXJ2aWNlL2luaXQtY29uZmlnLXNlcnZpY2UnXG5cbmV4cG9ydCBjbGFzcyBJbml0Q29uZmlnIGltcGxlbWVudHMgRXhlY3V0YWJsZSB7XG5cdGFzeW5jIGV4ZWN1dGUoKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0W10+IHtcblx0XHQvLyBUT0RPIGNyZWF0ZSBlcnJvciBoYW5kbGVyIGFubm90YXRpb25cblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgaW5pdENvbmZpZ1NlcnZpY2UudHJ5VG9DcmVhdGVDb25maWcoKVxuXG5cdFx0XHRyZXR1cm4gW3sgc3RyaW5nUmVzdWx0OiAnLm1zaCBmaWxlIHN1Y2Nlc3NmdWxseSBnZW5lcmF0ZWQnIH1dXG5cdFx0fSBjYXRjaCAoZXJyOiBhbnkpIHtcblx0XHRcdHJldHVybiBbeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH1dXG5cdFx0fVxuXHR9XG59XG4iXX0=