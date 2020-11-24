"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const chalk_1 = __importDefault(require("chalk"));
const lodash_1 = require("lodash");
const cli_service_1 = require("src/service/cli-service");
const util_1 = require("src/util");
const config_1 = require("src/util/config");
const sub_menu_1 = require("src/util/sub-menu");
class Clean extends sub_menu_1.SubMenu {
    /**
     * Remove content from node_modules folder located in all microservice projects
     */
    async __npm() {
        const promises = [];
        for (const project of config_1.config.projects) {
            const cmd = `rm -rf ${config_1.config.rootDir}/${project}/node_modules/*`;
            const promise = util_1.util.execAsync(cmd).then((execResult) => {
                util_1.util.log(chalk_1.default.green(`DONE - ${project}`));
                return { [project]: execResult };
            });
            promises.push(promise);
        }
        const result = await Promise.all(promises);
        cli_service_1.cliService.printMessage(lodash_1.assignIn({}, ...result));
    }
    /**
     * Remove all images created for all microservices in this project, including global docker images.
     * Before removing all images run `docker-compose down` to remove all containers
     */
    async __docker() {
        for (const image of [
            ...config_1.config.projects.map((proj) => `${config_1.config.git.projectPrefix}_${proj}`),
            ...config_1.config.dockerBaseImages,
        ]) {
            const result = await util_1.util.execAsync(`docker rmi ${image}`);
            util_1.util.log(chalk_1.default.cyan(image));
            if (!result.error)
                util_1.util.log(result.stdout);
            else
                util_1.util.log(chalk_1.default.red(result.stderr));
        }
    }
    constructor() {
        super('Clean action?', [
            { name: 'NPM', value: 'npm' },
            { name: 'Docker Images', value: 'docker' },
        ]);
    }
}
module.exports = Clean;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xlYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhlYy9DbGVhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsa0RBQXlCO0FBRXpCLG1DQUFpQztBQUNqQyx5REFBb0Q7QUFDcEQsbUNBQStCO0FBQy9CLDRDQUF3QztBQUN4QyxnREFBMkM7QUFHM0MsTUFBTSxLQUFNLFNBQVEsa0JBQU87SUFDekI7O09BRUc7SUFDSyxLQUFLLENBQUMsS0FBSztRQUNqQixNQUFNLFFBQVEsR0FBVSxFQUFFLENBQUE7UUFDMUIsS0FBSyxNQUFNLE9BQU8sSUFBSSxlQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JDLE1BQU0sR0FBRyxHQUFHLFVBQVUsZUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLGlCQUFpQixDQUFBO1lBQ2hFLE1BQU0sT0FBTyxHQUFHLFdBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0JBQ3RELFdBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDMUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUE7WUFDbEMsQ0FBQyxDQUFDLENBQUE7WUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ3ZCO1FBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzFDLHdCQUFVLENBQUMsWUFBWSxDQUFDLGlCQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssS0FBSyxDQUFDLFFBQVE7UUFDcEIsS0FBSyxNQUFNLEtBQUssSUFBSTtZQUNsQixHQUFHLGVBQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGVBQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3ZFLEdBQUcsZUFBTSxDQUFDLGdCQUFnQjtTQUMzQixFQUFFO1lBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxXQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUMxRCxXQUFJLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQUUsV0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7O2dCQUNyQyxXQUFJLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7U0FDeEM7SUFDSCxDQUFDO0lBQ0Q7UUFDRSxLQUFLLENBQUMsZUFBZSxFQUFFO1lBQ3JCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQzdCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1NBQ3ZCLENBQUMsQ0FBQTtJQUN4QixDQUFDO0NBQ0Y7QUF4Q0QsaUJBQVMsS0FBSyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IHsgQ2hvaWNlQ29sbGVjdGlvbiB9IGZyb20gJ2lucXVpcmVyJ1xuaW1wb3J0IHsgYXNzaWduSW4gfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBjbGlTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UvY2xpLXNlcnZpY2UnXG5pbXBvcnQgeyB1dGlsIH0gZnJvbSAnc3JjL3V0aWwnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdzcmMvdXRpbC9jb25maWcnXG5pbXBvcnQgeyBTdWJNZW51IH0gZnJvbSAnc3JjL3V0aWwvc3ViLW1lbnUnXG5cbmV4cG9ydCA9IENsZWFuXG5jbGFzcyBDbGVhbiBleHRlbmRzIFN1Yk1lbnUge1xuICAvKipcbiAgICogUmVtb3ZlIGNvbnRlbnQgZnJvbSBub2RlX21vZHVsZXMgZm9sZGVyIGxvY2F0ZWQgaW4gYWxsIG1pY3Jvc2VydmljZSBwcm9qZWN0c1xuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfX25wbSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwcm9taXNlczogYW55W10gPSBbXVxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBjb25maWcucHJvamVjdHMpIHtcbiAgICAgIGNvbnN0IGNtZCA9IGBybSAtcmYgJHtjb25maWcucm9vdERpcn0vJHtwcm9qZWN0fS9ub2RlX21vZHVsZXMvKmBcbiAgICAgIGNvbnN0IHByb21pc2UgPSB1dGlsLmV4ZWNBc3luYyhjbWQpLnRoZW4oKGV4ZWNSZXN1bHQpID0+IHtcbiAgICAgICAgdXRpbC5sb2coY2hhbGsuZ3JlZW4oYERPTkUgLSAke3Byb2plY3R9YCkpXG4gICAgICAgIHJldHVybiB7IFtwcm9qZWN0XTogZXhlY1Jlc3VsdCB9XG4gICAgICB9KVxuICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICBjbGlTZXJ2aWNlLnByaW50TWVzc2FnZShhc3NpZ25Jbih7fSwgLi4ucmVzdWx0KSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGltYWdlcyBjcmVhdGVkIGZvciBhbGwgbWljcm9zZXJ2aWNlcyBpbiB0aGlzIHByb2plY3QsIGluY2x1ZGluZyBnbG9iYWwgZG9ja2VyIGltYWdlcy5cbiAgICogQmVmb3JlIHJlbW92aW5nIGFsbCBpbWFnZXMgcnVuIGBkb2NrZXItY29tcG9zZSBkb3duYCB0byByZW1vdmUgYWxsIGNvbnRhaW5lcnNcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX19kb2NrZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZm9yIChjb25zdCBpbWFnZSBvZiBbXG4gICAgICAuLi5jb25maWcucHJvamVjdHMubWFwKChwcm9qKSA9PiBgJHtjb25maWcuZ2l0LnByb2plY3RQcmVmaXh9XyR7cHJvan1gKSxcbiAgICAgIC4uLmNvbmZpZy5kb2NrZXJCYXNlSW1hZ2VzLFxuICAgIF0pIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHV0aWwuZXhlY0FzeW5jKGBkb2NrZXIgcm1pICR7aW1hZ2V9YClcbiAgICAgIHV0aWwubG9nKGNoYWxrLmN5YW4oaW1hZ2UpKVxuICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHV0aWwubG9nKHJlc3VsdC5zdGRvdXQpXG4gICAgICBlbHNlIHV0aWwubG9nKGNoYWxrLnJlZChyZXN1bHQuc3RkZXJyKSlcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ0NsZWFuIGFjdGlvbj8nLCBbXG4gICAgICB7IG5hbWU6ICdOUE0nLCB2YWx1ZTogJ25wbScgfSxcbiAgICAgIHsgbmFtZTogJ0RvY2tlciBJbWFnZXMnLCB2YWx1ZTogJ2RvY2tlcicgfSxcbiAgICBdIGFzIENob2ljZUNvbGxlY3Rpb24pXG4gIH1cbn1cbiJdfQ==