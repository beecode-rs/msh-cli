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
        if (!service_1.cliService.commandIsSelected(argv))
            return service_1.cliService.printHelp();
        await controller_1.cliController.rootController.router(argv);
    }
    catch (err) {
        service_1.cliService.printError(err.message);
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBOEI7QUFDOUIsdUNBQW9DO0FBRXBDLHdEQUErQjtBQUMvQiwrQ0FBOEM7QUFDOUMseUNBQXdDO0FBRXhDLE1BQU0sSUFBSSxHQUFHLGtCQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0JBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUN0RTtBQUFBLENBQUMsS0FBSyxJQUFtQixFQUFFO0lBQzFCLElBQUk7UUFDRixJQUFJLENBQUMsb0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLG9CQUFVLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDdEUsTUFBTSwwQkFBYSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDaEQ7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLG9CQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUNuQztBQUNILENBQUMsQ0FBQyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ21vZHVsZS1hbGlhcy9yZWdpc3RlcidcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJ1xuXG5pbXBvcnQgbWluaW1pc3QgZnJvbSAnbWluaW1pc3QnXG5pbXBvcnQgeyBjbGlDb250cm9sbGVyIH0gZnJvbSAnc3JjL2NvbnRyb2xsZXInXG5pbXBvcnQgeyBjbGlTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UnXG5cbmNvbnN0IGFyZ3YgPSBtaW5pbWlzdChwcm9jZXNzLmFyZ3Yuc2xpY2UoMiksIGNsaVNlcnZpY2UuY2xpQXJndW1lbnRzKCkpXG47KGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWNsaVNlcnZpY2UuY29tbWFuZElzU2VsZWN0ZWQoYXJndikpIHJldHVybiBjbGlTZXJ2aWNlLnByaW50SGVscCgpXG4gICAgYXdhaXQgY2xpQ29udHJvbGxlci5yb290Q29udHJvbGxlci5yb3V0ZXIoYXJndilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY2xpU2VydmljZS5wcmludEVycm9yKGVyci5tZXNzYWdlKVxuICB9XG59KSgpXG4iXX0=