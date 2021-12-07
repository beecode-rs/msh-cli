"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliApp = void 0;
const msh_node_app_1 = require("@beecode/msh-node-app");
const parse_and_route_args_1 = require("src/app/init/parse-and-route-args");
class CliApp extends msh_node_app_1.AppFlow {
    constructor() {
        super(new parse_and_route_args_1.ParseAndRouteArgs());
    }
}
exports.CliApp = CliApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLWFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvY2xpLWFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3REFBK0M7QUFDL0MsNEVBQXFFO0FBRXJFLE1BQWEsTUFBTyxTQUFRLHNCQUFPO0lBQ2pDO1FBQ0UsS0FBSyxDQUFDLElBQUksd0NBQWlCLEVBQUUsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Q0FDRjtBQUpELHdCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwRmxvdyB9IGZyb20gJ0BiZWVjb2RlL21zaC1ub2RlLWFwcCdcbmltcG9ydCB7IFBhcnNlQW5kUm91dGVBcmdzIH0gZnJvbSAnc3JjL2FwcC9pbml0L3BhcnNlLWFuZC1yb3V0ZS1hcmdzJ1xuXG5leHBvcnQgY2xhc3MgQ2xpQXBwIGV4dGVuZHMgQXBwRmxvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKG5ldyBQYXJzZUFuZFJvdXRlQXJncygpKVxuICB9XG59XG4iXX0=