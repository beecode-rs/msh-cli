export type ExecResult = {
    stdout: string;
    stderr: string;
    errorOccurred: boolean;
};
export declare const shellDal: {
    cd: (dir: string) => void;
    exec: (cmd: string) => Promise<ExecResult>;
    print: (message: string) => void;
    pwd: () => string;
};
//# sourceMappingURL=shell-dal.d.ts.map