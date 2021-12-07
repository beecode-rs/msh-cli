"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shellService = void 0;
const chalk_1 = __importDefault(require("chalk"));
const shell_dal_1 = require("src/dal/shell-dal");
exports.shellService = {
    exec: shell_dal_1.shellDal.exec,
    cd: shell_dal_1.shellDal.cd,
    print: shell_dal_1.shellDal.print,
    printStdMessage: (...messageArgs) => {
        const messages = exports.shellService._joinResults(messageArgs);
        Object.entries(messages).forEach(([name, { stdout, stderr }]) => {
            const borderChar = '#';
            const borderStars = Array(name.length + 6)
                .fill('')
                .map(() => borderChar)
                .join('');
            exports.shellService.print(borderStars);
            exports.shellService.print(`${borderChar}  ${name}  ${borderChar}`);
            exports.shellService.print(borderStars);
            if (stdout.trim() !== '')
                stdout.split('\n').forEach((msg) => exports.shellService.print(msg));
            if (stderr.trim() !== '')
                stderr.split('\n').forEach((msg) => exports.shellService.printError(msg));
        });
    },
    _joinResults: (results) => {
        return results.reduce((agg, cur) => {
            agg = Object.assign(agg, cur);
            return agg;
        }, {});
    },
    printError: (message) => {
        shell_dal_1.shellDal.print(chalk_1.default.red(message));
    },
    printSuccess: (message) => {
        shell_dal_1.shellDal.print(chalk_1.default.green(message));
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlbGwtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL3NoZWxsLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQXlCO0FBQ3pCLGlEQUF3RDtBQUszQyxRQUFBLFlBQVksR0FBRztJQUMxQixJQUFJLEVBQUUsb0JBQVEsQ0FBQyxJQUFJO0lBQ25CLEVBQUUsRUFBRSxvQkFBUSxDQUFDLEVBQUU7SUFDZixLQUFLLEVBQUUsb0JBQVEsQ0FBQyxLQUFLO0lBQ3JCLGVBQWUsRUFBRSxDQUFDLEdBQUcsV0FBOEIsRUFBUSxFQUFFO1FBQzNELE1BQU0sUUFBUSxHQUFHLG9CQUFZLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRXZELE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQTtZQUN0QixNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7aUJBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUM7aUJBQ1IsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztpQkFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ1gsb0JBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDL0Isb0JBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLEtBQUssSUFBSSxLQUFLLFVBQVUsRUFBRSxDQUFDLENBQUE7WUFDM0Qsb0JBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7WUFFL0IsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtnQkFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsb0JBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUN0RixJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO2dCQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxvQkFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQzdGLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFlBQVksRUFBRSxDQUFDLE9BQTBCLEVBQW1CLEVBQUU7UUFDNUQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2pDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUM3QixPQUFPLEdBQUcsQ0FBQTtRQUNaLENBQUMsRUFBRSxFQUFxQixDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUNELFVBQVUsRUFBRSxDQUFDLE9BQWUsRUFBUSxFQUFFO1FBQ3BDLG9CQUFRLENBQUMsS0FBSyxDQUFDLGVBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBQ0QsWUFBWSxFQUFFLENBQUMsT0FBZSxFQUFRLEVBQUU7UUFDdEMsb0JBQVEsQ0FBQyxLQUFLLENBQUMsZUFBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IHsgRXhlY1Jlc3VsdCwgc2hlbGxEYWwgfSBmcm9tICdzcmMvZGFsL3NoZWxsLWRhbCdcblxuZXhwb3J0IHR5cGUgUHJpbnRTdGRNZXNzYWdlID0ge1xuICBba2V5OiBzdHJpbmddOiBFeGVjUmVzdWx0XG59XG5leHBvcnQgY29uc3Qgc2hlbGxTZXJ2aWNlID0ge1xuICBleGVjOiBzaGVsbERhbC5leGVjLFxuICBjZDogc2hlbGxEYWwuY2QsXG4gIHByaW50OiBzaGVsbERhbC5wcmludCxcbiAgcHJpbnRTdGRNZXNzYWdlOiAoLi4ubWVzc2FnZUFyZ3M6IFByaW50U3RkTWVzc2FnZVtdKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBzaGVsbFNlcnZpY2UuX2pvaW5SZXN1bHRzKG1lc3NhZ2VBcmdzKVxuXG4gICAgT2JqZWN0LmVudHJpZXMobWVzc2FnZXMpLmZvckVhY2goKFtuYW1lLCB7IHN0ZG91dCwgc3RkZXJyIH1dKSA9PiB7XG4gICAgICBjb25zdCBib3JkZXJDaGFyID0gJyMnXG4gICAgICBjb25zdCBib3JkZXJTdGFycyA9IEFycmF5KG5hbWUubGVuZ3RoICsgNilcbiAgICAgICAgLmZpbGwoJycpXG4gICAgICAgIC5tYXAoKCkgPT4gYm9yZGVyQ2hhcilcbiAgICAgICAgLmpvaW4oJycpXG4gICAgICBzaGVsbFNlcnZpY2UucHJpbnQoYm9yZGVyU3RhcnMpXG4gICAgICBzaGVsbFNlcnZpY2UucHJpbnQoYCR7Ym9yZGVyQ2hhcn0gICR7bmFtZX0gICR7Ym9yZGVyQ2hhcn1gKVxuICAgICAgc2hlbGxTZXJ2aWNlLnByaW50KGJvcmRlclN0YXJzKVxuXG4gICAgICBpZiAoc3Rkb3V0LnRyaW0oKSAhPT0gJycpIHN0ZG91dC5zcGxpdCgnXFxuJykuZm9yRWFjaCgobXNnKSA9PiBzaGVsbFNlcnZpY2UucHJpbnQobXNnKSlcbiAgICAgIGlmIChzdGRlcnIudHJpbSgpICE9PSAnJykgc3RkZXJyLnNwbGl0KCdcXG4nKS5mb3JFYWNoKChtc2cpID0+IHNoZWxsU2VydmljZS5wcmludEVycm9yKG1zZykpXG4gICAgfSlcbiAgfSxcbiAgX2pvaW5SZXN1bHRzOiAocmVzdWx0czogUHJpbnRTdGRNZXNzYWdlW10pOiBQcmludFN0ZE1lc3NhZ2UgPT4ge1xuICAgIHJldHVybiByZXN1bHRzLnJlZHVjZSgoYWdnLCBjdXIpID0+IHtcbiAgICAgIGFnZyA9IE9iamVjdC5hc3NpZ24oYWdnLCBjdXIpXG4gICAgICByZXR1cm4gYWdnXG4gICAgfSwge30gYXMgUHJpbnRTdGRNZXNzYWdlKVxuICB9LFxuICBwcmludEVycm9yOiAobWVzc2FnZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgc2hlbGxEYWwucHJpbnQoY2hhbGsucmVkKG1lc3NhZ2UpKVxuICB9LFxuICBwcmludFN1Y2Nlc3M6IChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBzaGVsbERhbC5wcmludChjaGFsay5ncmVlbihtZXNzYWdlKSlcbiAgfSxcbn1cbiJdfQ==