"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleService = void 0;
const shelljs_1 = __importDefault(require("shelljs"));
exports.consoleService = {
    exec: (params) => {
        return new Promise((resolve) => {
            shelljs_1.default.exec(params.cmd, { silent: true }, (code, stdout, stderr) => {
                if (params.printOnDone)
                    exports.consoleService.print(params.printOnDone);
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvY29uc29sZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUEyQjtBQWFkLFFBQUEsY0FBYyxHQUFHO0lBQzVCLElBQUksRUFBRSxDQUFDLE1BQWtCLEVBQXVCLEVBQUU7UUFDaEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLGlCQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNoRSxJQUFJLE1BQU0sQ0FBQyxXQUFXO29CQUFFLHNCQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEUsTUFBTSxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQTtnQkFDM0QsSUFBSSxJQUFJLEtBQUssQ0FBQztvQkFBRSxVQUFVLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQTtnQkFDL0MsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDNUIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxLQUFLLEVBQUUsQ0FBQyxPQUFlLEVBQVEsRUFBRTtRQUMvQixzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBQ0QsRUFBRSxFQUFFLENBQUMsR0FBVyxFQUFRLEVBQUU7UUFDeEIsaUJBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDZixDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaGVsbCBmcm9tICdzaGVsbGpzJ1xuXG5leHBvcnQgdHlwZSBFeGVjUmVzdWx0ID0ge1xuICBzdGRvdXQ6IHN0cmluZ1xuICBzdGRlcnI6IHN0cmluZ1xuICBlcnJvck9jY3VycmVkOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIEV4ZWNQYXJhbXMgPSB7XG4gIGNtZDogc3RyaW5nXG4gIHByaW50T25Eb25lPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBjb25zb2xlU2VydmljZSA9IHtcbiAgZXhlYzogKHBhcmFtczogRXhlY1BhcmFtcyk6IFByb21pc2U8RXhlY1Jlc3VsdD4gPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2hlbGwuZXhlYyhwYXJhbXMuY21kLCB7IHNpbGVudDogdHJ1ZSB9LCAoY29kZSwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5wcmludE9uRG9uZSkgY29uc29sZVNlcnZpY2UucHJpbnQocGFyYW1zLnByaW50T25Eb25lKVxuICAgICAgICBjb25zdCBleGVjUmVzdWx0ID0geyBzdGRvdXQsIHN0ZGVyciwgZXJyb3JPY2N1cnJlZDogZmFsc2UgfVxuICAgICAgICBpZiAoY29kZSAhPT0gMCkgZXhlY1Jlc3VsdC5lcnJvck9jY3VycmVkID0gdHJ1ZVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShleGVjUmVzdWx0KVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICBwcmludDogKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgfSxcbiAgY2Q6IChkaXI6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIHNoZWxsLmNkKGRpcilcbiAgfSxcbn1cbiJdfQ==