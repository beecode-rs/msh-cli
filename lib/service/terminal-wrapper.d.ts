import { type Executable } from '../model/command/interfaces.js';
export declare class TerminalWrapper {
    protected readonly _command: Executable;
    constructor(params: {
        command: Executable;
    });
    execute(): Promise<void>;
}
export declare const terminalWrapperFactory: (...params: ConstructorParameters<typeof TerminalWrapper>) => TerminalWrapper;
//# sourceMappingURL=terminal-wrapper.d.ts.map