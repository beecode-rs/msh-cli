"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shellService = void 0;
const chalk_1 = __importDefault(require("chalk"));
const shell_dal_1 = require("../dal/shell-dal");
// TODO refactor object and use class instead
exports.shellService = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _joinResults: (results) => {
        return results.reduce((agg, cur) => {
            agg = Object.assign(agg, cur);
            return agg;
        }, {});
    },
    cd: shell_dal_1.shellDal.cd,
    exec: shell_dal_1.shellDal.exec,
    print: shell_dal_1.shellDal.print,
    printError: (message) => {
        shell_dal_1.shellDal.print(chalk_1.default.red(message));
    },
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
            if (stdout.trim() !== '') {
                stdout.split('\n').forEach((msg) => exports.shellService.print(msg));
            }
            if (stderr.trim() !== '') {
                stderr.split('\n').forEach((msg) => exports.shellService.printError(msg));
            }
        });
    },
    printSuccess: (message) => {
        shell_dal_1.shellDal.print(chalk_1.default.green(message));
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlbGwtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL3NoZWxsLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQXlCO0FBQ3pCLGlEQUF3RDtBQUl4RCw2Q0FBNkM7QUFDaEMsUUFBQSxZQUFZLEdBQUc7SUFDM0IsZ0VBQWdFO0lBQ2hFLFlBQVksRUFBRSxDQUFDLE9BQTBCLEVBQW1CLEVBQUU7UUFDN0QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFrQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNuRCxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFFN0IsT0FBTyxHQUFHLENBQUE7UUFDWCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDUCxDQUFDO0lBQ0QsRUFBRSxFQUFFLG9CQUFRLENBQUMsRUFBRTtJQUNmLElBQUksRUFBRSxvQkFBUSxDQUFDLElBQUk7SUFDbkIsS0FBSyxFQUFFLG9CQUFRLENBQUMsS0FBSztJQUNyQixVQUFVLEVBQUUsQ0FBQyxPQUFlLEVBQVEsRUFBRTtRQUNyQyxvQkFBUSxDQUFDLEtBQUssQ0FBQyxlQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUNELGVBQWUsRUFBRSxDQUFDLEdBQUcsV0FBOEIsRUFBUSxFQUFFO1FBQzVELE1BQU0sUUFBUSxHQUFHLG9CQUFZLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRXZELE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9ELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQTtZQUN0QixNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7aUJBQ3hDLElBQUksQ0FBQyxFQUFFLENBQUM7aUJBQ1IsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztpQkFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ1Ysb0JBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDL0Isb0JBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLEtBQUssSUFBSSxLQUFLLFVBQVUsRUFBRSxDQUFDLENBQUE7WUFDM0Qsb0JBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7WUFFL0IsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsb0JBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTthQUM1RDtZQUNELElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLG9CQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7YUFDakU7UUFDRixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxZQUFZLEVBQUUsQ0FBQyxPQUFlLEVBQVEsRUFBRTtRQUN2QyxvQkFBUSxDQUFDLEtBQUssQ0FBQyxlQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDckMsQ0FBQztDQUNELENBQUEifQ==