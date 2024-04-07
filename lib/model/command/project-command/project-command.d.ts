import { ExecuteResult, ProjectExecutable } from '../../../model/command/interfaces.js';
export declare class ProjectCommand {
    protected readonly _projects: string[];
    protected readonly _command: ProjectExecutable;
    constructor(params: {
        command: ProjectExecutable;
        projects?: string[];
    });
    execute(): Promise<ExecuteResult[]>;
}
export declare const projectCommandFactory: (params: {
    command: ProjectExecutable;
    projects?: string[] | undefined;
}) => ProjectCommand;
//# sourceMappingURL=project-command.d.ts.map