"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseAndRouteArgs = void 0;
const msh_app_boot_1 = require("@beecode/msh-app-boot");
const cli_router_1 = require("../../controller/yargs-router/cli-router");
class ParseAndRouteArgs extends msh_app_boot_1.LifeCycle {
    _argv;
    constructor() {
        super({ name: 'ArgsToCommand' });
        this._argv = process.argv.slice(2);
    }
    async _createFn() {
        await (0, cli_router_1.cliRouterFactory)(process.argv.slice(2)).routeArgv();
    }
    async _destroyFn() {
        // throw new Error('Method not implemented.')
    }
}
exports.ParseAndRouteArgs = ParseAndRouteArgs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UtYW5kLXJvdXRlLWFyZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2luaXQvcGFyc2UtYW5kLXJvdXRlLWFyZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0RBQWlEO0FBQ2pELHVFQUF5RTtBQUV6RSxNQUFhLGlCQUFrQixTQUFRLHdCQUFTO0lBQzVCLEtBQUssQ0FBVTtJQUVsQztRQUNDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFBO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVTLEtBQUssQ0FBQyxTQUFTO1FBQ3hCLE1BQU0sSUFBQSw2QkFBZ0IsRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQzFELENBQUM7SUFFUyxLQUFLLENBQUMsVUFBVTtRQUN6Qiw2Q0FBNkM7SUFDOUMsQ0FBQztDQUNEO0FBZkQsOENBZUMifQ==