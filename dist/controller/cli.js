"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const cli_service_1 = require("src/service/cli-service");
const git_service_1 = require("src/service/git-service");
exports.cli = {
    router: async (argv) => {
        switch (true) {
            case argv.help:
                return cli_service_1.cliService.printHelp();
            case argv.version:
                return cli_service_1.cliService.printVersion();
            case argv.git:
                return exports.cli._gitRouter(argv);
            default:
                throw new Error(`Unknown command selected!`);
        }
    },
    _gitRouter: async (argv) => {
        switch (true) {
            case argv._[0] === 'status':
                return git_service_1.gitService.status();
            default:
                throw new Error(`Unknown command selected!`);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2xpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlEQUFvRDtBQUNwRCx5REFBb0Q7QUFFdkMsUUFBQSxHQUFHLEdBQUc7SUFDakIsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFnQixFQUFpQixFQUFFO1FBQ2hELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsSUFBSTtnQkFDWixPQUFPLHdCQUFVLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDL0IsS0FBSyxJQUFJLENBQUMsT0FBTztnQkFDZixPQUFPLHdCQUFVLENBQUMsWUFBWSxFQUFFLENBQUE7WUFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRztnQkFDWCxPQUFPLFdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDN0I7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1NBQy9DO0lBQ0gsQ0FBQztJQUNELFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBZ0IsRUFBaUIsRUFBRTtRQUNwRCxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRO2dCQUN6QixPQUFPLHdCQUFVLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDNUI7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1NBQy9DO0lBQ0gsQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXJzZWRBcmdzIH0gZnJvbSAnbWluaW1pc3QnXG5pbXBvcnQgeyBjbGlTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UvY2xpLXNlcnZpY2UnXG5pbXBvcnQgeyBnaXRTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UvZ2l0LXNlcnZpY2UnXG5cbmV4cG9ydCBjb25zdCBjbGkgPSB7XG4gIHJvdXRlcjogYXN5bmMgKGFyZ3Y6IFBhcnNlZEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgYXJndi5oZWxwOlxuICAgICAgICByZXR1cm4gY2xpU2VydmljZS5wcmludEhlbHAoKVxuICAgICAgY2FzZSBhcmd2LnZlcnNpb246XG4gICAgICAgIHJldHVybiBjbGlTZXJ2aWNlLnByaW50VmVyc2lvbigpXG4gICAgICBjYXNlIGFyZ3YuZ2l0OlxuICAgICAgICByZXR1cm4gY2xpLl9naXRSb3V0ZXIoYXJndilcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjb21tYW5kIHNlbGVjdGVkIWApXG4gICAgfVxuICB9LFxuICBfZ2l0Um91dGVyOiBhc3luYyAoYXJndjogUGFyc2VkQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBhcmd2Ll9bMF0gPT09ICdzdGF0dXMnOlxuICAgICAgICByZXR1cm4gZ2l0U2VydmljZS5zdGF0dXMoKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGNvbW1hbmQgc2VsZWN0ZWQhYClcbiAgICB9XG4gIH1cbn1cbiJdfQ==