"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitTagProjectCommand = void 0;
const shell_service_1 = require("src/service/shell-service");
const config_1 = require("src/util/config");
class GitTagProjectCommand {
    _rootDir;
    _filterByName;
    constructor(params) {
        const { filterByName, rootDir = (0, config_1.config)().rootDir } = params;
        this._rootDir = rootDir;
        this._filterByName = filterByName;
    }
    async execute(project) {
        try {
            const filterLine = this._filterByName ? ` -l "${this._filterByName}"` : '';
            const cmd = `git -C ${this._rootDir}/${project} tag -n9${filterLine} | cat`;
            const result = await shell_service_1.shellService.exec(cmd);
            return [{ name: project, errorMessage: result.stderr, stringResult: result.stdout }];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
}
exports.GitTagProjectCommand = GitTagProjectCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXRhZy1wcm9qZWN0LWNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvZ2l0LXRhZy1wcm9qZWN0LWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkRBQXdEO0FBQ3hELDRDQUF3QztBQUV4QyxNQUFhLG9CQUFvQjtJQUNaLFFBQVEsQ0FBUTtJQUNoQixhQUFhLENBQVM7SUFFekMsWUFBWSxNQUFtRDtRQUM3RCxNQUFNLEVBQUUsWUFBWSxFQUFFLE9BQU8sR0FBRyxJQUFBLGVBQU0sR0FBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQTtRQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQTtJQUNuQyxDQUFDO0lBRU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFlO1FBQ2xDLElBQUk7WUFDRixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1lBQzFFLE1BQU0sR0FBRyxHQUFHLFVBQVUsSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLFdBQVcsVUFBVSxRQUFRLENBQUE7WUFDM0UsTUFBTSxNQUFNLEdBQUcsTUFBTSw0QkFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMzQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtTQUNyRjtRQUFDLE9BQU8sR0FBUSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxFQUFFLFlBQVksRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtTQUN2QztJQUNILENBQUM7Q0FDRjtBQXBCRCxvREFvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeGVjdXRlUmVzdWx0LCBQcm9qZWN0RXhlY3V0YWJsZSB9IGZyb20gJ3NyYy9tb2RlbC9jb21tYW5kL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBzaGVsbFNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9zaGVsbC1zZXJ2aWNlJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuXG5leHBvcnQgY2xhc3MgR2l0VGFnUHJvamVjdENvbW1hbmQgaW1wbGVtZW50cyBQcm9qZWN0RXhlY3V0YWJsZSB7XG4gIHByb3RlY3RlZCByZWFkb25seSBfcm9vdERpcjogc3RyaW5nXG4gIHByb3RlY3RlZCByZWFkb25seSBfZmlsdGVyQnlOYW1lPzogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IocGFyYW1zOiB7IGZpbHRlckJ5TmFtZT86IHN0cmluZzsgcm9vdERpcj86IHN0cmluZyB9KSB7XG4gICAgY29uc3QgeyBmaWx0ZXJCeU5hbWUsIHJvb3REaXIgPSBjb25maWcoKS5yb290RGlyIH0gPSBwYXJhbXNcbiAgICB0aGlzLl9yb290RGlyID0gcm9vdERpclxuICAgIHRoaXMuX2ZpbHRlckJ5TmFtZSA9IGZpbHRlckJ5TmFtZVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGV4ZWN1dGUocHJvamVjdDogc3RyaW5nKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0W10+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmlsdGVyTGluZSA9IHRoaXMuX2ZpbHRlckJ5TmFtZSA/IGAgLWwgXCIke3RoaXMuX2ZpbHRlckJ5TmFtZX1cImAgOiAnJ1xuICAgICAgY29uc3QgY21kID0gYGdpdCAtQyAke3RoaXMuX3Jvb3REaXJ9LyR7cHJvamVjdH0gdGFnIC1uOSR7ZmlsdGVyTGluZX0gfCBjYXRgXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaGVsbFNlcnZpY2UuZXhlYyhjbWQpXG4gICAgICByZXR1cm4gW3sgbmFtZTogcHJvamVjdCwgZXJyb3JNZXNzYWdlOiByZXN1bHQuc3RkZXJyLCBzdHJpbmdSZXN1bHQ6IHJlc3VsdC5zdGRvdXQgfV1cbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgcmV0dXJuIFt7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfV1cbiAgICB9XG4gIH1cbn1cbiJdfQ==