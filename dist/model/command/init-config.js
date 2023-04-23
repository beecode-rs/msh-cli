"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitConfig = void 0;
const init_config_service_1 = require("../../service/init-config-service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWwvY29tbWFuZC9pbml0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5RUFBbUU7QUFFbkUsTUFBYSxVQUFVO0lBQ3RCLEtBQUssQ0FBQyxPQUFPO1FBQ1osdUNBQXVDO1FBQ3ZDLElBQUk7WUFDSCxNQUFNLHVDQUFpQixDQUFDLGlCQUFpQixFQUFFLENBQUE7WUFFM0MsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLGtDQUFrQyxFQUFFLENBQUMsQ0FBQTtTQUM3RDtRQUFDLE9BQU8sR0FBUSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxFQUFFLFlBQVksRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtTQUN0QztJQUNGLENBQUM7Q0FDRDtBQVhELGdDQVdDIn0=