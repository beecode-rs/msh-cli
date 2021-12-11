"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectCommandFactory = exports.ProjectCommand = void 0;
// import { shellService } from 'src/service/shell-service'
const config_1 = require("src/util/config");
class ProjectCommand {
    _projects;
    _command;
    constructor(params) {
        const { command, projects = (0, config_1.config)().projects } = params;
        this._projects = projects;
        this._command = command;
    }
    async execute() {
        if (this._projects.length === 0)
            throw new Error('No Project selected, check .msh config file for [PROJECTS=]');
        const promises = this._projects.map((project) => this._command.execute(project));
        return (await Promise.all(promises)).flat();
    }
}
exports.ProjectCommand = ProjectCommand;
const projectCommandFactory = (...params) => new ProjectCommand(...params);
exports.projectCommandFactory = projectCommandFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZGVsL2NvbW1hbmQvcHJvamVjdC1jb21tYW5kL3Byb2plY3QtY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyREFBMkQ7QUFDM0QsNENBQXdDO0FBRXhDLE1BQWEsY0FBYztJQUNOLFNBQVMsQ0FBVTtJQUNuQixRQUFRLENBQW1CO0lBRTlDLFlBQW1CLE1BQTJEO1FBQzVFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxHQUFHLElBQUEsZUFBTSxHQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFBO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFBO0lBQ3pCLENBQUM7SUFFTSxLQUFLLENBQUMsT0FBTztRQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUE7UUFDL0csTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDaEYsT0FBTyxDQUFDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzdDLENBQUM7Q0FDRjtBQWZELHdDQWVDO0FBRU0sTUFBTSxxQkFBcUIsR0FBRyxDQUFDLEdBQUcsTUFBb0QsRUFBa0IsRUFBRSxDQUMvRyxJQUFJLGNBQWMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFBO0FBRGxCLFFBQUEscUJBQXFCLHlCQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhlY3V0ZVJlc3VsdCwgUHJvamVjdEV4ZWN1dGFibGUgfSBmcm9tICdzcmMvbW9kZWwvY29tbWFuZC9pbnRlcmZhY2VzJ1xuLy8gaW1wb3J0IHsgc2hlbGxTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2Uvc2hlbGwtc2VydmljZSdcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ3NyYy91dGlsL2NvbmZpZydcblxuZXhwb3J0IGNsYXNzIFByb2plY3RDb21tYW5kIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9wcm9qZWN0czogc3RyaW5nW11cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9jb21tYW5kOiBQcm9qZWN0RXhlY3V0YWJsZVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgY29tbWFuZDogUHJvamVjdEV4ZWN1dGFibGU7IHByb2plY3RzPzogc3RyaW5nW10gfSkge1xuICAgIGNvbnN0IHsgY29tbWFuZCwgcHJvamVjdHMgPSBjb25maWcoKS5wcm9qZWN0cyB9ID0gcGFyYW1zXG4gICAgdGhpcy5fcHJvamVjdHMgPSBwcm9qZWN0c1xuICAgIHRoaXMuX2NvbW1hbmQgPSBjb21tYW5kXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZXhlY3V0ZSgpOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHRbXT4ge1xuICAgIGlmICh0aGlzLl9wcm9qZWN0cy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcignTm8gUHJvamVjdCBzZWxlY3RlZCwgY2hlY2sgLm1zaCBjb25maWcgZmlsZSBmb3IgW1BST0pFQ1RTPV0nKVxuICAgIGNvbnN0IHByb21pc2VzID0gdGhpcy5fcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB0aGlzLl9jb21tYW5kLmV4ZWN1dGUocHJvamVjdCkpXG4gICAgcmV0dXJuIChhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcykpLmZsYXQoKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0Q29tbWFuZEZhY3RvcnkgPSAoLi4ucGFyYW1zOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIFByb2plY3RDb21tYW5kPik6IFByb2plY3RDb21tYW5kID0+XG4gIG5ldyBQcm9qZWN0Q29tbWFuZCguLi5wYXJhbXMpXG4iXX0=