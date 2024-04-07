import { Argv } from 'yargs';
export declare class GitRouter {
    protected _clone(yargs: Argv): void;
    protected _fetch(yargs: Argv): void;
    protected _pull(yargs: Argv): void;
    protected _status(yargs: Argv): void;
    protected _tag(yargs: Argv): void;
    commands(yargs: Argv): Argv;
}
//# sourceMappingURL=git-router.d.ts.map