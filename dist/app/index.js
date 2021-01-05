"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cli_app_1 = require("src/app/cli-app");
const http_server_app_1 = require("src/app/http-server-app");
const tui_app_1 = require("src/app/tui-app");
const args_service_1 = require("src/service/args-service");
const shell_service_1 = require("src/service/shell-service");
exports.app = {
    start: () => {
        exports.app._start().catch(exports.app._onError);
    },
    _start: async () => {
        const args = process.argv.slice(2);
        const appCommands = args_service_1.argsService.argToObject({ args, options: args_service_1.argsService.appCommandOptions });
        if (appCommands['http-server'])
            await new http_server_app_1.HttpServerApp().initiate();
        else if (appCommands.tui)
            await new tui_app_1.TuiApp().initiate();
        else
            await new cli_app_1.CliApp(args).initiate();
    },
    _onError: (err) => {
        shell_service_1.shellService.printError(err.message);
        process.exit(1);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUF3QztBQUN4Qyw2REFBdUQ7QUFDdkQsNkNBQXdDO0FBQ3hDLDJEQUFtRTtBQUNuRSw2REFBd0Q7QUFFM0MsUUFBQSxHQUFHLEdBQUc7SUFDakIsS0FBSyxFQUFFLEdBQVMsRUFBRTtRQUNoQixXQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQ0QsTUFBTSxFQUFFLEtBQUssSUFBbUIsRUFBRTtRQUNoQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsQyxNQUFNLFdBQVcsR0FBRywwQkFBVyxDQUFDLFdBQVcsQ0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsMEJBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUE7UUFFMUcsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQUUsTUFBTSxJQUFJLCtCQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTthQUMvRCxJQUFJLFdBQVcsQ0FBQyxHQUFHO1lBQUUsTUFBTSxJQUFJLGdCQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTs7WUFDbEQsTUFBTSxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDeEMsQ0FBQztJQUNELFFBQVEsRUFBRSxDQUFDLEdBQVEsRUFBUSxFQUFFO1FBQzNCLDRCQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpQXBwIH0gZnJvbSAnc3JjL2FwcC9jbGktYXBwJ1xuaW1wb3J0IHsgSHR0cFNlcnZlckFwcCB9IGZyb20gJ3NyYy9hcHAvaHR0cC1zZXJ2ZXItYXBwJ1xuaW1wb3J0IHsgVHVpQXBwIH0gZnJvbSAnc3JjL2FwcC90dWktYXBwJ1xuaW1wb3J0IHsgYXBwQ29tbWFuZHMsIGFyZ3NTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UvYXJncy1zZXJ2aWNlJ1xuaW1wb3J0IHsgc2hlbGxTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2Uvc2hlbGwtc2VydmljZSdcblxuZXhwb3J0IGNvbnN0IGFwcCA9IHtcbiAgc3RhcnQ6ICgpOiB2b2lkID0+IHtcbiAgICBhcHAuX3N0YXJ0KCkuY2F0Y2goYXBwLl9vbkVycm9yKVxuICB9LFxuICBfc3RhcnQ6IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpXG4gICAgY29uc3QgYXBwQ29tbWFuZHMgPSBhcmdzU2VydmljZS5hcmdUb09iamVjdDxhcHBDb21tYW5kcz4oeyBhcmdzLCBvcHRpb25zOiBhcmdzU2VydmljZS5hcHBDb21tYW5kT3B0aW9ucyB9KVxuXG4gICAgaWYgKGFwcENvbW1hbmRzWydodHRwLXNlcnZlciddKSBhd2FpdCBuZXcgSHR0cFNlcnZlckFwcCgpLmluaXRpYXRlKClcbiAgICBlbHNlIGlmIChhcHBDb21tYW5kcy50dWkpIGF3YWl0IG5ldyBUdWlBcHAoKS5pbml0aWF0ZSgpXG4gICAgZWxzZSBhd2FpdCBuZXcgQ2xpQXBwKGFyZ3MpLmluaXRpYXRlKClcbiAgfSxcbiAgX29uRXJyb3I6IChlcnI6IGFueSk6IHZvaWQgPT4ge1xuICAgIHNoZWxsU2VydmljZS5wcmludEVycm9yKGVyci5tZXNzYWdlKVxuICAgIHByb2Nlc3MuZXhpdCgxKVxuICB9LFxufVxuIl19