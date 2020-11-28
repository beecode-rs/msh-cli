"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("source-map-support/register");
const minimist_1 = __importDefault(require("minimist"));
const controller_1 = require("src/controller");
const service_1 = require("src/service");
const argv = minimist_1.default(process.argv.slice(2), service_1.cliService.cliArguments());
(async () => {
    try {
        if (service_1.cliService.commandIsSelected(argv))
            return await controller_1.cliController.rootController.router(argv);
        service_1.cliService.printHelp();
    }
    catch (err) {
        service_1.cliService.printError(err.message);
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBOEI7QUFDOUIsdUNBQW9DO0FBRXBDLHdEQUErQjtBQUMvQiwrQ0FBOEM7QUFDOUMseUNBQXdDO0FBRXhDLE1BQU0sSUFBSSxHQUFHLGtCQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0JBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUN0RTtBQUFBLENBQUMsS0FBSyxJQUFtQixFQUFFO0lBQzFCLElBQUk7UUFDRixJQUFJLG9CQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxNQUFNLDBCQUFhLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5RixvQkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFBO0tBQ3ZCO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixvQkFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDbkM7QUFDSCxDQUFDLENBQUMsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdtb2R1bGUtYWxpYXMvcmVnaXN0ZXInXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcidcblxuaW1wb3J0IG1pbmltaXN0IGZyb20gJ21pbmltaXN0J1xuaW1wb3J0IHsgY2xpQ29udHJvbGxlciB9IGZyb20gJ3NyYy9jb250cm9sbGVyJ1xuaW1wb3J0IHsgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlJ1xuXG5jb25zdCBhcmd2ID0gbWluaW1pc3QocHJvY2Vzcy5hcmd2LnNsaWNlKDIpLCBjbGlTZXJ2aWNlLmNsaUFyZ3VtZW50cygpKVxuOyhhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKGNsaVNlcnZpY2UuY29tbWFuZElzU2VsZWN0ZWQoYXJndikpIHJldHVybiBhd2FpdCBjbGlDb250cm9sbGVyLnJvb3RDb250cm9sbGVyLnJvdXRlcihhcmd2KVxuICAgIGNsaVNlcnZpY2UucHJpbnRIZWxwKClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY2xpU2VydmljZS5wcmludEVycm9yKGVyci5tZXNzYWdlKVxuICB9XG59KSgpXG4iXX0=