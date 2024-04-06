import { compareVersions } from 'compare-versions'
import stringify from 'fast-json-stable-stringify'
import path from 'path'

import { Executable, ExecuteResult } from '#src/model/command/interfaces'
import { fileService } from '#src/service/file-service'
import { config } from '#src/util/config'
import { logger } from '#src/util/logger'

export type VersionOnProjects = Record<string, string[]>

export type UniquePackages = Record<string, { versions: string[]; versionProject: VersionOnProjects }>

export type DependenciesObject = Record<string, string>

export type ProjectWithDependencies = Record<string, DependenciesObject>

export class NpmGlobalProjectCommand implements Executable {
	async execute(): Promise<ExecuteResult[]> {
		try {
			const depsByProject = this._allDepsByProject()
			logger().debug('all dependencies all projects', depsByProject)

			const uniquePackages = this._uniquePackages(depsByProject)
			logger().debug('add dependencies by package', uniquePackages)

			const versionConflictWarningMessage = this._versionConflictWarningMessage(uniquePackages)
			logger().debug('version conflict warning message', versionConflictWarningMessage)

			const highestDependencies = this._highestDependencies(uniquePackages)
			const highestDependenciesString = JSON.stringify(highestDependencies, Object.keys(highestDependencies).sort(), 2)
			logger().debug('highest dependencies', highestDependenciesString)

			this._overrideGlobalDepsWithNewHighestDependencies(highestDependencies)

			return [
				{
					errorMessage: versionConflictWarningMessage.join('\n\n'),
					name: 'Global NPM Dependencies',
					stringResult: `Gathered dependencies \n\n${highestDependenciesString}`,
				},
			]
		} catch (err: any) {
			return [{ errorMessage: err.message }]
		}
	}

	protected _allDepsByProject(): ProjectWithDependencies {
		return config()
			.projects.map((project: string) => {
				const packageJs = this._packageJsonForProject(project)
				const projectDeps = { ...packageJs.dependencies, ...packageJs.devDependencies }
				const cleanProjectDeps = this._removeIgnoredPackages(projectDeps)

				return { [project]: cleanProjectDeps }
			})
			.reduce((acc: ProjectWithDependencies, cur: ProjectWithDependencies) => Object.assign(acc, cur), {})
	}

	protected _removeIgnoredPackages(dependencies: DependenciesObject): DependenciesObject {
		const { globalIgnorePackages } = config().npm
		if (globalIgnorePackages.length === 0) {
			return dependencies
		}

		return Object.entries(dependencies)
			.filter(([packageName]) => !globalIgnorePackages.includes(packageName))
			.reduce((acc, [packageName, version]) => ({ ...acc, [packageName]: version }), {})
	}

	protected _uniquePackages(depsByProject: ProjectWithDependencies): UniquePackages {
		const result: UniquePackages = {}
		Object.entries(depsByProject).forEach(([project, deps]) => {
			Object.entries(deps).forEach(([packageName, version]) => {
				const pk = (result[packageName] = result[packageName] ?? { versionProject: {}, versions: [] })
				if (!pk.versions.includes(version)) {
					pk.versions.push(version)
				}
				const pv = (pk.versionProject[version] = pk.versionProject[version] ?? [])
				pv.push(project)
			})
		})

		return result
	}

	protected _versionConflictWarningMessage(uniquePackages: UniquePackages): string[] {
		return Object.entries(uniquePackages)
			.filter(([_, { versions }]) => versions.length > 1)
			.sort((a, b) => {
				const [pnA] = a
				const [pnB] = b
				if (pnA < pnB) {
					return -1
				}
				if (pnA > pnB) {
					return 1
				}

				return 0
			})
			.map(([packageName, uniquePackInfo]) => {
				return `${packageName}: ${stringify(uniquePackInfo.versions)}\n${Object.entries(uniquePackInfo.versionProject)
					.map(([v, prjs]) => `${v}:${stringify(prjs)}`)
					.join('\n')}`
			})
	}

	protected _highestDependencies(uniquePackages: UniquePackages): DependenciesObject {
		return Object.entries(uniquePackages)
			.map(([packageName, { versions }]) => ({ [packageName]: this._highestVersion(versions) }))
			.reduce((acc, cur) => Object.assign(acc, cur), {})
	}

	protected _highestVersion(versions: string[]): string {
		const sortedVersions = versions.sort(compareVersions)
		const result = sortedVersions.pop()
		if (!result) {
			throw new Error(`Missing version in array [${stringify(versions)}]`)
		}

		return result
	}

	protected _overrideGlobalDepsWithNewHighestDependencies(highestDependencies: DependenciesObject): void {
		const globalPackageJs = this._packageJsonForProject()
		globalPackageJs.dependencies = highestDependencies
		const fileData = JSON.stringify(JSON.parse(stringify(globalPackageJs)), null, 2)
		fileService.writeToFileSync({ data: fileData, filePath: 'package.json' })
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	protected _packageJsonForProject(project?: string): any {
		return require(path.join(process.cwd(), [project, 'package.json'].filter(Boolean).join('/'))) // eslint-disable-line @typescript-eslint/no-var-requires
	}
}

export const npmGlobalProjectCommandFactory = (
	...params: ConstructorParameters<typeof NpmGlobalProjectCommand>
): NpmGlobalProjectCommand => new NpmGlobalProjectCommand(...params)
