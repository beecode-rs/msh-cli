"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliService = void 0;
const chalk_1 = __importDefault(require("chalk"));
const dal_1 = require("src/dal");
const help_service_1 = require("src/service/help-service");
const shell_service_1 = require("src/service/shell-service");
const constant_1 = require("src/util/constant");
exports.cliService = {
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
    printVersion: () => shell_service_1.shellService.print(`v${constant_1.constant.projectVersion}`),
    printHelp: () => shell_service_1.shellService.print(help_service_1.helpService.text()),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9jbGktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsaUNBQTRDO0FBQzVDLDJEQUFzRDtBQUN0RCw2REFBd0Q7QUFDeEQsZ0RBQTRDO0FBTS9CLFFBQUEsVUFBVSxHQUFHO0lBQ3hCLGVBQWUsRUFBRSxDQUFDLEdBQUcsV0FBOEIsRUFBUSxFQUFFO1FBQzNELE1BQU0sUUFBUSxHQUFHLGtCQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3JELEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3hELFlBQU0sQ0FBQyxLQUFLLENBQUMsZUFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQzdCLEtBQUssTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUFFLFlBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEUsS0FBSyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQUUsWUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDOUU7SUFDSCxDQUFDO0lBQ0QsWUFBWSxFQUFFLENBQUMsT0FBMEIsRUFBbUIsRUFBRTtRQUM1RCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDakMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzdCLE9BQU8sR0FBRyxDQUFBO1FBQ1osQ0FBQyxFQUFFLEVBQXFCLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBQ0QsWUFBWSxFQUFFLEdBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUMsS0FBSyxDQUFDLElBQUksbUJBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzRSxTQUFTLEVBQUUsR0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQyxLQUFLLENBQUMsMEJBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztDQUM5RCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IHsgRXhlY1Jlc3VsdCwgY2xpRGFsIH0gZnJvbSAnc3JjL2RhbCdcbmltcG9ydCB7IGhlbHBTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UvaGVscC1zZXJ2aWNlJ1xuaW1wb3J0IHsgc2hlbGxTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2Uvc2hlbGwtc2VydmljZSdcbmltcG9ydCB7IGNvbnN0YW50IH0gZnJvbSAnc3JjL3V0aWwvY29uc3RhbnQnXG5cbmV4cG9ydCB0eXBlIFByaW50U3RkTWVzc2FnZSA9IHtcbiAgW2tleTogc3RyaW5nXTogRXhlY1Jlc3VsdFxufVxuXG5leHBvcnQgY29uc3QgY2xpU2VydmljZSA9IHtcbiAgcHJpbnRTdGRNZXNzYWdlOiAoLi4ubWVzc2FnZUFyZ3M6IFByaW50U3RkTWVzc2FnZVtdKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBjbGlTZXJ2aWNlLl9qb2luUmVzdWx0cyhtZXNzYWdlQXJncylcbiAgICBmb3IgKGNvbnN0IFtrZXksIGV4ZWNSZXN1bHRdIG9mIE9iamVjdC5lbnRyaWVzKG1lc3NhZ2VzKSkge1xuICAgICAgY2xpRGFsLnByaW50KGNoYWxrLmN5YW4oa2V5KSlcbiAgICAgIGZvciAoY29uc3QgbXNnIG9mIGV4ZWNSZXN1bHQuc3Rkb3V0LnNwbGl0KCdcXG4nKSkgY2xpRGFsLnByaW50KG1zZylcbiAgICAgIGZvciAoY29uc3QgbXNnIG9mIGV4ZWNSZXN1bHQuc3RkZXJyLnNwbGl0KCdcXG4nKSkgY2xpRGFsLnByaW50KGNoYWxrLnJlZChtc2cpKVxuICAgIH1cbiAgfSxcbiAgX2pvaW5SZXN1bHRzOiAocmVzdWx0czogUHJpbnRTdGRNZXNzYWdlW10pOiBQcmludFN0ZE1lc3NhZ2UgPT4ge1xuICAgIHJldHVybiByZXN1bHRzLnJlZHVjZSgoYWdnLCBjdXIpID0+IHtcbiAgICAgIGFnZyA9IE9iamVjdC5hc3NpZ24oYWdnLCBjdXIpXG4gICAgICByZXR1cm4gYWdnXG4gICAgfSwge30gYXMgUHJpbnRTdGRNZXNzYWdlKVxuICB9LFxuICBwcmludFZlcnNpb246ICgpOiB2b2lkID0+IHNoZWxsU2VydmljZS5wcmludChgdiR7Y29uc3RhbnQucHJvamVjdFZlcnNpb259YCksXG4gIHByaW50SGVscDogKCk6IHZvaWQgPT4gc2hlbGxTZXJ2aWNlLnByaW50KGhlbHBTZXJ2aWNlLnRleHQoKSksXG59XG4iXX0=