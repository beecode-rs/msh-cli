import { ExecResult } from '../dal/shell-dal';
export type PrintStdMessage = Record<string, ExecResult>;
export declare const shellService: {
    _joinResults: (results: PrintStdMessage[]) => PrintStdMessage;
    cd: (dir: string) => void;
    exec: (cmd: string) => Promise<ExecResult>;
    print: (message: string) => void;
    printError: (message: string) => void;
    printStdMessage: (...messageArgs: PrintStdMessage[]) => void;
    printSuccess: (message: string) => void;
};
//# sourceMappingURL=shell-service.d.ts.map