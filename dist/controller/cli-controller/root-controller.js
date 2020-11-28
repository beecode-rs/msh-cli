"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootController = void 0;
const cli_controller_1 = require("src/controller/cli-controller");
const service_1 = require("src/service");
exports.rootController = {
    router: async (argv) => {
        switch (true) {
            case argv.help:
                return service_1.cliService.printHelp();
            case argv.version:
                return service_1.cliService.printVersion();
            case argv.npm:
                return cli_controller_1.npmController.router(argv);
            case argv.git:
                return cli_controller_1.gitController.router(argv);
            default:
                throw new Error(`Unknown command selected!`);
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2xpLWNvbnRyb2xsZXIvcm9vdC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGtFQUE0RTtBQUM1RSx5Q0FBd0M7QUFFM0IsUUFBQSxjQUFjLEdBQUc7SUFDNUIsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFnQixFQUFpQixFQUFFO1FBQ2hELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsSUFBSTtnQkFDWixPQUFPLG9CQUFVLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDL0IsS0FBSyxJQUFJLENBQUMsT0FBTztnQkFDZixPQUFPLG9CQUFVLENBQUMsWUFBWSxFQUFFLENBQUE7WUFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRztnQkFDWCxPQUFPLDhCQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUc7Z0JBQ1gsT0FBTyw4QkFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNuQztnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUE7U0FDL0M7SUFDSCxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcnNlZEFyZ3MgfSBmcm9tICdtaW5pbWlzdCdcbmltcG9ydCB7IGdpdENvbnRyb2xsZXIsIG5wbUNvbnRyb2xsZXIgfSBmcm9tICdzcmMvY29udHJvbGxlci9jbGktY29udHJvbGxlcidcbmltcG9ydCB7IGNsaVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZSdcblxuZXhwb3J0IGNvbnN0IHJvb3RDb250cm9sbGVyID0ge1xuICByb3V0ZXI6IGFzeW5jIChhcmd2OiBQYXJzZWRBcmdzKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGFyZ3YuaGVscDpcbiAgICAgICAgcmV0dXJuIGNsaVNlcnZpY2UucHJpbnRIZWxwKClcbiAgICAgIGNhc2UgYXJndi52ZXJzaW9uOlxuICAgICAgICByZXR1cm4gY2xpU2VydmljZS5wcmludFZlcnNpb24oKVxuICAgICAgY2FzZSBhcmd2Lm5wbTpcbiAgICAgICAgcmV0dXJuIG5wbUNvbnRyb2xsZXIucm91dGVyKGFyZ3YpXG4gICAgICBjYXNlIGFyZ3YuZ2l0OlxuICAgICAgICByZXR1cm4gZ2l0Q29udHJvbGxlci5yb3V0ZXIoYXJndilcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjb21tYW5kIHNlbGVjdGVkIWApXG4gICAgfVxuICB9LFxufVxuIl19