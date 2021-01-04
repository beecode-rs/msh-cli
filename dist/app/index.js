"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cli_app_1 = require("src/app/cli-app");
const http_server_app_1 = require("src/app/http-server-app");
const tui_app_1 = require("src/app/tui-app");
const args_service_1 = require("src/service/args-service");
const cli_service_1 = require("src/service/cli-service");
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
        cli_service_1.cliService.printError(err.message);
        process.exit(1);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUF3QztBQUN4Qyw2REFBdUQ7QUFDdkQsNkNBQXdDO0FBQ3hDLDJEQUFtRTtBQUNuRSx5REFBb0Q7QUFFdkMsUUFBQSxHQUFHLEdBQUc7SUFDakIsS0FBSyxFQUFFLEdBQVMsRUFBRTtRQUNoQixXQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQ0QsTUFBTSxFQUFFLEtBQUssSUFBbUIsRUFBRTtRQUNoQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsQyxNQUFNLFdBQVcsR0FBRywwQkFBVyxDQUFDLFdBQVcsQ0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsMEJBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUE7UUFFMUcsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQUUsTUFBTSxJQUFJLCtCQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTthQUMvRCxJQUFJLFdBQVcsQ0FBQyxHQUFHO1lBQUUsTUFBTSxJQUFJLGdCQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTs7WUFDbEQsTUFBTSxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDeEMsQ0FBQztJQUNELFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBUSxFQUFFO1FBQ3RCLHdCQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpQXBwIH0gZnJvbSAnc3JjL2FwcC9jbGktYXBwJ1xuaW1wb3J0IHsgSHR0cFNlcnZlckFwcCB9IGZyb20gJ3NyYy9hcHAvaHR0cC1zZXJ2ZXItYXBwJ1xuaW1wb3J0IHsgVHVpQXBwIH0gZnJvbSAnc3JjL2FwcC90dWktYXBwJ1xuaW1wb3J0IHsgYXBwQ29tbWFuZHMsIGFyZ3NTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UvYXJncy1zZXJ2aWNlJ1xuaW1wb3J0IHsgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL2NsaS1zZXJ2aWNlJ1xuXG5leHBvcnQgY29uc3QgYXBwID0ge1xuICBzdGFydDogKCk6IHZvaWQgPT4ge1xuICAgIGFwcC5fc3RhcnQoKS5jYXRjaChhcHAuX29uRXJyb3IpXG4gIH0sXG4gIF9zdGFydDogYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGFyZ3MgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMilcbiAgICBjb25zdCBhcHBDb21tYW5kcyA9IGFyZ3NTZXJ2aWNlLmFyZ1RvT2JqZWN0PGFwcENvbW1hbmRzPih7IGFyZ3MsIG9wdGlvbnM6IGFyZ3NTZXJ2aWNlLmFwcENvbW1hbmRPcHRpb25zIH0pXG5cbiAgICBpZiAoYXBwQ29tbWFuZHNbJ2h0dHAtc2VydmVyJ10pIGF3YWl0IG5ldyBIdHRwU2VydmVyQXBwKCkuaW5pdGlhdGUoKVxuICAgIGVsc2UgaWYgKGFwcENvbW1hbmRzLnR1aSkgYXdhaXQgbmV3IFR1aUFwcCgpLmluaXRpYXRlKClcbiAgICBlbHNlIGF3YWl0IG5ldyBDbGlBcHAoYXJncykuaW5pdGlhdGUoKVxuICB9LFxuICBfb25FcnJvcjogKGVycik6IHZvaWQgPT4ge1xuICAgIGNsaVNlcnZpY2UucHJpbnRFcnJvcihlcnIubWVzc2FnZSlcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfSxcbn1cbiJdfQ==