"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("source-map-support/register");
const minimist_1 = __importDefault(require("minimist"));
const cli_1 = require("src/controller/cli");
const main_menu_1 = require("src/main-menu");
const cli_service_1 = require("src/service/cli-service");
const argv = minimist_1.default(process.argv.slice(2), { ...cli_service_1.cliService.options, ...cli_service_1.cliService.commands });
(async () => {
    if (cli_service_1.cliService.hasOneCommandSelected(argv)) {
        // if (cli.allowPrintConfigForCmd(argv)) util.printConfig()
        await cli_1.cli.router(argv);
    }
    else {
        // util.printConfig()
        await new main_menu_1.MainMenu().run();
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBOEI7QUFDOUIsdUNBQW9DO0FBRXBDLHdEQUErQjtBQUMvQiw0Q0FBd0M7QUFDeEMsNkNBQXdDO0FBQ3hDLHlEQUFvRDtBQUdwRCxNQUFNLElBQUksR0FBRyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyx3QkFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLHdCQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FDOUY7QUFBQSxDQUFDLEtBQUssSUFBbUIsRUFBRTtJQUMxQixJQUFJLHdCQUFVLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDMUMsMkRBQTJEO1FBQzNELE1BQU0sU0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUN2QjtTQUFNO1FBQ0wscUJBQXFCO1FBQ3JCLE1BQU0sSUFBSSxvQkFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7S0FDM0I7QUFDSCxDQUFDLENBQUMsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdtb2R1bGUtYWxpYXMvcmVnaXN0ZXInXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcidcblxuaW1wb3J0IG1pbmltaXN0IGZyb20gJ21pbmltaXN0J1xuaW1wb3J0IHsgY2xpIH0gZnJvbSAnc3JjL2NvbnRyb2xsZXIvY2xpJ1xuaW1wb3J0IHsgTWFpbk1lbnUgfSBmcm9tICdzcmMvbWFpbi1tZW51J1xuaW1wb3J0IHsgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL2NsaS1zZXJ2aWNlJ1xuaW1wb3J0IHsgdXRpbCB9IGZyb20gJ3NyYy91dGlsJ1xuXG5jb25zdCBhcmd2ID0gbWluaW1pc3QocHJvY2Vzcy5hcmd2LnNsaWNlKDIpLCB7IC4uLmNsaVNlcnZpY2Uub3B0aW9ucywgLi4uY2xpU2VydmljZS5jb21tYW5kcyB9KVxuOyhhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGlmIChjbGlTZXJ2aWNlLmhhc09uZUNvbW1hbmRTZWxlY3RlZChhcmd2KSkge1xuICAgIC8vIGlmIChjbGkuYWxsb3dQcmludENvbmZpZ0ZvckNtZChhcmd2KSkgdXRpbC5wcmludENvbmZpZygpXG4gICAgYXdhaXQgY2xpLnJvdXRlcihhcmd2KVxuICB9IGVsc2Uge1xuICAgIC8vIHV0aWwucHJpbnRDb25maWcoKVxuICAgIGF3YWl0IG5ldyBNYWluTWVudSgpLnJ1bigpXG4gIH1cbn0pKClcbiJdfQ==