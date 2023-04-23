import { Executable, ExecuteResult } from '../../../model/command/interfaces';
export type VersionOnProjects = Record<string, string[]>;
export type UniquePackages = Record<string, {
    versions: string[];
    versionProject: VersionOnProjects;
}>;
export type DependenciesObject = Record<string, string>;
export type ProjectWithDependencies = Record<string, DependenciesObject>;
export declare class NpmGlobalProjectCommand implements Executable {
    execute(): Promise<ExecuteResult[]>;
    protected _allDepsByProject(): ProjectWithDependencies;
    protected _removeIgnoredPackages(dependencies: DependenciesObject): DependenciesObject;
    protected _uniquePackages(depsByProject: ProjectWithDependencies): UniquePackages;
    protected _versionConflictWarningMessage(uniquePackages: UniquePackages): string[];
    protected _highestDependencies(uniquePackages: UniquePackages): DependenciesObject;
    protected _highestVersion(versions: string[]): string;
    protected _overrideGlobalDepsWithNewHighestDependencies(highestDependencies: DependenciesObject): void;
    protected _packageJsonForProject(project?: string): any;
}
export declare const npmGlobalProjectCommandFactory: () => NpmGlobalProjectCommand;
//# sourceMappingURL=npm-global-project-command.d.ts.map