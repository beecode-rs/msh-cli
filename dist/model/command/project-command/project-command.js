"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectCommandFactory = exports.ProjectCommand = void 0;
const config_1 = require("../../../util/config");
class ProjectCommand {
    _projects;
    _command;
    constructor(params) {
        const { command, projects = (0, config_1.config)().projects } = params;
        this._projects = projects;
        this._command = command;
    }
    async execute() {
        if (this._projects.length === 0) {
            throw new Error('No Project selected, check .msh config file for [PROJECTS=]');
        }
        const promises = this._projects.map((project) => this._command.execute(project));
        return (await Promise.all(promises)).flat();
    }
}
exports.ProjectCommand = ProjectCommand;
const projectCommandFactory = (...params) => new ProjectCommand(...params);
exports.projectCommandFactory = projectCommandFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZGVsL2NvbW1hbmQvcHJvamVjdC1jb21tYW5kL3Byb2plY3QtY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0Q0FBd0M7QUFFeEMsTUFBYSxjQUFjO0lBQ1AsU0FBUyxDQUFVO0lBQ25CLFFBQVEsQ0FBbUI7SUFFOUMsWUFBWSxNQUEyRDtRQUN0RSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsR0FBRyxJQUFBLGVBQU0sR0FBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQTtRQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQTtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtJQUN4QixDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU87UUFDWixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUE7U0FDOUU7UUFDRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUVoRixPQUFPLENBQUMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDNUMsQ0FBQztDQUNEO0FBbEJELHdDQWtCQztBQUVNLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxHQUFHLE1BQW9ELEVBQWtCLEVBQUUsQ0FDaEgsSUFBSSxjQUFjLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQTtBQURqQixRQUFBLHFCQUFxQix5QkFDSiJ9