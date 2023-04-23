import yargs from 'yargs';
export declare class CliRouter {
    protected readonly _yargs: yargs.Argv;
    constructor(argv: string[]);
    routeArgv(): Promise<void>;
    protected _setupUsage(): void;
    protected _helpVersionAlias(): void;
    protected _demandCommands(): void;
    protected _gitCommands(): void;
    protected _npmCommands(): void;
    protected _initCommands(): void;
}
export declare const cliRouterFactory: (argv: string[]) => CliRouter;
//# sourceMappingURL=cli-router.d.ts.map