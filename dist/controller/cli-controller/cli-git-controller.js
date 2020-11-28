"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliGitController = void 0;
const service_1 = require("src/service");
exports.cliGitController = {
    router: async (argv) => {
        switch (true) {
            case argv._[0] === 'status':
                return service_1.gitService.status();
            case argv._[0] === 'fetch':
                return service_1.gitService.fetch();
            case argv._[0] === 'pull':
                return service_1.gitService.pull();
            case argv._[0] === 'clone':
                return service_1.gitService.clone();
            default:
                throw new Error(`Unknown git command selected!`);
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLWdpdC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2xpLWNvbnRyb2xsZXIvY2xpLWdpdC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlDQUF3QztBQUUzQixRQUFBLGdCQUFnQixHQUFHO0lBQzlCLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBZ0IsRUFBaUIsRUFBRTtRQUNoRCxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRO2dCQUN6QixPQUFPLG9CQUFVLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDNUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU87Z0JBQ3hCLE9BQU8sb0JBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUMzQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTTtnQkFDdkIsT0FBTyxvQkFBVSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzFCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPO2dCQUN4QixPQUFPLG9CQUFVLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDM0I7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO1NBQ25EO0lBQ0gsQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXJzZWRBcmdzIH0gZnJvbSAnbWluaW1pc3QnXG5pbXBvcnQgeyBnaXRTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UnXG5cbmV4cG9ydCBjb25zdCBjbGlHaXRDb250cm9sbGVyID0ge1xuICByb3V0ZXI6IGFzeW5jIChhcmd2OiBQYXJzZWRBcmdzKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGFyZ3YuX1swXSA9PT0gJ3N0YXR1cyc6XG4gICAgICAgIHJldHVybiBnaXRTZXJ2aWNlLnN0YXR1cygpXG4gICAgICBjYXNlIGFyZ3YuX1swXSA9PT0gJ2ZldGNoJzpcbiAgICAgICAgcmV0dXJuIGdpdFNlcnZpY2UuZmV0Y2goKVxuICAgICAgY2FzZSBhcmd2Ll9bMF0gPT09ICdwdWxsJzpcbiAgICAgICAgcmV0dXJuIGdpdFNlcnZpY2UucHVsbCgpXG4gICAgICBjYXNlIGFyZ3YuX1swXSA9PT0gJ2Nsb25lJzpcbiAgICAgICAgcmV0dXJuIGdpdFNlcnZpY2UuY2xvbmUoKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGdpdCBjb21tYW5kIHNlbGVjdGVkIWApXG4gICAgfVxuICB9LFxufVxuIl19