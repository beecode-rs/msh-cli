"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitController = void 0;
const git_service_1 = require("src/service/git-service");
exports.gitController = {
    router: async (argv) => {
        switch (true) {
            case argv._[0] === 'status':
                return git_service_1.gitService.status();
            case argv._[0] === 'fetch':
                return git_service_1.gitService.fetch();
            case argv._[0] === 'pull':
                return git_service_1.gitService.pull();
            case argv._[0] === 'clone':
                return git_service_1.gitService.clone();
            default:
                throw new Error(`Unknown git command selected!`);
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlci9jbGktY29udHJvbGxlci9naXQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5REFBb0Q7QUFFdkMsUUFBQSxhQUFhLEdBQUc7SUFDM0IsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFnQixFQUFpQixFQUFFO1FBQ2hELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVE7Z0JBQ3pCLE9BQU8sd0JBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUM1QixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTztnQkFDeEIsT0FBTyx3QkFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQzNCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNO2dCQUN2QixPQUFPLHdCQUFVLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDMUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU87Z0JBQ3hCLE9BQU8sd0JBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUMzQjtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUE7U0FDbkQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcnNlZEFyZ3MgfSBmcm9tICdtaW5pbWlzdCdcbmltcG9ydCB7IGdpdFNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9naXQtc2VydmljZSdcblxuZXhwb3J0IGNvbnN0IGdpdENvbnRyb2xsZXIgPSB7XG4gIHJvdXRlcjogYXN5bmMgKGFyZ3Y6IFBhcnNlZEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgYXJndi5fWzBdID09PSAnc3RhdHVzJzpcbiAgICAgICAgcmV0dXJuIGdpdFNlcnZpY2Uuc3RhdHVzKClcbiAgICAgIGNhc2UgYXJndi5fWzBdID09PSAnZmV0Y2gnOlxuICAgICAgICByZXR1cm4gZ2l0U2VydmljZS5mZXRjaCgpXG4gICAgICBjYXNlIGFyZ3YuX1swXSA9PT0gJ3B1bGwnOlxuICAgICAgICByZXR1cm4gZ2l0U2VydmljZS5wdWxsKClcbiAgICAgIGNhc2UgYXJndi5fWzBdID09PSAnY2xvbmUnOlxuICAgICAgICByZXR1cm4gZ2l0U2VydmljZS5jbG9uZSgpXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZ2l0IGNvbW1hbmQgc2VsZWN0ZWQhYClcbiAgICB9XG4gIH0sXG59XG4iXX0=