"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shellDal = void 0;
const shelljs_1 = __importDefault(require("shelljs"));
const logger_1 = require("src/util/logger");
exports.shellDal = {
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
            return resolve({ stdout, stderr, errorOccurred });
        });
    }),
    print: (message) => {
        shelljs_1.default.echo(message);
    },
    cd: (dir) => {
        shelljs_1.default.cd(dir);
    },
    pwd: () => {
        return shelljs_1.default.pwd();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlbGwtZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhbC9zaGVsbC1kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQTJCO0FBQzNCLDRDQUF3QztBQVEzQixRQUFBLFFBQVEsR0FBRztJQUN0Qiw4Q0FBOEM7SUFDOUMsdUNBQXVDO0lBQ3ZDLHFDQUFxQztJQUNyQyxtRUFBbUU7SUFDbkUsc0VBQXNFO0lBQ3RFLEVBQUU7SUFDRiwwQkFBMEI7SUFDMUIsNENBQTRDO0lBQzVDLGtFQUFrRTtJQUNsRSxXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLHVDQUF1QztJQUN2QywwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFFBQVE7SUFDUixFQUFFO0lBQ0YsMEJBQTBCO0lBQzFCLDRDQUE0QztJQUM1QyxrRUFBa0U7SUFDbEUsNkRBQTZEO0lBQzdELFdBQVc7SUFDWCxRQUFRO0lBQ1IsUUFBUTtJQUNSLElBQUksRUFBRSxDQUFDLEdBQVcsRUFBdUIsRUFBRSxDQUN6QyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3RCLElBQUEsZUFBTSxHQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUM5QixpQkFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3pELE1BQU0sYUFBYSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUE7WUFDaEMsT0FBTyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUE7UUFDbkQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUM7SUFDSixLQUFLLEVBQUUsQ0FBQyxPQUFlLEVBQVEsRUFBRTtRQUMvQixpQkFBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBQ0QsRUFBRSxFQUFFLENBQUMsR0FBVyxFQUFRLEVBQUU7UUFDeEIsaUJBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDZixDQUFDO0lBQ0QsR0FBRyxFQUFFLEdBQVcsRUFBRTtRQUNoQixPQUFPLGlCQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDcEIsQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hlbGwgZnJvbSAnc2hlbGxqcydcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3NyYy91dGlsL2xvZ2dlcidcblxuZXhwb3J0IHR5cGUgRXhlY1Jlc3VsdCA9IHtcbiAgc3Rkb3V0OiBzdHJpbmdcbiAgc3RkZXJyOiBzdHJpbmdcbiAgZXJyb3JPY2N1cnJlZDogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3Qgc2hlbGxEYWwgPSB7XG4gIC8vIGV4ZWM6IChjbWQ6IHN0cmluZyk6IFByb21pc2U8RXhlY1Jlc3VsdD4gPT5cbiAgLy8gICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIC8vICAgICBsb2dnZXIoKS5kZWJ1ZyhzaGVsbERhbC5wd2QoKSlcbiAgLy8gICAgIGNvbnN0IGNoaWxkID0gc2hlbGwuZXhlYyhjbWQsIHsgYXN5bmM6IHRydWUsIHNpbGVudDogdHJ1ZSB9KVxuICAvLyAgICAgY29uc3QgcmVzdWx0ID0geyBzdGRvdXQ6ICcnLCBzdGRlcnI6ICcnLCBlcnJvck9jY3VycmVkOiBmYWxzZSB9XG4gIC8vXG4gIC8vICAgICBpZiAoY2hpbGQuc3Rkb3V0KSB7XG4gIC8vICAgICAgIGNoaWxkLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gIC8vICAgICAgICAgcmVzdWx0LnN0ZG91dCA9IChyZXN1bHQuc3Rkb3V0ID8/ICcnKSArIGRhdGEudG9TdHJpbmcoKVxuICAvLyAgICAgICB9KVxuICAvLyAgICAgICBjaGlsZC5zdGRvdXQub24oJ2VuZCcsICgpID0+IHtcbiAgLy8gICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgLy8gICAgICAgfSlcbiAgLy8gICAgIH0gZWxzZSBpZiAoY2hpbGQuc3RkZXJyKSB7XG4gIC8vICAgICAgIGNoaWxkLnN0ZGVyci5vbignZW5kJywgKCkgPT4ge1xuICAvLyAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAvLyAgICAgICB9KVxuICAvLyAgICAgfVxuICAvL1xuICAvLyAgICAgaWYgKGNoaWxkLnN0ZGVycikge1xuICAvLyAgICAgICBjaGlsZC5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAvLyAgICAgICAgIHJlc3VsdC5zdGRlcnIgPSAocmVzdWx0LnN0ZGVyciA/PyAnJykgKyBkYXRhLnRvU3RyaW5nKClcbiAgLy8gICAgICAgICByZXN1bHQuZXJyb3JPY2N1cnJlZCA9IChjaGlsZC5leGl0Q29kZSA/PyAwKSAhPT0gMFxuICAvLyAgICAgICB9KVxuICAvLyAgICAgfVxuICAvLyAgIH0pLFxuICBleGVjOiAoY21kOiBzdHJpbmcpOiBQcm9taXNlPEV4ZWNSZXN1bHQ+ID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxvZ2dlcigpLmRlYnVnKHNoZWxsRGFsLnB3ZCgpKVxuICAgICAgc2hlbGwuZXhlYyhjbWQsIHsgc2lsZW50OiB0cnVlIH0sIChjb2RlLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICBjb25zdCBlcnJvck9jY3VycmVkID0gY29kZSAhPT0gMFxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IHN0ZG91dCwgc3RkZXJyLCBlcnJvck9jY3VycmVkIH0pXG4gICAgICB9KVxuICAgIH0pLFxuICBwcmludDogKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIHNoZWxsLmVjaG8obWVzc2FnZSlcbiAgfSxcbiAgY2Q6IChkaXI6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIHNoZWxsLmNkKGRpcilcbiAgfSxcbiAgcHdkOiAoKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gc2hlbGwucHdkKClcbiAgfSxcbn1cbiJdfQ==