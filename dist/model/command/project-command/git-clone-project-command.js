import { shellService } from '#src/service/shell-service';
import { config } from '#src/util/config';
export class GitCloneProjectCommand {
    _rootDir;
    _gitHost;
    _gitTeam;
    _projectPrefix;
    constructor(params) {
        const { gitHost = config().git.host, gitTeam = config().git.team, projectPrefix = config().git.projectPrefix ?? '', rootDir = config().rootDir, } = params ?? {};
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
            const result = await shellService.exec(cmd);
            return [{ errorMessage: result.stderr, name: project, stringResult: result.stdout }];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LWNsb25lLXByb2plY3QtY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbC9jb21tYW5kL3Byb2plY3QtY29tbWFuZC9naXQtY2xvbmUtcHJvamVjdC1jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQTtBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFFekMsTUFBTSxPQUFPLHNCQUFzQjtJQUNmLFFBQVEsQ0FBUTtJQUNoQixRQUFRLENBQVE7SUFDaEIsUUFBUSxDQUFRO0lBQ2hCLGNBQWMsQ0FBUTtJQUV6QyxZQUFZLE1BQXlGO1FBQ3BHLE1BQU0sRUFDTCxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFDM0IsT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQzNCLGFBQWEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFDaEQsT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLE9BQU8sR0FDMUIsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQTtRQUM3RCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7SUFDcEMsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBZTtRQUM1QixJQUFJLENBQUM7WUFDSixNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMzRSxNQUFNLEdBQUcsR0FBRyxpQkFBaUIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFVBQVUsUUFBUSxPQUFPLEVBQUUsQ0FBQTtZQUMxRixNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFM0MsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDckYsQ0FBQztRQUFDLE9BQU8sR0FBUSxFQUFFLENBQUM7WUFDbkIsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7SUFDRixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeGVjdXRlUmVzdWx0LCBQcm9qZWN0RXhlY3V0YWJsZSB9IGZyb20gJyNzcmMvbW9kZWwvY29tbWFuZC9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgc2hlbGxTZXJ2aWNlIH0gZnJvbSAnI3NyYy9zZXJ2aWNlL3NoZWxsLXNlcnZpY2UnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcjc3JjL3V0aWwvY29uZmlnJ1xuXG5leHBvcnQgY2xhc3MgR2l0Q2xvbmVQcm9qZWN0Q29tbWFuZCBpbXBsZW1lbnRzIFByb2plY3RFeGVjdXRhYmxlIHtcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9yb290RGlyOiBzdHJpbmdcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9naXRIb3N0OiBzdHJpbmdcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9naXRUZWFtOiBzdHJpbmdcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9wcm9qZWN0UHJlZml4OiBzdHJpbmdcblxuXHRjb25zdHJ1Y3RvcihwYXJhbXM/OiB7IHJvb3REaXI/OiBzdHJpbmc7IGdpdEhvc3Q/OiBzdHJpbmc7IGdpdFRlYW0/OiBzdHJpbmc7IHByb2plY3RQcmVmaXg/OiBzdHJpbmcgfSkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGdpdEhvc3QgPSBjb25maWcoKS5naXQuaG9zdCxcblx0XHRcdGdpdFRlYW0gPSBjb25maWcoKS5naXQudGVhbSxcblx0XHRcdHByb2plY3RQcmVmaXggPSBjb25maWcoKS5naXQucHJvamVjdFByZWZpeCA/PyAnJyxcblx0XHRcdHJvb3REaXIgPSBjb25maWcoKS5yb290RGlyLFxuXHRcdH0gPSBwYXJhbXMgPz8ge31cblx0XHRpZiAoIWdpdFRlYW0pIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gc3BlY2lmeSBHSVRfVEVBTSBlbnYgdmFyaWFibGUnKVxuXHRcdH1cblx0XHR0aGlzLl9yb290RGlyID0gcm9vdERpclxuXHRcdHRoaXMuX2dpdEhvc3QgPSBnaXRIb3N0XG5cdFx0dGhpcy5fZ2l0VGVhbSA9IGdpdFRlYW1cblx0XHR0aGlzLl9wcm9qZWN0UHJlZml4ID0gcHJvamVjdFByZWZpeFxuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShwcm9qZWN0OiBzdHJpbmcpOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHRbXT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBnaXRQcm9qZWN0ID0gW3RoaXMuX3Byb2plY3RQcmVmaXgsIHByb2plY3RdLmZpbHRlcihCb29sZWFuKS5qb2luKCctJylcblx0XHRcdGNvbnN0IGNtZCA9IGBnaXQgY2xvbmUgZ2l0QCR7dGhpcy5fZ2l0SG9zdH06JHt0aGlzLl9naXRUZWFtfS8ke2dpdFByb2plY3R9LmdpdCAke3Byb2plY3R9YFxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgc2hlbGxTZXJ2aWNlLmV4ZWMoY21kKVxuXG5cdFx0XHRyZXR1cm4gW3sgZXJyb3JNZXNzYWdlOiByZXN1bHQuc3RkZXJyLCBuYW1lOiBwcm9qZWN0LCBzdHJpbmdSZXN1bHQ6IHJlc3VsdC5zdGRvdXQgfV1cblx0XHR9IGNhdGNoIChlcnI6IGFueSkge1xuXHRcdFx0cmV0dXJuIFt7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfV1cblx0XHR9XG5cdH1cbn1cbiJdfQ==