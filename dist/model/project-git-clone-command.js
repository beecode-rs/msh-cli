"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectGitCloneCommand = void 0;
const shell_service_1 = require("src/service/shell-service");
class ProjectGitCloneCommand {
    constructor(params) {
        this.__rootDir = params.rootDir;
        this.__gitHost = params.gitHost;
        this.__gitTeam = params.gitTeam;
        this.__projectPrefix = params.projectPrefix ?? '';
    }
    async execute(project) {
        const gitProject = [this.__projectPrefix, project].filter(Boolean).join('-');
        const cmd = `git clone git@${this.__gitHost}:${this.__gitTeam}/${gitProject}.git ${project}`;
        const result = await shell_service_1.shellService.exec(cmd);
        return { [project]: result };
    }
}
exports.ProjectGitCloneCommand = ProjectGitCloneCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1naXQtY2xvbmUtY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9wcm9qZWN0LWdpdC1jbG9uZS1jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDZEQUF3RDtBQVN4RCxNQUFhLHNCQUFzQjtJQU1qQyxZQUFZLE1BQW9DO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUE7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFBO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUE7SUFDbkQsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBZTtRQUNsQyxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1RSxNQUFNLEdBQUcsR0FBRyxpQkFBaUIsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLFVBQVUsUUFBUSxPQUFPLEVBQUUsQ0FBQTtRQUM1RixNQUFNLE1BQU0sR0FBRyxNQUFNLDRCQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFBO0lBQzlCLENBQUM7Q0FDRjtBQW5CRCx3REFtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0Q29tbWFuZCB9IGZyb20gJ3NyYy9tb2RlbC9wcm9qZWN0LWNvbW1hbmQnXG5pbXBvcnQgeyBQcmludFN0ZE1lc3NhZ2UgfSBmcm9tICdzcmMvc2VydmljZS9jbGktc2VydmljZSdcbmltcG9ydCB7IHNoZWxsU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL3NoZWxsLXNlcnZpY2UnXG5cbmV4cG9ydCB0eXBlIFByb2plY3RHaXRDbG9uZUNvbW1hbmRQYXJhbXMgPSB7XG4gIHJvb3REaXI6IHN0cmluZ1xuICBnaXRIb3N0OiBzdHJpbmdcbiAgZ2l0VGVhbTogc3RyaW5nXG4gIHByb2plY3RQcmVmaXg/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3RHaXRDbG9uZUNvbW1hbmQgaW1wbGVtZW50cyBQcm9qZWN0Q29tbWFuZCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX19yb290RGlyOiBzdHJpbmdcbiAgcHJpdmF0ZSByZWFkb25seSBfX2dpdEhvc3Q6IHN0cmluZ1xuICBwcml2YXRlIHJlYWRvbmx5IF9fZ2l0VGVhbTogc3RyaW5nXG4gIHByaXZhdGUgcmVhZG9ubHkgX19wcm9qZWN0UHJlZml4OiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM6IFByb2plY3RHaXRDbG9uZUNvbW1hbmRQYXJhbXMpIHtcbiAgICB0aGlzLl9fcm9vdERpciA9IHBhcmFtcy5yb290RGlyXG4gICAgdGhpcy5fX2dpdEhvc3QgPSBwYXJhbXMuZ2l0SG9zdFxuICAgIHRoaXMuX19naXRUZWFtID0gcGFyYW1zLmdpdFRlYW1cbiAgICB0aGlzLl9fcHJvamVjdFByZWZpeCA9IHBhcmFtcy5wcm9qZWN0UHJlZml4ID8/ICcnXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZXhlY3V0ZShwcm9qZWN0OiBzdHJpbmcpOiBQcm9taXNlPFByaW50U3RkTWVzc2FnZT4ge1xuICAgIGNvbnN0IGdpdFByb2plY3QgPSBbdGhpcy5fX3Byb2plY3RQcmVmaXgsIHByb2plY3RdLmZpbHRlcihCb29sZWFuKS5qb2luKCctJylcbiAgICBjb25zdCBjbWQgPSBgZ2l0IGNsb25lIGdpdEAke3RoaXMuX19naXRIb3N0fToke3RoaXMuX19naXRUZWFtfS8ke2dpdFByb2plY3R9LmdpdCAke3Byb2plY3R9YFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNoZWxsU2VydmljZS5leGVjKGNtZClcbiAgICByZXR1cm4geyBbcHJvamVjdF06IHJlc3VsdCB9XG4gIH1cbn1cbiJdfQ==