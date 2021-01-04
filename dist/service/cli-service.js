"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliService = void 0;
const chalk_1 = __importDefault(require("chalk"));
const dal_1 = require("src/dal");
const help_service_1 = require("src/service/help-service");
const constant_1 = require("src/util/constant");
exports.cliService = {
    exitAfterCommandExecuted: false,
    printStdMessage: (...messageArgs) => {
        const messages = exports.cliService._joinResults(messageArgs);
        for (const [key, execResult] of Object.entries(messages)) {
            dal_1.cliDal.print(chalk_1.default.cyan(key));
            for (const msg of execResult.stdout.split('\n'))
                dal_1.cliDal.print(msg);
            for (const msg of execResult.stderr.split('\n'))
                dal_1.cliDal.print(chalk_1.default.red(msg));
        }
    },
    _joinResults: (results) => {
        return results.reduce((agg, cur) => {
            agg = Object.assign(agg, cur);
            return agg;
        }, {});
    },
    printError: (message) => {
        dal_1.cliDal.print(chalk_1.default.red(message));
    },
    printSuccess: (message) => {
        dal_1.cliDal.print(chalk_1.default.green(message));
    },
    printVersion: () => dal_1.cliDal.print(`v${constant_1.constant.projectVersion}`),
    printHelp: () => dal_1.cliDal.print(help_service_1.helpService.text()),
    exec: dal_1.cliDal.exec,
    cd: dal_1.cliDal.cd,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9jbGktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsaUNBQTRDO0FBQzVDLDJEQUFzRDtBQUN0RCxnREFBNEM7QUFNL0IsUUFBQSxVQUFVLEdBQUc7SUFDeEIsd0JBQXdCLEVBQUUsS0FBSztJQUMvQixlQUFlLEVBQUUsQ0FBQyxHQUFHLFdBQThCLEVBQVEsRUFBRTtRQUMzRCxNQUFNLFFBQVEsR0FBRyxrQkFBVSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNyRCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN4RCxZQUFNLENBQUMsS0FBSyxDQUFDLGVBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUM3QixLQUFLLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFBRSxZQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xFLEtBQUssTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUFFLFlBQU0sQ0FBQyxLQUFLLENBQUMsZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQzlFO0lBQ0gsQ0FBQztJQUNELFlBQVksRUFBRSxDQUFDLE9BQTBCLEVBQW1CLEVBQUU7UUFDNUQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2pDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUM3QixPQUFPLEdBQUcsQ0FBQTtRQUNaLENBQUMsRUFBRSxFQUFxQixDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUNELFVBQVUsRUFBRSxDQUFDLE9BQWUsRUFBUSxFQUFFO1FBQ3BDLFlBQU0sQ0FBQyxLQUFLLENBQUMsZUFBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFDRCxZQUFZLEVBQUUsQ0FBQyxPQUFPLEVBQVEsRUFBRTtRQUM5QixZQUFNLENBQUMsS0FBSyxDQUFDLGVBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBQ0QsWUFBWSxFQUFFLEdBQVMsRUFBRSxDQUFDLFlBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxtQkFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JFLFNBQVMsRUFBRSxHQUFTLEVBQUUsQ0FBQyxZQUFNLENBQUMsS0FBSyxDQUFDLDBCQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkQsSUFBSSxFQUFFLFlBQU0sQ0FBQyxJQUFJO0lBQ2pCLEVBQUUsRUFBRSxZQUFNLENBQUMsRUFBRTtDQUNkLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgeyBFeGVjUmVzdWx0LCBjbGlEYWwgfSBmcm9tICdzcmMvZGFsJ1xuaW1wb3J0IHsgaGVscFNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9oZWxwLXNlcnZpY2UnXG5pbXBvcnQgeyBjb25zdGFudCB9IGZyb20gJ3NyYy91dGlsL2NvbnN0YW50J1xuXG5leHBvcnQgdHlwZSBQcmludFN0ZE1lc3NhZ2UgPSB7XG4gIFtrZXk6IHN0cmluZ106IEV4ZWNSZXN1bHRcbn1cblxuZXhwb3J0IGNvbnN0IGNsaVNlcnZpY2UgPSB7XG4gIGV4aXRBZnRlckNvbW1hbmRFeGVjdXRlZDogZmFsc2UsXG4gIHByaW50U3RkTWVzc2FnZTogKC4uLm1lc3NhZ2VBcmdzOiBQcmludFN0ZE1lc3NhZ2VbXSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gY2xpU2VydmljZS5fam9pblJlc3VsdHMobWVzc2FnZUFyZ3MpXG4gICAgZm9yIChjb25zdCBba2V5LCBleGVjUmVzdWx0XSBvZiBPYmplY3QuZW50cmllcyhtZXNzYWdlcykpIHtcbiAgICAgIGNsaURhbC5wcmludChjaGFsay5jeWFuKGtleSkpXG4gICAgICBmb3IgKGNvbnN0IG1zZyBvZiBleGVjUmVzdWx0LnN0ZG91dC5zcGxpdCgnXFxuJykpIGNsaURhbC5wcmludChtc2cpXG4gICAgICBmb3IgKGNvbnN0IG1zZyBvZiBleGVjUmVzdWx0LnN0ZGVyci5zcGxpdCgnXFxuJykpIGNsaURhbC5wcmludChjaGFsay5yZWQobXNnKSlcbiAgICB9XG4gIH0sXG4gIF9qb2luUmVzdWx0czogKHJlc3VsdHM6IFByaW50U3RkTWVzc2FnZVtdKTogUHJpbnRTdGRNZXNzYWdlID0+IHtcbiAgICByZXR1cm4gcmVzdWx0cy5yZWR1Y2UoKGFnZywgY3VyKSA9PiB7XG4gICAgICBhZ2cgPSBPYmplY3QuYXNzaWduKGFnZywgY3VyKVxuICAgICAgcmV0dXJuIGFnZ1xuICAgIH0sIHt9IGFzIFByaW50U3RkTWVzc2FnZSlcbiAgfSxcbiAgcHJpbnRFcnJvcjogKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGNsaURhbC5wcmludChjaGFsay5yZWQobWVzc2FnZSkpXG4gIH0sXG4gIHByaW50U3VjY2VzczogKG1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICBjbGlEYWwucHJpbnQoY2hhbGsuZ3JlZW4obWVzc2FnZSkpXG4gIH0sXG4gIHByaW50VmVyc2lvbjogKCk6IHZvaWQgPT4gY2xpRGFsLnByaW50KGB2JHtjb25zdGFudC5wcm9qZWN0VmVyc2lvbn1gKSxcbiAgcHJpbnRIZWxwOiAoKTogdm9pZCA9PiBjbGlEYWwucHJpbnQoaGVscFNlcnZpY2UudGV4dCgpKSxcbiAgZXhlYzogY2xpRGFsLmV4ZWMsXG4gIGNkOiBjbGlEYWwuY2QsXG59XG4iXX0=