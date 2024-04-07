export type ExecuteResult = {
    name?: string;
    stringResult?: string;
    errorMessage?: string;
};
export interface Executable {
    execute(): Promise<ExecuteResult[]>;
}
export interface ProjectExecutable {
    execute(project: string): Promise<ExecuteResult[]>;
}
//# sourceMappingURL=interfaces.d.ts.map