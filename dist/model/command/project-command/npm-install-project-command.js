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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLWluc3RhbGwtcHJvamVjdC1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZGVsL2NvbW1hbmQvcHJvamVjdC1jb21tYW5kL25wbS1pbnN0YWxsLXByb2plY3QtY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7QUFHdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFBO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QyxNQUFNLE9BQU8sd0JBQXdCO0lBQ2pCLFFBQVEsQ0FBUTtJQUVuQyxZQUFZLE1BQTZCO1FBQ3hDLE1BQU0sRUFBRSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQTtRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtJQUN4QixDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFlO1FBQzVCLElBQUksQ0FBQztZQUNKLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7WUFDbEQsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFBO1lBQ3RCLE1BQU0sTUFBTSxHQUFHLE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUUzQyx1RkFBdUY7WUFDdkYsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFBO1lBQy9GLDhEQUE4RDtRQUMvRCxDQUFDO1FBQUMsT0FBTyxHQUFRLEVBQUUsQ0FBQztZQUNuQixPQUFPLENBQUMsRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDdkMsQ0FBQztJQUNGLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmltcG9ydCB7IHR5cGUgRXhlY3V0ZVJlc3VsdCwgdHlwZSBQcm9qZWN0RXhlY3V0YWJsZSB9IGZyb20gJyNzcmMvbW9kZWwvY29tbWFuZC9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgc2hlbGxTZXJ2aWNlIH0gZnJvbSAnI3NyYy9zZXJ2aWNlL3NoZWxsLXNlcnZpY2UnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcjc3JjL3V0aWwvY29uZmlnJ1xuXG5leHBvcnQgY2xhc3MgTnBtSW5zdGFsbFByb2plY3RDb21tYW5kIGltcGxlbWVudHMgUHJvamVjdEV4ZWN1dGFibGUge1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX3Jvb3REaXI6IHN0cmluZ1xuXG5cdGNvbnN0cnVjdG9yKHBhcmFtcz86IHsgcm9vdERpcj86IHN0cmluZyB9KSB7XG5cdFx0Y29uc3QgeyByb290RGlyID0gY29uZmlnKCkucm9vdERpciB9ID0gcGFyYW1zID8/IHt9XG5cdFx0dGhpcy5fcm9vdERpciA9IHJvb3REaXJcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUocHJvamVjdDogc3RyaW5nKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0W10+IHtcblx0XHR0cnkge1xuXHRcdFx0c2hlbGxTZXJ2aWNlLmNkKHBhdGguam9pbih0aGlzLl9yb290RGlyLCBwcm9qZWN0KSlcblx0XHRcdGNvbnN0IGNtZCA9ICducG0gaSAtcydcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNoZWxsU2VydmljZS5leGVjKGNtZClcblxuXHRcdFx0Ly8gcmV0dXJuIFt7IG5hbWU6IHByb2plY3QsIHN0cmluZ1Jlc3VsdDogcmVzdWx0LnN0ZG91dCwgZXJyb3JNZXNzYWdlOiByZXN1bHQuc3Rkb3V0IH1dXG5cdFx0XHRyZXR1cm4gW3sgZXJyb3JNZXNzYWdlOiByZXN1bHQuc3Rkb3V0LCBuYW1lOiBwcm9qZWN0LCBzdHJpbmdSZXN1bHQ6ICducG0gaW5zdGFsbCBzdWNjZXNzZnVsJyB9XVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHR9IGNhdGNoIChlcnI6IGFueSkge1xuXHRcdFx0cmV0dXJuIFt7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfV1cblx0XHR9XG5cdH1cbn1cbiJdfQ==