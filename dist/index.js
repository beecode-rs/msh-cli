"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("source-map-support/register");
const minimist_1 = __importDefault(require("minimist"));
const cli_1 = require("src/controller/cli");
const cli_service_1 = require("src/service/cli-service");
const argv = minimist_1.default(process.argv.slice(2), { ...cli_service_1.cliService.options, ...cli_service_1.cliService.commands });
(async () => {
    if (cli_service_1.cliService.hasOneCommandSelected(argv)) {
        await cli_1.cli.router(argv);
    }
    else {
        // await new MainMenu().run()
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBOEI7QUFDOUIsdUNBQW9DO0FBRXBDLHdEQUErQjtBQUMvQiw0Q0FBd0M7QUFFeEMseURBQW9EO0FBRXBELE1BQU0sSUFBSSxHQUFHLGtCQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLHdCQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsd0JBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUM5RjtBQUFBLENBQUMsS0FBSyxJQUFtQixFQUFFO0lBQzFCLElBQUksd0JBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMxQyxNQUFNLFNBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDdkI7U0FBTTtRQUNMLDZCQUE2QjtLQUM5QjtBQUNILENBQUMsQ0FBQyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ21vZHVsZS1hbGlhcy9yZWdpc3RlcidcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJ1xuXG5pbXBvcnQgbWluaW1pc3QgZnJvbSAnbWluaW1pc3QnXG5pbXBvcnQgeyBjbGkgfSBmcm9tICdzcmMvY29udHJvbGxlci9jbGknXG5pbXBvcnQgeyBNYWluTWVudSB9IGZyb20gJ3NyYy9tYWluLW1lbnUnXG5pbXBvcnQgeyBjbGlTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UvY2xpLXNlcnZpY2UnXG5cbmNvbnN0IGFyZ3YgPSBtaW5pbWlzdChwcm9jZXNzLmFyZ3Yuc2xpY2UoMiksIHsgLi4uY2xpU2VydmljZS5vcHRpb25zLCAuLi5jbGlTZXJ2aWNlLmNvbW1hbmRzIH0pXG47KGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKGNsaVNlcnZpY2UuaGFzT25lQ29tbWFuZFNlbGVjdGVkKGFyZ3YpKSB7XG4gICAgYXdhaXQgY2xpLnJvdXRlcihhcmd2KVxuICB9IGVsc2Uge1xuICAgIC8vIGF3YWl0IG5ldyBNYWluTWVudSgpLnJ1bigpXG4gIH1cbn0pKClcbiJdfQ==