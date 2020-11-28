"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliRootController = void 0;
const cli_controller_1 = require("src/controller/cli-controller");
const service_1 = require("src/service");
exports.cliRootController = {
    router: async (argv) => {
        switch (true) {
            case argv.help:
                return service_1.cliService.printHelp();
            case argv.version:
                return service_1.cliService.printVersion();
            case argv.npm:
                return cli_controller_1.cliNpmController.router(argv);
            case argv.git:
                return cli_controller_1.cliGitController.router(argv);
            default:
                throw new Error(`Unknown command selected!`);
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLXJvb3QtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL2NsaS1jb250cm9sbGVyL2NsaS1yb290LWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esa0VBQWtGO0FBQ2xGLHlDQUFvRDtBQUV2QyxRQUFBLGlCQUFpQixHQUFHO0lBQy9CLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBZ0IsRUFBaUIsRUFBRTtRQUNoRCxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLElBQUk7Z0JBQ1osT0FBTyxvQkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQy9CLEtBQUssSUFBSSxDQUFDLE9BQU87Z0JBQ2YsT0FBTyxvQkFBVSxDQUFDLFlBQVksRUFBRSxDQUFBO1lBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUc7Z0JBQ1gsT0FBTyxpQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRztnQkFDWCxPQUFPLGlDQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN0QztnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUE7U0FDL0M7SUFDSCxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcnNlZEFyZ3MgfSBmcm9tICdtaW5pbWlzdCdcbmltcG9ydCB7IGNsaUdpdENvbnRyb2xsZXIsIGNsaU5wbUNvbnRyb2xsZXIgfSBmcm9tICdzcmMvY29udHJvbGxlci9jbGktY29udHJvbGxlcidcbmltcG9ydCB7IGNsaVNlcnZpY2UsIG5wbVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZSdcblxuZXhwb3J0IGNvbnN0IGNsaVJvb3RDb250cm9sbGVyID0ge1xuICByb3V0ZXI6IGFzeW5jIChhcmd2OiBQYXJzZWRBcmdzKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGFyZ3YuaGVscDpcbiAgICAgICAgcmV0dXJuIGNsaVNlcnZpY2UucHJpbnRIZWxwKClcbiAgICAgIGNhc2UgYXJndi52ZXJzaW9uOlxuICAgICAgICByZXR1cm4gY2xpU2VydmljZS5wcmludFZlcnNpb24oKVxuICAgICAgY2FzZSBhcmd2Lm5wbTpcbiAgICAgICAgcmV0dXJuIGNsaU5wbUNvbnRyb2xsZXIucm91dGVyKGFyZ3YpXG4gICAgICBjYXNlIGFyZ3YuZ2l0OlxuICAgICAgICByZXR1cm4gY2xpR2l0Q29udHJvbGxlci5yb3V0ZXIoYXJndilcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjb21tYW5kIHNlbGVjdGVkIWApXG4gICAgfVxuICB9LFxufVxuIl19