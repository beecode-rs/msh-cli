import { LifeCycle } from '@beecode/msh-app-boot';
export declare class ParseAndRouteArgs extends LifeCycle {
    protected readonly _argv: string[];
    constructor();
    protected _createFn(): Promise<void>;
    protected _destroyFn(): Promise<void>;
}
//# sourceMappingURL=parse-and-route-args.d.ts.map