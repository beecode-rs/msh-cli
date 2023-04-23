"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitTagProjectCommand = void 0;
const shell_service_1 = require("../../../service/shell-service");
const config_1 = require("../../../util/config");
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
            const filterLine = this._getFilterLine();
            const cmd = `git -C ${this._rootDir}/${project} tag -n9${filterLine} | cat`;
            const result = await shell_service_1.shellService.exec(cmd);
            return [{ errorMessage: result.stderr, name: project, stringResult: result.stdout }];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
    _getFilterLine() {
        if (!this._filterByName) {
            return '';
        }
        return ` -l "${this._filterByName}"`;
    }
}
exports.GitTagProjectCommand = GitTagProjectCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXRhZy1wcm9qZWN0LWNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvZ2l0LXRhZy1wcm9qZWN0LWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkRBQXdEO0FBQ3hELDRDQUF3QztBQUV4QyxNQUFhLG9CQUFvQjtJQUNiLFFBQVEsQ0FBUTtJQUNoQixhQUFhLENBQVM7SUFFekMsWUFBWSxNQUFtRDtRQUM5RCxNQUFNLEVBQUUsWUFBWSxFQUFFLE9BQU8sR0FBRyxJQUFBLGVBQU0sR0FBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQTtRQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQTtJQUNsQyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFlO1FBQzVCLElBQUk7WUFDSCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDeEMsTUFBTSxHQUFHLEdBQUcsVUFBVSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sV0FBVyxVQUFVLFFBQVEsQ0FBQTtZQUMzRSxNQUFNLE1BQU0sR0FBRyxNQUFNLDRCQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRTNDLE9BQU8sQ0FBQyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1NBQ3BGO1FBQUMsT0FBTyxHQUFRLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1NBQ3RDO0lBQ0YsQ0FBQztJQUVTLGNBQWM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDeEIsT0FBTyxFQUFFLENBQUE7U0FDVDtRQUVELE9BQU8sUUFBUSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUE7SUFDckMsQ0FBQztDQUNEO0FBN0JELG9EQTZCQyJ9