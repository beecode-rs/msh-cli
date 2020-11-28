"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliDal = void 0;
const shelljs_1 = __importDefault(require("shelljs"));
const util_1 = require("src/util");
exports.cliDal = {
    exec: (params) => {
        if (util_1.config.logLevel === util_1.LogLevel.DEBUG) {
            util_1.logger.debug(exports.cliDal.pwd());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLWRhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYWwvY2xpLWRhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBMkI7QUFDM0IsbUNBQW1EO0FBV3RDLFFBQUEsTUFBTSxHQUFHO0lBQ3BCLElBQUksRUFBRSxDQUFDLE1BQWtCLEVBQXVCLEVBQUU7UUFDaEQsSUFBSSxhQUFNLENBQUMsUUFBUSxLQUFLLGVBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDdEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtTQUMzQjtRQUNELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM3QixpQkFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDaEUsSUFBSSxNQUFNLENBQUMsV0FBVztvQkFBRSxjQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDeEQsTUFBTSxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQTtnQkFDM0QsSUFBSSxJQUFJLEtBQUssQ0FBQztvQkFBRSxVQUFVLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQTtnQkFDL0MsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDNUIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxLQUFLLEVBQUUsQ0FBQyxPQUFlLEVBQVEsRUFBRTtRQUMvQixzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBQ0QsRUFBRSxFQUFFLENBQUMsR0FBVyxFQUFRLEVBQUU7UUFDeEIsaUJBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDZixDQUFDO0lBQ0QsR0FBRyxFQUFFLEdBQVcsRUFBRTtRQUNoQixPQUFPLGlCQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDcEIsQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hlbGwgZnJvbSAnc2hlbGxqcydcbmltcG9ydCB7IExvZ0xldmVsLCBjb25maWcsIGxvZ2dlciB9IGZyb20gJ3NyYy91dGlsJ1xuXG5leHBvcnQgdHlwZSBFeGVjUmVzdWx0ID0ge1xuICBzdGRvdXQ6IHN0cmluZ1xuICBzdGRlcnI6IHN0cmluZ1xuICBlcnJvck9jY3VycmVkOiBib29sZWFuXG59XG5leHBvcnQgdHlwZSBFeGVjUGFyYW1zID0ge1xuICBjbWQ6IHN0cmluZ1xuICBwcmludE9uRG9uZT86IHN0cmluZ1xufVxuZXhwb3J0IGNvbnN0IGNsaURhbCA9IHtcbiAgZXhlYzogKHBhcmFtczogRXhlY1BhcmFtcyk6IFByb21pc2U8RXhlY1Jlc3VsdD4gPT4ge1xuICAgIGlmIChjb25maWcubG9nTGV2ZWwgPT09IExvZ0xldmVsLkRFQlVHKSB7XG4gICAgICBsb2dnZXIuZGVidWcoY2xpRGFsLnB3ZCgpKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNoZWxsLmV4ZWMocGFyYW1zLmNtZCwgeyBzaWxlbnQ6IHRydWUgfSwgKGNvZGUsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMucHJpbnRPbkRvbmUpIGNsaURhbC5wcmludChwYXJhbXMucHJpbnRPbkRvbmUpXG4gICAgICAgIGNvbnN0IGV4ZWNSZXN1bHQgPSB7IHN0ZG91dCwgc3RkZXJyLCBlcnJvck9jY3VycmVkOiBmYWxzZSB9XG4gICAgICAgIGlmIChjb2RlICE9PSAwKSBleGVjUmVzdWx0LmVycm9yT2NjdXJyZWQgPSB0cnVlXG4gICAgICAgIHJldHVybiByZXNvbHZlKGV4ZWNSZXN1bHQpXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIHByaW50OiAobWVzc2FnZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICB9LFxuICBjZDogKGRpcjogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgc2hlbGwuY2QoZGlyKVxuICB9LFxuICBwd2Q6ICgpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBzaGVsbC5wd2QoKVxuICB9LFxufVxuIl19