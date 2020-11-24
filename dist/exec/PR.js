"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
const lodash_1 = require("lodash");
const request_promise_native_1 = __importDefault(require("request-promise-native"));
const util_1 = require("src/util");
const config_1 = require("src/util/config");
const sub_menu_1 = require("src/util/sub-menu");
class PR extends sub_menu_1.SubMenu {
    async __createMergePR() {
        // TODO split into multiple functions
        let username = config_1.config.git.username;
        let password = config_1.config.git.password;
        if (!username) {
            username = (await inquirer_1.default.prompt({ type: 'input', message: 'BitBucket username:', name: 'user' })).user;
        }
        if (!password) {
            password = (await inquirer_1.default.prompt({ type: 'password', message: 'BitBucket password:', name: 'pass' })).pass;
        }
        const Authorization = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;
        const makePullRequestPromises = [];
        for (const project of config_1.config.projects) {
            if (config_1.config.pullRequestSkip.includes(project))
                continue;
            const url = `https://api.bitbucket.org/2.0/repositories/${config_1.config.git.team}/${config_1.config.git.projectPrefix}-${project}/pullrequests`;
            const promise = request_promise_native_1.default(url, {
                method: 'POST',
                headers: { Authorization },
                json: {
                    title: 'Deploy to production',
                    source: { branch: { name: 'master' } },
                    destination: { branch: { name: 'production' } },
                },
            })
                .then((result) => {
                util_1.util.log(chalk_1.default.green(`https://bitbucket.org/${config_1.config.git.team}/${config_1.config.git.projectPrefix}-${project}/pull-requests/${result.id}`));
                return {
                    [project]: `https://api.bitbucket.org/2.0/repositories/${config_1.config.git.team}/${config_1.config.git.projectPrefix}-${project}/pullrequests/${result.id}/merge`,
                };
            })
                .catch((err) => {
                util_1.util.log(chalk_1.default.yellow(`${project} - ${err.message}`));
            });
            makePullRequestPromises.push(promise);
        }
        const pullRequestResults = lodash_1.assignIn({}, ...(await Promise.all(makePullRequestPromises)).filter((pr) => typeof pr !== 'undefined'));
        if (Object.keys(pullRequestResults).length > 0) {
            const mergeIt = (await inquirer_1.default.prompt({
                type: 'input',
                message: 'Merge all (y/N):',
                name: 'merge',
            })).merge.toString();
            if (mergeIt.toUpperCase() === 'Y') {
                const mergePromises = [];
                for (const [pr, urlMerge] of Object.entries(pullRequestResults)) {
                    const mergePromise = request_promise_native_1.default(urlMerge, {
                        method: 'POST',
                        headers: { Authorization },
                    }).then((result) => {
                        util_1.util.log(chalk_1.default.green(`${pr}: ${JSON.parse(result).state}`));
                    });
                    mergePromises.push(mergePromise);
                }
                await Promise.all(mergePromises);
            }
        }
    }
    constructor() {
        super('Pull Request action?', [{ name: 'Create / Merge PR', value: 'createMergePR' }]);
    }
}
module.exports = PR;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUFIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhlYy9QUi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsa0RBQXlCO0FBQ3pCLHdEQUFxRDtBQUNyRCxtQ0FBaUM7QUFDakMsb0ZBQTRDO0FBQzVDLG1DQUErQjtBQUMvQiw0Q0FBd0M7QUFDeEMsZ0RBQTJDO0FBRzNDLE1BQU0sRUFBRyxTQUFRLGtCQUFPO0lBQ2QsS0FBSyxDQUFDLGVBQWU7UUFDM0IscUNBQXFDO1FBQ3JDLElBQUksUUFBUSxHQUFHLGVBQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFBO1FBQ2xDLElBQUksUUFBUSxHQUFHLGVBQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixRQUFRLEdBQUcsQ0FBQyxNQUFNLGtCQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7U0FDekc7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsUUFBUSxHQUFHLENBQUMsTUFBTSxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1NBQzVHO1FBQ0QsTUFBTSxhQUFhLEdBQUcsU0FBUyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUE7UUFFMUYsTUFBTSx1QkFBdUIsR0FBVSxFQUFFLENBQUE7UUFDekMsS0FBSyxNQUFNLE9BQU8sSUFBSSxlQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JDLElBQUksZUFB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QUFFLENBQUMsQ0FBQyxDQUFBO29CQUM3RCxDQUFDLENBQUMsQ0FBQTtvQkFDRixhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO2lCQUNqQztnQkFDRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDakM7U0FDRjtJQUNILENBQUM7SUFFRDtRQUNFLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsQ0FBcUIsQ0FBQyxDQUFBO0lBQzVHLENBQUM7Q0FDRjtBQTFFRCxpQkFBUyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgaW5xdWlyZXIsIHsgQ2hvaWNlQ29sbGVjdGlvbiB9IGZyb20gJ2lucXVpcmVyJ1xuaW1wb3J0IHsgYXNzaWduSW4gfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0LXByb21pc2UtbmF0aXZlJ1xuaW1wb3J0IHsgdXRpbCB9IGZyb20gJ3NyYy91dGlsJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuaW1wb3J0IHsgU3ViTWVudSB9IGZyb20gJ3NyYy91dGlsL3N1Yi1tZW51J1xuXG5leHBvcnQgPSBQUlxuY2xhc3MgUFIgZXh0ZW5kcyBTdWJNZW51IHtcbiAgcHJpdmF0ZSBhc3luYyBfX2NyZWF0ZU1lcmdlUFIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gVE9ETyBzcGxpdCBpbnRvIG11bHRpcGxlIGZ1bmN0aW9uc1xuICAgIGxldCB1c2VybmFtZSA9IGNvbmZpZy5naXQudXNlcm5hbWVcbiAgICBsZXQgcGFzc3dvcmQgPSBjb25maWcuZ2l0LnBhc3N3b3JkXG4gICAgaWYgKCF1c2VybmFtZSkge1xuICAgICAgdXNlcm5hbWUgPSAoYXdhaXQgaW5xdWlyZXIucHJvbXB0KHsgdHlwZTogJ2lucHV0JywgbWVzc2FnZTogJ0JpdEJ1Y2tldCB1c2VybmFtZTonLCBuYW1lOiAndXNlcicgfSkpLnVzZXJcbiAgICB9XG4gICAgaWYgKCFwYXNzd29yZCkge1xuICAgICAgcGFzc3dvcmQgPSAoYXdhaXQgaW5xdWlyZXIucHJvbXB0KHsgdHlwZTogJ3Bhc3N3b3JkJywgbWVzc2FnZTogJ0JpdEJ1Y2tldCBwYXNzd29yZDonLCBuYW1lOiAncGFzcycgfSkpLnBhc3NcbiAgICB9XG4gICAgY29uc3QgQXV0aG9yaXphdGlvbiA9IGBCYXNpYyAke0J1ZmZlci5mcm9tKGAke3VzZXJuYW1lfToke3Bhc3N3b3JkfWApLnRvU3RyaW5nKCdiYXNlNjQnKX1gXG5cbiAgICBjb25zdCBtYWtlUHVsbFJlcXVlc3RQcm9taXNlczogYW55W10gPSBbXVxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBjb25maWcucHJvamVjdHMpIHtcbiAgICAgIGlmIChjb25maWcucHVsbFJlcXVlc3RTa2lwLmluY2x1ZGVzKHByb2plY3QpKSBjb250aW51ZVxuICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLmJpdGJ1Y2tldC5vcmcvMi4wL3JlcG9zaXRvcmllcy8ke2NvbmZpZy5naXQudGVhbX0vJHtjb25maWcuZ2l0LnByb2plY3RQcmVmaXh9LSR7cHJvamVjdH0vcHVsbHJlcXVlc3RzYFxuICAgICAgY29uc3QgcHJvbWlzZSA9IHJlcXVlc3QodXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb24gfSxcbiAgICAgICAganNvbjoge1xuICAgICAgICAgIHRpdGxlOiAnRGVwbG95IHRvIHByb2R1Y3Rpb24nLFxuICAgICAgICAgIHNvdXJjZTogeyBicmFuY2g6IHsgbmFtZTogJ21hc3RlcicgfSB9LFxuICAgICAgICAgIGRlc3RpbmF0aW9uOiB7IGJyYW5jaDogeyBuYW1lOiAncHJvZHVjdGlvbicgfSB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHV0aWwubG9nKFxuICAgICAgICAgICAgY2hhbGsuZ3JlZW4oXG4gICAgICAgICAgICAgIGBodHRwczovL2JpdGJ1Y2tldC5vcmcvJHtjb25maWcuZ2l0LnRlYW19LyR7Y29uZmlnLmdpdC5wcm9qZWN0UHJlZml4fS0ke3Byb2plY3R9L3B1bGwtcmVxdWVzdHMvJHtyZXN1bHQuaWR9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW3Byb2plY3RdOiBgaHR0cHM6Ly9hcGkuYml0YnVja2V0Lm9yZy8yLjAvcmVwb3NpdG9yaWVzLyR7Y29uZmlnLmdpdC50ZWFtfS8ke2NvbmZpZy5naXQucHJvamVjdFByZWZpeH0tJHtwcm9qZWN0fS9wdWxscmVxdWVzdHMvJHtyZXN1bHQuaWR9L21lcmdlYCxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdXRpbC5sb2coY2hhbGsueWVsbG93KGAke3Byb2plY3R9IC0gJHtlcnIubWVzc2FnZX1gKSlcbiAgICAgICAgfSlcbiAgICAgIG1ha2VQdWxsUmVxdWVzdFByb21pc2VzLnB1c2gocHJvbWlzZSlcbiAgICB9XG4gICAgY29uc3QgcHVsbFJlcXVlc3RSZXN1bHRzID0gYXNzaWduSW4oXG4gICAgICB7fSxcbiAgICAgIC4uLihhd2FpdCBQcm9taXNlLmFsbChtYWtlUHVsbFJlcXVlc3RQcm9taXNlcykpLmZpbHRlcigocHIpID0+IHR5cGVvZiBwciAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgKVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKHB1bGxSZXF1ZXN0UmVzdWx0cyBhcyBhbnkpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG1lcmdlSXQ6IHN0cmluZyA9IChcbiAgICAgICAgYXdhaXQgaW5xdWlyZXIucHJvbXB0KHtcbiAgICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdNZXJnZSBhbGwgKHkvTik6JyxcbiAgICAgICAgICBuYW1lOiAnbWVyZ2UnLFxuICAgICAgICB9KVxuICAgICAgKS5tZXJnZS50b1N0cmluZygpXG4gICAgICBpZiAobWVyZ2VJdC50b1VwcGVyQ2FzZSgpID09PSAnWScpIHtcbiAgICAgICAgY29uc3QgbWVyZ2VQcm9taXNlczogYW55W10gPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IFtwciwgdXJsTWVyZ2VdIG9mIE9iamVjdC5lbnRyaWVzKHB1bGxSZXF1ZXN0UmVzdWx0cyBhcyBhbnkpKSB7XG4gICAgICAgICAgY29uc3QgbWVyZ2VQcm9taXNlID0gcmVxdWVzdCh1cmxNZXJnZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb24gfSxcbiAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHV0aWwubG9nKGNoYWxrLmdyZWVuKGAke3ByfTogJHtKU09OLnBhcnNlKHJlc3VsdCkuc3RhdGV9YCkpXG4gICAgICAgICAgfSlcbiAgICAgICAgICBtZXJnZVByb21pc2VzLnB1c2gobWVyZ2VQcm9taXNlKVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKG1lcmdlUHJvbWlzZXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ1B1bGwgUmVxdWVzdCBhY3Rpb24/JywgW3sgbmFtZTogJ0NyZWF0ZSAvIE1lcmdlIFBSJywgdmFsdWU6ICdjcmVhdGVNZXJnZVBSJyB9XSBhcyBDaG9pY2VDb2xsZWN0aW9uKVxuICB9XG59XG4iXX0=