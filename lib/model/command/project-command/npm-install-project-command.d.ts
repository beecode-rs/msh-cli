import { type ExecuteResult, type ProjectExecutable } from '../../../model/command/interfaces.js';
export declare class NpmInstallProjectCommand implements ProjectExecutable {
    protected readonly _rootDir: string;
    constructor(params?: {
        rootDir?: string;
    });
    execute(project: string): Promise<ExecuteResult[]>;
}
//# sourceMappingURL=npm-install-project-command.d.ts.map