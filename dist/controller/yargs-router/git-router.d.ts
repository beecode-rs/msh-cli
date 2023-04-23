import yargs from 'yargs';
export declare class GitRouter {
    protected _clone(yargs: yargs.Argv): void;
    protected _fetch(yargs: yargs.Argv): void;
    protected _pull(yargs: yargs.Argv): void;
    protected _status(yargs: yargs.Argv): void;
    protected _tag(yargs: yargs.Argv): void;
    commands(yargs: yargs.Argv): yargs.Argv;
}
//# sourceMappingURL=git-router.d.ts.map