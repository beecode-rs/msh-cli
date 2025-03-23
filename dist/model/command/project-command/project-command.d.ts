import { type ExecuteResult, type ProjectExecutable } from '#src/model/command/interfaces';
export declare class ProjectCommand {
    protected readonly _projects: string[];
    protected readonly _command: ProjectExecutable;
    constructor(params: {
        command: ProjectExecutable;
        projects?: string[];
    });
    execute(): Promise<ExecuteResult[]>;
}
export declare const projectCommandFactory: (...params: ConstructorParameters<typeof ProjectCommand>) => ProjectCommand;
//# sourceMappingURL=project-command.d.ts.map