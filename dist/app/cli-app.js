"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliApp = void 0;
const msh_app_boot_1 = require("@beecode/msh-app-boot");
const parse_and_route_args_1 = require("../app/init/parse-and-route-args");
class CliApp extends msh_app_boot_1.AppFlow {
    constructor() {
        super(new parse_and_route_args_1.ParseAndRouteArgs());
    }
}
exports.CliApp = CliApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLWFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvY2xpLWFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3REFBK0M7QUFDL0MsNEVBQXFFO0FBRXJFLE1BQWEsTUFBTyxTQUFRLHNCQUFPO0lBQ2xDO1FBQ0MsS0FBSyxDQUFDLElBQUksd0NBQWlCLEVBQUUsQ0FBQyxDQUFBO0lBQy9CLENBQUM7Q0FDRDtBQUpELHdCQUlDIn0=