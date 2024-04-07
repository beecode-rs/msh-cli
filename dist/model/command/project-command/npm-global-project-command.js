import { compareVersions } from 'compare-versions';
import stringify from 'fast-json-stable-stringify';
import path from 'path';
import { fileService } from '../../../service/file-service.js';
import { config } from '../../../util/config.js';
import { logger } from '../../../util/logger.js';
export class NpmGlobalProjectCommand {
    async execute() {
        try {
            const depsByProject = this._allDepsByProject();
            logger().debug('all dependencies all projects', depsByProject);
            const uniquePackages = this._uniquePackages(depsByProject);
            logger().debug('add dependencies by package', uniquePackages);
            const versionConflictWarningMessage = this._versionConflictWarningMessage(uniquePackages);
            logger().debug('version conflict warning message', versionConflictWarningMessage);
            const highestDependencies = this._highestDependencies(uniquePackages);
            const highestDependenciesString = JSON.stringify(highestDependencies, Object.keys(highestDependencies).sort(), 2);
            logger().debug('highest dependencies', highestDependenciesString);
            this._overrideGlobalDepsWithNewHighestDependencies(highestDependencies);
            return [
                {
                    errorMessage: versionConflictWarningMessage.join('\n\n'),
                    name: 'Global NPM Dependencies',
                    stringResult: `Gathered dependencies \n\n${highestDependenciesString}`,
                },
            ];
        }
        catch (err) {
            return [{ errorMessage: err.message }];
        }
    }
    _allDepsByProject() {
        return config()
            .projects.map((project) => {
            const packageJs = this._packageJsonForProject(project);
            const projectDeps = { ...packageJs.dependencies, ...packageJs.devDependencies };
            const cleanProjectDeps = this._removeIgnoredPackages(projectDeps);
            return { [project]: cleanProjectDeps };
        })
            .reduce((acc, cur) => Object.assign(acc, cur), {});
    }
    _removeIgnoredPackages(dependencies) {
        const { globalIgnorePackages } = config().npm;
        if (globalIgnorePackages.length === 0) {
            return dependencies;
        }
        return Object.entries(dependencies)
            .filter(([packageName]) => !globalIgnorePackages.includes(packageName))
            .reduce((acc, [packageName, version]) => ({ ...acc, [packageName]: version }), {});
    }
    _uniquePackages(depsByProject) {
        const result = {};
        Object.entries(depsByProject).forEach(([project, deps]) => {
            Object.entries(deps).forEach(([packageName, version]) => {
                const pk = (result[packageName] = result[packageName] ?? { versionProject: {}, versions: [] });
                if (!pk.versions.includes(version)) {
                    pk.versions.push(version);
                }
                const pv = (pk.versionProject[version] = pk.versionProject[version] ?? []);
                pv.push(project);
            });
        });
        return result;
    }
    _versionConflictWarningMessage(uniquePackages) {
        return Object.entries(uniquePackages)
            .filter(([_, { versions }]) => versions.length > 1)
            .sort((a, b) => {
            const [pnA] = a;
            const [pnB] = b;
            if (pnA < pnB) {
                return -1;
            }
            if (pnA > pnB) {
                return 1;
            }
            return 0;
        })
            .map(([packageName, uniquePackInfo]) => {
            return `${packageName}: ${stringify(uniquePackInfo.versions)}\n${Object.entries(uniquePackInfo.versionProject)
                .map(([v, prjs]) => `${v}:${stringify(prjs)}`)
                .join('\n')}`;
        });
    }
    _highestDependencies(uniquePackages) {
        return Object.entries(uniquePackages)
            .map(([packageName, { versions }]) => ({ [packageName]: this._highestVersion(versions) }))
            .reduce((acc, cur) => Object.assign(acc, cur), {});
    }
    _highestVersion(versions) {
        const sortedVersions = versions.sort(compareVersions);
        const result = sortedVersions.pop();
        if (!result) {
            throw new Error(`Missing version in array [${stringify(versions)}]`);
        }
        return result;
    }
    _overrideGlobalDepsWithNewHighestDependencies(highestDependencies) {
        const globalPackageJs = this._packageJsonForProject();
        globalPackageJs.dependencies = highestDependencies;
        const fileData = JSON.stringify(JSON.parse(stringify(globalPackageJs)), null, 2);
        fileService.writeToFileSync({ data: fileData, filePath: 'package.json' });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _packageJsonForProject(project) {
        return require(path.join(process.cwd(), [project, 'package.json'].filter(Boolean).join('/'))); // eslint-disable-line @typescript-eslint/no-var-requires
    }
}
export const npmGlobalProjectCommandFactory = (...params) => new NpmGlobalProjectCommand(...params);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLWdsb2JhbC1wcm9qZWN0LWNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kZWwvY29tbWFuZC9wcm9qZWN0LWNvbW1hbmQvbnBtLWdsb2JhbC1wcm9qZWN0LWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ2xELE9BQU8sU0FBUyxNQUFNLDRCQUE0QixDQUFBO0FBQ2xELE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQTtBQUd2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFDdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQVV6QyxNQUFNLE9BQU8sdUJBQXVCO0lBQ25DLEtBQUssQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDO1lBQ0osTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7WUFDOUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLGFBQWEsQ0FBQyxDQUFBO1lBRTlELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDMUQsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLGNBQWMsQ0FBQyxDQUFBO1lBRTdELE1BQU0sNkJBQTZCLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQ3pGLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsRUFBRSw2QkFBNkIsQ0FBQyxDQUFBO1lBRWpGLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQ3JFLE1BQU0seUJBQXlCLEdBQUcsSUFB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QUFBO1FBQ2xELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDaEYsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQUVELDhEQUE4RDtJQUNwRCxzQkFBc0IsQ0FBQyxPQUFnQjtRQUNoRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLHlEQUF5RDtJQUN4SixDQUFDO0NBQ0Q7QUFFRCxNQUFNLENBQUMsTUFBTSw4QkFBOEIsR0FBRyxDQUM3QyxHQUFHLE1BQTZELEVBQ3RDLEVBQUUsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wYXJlVmVyc2lvbnMgfSBmcm9tICdjb21wYXJlLXZlcnNpb25zJ1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICdmYXN0LWpzb24tc3RhYmxlLXN0cmluZ2lmeSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmltcG9ydCB7IEV4ZWN1dGFibGUsIEV4ZWN1dGVSZXN1bHQgfSBmcm9tICcjc3JjL21vZGVsL2NvbW1hbmQvaW50ZXJmYWNlcydcbmltcG9ydCB7IGZpbGVTZXJ2aWNlIH0gZnJvbSAnI3NyYy9zZXJ2aWNlL2ZpbGUtc2VydmljZSdcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJyNzcmMvdXRpbC9jb25maWcnXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcjc3JjL3V0aWwvbG9nZ2VyJ1xuXG5leHBvcnQgdHlwZSBWZXJzaW9uT25Qcm9qZWN0cyA9IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPlxuXG5leHBvcnQgdHlwZSBVbmlxdWVQYWNrYWdlcyA9IFJlY29yZDxzdHJpbmcsIHsgdmVyc2lvbnM6IHN0cmluZ1tdOyB2ZXJzaW9uUHJvamVjdDogVmVyc2lvbk9uUHJvamVjdHMgfT5cblxuZXhwb3J0IHR5cGUgRGVwZW5kZW5jaWVzT2JqZWN0ID0gUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuXG5leHBvcnQgdHlwZSBQcm9qZWN0V2l0aERlcGVuZGVuY2llcyA9IFJlY29yZDxzdHJpbmcsIERlcGVuZGVuY2llc09iamVjdD5cblxuZXhwb3J0IGNsYXNzIE5wbUdsb2JhbFByb2plY3RDb21tYW5kIGltcGxlbWVudHMgRXhlY3V0YWJsZSB7XG5cdGFzeW5jIGV4ZWN1dGUoKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0W10+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGVwc0J5UHJvamVjdCA9IHRoaXMuX2FsbERlcHNCeVByb2plY3QoKVxuXHRcdFx0bG9nZ2VyKCkuZGVidWcoJ2FsbCBkZXBlbmRlbmNpZXMgYWxsIHByb2plY3RzJywgZGVwc0J5UHJvamVjdClcblxuXHRcdFx0Y29uc3QgdW5pcXVlUGFja2FnZXMgPSB0aGlzLl91bmlxdWVQYWNrYWdlcyhkZXBzQnlQcm9qZWN0KVxuXHRcdFx0bG9nZ2VyKCkuZGVidWcoJ2FkZCBkZXBlbmRlbmNpZXMgYnkgcGFja2FnZScsIHVuaXF1ZVBhY2thZ2VzKVxuXG5cdFx0XHRjb25zdCB2ZXJzaW9uQ29uZmxpY3RXYXJuaW5nTWVzc2FnZSA9IHRoaXMuX3ZlcnNpb25Db25mbGljdFdhcm5pbmdNZXNzYWdlKHVuaXF1ZVBhY2thZ2VzKVxuXHRcdFx0bG9nZ2VyKCkuZGVidWcoJ3ZlcnNpb24gY29uZmxpY3Qgd2FybmluZyBtZXNzYWdlJywgdmVyc2lvbkNvbmZsaWN0V2FybmluZ01lc3NhZ2UpXG5cblx0XHRcdGNvbnN0IGhpZ2hlc3REZXBlbmRlbmNpZXMgPSB0aGlzLl9oaWdoZXN0RGVwZW5kZW5jaWVzKHVuaXF1ZVBhY2thZ2VzKVxuXHRcdFx0Y29uc3QgaGlnaGVzdERlcGVuZGVuY2llc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGhpZ2hlc3REZXBlbmRlbmNpZXMsIE9iamVjdC5rZXlzKGhpZ2hlc3REZXBlbmRlbmNpZXMpLnNvcnQoKSwgMilcblx0XHRcdGxvZ2dlcigpLmRlYnVnKCdoaWdoZXN0IGRlcGVuZGVuY2llcycsIGhpZ2hlc3REZXBlbmRlbmNpZXNTdHJpbmcpXG5cblx0XHRcdHRoaXMuX292ZXJyaWRlR2xvYmFsRGVwc1dpdGhOZXdIaWdoZXN0RGVwZW5kZW5jaWVzKGhpZ2hlc3REZXBlbmRlbmNpZXMpXG5cblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2U6IHZlcnNpb25Db25mbGljdFdhcm5pbmdNZXNzYWdlLmpvaW4oJ1xcblxcbicpLFxuXHRcdFx0XHRcdG5hbWU6ICdHbG9iYWwgTlBNIERlcGVuZGVuY2llcycsXG5cdFx0XHRcdFx0c3RyaW5nUmVzdWx0OiBgR2F0aGVyZWQgZGVwZW5kZW5jaWVzIFxcblxcbiR7aGlnaGVzdERlcGVuZGVuY2llc1N0cmluZ31gLFxuXHRcdFx0XHR9LFxuXHRcdFx0XVxuXHRcdH0gY2F0Y2ggKGVycjogYW55KSB7XG5cdFx0XHRyZXR1cm4gW3sgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9XVxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBfYWxsRGVwc0J5UHJvamVjdCgpOiBQcm9qZWN0V2l0aERlcGVuZGVuY2llcyB7XG5cdFx0cmV0dXJuIGNvbmZpZygpXG5cdFx0XHQucHJvamVjdHMubWFwKChwcm9qZWN0OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0Y29uc3QgcGFja2FnZUpzID0gdGhpcy5fcGFja2FnZUpzb25Gb3JQcm9qZWN0KHByb2plY3QpXG5cdFx0XHRcdGNvbnN0IHByb2plY3REZXBzID0geyAuLi5wYWNrYWdlSnMuZGVwZW5kZW5jaWVzLCAuLi5wYWNrYWdlSnMuZGV2RGVwZW5kZW5jaWVzIH1cblx0XHRcdFx0Y29uc3QgY2xlYW5Qcm9qZWN0RGVwcyA9IHRoaXMuX3JlbW92ZUlnbm9yZWRQYWNrYWdlcyhwcm9qZWN0RGVwcylcblxuXHRcdFx0XHRyZXR1cm4geyBbcHJvamVjdF06IGNsZWFuUHJvamVjdERlcHMgfVxuXHRcdFx0fSlcblx0XHRcdC5yZWR1Y2UoKGFjYzogUHJvamVjdFdpdGhEZXBlbmRlbmNpZXMsIGN1cjogUHJvamVjdFdpdGhEZXBlbmRlbmNpZXMpID0+IE9iamVjdC5hc3NpZ24oYWNjLCBjdXIpLCB7fSlcblx0fVxuXG5cdHByb3RlY3RlZCBfcmVtb3ZlSWdub3JlZFBhY2thZ2VzKGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzT2JqZWN0KTogRGVwZW5kZW5jaWVzT2JqZWN0IHtcblx0XHRjb25zdCB7IGdsb2JhbElnbm9yZVBhY2thZ2VzIH0gPSBjb25maWcoKS5ucG1cblx0XHRpZiAoZ2xvYmFsSWdub3JlUGFja2FnZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZGVwZW5kZW5jaWVzXG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKGRlcGVuZGVuY2llcylcblx0XHRcdC5maWx0ZXIoKFtwYWNrYWdlTmFtZV0pID0+ICFnbG9iYWxJZ25vcmVQYWNrYWdlcy5pbmNsdWRlcyhwYWNrYWdlTmFtZSkpXG5cdFx0XHQucmVkdWNlKChhY2MsIFtwYWNrYWdlTmFtZSwgdmVyc2lvbl0pID0+ICh7IC4uLmFjYywgW3BhY2thZ2VOYW1lXTogdmVyc2lvbiB9KSwge30pXG5cdH1cblxuXHRwcm90ZWN0ZWQgX3VuaXF1ZVBhY2thZ2VzKGRlcHNCeVByb2plY3Q6IFByb2plY3RXaXRoRGVwZW5kZW5jaWVzKTogVW5pcXVlUGFja2FnZXMge1xuXHRcdGNvbnN0IHJlc3VsdDogVW5pcXVlUGFja2FnZXMgPSB7fVxuXHRcdE9iamVjdC5lbnRyaWVzKGRlcHNCeVByb2plY3QpLmZvckVhY2goKFtwcm9qZWN0LCBkZXBzXSkgPT4ge1xuXHRcdFx0T2JqZWN0LmVudHJpZXMoZGVwcykuZm9yRWFjaCgoW3BhY2thZ2VOYW1lLCB2ZXJzaW9uXSkgPT4ge1xuXHRcdFx0XHRjb25zdCBwayA9IChyZXN1bHRbcGFja2FnZU5hbWVdID0gcmVzdWx0W3BhY2thZ2VOYW1lXSA/PyB7IHZlcnNpb25Qcm9qZWN0OiB7fSwgdmVyc2lvbnM6IFtdIH0pXG5cdFx0XHRcdGlmICghcGsudmVyc2lvbnMuaW5jbHVkZXModmVyc2lvbikpIHtcblx0XHRcdFx0XHRway52ZXJzaW9ucy5wdXNoKHZlcnNpb24pXG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcHYgPSAocGsudmVyc2lvblByb2plY3RbdmVyc2lvbl0gPSBway52ZXJzaW9uUHJvamVjdFt2ZXJzaW9uXSA/PyBbXSlcblx0XHRcdFx0cHYucHVzaChwcm9qZWN0KVxuXHRcdFx0fSlcblx0XHR9KVxuXG5cdFx0cmV0dXJuIHJlc3VsdFxuXHR9XG5cblx0cHJvdGVjdGVkIF92ZXJzaW9uQ29uZmxpY3RXYXJuaW5nTWVzc2FnZSh1bmlxdWVQYWNrYWdlczogVW5pcXVlUGFja2FnZXMpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHVuaXF1ZVBhY2thZ2VzKVxuXHRcdFx0LmZpbHRlcigoW18sIHsgdmVyc2lvbnMgfV0pID0+IHZlcnNpb25zLmxlbmd0aCA+IDEpXG5cdFx0XHQuc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0XHRjb25zdCBbcG5BXSA9IGFcblx0XHRcdFx0Y29uc3QgW3BuQl0gPSBiXG5cdFx0XHRcdGlmIChwbkEgPCBwbkIpIHtcblx0XHRcdFx0XHRyZXR1cm4gLTFcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocG5BID4gcG5CKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDFcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAwXG5cdFx0XHR9KVxuXHRcdFx0Lm1hcCgoW3BhY2thZ2VOYW1lLCB1bmlxdWVQYWNrSW5mb10pID0+IHtcblx0XHRcdFx0cmV0dXJuIGAke3BhY2thZ2VOYW1lfTogJHtzdHJpbmdpZnkodW5pcXVlUGFja0luZm8udmVyc2lvbnMpfVxcbiR7T2JqZWN0LmVudHJpZXModW5pcXVlUGFja0luZm8udmVyc2lvblByb2plY3QpXG5cdFx0XHRcdFx0Lm1hcCgoW3YsIHByanNdKSA9PiBgJHt2fToke3N0cmluZ2lmeShwcmpzKX1gKVxuXHRcdFx0XHRcdC5qb2luKCdcXG4nKX1gXG5cdFx0XHR9KVxuXHR9XG5cblx0cHJvdGVjdGVkIF9oaWdoZXN0RGVwZW5kZW5jaWVzKHVuaXF1ZVBhY2thZ2VzOiBVbmlxdWVQYWNrYWdlcyk6IERlcGVuZGVuY2llc09iamVjdCB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHVuaXF1ZVBhY2thZ2VzKVxuXHRcdFx0Lm1hcCgoW3BhY2thZ2VOYW1lLCB7IHZlcnNpb25zIH1dKSA9PiAoeyBbcGFja2FnZU5hbWVdOiB0aGlzLl9oaWdoZXN0VmVyc2lvbih2ZXJzaW9ucykgfSkpXG5cdFx0XHQucmVkdWNlKChhY2MsIGN1cikgPT4gT2JqZWN0LmFzc2lnbihhY2MsIGN1ciksIHt9KVxuXHR9XG5cblx0cHJvdGVjdGVkIF9oaWdoZXN0VmVyc2lvbih2ZXJzaW9uczogc3RyaW5nW10pOiBzdHJpbmcge1xuXHRcdGNvbnN0IHNvcnRlZFZlcnNpb25zID0gdmVyc2lvbnMuc29ydChjb21wYXJlVmVyc2lvbnMpXG5cdFx0Y29uc3QgcmVzdWx0ID0gc29ydGVkVmVyc2lvbnMucG9wKClcblx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHZlcnNpb24gaW4gYXJyYXkgWyR7c3RyaW5naWZ5KHZlcnNpb25zKX1dYClcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0XG5cdH1cblxuXHRwcm90ZWN0ZWQgX292ZXJyaWRlR2xvYmFsRGVwc1dpdGhOZXdIaWdoZXN0RGVwZW5kZW5jaWVzKGhpZ2hlc3REZXBlbmRlbmNpZXM6IERlcGVuZGVuY2llc09iamVjdCk6IHZvaWQge1xuXHRcdGNvbnN0IGdsb2JhbFBhY2thZ2VKcyA9IHRoaXMuX3BhY2thZ2VKc29uRm9yUHJvamVjdCgpXG5cdFx0Z2xvYmFsUGFja2FnZUpzLmRlcGVuZGVuY2llcyA9IGhpZ2hlc3REZXBlbmRlbmNpZXNcblx0XHRjb25zdCBmaWxlRGF0YSA9IEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2Uoc3RyaW5naWZ5KGdsb2JhbFBhY2thZ2VKcykpLCBudWxsLCAyKVxuXHRcdGZpbGVTZXJ2aWNlLndyaXRlVG9GaWxlU3luYyh7IGRhdGE6IGZpbGVEYXRhLCBmaWxlUGF0aDogJ3BhY2thZ2UuanNvbicgfSlcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdHByb3RlY3RlZCBfcGFja2FnZUpzb25Gb3JQcm9qZWN0KHByb2plY3Q/OiBzdHJpbmcpOiBhbnkge1xuXHRcdHJldHVybiByZXF1aXJlKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBbcHJvamVjdCwgJ3BhY2thZ2UuanNvbiddLmZpbHRlcihCb29sZWFuKS5qb2luKCcvJykpKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcblx0fVxufVxuXG5leHBvcnQgY29uc3QgbnBtR2xvYmFsUHJvamVjdENvbW1hbmRGYWN0b3J5ID0gKFxuXHQuLi5wYXJhbXM6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgTnBtR2xvYmFsUHJvamVjdENvbW1hbmQ+XG4pOiBOcG1HbG9iYWxQcm9qZWN0Q29tbWFuZCA9PiBuZXcgTnBtR2xvYmFsUHJvamVjdENvbW1hbmQoLi4ucGFyYW1zKVxuIl19