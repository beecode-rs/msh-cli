"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const cli_service_1 = require("src/service/cli-service");
exports.cli = {
    router: async (argv) => {
        switch (true) {
            case argv.help:
                return cli_service_1.cliService.printHelp();
            case argv.version:
                return cli_service_1.cliService.printVersion();
            default:
                throw new Error(`Unknown command selected!`);
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2xpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlEQUFvRDtBQUV2QyxRQUFBLEdBQUcsR0FBRztJQUNqQixNQUFNLEVBQUUsS0FBSyxFQUFFLElBQWdCLEVBQWlCLEVBQUU7UUFDaEQsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxJQUFJO2dCQUNaLE9BQU8sd0JBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUMvQixLQUFLLElBQUksQ0FBQyxPQUFPO2dCQUNmLE9BQU8sd0JBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtZQUNsQztnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUE7U0FDL0M7SUFDSCxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcnNlZEFyZ3MgfSBmcm9tICdtaW5pbWlzdCdcbmltcG9ydCB7IGNsaVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9jbGktc2VydmljZSdcblxuZXhwb3J0IGNvbnN0IGNsaSA9IHtcbiAgcm91dGVyOiBhc3luYyAoYXJndjogUGFyc2VkQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBhcmd2LmhlbHA6XG4gICAgICAgIHJldHVybiBjbGlTZXJ2aWNlLnByaW50SGVscCgpXG4gICAgICBjYXNlIGFyZ3YudmVyc2lvbjpcbiAgICAgICAgcmV0dXJuIGNsaVNlcnZpY2UucHJpbnRWZXJzaW9uKClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjb21tYW5kIHNlbGVjdGVkIWApXG4gICAgfVxuICB9LFxufVxuIl19