"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shellDal = void 0;
const shelljs_1 = __importDefault(require("shelljs"));
const logger_1 = require("../util/logger");
exports.shellDal = {
    cd: (dir) => {
        shelljs_1.default.cd(dir);
    },
    // exec: (cmd: string): Promise<ExecResult> =>
    //   new Promise((resolve, reject) => {
    //     logger().debug(shellDal.pwd())
    //     const child = shell.exec(cmd, { async: true, silent: true })
    //     const result = { stdout: '', stderr: '', errorOccurred: false }
    //
    //     if (child.stdout) {
    //       child.stdout.on('data', (data) => {
    //         result.stdout = (result.stdout ?? '') + data.toString()
    //       })
    //       child.stdout.on('end', () => {
    //         resolve(result)
    //       })
    //     } else if (child.stderr) {
    //       child.stderr.on('end', () => {
    //         resolve(result)
    //       })
    //     }
    //
    //     if (child.stderr) {
    //       child.stderr.on('data', (data) => {
    //         result.stderr = (result.stderr ?? '') + data.toString()
    //         result.errorOccurred = (child.exitCode ?? 0) !== 0
    //       })
    //     }
    //   }),
    exec: (cmd) => new Promise((resolve) => {
        (0, logger_1.logger)().debug(exports.shellDal.pwd());
        shelljs_1.default.exec(cmd, { silent: true }, (code, stdout, stderr) => {
            const errorOccurred = code !== 0;
            return resolve({ errorOccurred, stderr, stdout });
        });
    }),
    print: (message) => {
        shelljs_1.default.echo(message);
    },
    pwd: () => {
        return shelljs_1.default.pwd();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlbGwtZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhbC9zaGVsbC1kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQTJCO0FBQzNCLDRDQUF3QztBQVEzQixRQUFBLFFBQVEsR0FBRztJQUN2QixFQUFFLEVBQUUsQ0FBQyxHQUFXLEVBQVEsRUFBRTtRQUN6QixpQkFBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFDRCw4Q0FBOEM7SUFDOUMsdUNBQXVDO0lBQ3ZDLHFDQUFxQztJQUNyQyxtRUFBbUU7SUFDbkUsc0VBQXNFO0lBQ3RFLEVBQUU7SUFDRiwwQkFBMEI7SUFDMUIsNENBQTRDO0lBQzVDLGtFQUFrRTtJQUNsRSxXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLHVDQUF1QztJQUN2QywwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFFBQVE7SUFDUixFQUFFO0lBQ0YsMEJBQTBCO0lBQzFCLDRDQUE0QztJQUM1QyxrRUFBa0U7SUFDbEUsNkRBQTZEO0lBQzdELFdBQVc7SUFDWCxRQUFRO0lBQ1IsUUFBUTtJQUNSLElBQUksRUFBRSxDQUFDLEdBQVcsRUFBdUIsRUFBRSxDQUMxQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3ZCLElBQUEsZUFBTSxHQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUM5QixpQkFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzFELE1BQU0sYUFBYSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUE7WUFFaEMsT0FBTyxPQUFPLENBQUMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDbEQsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUM7SUFDSCxLQUFLLEVBQUUsQ0FBQyxPQUFlLEVBQVEsRUFBRTtRQUNoQyxpQkFBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBQ0QsR0FBRyxFQUFFLEdBQVcsRUFBRTtRQUNqQixPQUFPLGlCQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDbkIsQ0FBQztDQUNELENBQUEifQ==