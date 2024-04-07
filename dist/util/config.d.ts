export declare const config: import("@beecode/msh-util/singleton/pattern").AnyFunctionNoParams<{
    readonly cmd: {
        readonly gitEnabled: boolean;
        readonly npmEnabled: boolean;
    };
    readonly git: {
        readonly host: string;
        readonly password: string | undefined;
        readonly projectPrefix: string | undefined;
        readonly team: string | undefined;
        readonly username: string | undefined;
    };
    readonly logLevel: string;
    readonly npm: {
        readonly globalIgnorePackages: string[];
    };
    readonly projects: string[];
    readonly pullRequestSkip: string[];
    readonly rootDir: string;
}>;
//# sourceMappingURL=config.d.ts.map