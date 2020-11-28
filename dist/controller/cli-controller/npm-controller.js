"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.npmController = void 0;
const service_1 = require("src/service");
exports.npmController = {
    router: async (argv) => {
        switch (true) {
            case argv._[0] === 'install':
                return service_1.npmService.install();
            case argv._[0] === 'global':
                return service_1.npmService.global();
            default:
                throw new Error(`Unknown npm command selected!`);
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlci9jbGktY29udHJvbGxlci9ucG0tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5Q0FBd0M7QUFFM0IsUUFBQSxhQUFhLEdBQUc7SUFDM0IsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFnQixFQUFpQixFQUFFO1FBQ2hELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVM7Z0JBQzFCLE9BQU8sb0JBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUM3QixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUTtnQkFDekIsT0FBTyxvQkFBVSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQzVCO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQTtTQUNuRDtJQUNILENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFyc2VkQXJncyB9IGZyb20gJ21pbmltaXN0J1xuaW1wb3J0IHsgbnBtU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlJ1xuXG5leHBvcnQgY29uc3QgbnBtQ29udHJvbGxlciA9IHtcbiAgcm91dGVyOiBhc3luYyAoYXJndjogUGFyc2VkQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBhcmd2Ll9bMF0gPT09ICdpbnN0YWxsJzpcbiAgICAgICAgcmV0dXJuIG5wbVNlcnZpY2UuaW5zdGFsbCgpXG4gICAgICBjYXNlIGFyZ3YuX1swXSA9PT0gJ2dsb2JhbCc6XG4gICAgICAgIHJldHVybiBucG1TZXJ2aWNlLmdsb2JhbCgpXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbnBtIGNvbW1hbmQgc2VsZWN0ZWQhYClcbiAgICB9XG4gIH0sXG59XG4iXX0=