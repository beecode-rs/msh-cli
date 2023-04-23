"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitCloneProjectCommand = void 0;
const shell_service_1 = require("../../../service/shell-service");
const config_1 = require("../../../util/config");
class GitCloneProjectCommand {
    _rootDir;
    _gitHost;
    _gitTeam;
    _projectPrefix;
    constructor(params) {
        const { gitHost = (0, config_1.config)().git.host, gitTeam = (0, config_1.config)().git.team, projectPrefix = (0, config_1.config)().git.projectPrefix ?? '', rootDir = (0, config_1.config)().rootDir, } = params ?? {};
        if (!gitTeam) {
            throw new Error('You need to specify GIT_TEAM env variable');
        }
        this._rootDir = rootDir;
        this._gitHost = gitHost;
        this._gitTeam = gitTeam;
        this._projectPrefix = projectPrefix;
    }
    async execute(project) {
        try {
            const gitProject = [this._projectPrefix, project].filter(Boolean).join('-');
            const cmd = `git clone git@${this._gitHost}:${this._gitTeam}/${gitProject}.git ${project}`;
            const result = await shell_service_1.shellService.exec(cmd);
            return [{ errorMessage: result.stderr, name: project, stringResult: result.stdout }];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
}
exports.GitCloneProjectCommand = GitCloneProjectCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LWNsb25lLXByb2plY3QtY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbC9jb21tYW5kL3Byb2plY3QtY29tbWFuZC9naXQtY2xvbmUtcHJvamVjdC1jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZEQUF3RDtBQUN4RCw0Q0FBd0M7QUFFeEMsTUFBYSxzQkFBc0I7SUFDZixRQUFRLENBQVE7SUFDaEIsUUFBUSxDQUFRO0lBQ2hCLFFBQVEsQ0FBUTtJQUNoQixjQUFjLENBQVE7SUFFekMsWUFBWSxNQUF5RjtRQUNwRyxNQUFNLEVBQ0wsT0FBTyxHQUFHLElBQUEsZUFBTSxHQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFDM0IsT0FBTyxHQUFHLElBQUEsZUFBTSxHQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFDM0IsYUFBYSxHQUFHLElBQUEsZUFBTSxHQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxFQUFFLEVBQ2hELE9BQU8sR0FBRyxJQUFBLGVBQU0sR0FBRSxDQUFDLE9BQU8sR0FDMUIsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUE7U0FDNUQ7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQTtJQUNwQyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFlO1FBQzVCLElBQUk7WUFDSCxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMzRSxNQUFNLEdBQUcsR0FBRyxpQkFBaUIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFVBQVUsUUFBUSxPQUFPLEVBQUUsQ0FBQTtZQUMxRixNQUFNLE1BQU0sR0FBRyxNQUFNLDRCQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRTNDLE9BQU8sQ0FBQyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1NBQ3BGO1FBQUMsT0FBTyxHQUFRLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1NBQ3RDO0lBQ0YsQ0FBQztDQUNEO0FBakNELHdEQWlDQyJ9