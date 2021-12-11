"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseAndRouteArgs = void 0;
const msh_node_app_1 = require("@beecode/msh-node-app");
const cli_router_1 = require("src/controller/yargs-router/cli-router");
class ParseAndRouteArgs extends msh_node_app_1.LifeCycle {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UtYW5kLXJvdXRlLWFyZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2luaXQvcGFyc2UtYW5kLXJvdXRlLWFyZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0RBQWlEO0FBQ2pELHVFQUF5RTtBQUV6RSxNQUFhLGlCQUFrQixTQUFRLHdCQUFTO0lBQzNCLEtBQUssQ0FBVTtJQUVsQztRQUNFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFBO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVTLEtBQUssQ0FBQyxTQUFTO1FBQ3ZCLE1BQU0sSUFBQSw2QkFBZ0IsRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQzNELENBQUM7SUFDUyxLQUFLLENBQUMsVUFBVTtRQUN4Qiw2Q0FBNkM7SUFDL0MsQ0FBQztDQUNGO0FBZEQsOENBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaWZlQ3ljbGUgfSBmcm9tICdAYmVlY29kZS9tc2gtbm9kZS1hcHAnXG5pbXBvcnQgeyBjbGlSb3V0ZXJGYWN0b3J5IH0gZnJvbSAnc3JjL2NvbnRyb2xsZXIveWFyZ3Mtcm91dGVyL2NsaS1yb3V0ZXInXG5cbmV4cG9ydCBjbGFzcyBQYXJzZUFuZFJvdXRlQXJncyBleHRlbmRzIExpZmVDeWNsZSB7XG4gIHByb3RlY3RlZCByZWFkb25seSBfYXJndjogc3RyaW5nW11cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7IG5hbWU6ICdBcmdzVG9Db21tYW5kJyB9KVxuICAgIHRoaXMuX2FyZ3YgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMilcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBfY3JlYXRlRm4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgY2xpUm91dGVyRmFjdG9yeShwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpLnJvdXRlQXJndigpXG4gIH1cbiAgcHJvdGVjdGVkIGFzeW5jIF9kZXN0cm95Rm4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpXG4gIH1cbn1cbiJdfQ==