"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliNpmController = void 0;
const service_1 = require("src/service");
exports.cliNpmController = {
    router: async (argv) => {
        switch (true) {
            case argv._[0] === '-i':
                return service_1.npmService.install();
            case argv._[0] === '-g':
                return service_1.npmService.global();
            default:
                throw new Error(`Unknown npm command selected!`);
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLW5wbS1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2xpLWNvbnRyb2xsZXIvY2xpLW5wbS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlDQUF3QztBQUUzQixRQUFBLGdCQUFnQixHQUFHO0lBQzlCLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBZ0IsRUFBaUIsRUFBRTtRQUNoRCxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJO2dCQUNyQixPQUFPLG9CQUFVLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDN0IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUk7Z0JBQ3JCLE9BQU8sb0JBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUM1QjtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUE7U0FDbkQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcnNlZEFyZ3MgfSBmcm9tICdtaW5pbWlzdCdcbmltcG9ydCB7IG5wbVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZSdcblxuZXhwb3J0IGNvbnN0IGNsaU5wbUNvbnRyb2xsZXIgPSB7XG4gIHJvdXRlcjogYXN5bmMgKGFyZ3Y6IFBhcnNlZEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgYXJndi5fWzBdID09PSAnLWknOlxuICAgICAgICByZXR1cm4gbnBtU2VydmljZS5pbnN0YWxsKClcbiAgICAgIGNhc2UgYXJndi5fWzBdID09PSAnLWcnOlxuICAgICAgICByZXR1cm4gbnBtU2VydmljZS5nbG9iYWwoKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG5wbSBjb21tYW5kIHNlbGVjdGVkIWApXG4gICAgfVxuICB9LFxufVxuIl19