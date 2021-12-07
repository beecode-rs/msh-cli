"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitConfig = void 0;
const init_config_service_1 = require("src/service/init-config-service");
class InitConfig {
    async execute() {
        // TODO create error handler annotation
        try {
            await init_config_service_1.initConfigService.tryToCreateConfig();
            return [{ stringResult: '.msh file successfully generated' }];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
}
exports.InitConfig = InitConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWwvY29tbWFuZC9pbml0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5RUFBbUU7QUFFbkUsTUFBYSxVQUFVO0lBQ2QsS0FBSyxDQUFDLE9BQU87UUFDbEIsdUNBQXVDO1FBQ3ZDLElBQUk7WUFDRixNQUFNLHVDQUFpQixDQUFDLGlCQUFpQixFQUFFLENBQUE7WUFDM0MsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLGtDQUFrQyxFQUFFLENBQUMsQ0FBQTtTQUM5RDtRQUFDLE9BQU8sR0FBUSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxFQUFFLFlBQVksRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtTQUN2QztJQUNILENBQUM7Q0FDRjtBQVZELGdDQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhlY3V0YWJsZSwgRXhlY3V0ZVJlc3VsdCB9IGZyb20gJ3NyYy9tb2RlbC9jb21tYW5kL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBpbml0Q29uZmlnU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL2luaXQtY29uZmlnLXNlcnZpY2UnXG5cbmV4cG9ydCBjbGFzcyBJbml0Q29uZmlnIGltcGxlbWVudHMgRXhlY3V0YWJsZSB7XG4gIHB1YmxpYyBhc3luYyBleGVjdXRlKCk6IFByb21pc2U8RXhlY3V0ZVJlc3VsdFtdPiB7XG4gICAgLy8gVE9ETyBjcmVhdGUgZXJyb3IgaGFuZGxlciBhbm5vdGF0aW9uXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGluaXRDb25maWdTZXJ2aWNlLnRyeVRvQ3JlYXRlQ29uZmlnKClcbiAgICAgIHJldHVybiBbeyBzdHJpbmdSZXN1bHQ6ICcubXNoIGZpbGUgc3VjY2Vzc2Z1bGx5IGdlbmVyYXRlZCcgfV1cbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgcmV0dXJuIFt7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfV1cbiAgICB9XG4gIH1cbn1cbiJdfQ==