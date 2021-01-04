"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliDal = void 0;
const shelljs_1 = __importDefault(require("shelljs"));
const config_1 = require("src/util/config");
const logger_1 = require("src/util/logger");
exports.cliDal = {
    exec: (params) => {
        if (config_1.config.logLevel === logger_1.LogLevel.DEBUG) {
            logger_1.logger.debug(exports.cliDal.pwd());
        }
        return new Promise((resolve) => {
            shelljs_1.default.exec(params.cmd, { silent: true }, (code, stdout, stderr) => {
                if (params.printOnDone)
                    exports.cliDal.print(params.printOnDone);
                const execResult = { stdout, stderr, errorOccurred: false };
                if (code !== 0)
                    execResult.errorOccurred = true;
                return resolve(execResult);
            });
        });
    },
    print: (message) => {
        // eslint-disable-next-line no-console
        console.log(message);
    },
    cd: (dir) => {
        shelljs_1.default.cd(dir);
    },
    pwd: () => {
        return shelljs_1.default.pwd();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLWRhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYWwvY2xpLWRhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBMkI7QUFDM0IsNENBQXdDO0FBQ3hDLDRDQUFrRDtBQVdyQyxRQUFBLE1BQU0sR0FBRztJQUNwQixJQUFJLEVBQUUsQ0FBQyxNQUFrQixFQUF1QixFQUFFO1FBQ2hELElBQUksZUFBTSxDQUFDLFFBQVEsS0FBSyxpQkFBUSxDQUFDLEtBQUssRUFBRTtZQUN0QyxlQUFNLENBQUMsS0FBSyxDQUFDLGNBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLGlCQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNoRSxJQUFJLE1BQU0sQ0FBQyxXQUFXO29CQUFFLGNBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUN4RCxNQUFNLFVBQVUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFBO2dCQUMzRCxJQUFJLElBQUksS0FBSyxDQUFDO29CQUFFLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFBO2dCQUMvQyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUM1QixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUssRUFBRSxDQUFDLE9BQWUsRUFBUSxFQUFFO1FBQy9CLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFDRCxFQUFFLEVBQUUsQ0FBQyxHQUFXLEVBQVEsRUFBRTtRQUN4QixpQkFBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNmLENBQUM7SUFDRCxHQUFHLEVBQUUsR0FBVyxFQUFFO1FBQ2hCLE9BQU8saUJBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaGVsbCBmcm9tICdzaGVsbGpzJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuaW1wb3J0IHsgTG9nTGV2ZWwsIGxvZ2dlciB9IGZyb20gJ3NyYy91dGlsL2xvZ2dlcidcblxuZXhwb3J0IHR5cGUgRXhlY1Jlc3VsdCA9IHtcbiAgc3Rkb3V0OiBzdHJpbmdcbiAgc3RkZXJyOiBzdHJpbmdcbiAgZXJyb3JPY2N1cnJlZDogYm9vbGVhblxufVxuZXhwb3J0IHR5cGUgRXhlY1BhcmFtcyA9IHtcbiAgY21kOiBzdHJpbmdcbiAgcHJpbnRPbkRvbmU/OiBzdHJpbmdcbn1cbmV4cG9ydCBjb25zdCBjbGlEYWwgPSB7XG4gIGV4ZWM6IChwYXJhbXM6IEV4ZWNQYXJhbXMpOiBQcm9taXNlPEV4ZWNSZXN1bHQ+ID0+IHtcbiAgICBpZiAoY29uZmlnLmxvZ0xldmVsID09PSBMb2dMZXZlbC5ERUJVRykge1xuICAgICAgbG9nZ2VyLmRlYnVnKGNsaURhbC5wd2QoKSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzaGVsbC5leGVjKHBhcmFtcy5jbWQsIHsgc2lsZW50OiB0cnVlIH0sIChjb2RlLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLnByaW50T25Eb25lKSBjbGlEYWwucHJpbnQocGFyYW1zLnByaW50T25Eb25lKVxuICAgICAgICBjb25zdCBleGVjUmVzdWx0ID0geyBzdGRvdXQsIHN0ZGVyciwgZXJyb3JPY2N1cnJlZDogZmFsc2UgfVxuICAgICAgICBpZiAoY29kZSAhPT0gMCkgZXhlY1Jlc3VsdC5lcnJvck9jY3VycmVkID0gdHJ1ZVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShleGVjUmVzdWx0KVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICBwcmludDogKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgfSxcbiAgY2Q6IChkaXI6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIHNoZWxsLmNkKGRpcilcbiAgfSxcbiAgcHdkOiAoKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gc2hlbGwucHdkKClcbiAgfSxcbn1cbiJdfQ==