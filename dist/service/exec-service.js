"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.execService = void 0;
const shelljs_1 = __importDefault(require("shelljs"));
exports.execService = {
    exec: (command) => {
        return new Promise((resolve) => {
            shelljs_1.default.exec(command, { silent: true }, (code, stdout, stderr) => {
                const execResult = { stdout, stderr, error: false };
                if (code !== 0)
                    execResult.error = true;
                return resolve(execResult);
            });
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlYy1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvZXhlYy1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUEyQjtBQVFkLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLElBQUksRUFBRSxDQUFDLE9BQWUsRUFBdUIsRUFBRTtRQUM3QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDN0IsaUJBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDN0QsTUFBTSxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQTtnQkFDbkQsSUFBSSxJQUFJLEtBQUssQ0FBQztvQkFBRSxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtnQkFDdkMsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDNUIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNoZWxsIGZyb20gJ3NoZWxsanMnXG5cbmV4cG9ydCB0eXBlIEV4ZWNSZXN1bHQgPSB7XG4gIHN0ZG91dDogc3RyaW5nXG4gIHN0ZGVycjogc3RyaW5nXG4gIGVycm9yOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBleGVjU2VydmljZSA9IHtcbiAgZXhlYzogKGNvbW1hbmQ6IHN0cmluZyk6IFByb21pc2U8RXhlY1Jlc3VsdD4gPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2hlbGwuZXhlYyhjb21tYW5kLCB7IHNpbGVudDogdHJ1ZSB9LCAoY29kZSwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgY29uc3QgZXhlY1Jlc3VsdCA9IHsgc3Rkb3V0LCBzdGRlcnIsIGVycm9yOiBmYWxzZSB9XG4gICAgICAgIGlmIChjb2RlICE9PSAwKSBleGVjUmVzdWx0LmVycm9yID0gdHJ1ZVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShleGVjUmVzdWx0KVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxufVxuIl19