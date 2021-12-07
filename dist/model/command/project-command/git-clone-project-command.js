"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitCloneProjectCommand = void 0;
const shell_service_1 = require("src/service/shell-service");
const config_1 = require("src/util/config");
class GitCloneProjectCommand {
    _rootDir;
    _gitHost;
    _gitTeam;
    _projectPrefix;
    constructor(params) {
        const { gitHost = (0, config_1.config)().git.host, gitTeam = (0, config_1.config)().git.team, projectPrefix = '', rootDir = (0, config_1.config)().rootDir, } = params ?? {};
        if (!gitTeam)
            throw new Error('You need to specify GIT_TEAM env variable');
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
            return [{ name: project, stringResult: result.stdout, errorMessage: result.stderr }];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
}
exports.GitCloneProjectCommand = GitCloneProjectCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LWNsb25lLXByb2plY3QtY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbC9jb21tYW5kL3Byb2plY3QtY29tbWFuZC9naXQtY2xvbmUtcHJvamVjdC1jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZEQUF3RDtBQUN4RCw0Q0FBd0M7QUFFeEMsTUFBYSxzQkFBc0I7SUFDZCxRQUFRLENBQVE7SUFDaEIsUUFBUSxDQUFRO0lBQ2hCLFFBQVEsQ0FBUTtJQUNoQixjQUFjLENBQVE7SUFFekMsWUFBWSxNQUF5RjtRQUNuRyxNQUFNLEVBQ0osT0FBTyxHQUFHLElBQUEsZUFBTSxHQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFDM0IsT0FBTyxHQUFHLElBQUEsZUFBTSxHQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFDM0IsYUFBYSxHQUFHLEVBQUUsRUFDbEIsT0FBTyxHQUFHLElBQUEsZUFBTSxHQUFFLENBQUMsT0FBTyxHQUMzQixHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLE9BQU87WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUE7UUFDMUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7SUFDckMsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBZTtRQUNsQyxJQUFJO1lBQ0YsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDM0UsTUFBTSxHQUFHLEdBQUcsaUJBQWlCLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxVQUFVLFFBQVEsT0FBTyxFQUFFLENBQUE7WUFDMUYsTUFBTSxNQUFNLEdBQUcsTUFBTSw0QkFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMzQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtTQUNyRjtRQUFDLE9BQU8sR0FBUSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxFQUFFLFlBQVksRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtTQUN2QztJQUNILENBQUM7Q0FDRjtBQTlCRCx3REE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeGVjdXRlUmVzdWx0LCBQcm9qZWN0RXhlY3V0YWJsZSB9IGZyb20gJ3NyYy9tb2RlbC9jb21tYW5kL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBzaGVsbFNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9zaGVsbC1zZXJ2aWNlJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuXG5leHBvcnQgY2xhc3MgR2l0Q2xvbmVQcm9qZWN0Q29tbWFuZCBpbXBsZW1lbnRzIFByb2plY3RFeGVjdXRhYmxlIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9yb290RGlyOiBzdHJpbmdcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9naXRIb3N0OiBzdHJpbmdcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9naXRUZWFtOiBzdHJpbmdcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9wcm9qZWN0UHJlZml4OiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiB7IHJvb3REaXI/OiBzdHJpbmc7IGdpdEhvc3Q/OiBzdHJpbmc7IGdpdFRlYW0/OiBzdHJpbmc7IHByb2plY3RQcmVmaXg/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGdpdEhvc3QgPSBjb25maWcoKS5naXQuaG9zdCxcbiAgICAgIGdpdFRlYW0gPSBjb25maWcoKS5naXQudGVhbSxcbiAgICAgIHByb2plY3RQcmVmaXggPSAnJyxcbiAgICAgIHJvb3REaXIgPSBjb25maWcoKS5yb290RGlyLFxuICAgIH0gPSBwYXJhbXMgPz8ge31cbiAgICBpZiAoIWdpdFRlYW0pIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gc3BlY2lmeSBHSVRfVEVBTSBlbnYgdmFyaWFibGUnKVxuICAgIHRoaXMuX3Jvb3REaXIgPSByb290RGlyXG4gICAgdGhpcy5fZ2l0SG9zdCA9IGdpdEhvc3RcbiAgICB0aGlzLl9naXRUZWFtID0gZ2l0VGVhbVxuICAgIHRoaXMuX3Byb2plY3RQcmVmaXggPSBwcm9qZWN0UHJlZml4XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZXhlY3V0ZShwcm9qZWN0OiBzdHJpbmcpOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHRbXT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBnaXRQcm9qZWN0ID0gW3RoaXMuX3Byb2plY3RQcmVmaXgsIHByb2plY3RdLmZpbHRlcihCb29sZWFuKS5qb2luKCctJylcbiAgICAgIGNvbnN0IGNtZCA9IGBnaXQgY2xvbmUgZ2l0QCR7dGhpcy5fZ2l0SG9zdH06JHt0aGlzLl9naXRUZWFtfS8ke2dpdFByb2plY3R9LmdpdCAke3Byb2plY3R9YFxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2hlbGxTZXJ2aWNlLmV4ZWMoY21kKVxuICAgICAgcmV0dXJuIFt7IG5hbWU6IHByb2plY3QsIHN0cmluZ1Jlc3VsdDogcmVzdWx0LnN0ZG91dCwgZXJyb3JNZXNzYWdlOiByZXN1bHQuc3RkZXJyIH1dXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHJldHVybiBbeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH1dXG4gICAgfVxuICB9XG59XG4iXX0=