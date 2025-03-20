import { type ExecuteResult, type ProjectExecutable } from '#src/model/command/interfaces';
export declare class GitTagProjectCommand implements ProjectExecutable {
    protected readonly _rootDir: string;
    protected readonly _filterByName?: string;
    constructor(params: {
        filterByName?: string;
        rootDir?: string;
    });
    execute(project: string): Promise<ExecuteResult[]>;
    protected _getFilterLine(): string;
}
//# sourceMappingURL=git-tag-project-command.d.ts.map