import { type ExecuteResult, type ProjectExecutable } from '#src/model/command/interfaces';
export declare class GitCloneProjectCommand implements ProjectExecutable {
    protected readonly _rootDir: string;
    protected readonly _gitHost: string;
    protected readonly _gitTeam: string;
    protected readonly _projectPrefix: string;
    constructor(params?: {
        rootDir?: string;
        gitHost?: string;
        gitTeam?: string;
        projectPrefix?: string;
    });
    execute(project: string): Promise<ExecuteResult[]>;
}
//# sourceMappingURL=git-clone-project-command.d.ts.map