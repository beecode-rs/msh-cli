import { Executable } from '#src/model/command/interfaces';
export declare class TerminalWrapper {
    protected readonly _command: Executable;
    constructor(params: {
        command: Executable;
    });
    execute(): Promise<void>;
}
export declare const terminalWrapperFactory: (params: {
    command: Executable;
}) => TerminalWrapper;
//# sourceMappingURL=terminal-wrapper.d.ts.map