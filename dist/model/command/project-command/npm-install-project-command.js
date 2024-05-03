import path from 'path';
import { shellService } from '#src/service/shell-service';
import { config } from '#src/util/config';
export class NpmInstallProjectCommand {
    _rootDir;
    constructor(params) {
        const { rootDir = config().rootDir } = params ?? {};
        this._rootDir = rootDir;
    }
    async execute(project) {
        try {
            shellService.cd(path.join(this._rootDir, project));
            const cmd = 'npm i -s';
            const result = await shellService.exec(cmd);
            // return [{ name: project, stringResult: result.stdout, errorMessage: result.stdout }]
            return [{ errorMessage: result.stdout, name: project, stringResult: 'npm install successful' }];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLWluc3RhbGwtcHJvamVjdC1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZGVsL2NvbW1hbmQvcHJvamVjdC1jb21tYW5kL25wbS1pbnN0YWxsLXByb2plY3QtY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7QUFHdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFBO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QyxNQUFNLE9BQU8sd0JBQXdCO0lBQ2pCLFFBQVEsQ0FBUTtJQUVuQyxZQUFZLE1BQTZCO1FBQ3hDLE1BQU0sRUFBRSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQTtRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtJQUN4QixDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFlO1FBQzVCLElBQUksQ0FBQztZQUNKLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7WUFDbEQsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFBO1lBQ3RCLE1BQU0sTUFBTSxHQUFHLE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUUzQyx1RkFBdUY7WUFDdkYsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFBO1FBQ2hHLENBQUM7UUFBQyxPQUFPLEdBQVEsRUFBRSxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxFQUFFLFlBQVksRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUN2QyxDQUFDO0lBQ0YsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuaW1wb3J0IHsgRXhlY3V0ZVJlc3VsdCwgUHJvamVjdEV4ZWN1dGFibGUgfSBmcm9tICcjc3JjL21vZGVsL2NvbW1hbmQvaW50ZXJmYWNlcydcbmltcG9ydCB7IHNoZWxsU2VydmljZSB9IGZyb20gJyNzcmMvc2VydmljZS9zaGVsbC1zZXJ2aWNlJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnI3NyYy91dGlsL2NvbmZpZydcblxuZXhwb3J0IGNsYXNzIE5wbUluc3RhbGxQcm9qZWN0Q29tbWFuZCBpbXBsZW1lbnRzIFByb2plY3RFeGVjdXRhYmxlIHtcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9yb290RGlyOiBzdHJpbmdcblxuXHRjb25zdHJ1Y3RvcihwYXJhbXM/OiB7IHJvb3REaXI/OiBzdHJpbmcgfSkge1xuXHRcdGNvbnN0IHsgcm9vdERpciA9IGNvbmZpZygpLnJvb3REaXIgfSA9IHBhcmFtcyA/PyB7fVxuXHRcdHRoaXMuX3Jvb3REaXIgPSByb290RGlyXG5cdH1cblxuXHRhc3luYyBleGVjdXRlKHByb2plY3Q6IHN0cmluZyk6IFByb21pc2U8RXhlY3V0ZVJlc3VsdFtdPiB7XG5cdFx0dHJ5IHtcblx0XHRcdHNoZWxsU2VydmljZS5jZChwYXRoLmpvaW4odGhpcy5fcm9vdERpciwgcHJvamVjdCkpXG5cdFx0XHRjb25zdCBjbWQgPSAnbnBtIGkgLXMnXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBzaGVsbFNlcnZpY2UuZXhlYyhjbWQpXG5cblx0XHRcdC8vIHJldHVybiBbeyBuYW1lOiBwcm9qZWN0LCBzdHJpbmdSZXN1bHQ6IHJlc3VsdC5zdGRvdXQsIGVycm9yTWVzc2FnZTogcmVzdWx0LnN0ZG91dCB9XVxuXHRcdFx0cmV0dXJuIFt7IGVycm9yTWVzc2FnZTogcmVzdWx0LnN0ZG91dCwgbmFtZTogcHJvamVjdCwgc3RyaW5nUmVzdWx0OiAnbnBtIGluc3RhbGwgc3VjY2Vzc2Z1bCcgfV1cblx0XHR9IGNhdGNoIChlcnI6IGFueSkge1xuXHRcdFx0cmV0dXJuIFt7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfV1cblx0XHR9XG5cdH1cbn1cbiJdfQ==