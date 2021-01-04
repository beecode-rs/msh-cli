"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectNpmInstallCommand = void 0;
const path_1 = __importDefault(require("path"));
const cli_service_1 = require("src/service/cli-service");
class ProjectNpmInstallCommand {
    constructor(params) {
        this.__rootDir = params.rootDir;
    }
    async execute(project) {
        cli_service_1.cliService.cd(path_1.default.join(this.__rootDir, project));
        const cmd = `npm i -s`;
        const result = await cli_service_1.cliService.exec({ cmd });
        return { [project]: result };
    }
}
exports.ProjectNpmInstallCommand = ProjectNpmInstallCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1ucG0taW5zdGFsbC1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVsL3Byb2plY3QtbnBtLWluc3RhbGwtY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBdUI7QUFFdkIseURBQXFFO0FBT3JFLE1BQWEsd0JBQXdCO0lBR25DLFlBQVksTUFBc0M7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFBO0lBQ2pDLENBQUM7SUFFTSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQWU7UUFDbEMsd0JBQVUsQ0FBQyxFQUFFLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDakQsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFBO1FBQ3RCLE1BQU0sTUFBTSxHQUFHLE1BQU0sd0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQzdDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFBO0lBQzlCLENBQUM7Q0FFRjtBQWRELDREQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IFByb2plY3RDb21tYW5kIH0gZnJvbSAnc3JjL21vZGVsL3Byb2plY3QtY29tbWFuZCdcbmltcG9ydCB7IFByaW50U3RkTWVzc2FnZSwgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL2NsaS1zZXJ2aWNlJ1xuXG5cbmV4cG9ydCB0eXBlIFByb2plY3ROcG1JbnN0YWxsQ29tbWFuZFBhcmFtcyA9IHtcbiAgcm9vdERpcjogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0TnBtSW5zdGFsbENvbW1hbmQgaW1wbGVtZW50cyBQcm9qZWN0Q29tbWFuZHtcbiAgcHJpdmF0ZSByZWFkb25seSBfX3Jvb3REaXI6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtczogUHJvamVjdE5wbUluc3RhbGxDb21tYW5kUGFyYW1zKSB7XG4gICAgdGhpcy5fX3Jvb3REaXIgPSBwYXJhbXMucm9vdERpclxuICB9XG5cbiAgcHVibGljIGFzeW5jIGV4ZWN1dGUocHJvamVjdDogc3RyaW5nKTogUHJvbWlzZTxQcmludFN0ZE1lc3NhZ2U+IHtcbiAgICBjbGlTZXJ2aWNlLmNkKHBhdGguam9pbih0aGlzLl9fcm9vdERpciwgcHJvamVjdCkpXG4gICAgY29uc3QgY21kID0gYG5wbSBpIC1zYFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaVNlcnZpY2UuZXhlYyh7IGNtZCB9KVxuICAgIHJldHVybiB7IFtwcm9qZWN0XTogcmVzdWx0IH1cbiAgfVxuXG59XG4iXX0=