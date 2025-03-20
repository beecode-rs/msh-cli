import { type ExecuteResult, type ProjectExecutable } from '#src/model/command/interfaces';
export declare enum GitSimpleCommand {
    STATUS = "status",
    FETCH = "fetch",
    PULL = "pull"
}
export declare class GitSimpleProjectCommand implements ProjectExecutable {
    protected readonly _simpleGitCommand: GitSimpleCommand;
    protected readonly _rootDir: string;
    constructor(params: {
        gitSimpleCommand: GitSimpleCommand;
        rootDir?: string;
    });
    execute(project: string): Promise<ExecuteResult[]>;
}
//# sourceMappingURL=git-simple-project-command.d.ts.map