"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const chalk_1 = __importDefault(require("chalk"));
const lodash_1 = require("lodash");
const shelljs_1 = __importDefault(require("shelljs"));
const cli_service_1 = require("src/service/cli-service");
const util_1 = require("src/util");
const config_1 = require("src/util/config");
const sub_menu_1 = require("src/util/sub-menu");
class Git extends sub_menu_1.SubMenu {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    async gitCommand(command) {
        const promises = [];
        for (const project of config_1.config.projects) {
            const cmd = `git -C ${config_1.config.rootDir}/${project} ${command}`;
            const promise = util_1.util.execAsync(cmd).then((execResult) => {
                util_1.util.log(chalk_1.default.green(`DONE - ${project}`));
                return { [project]: execResult };
            });
            promises.push(promise);
        }
        const result = await Promise.all(promises);
        cli_service_1.cliService.printMessage(lodash_1.assignIn({}, ...result));
    }
    constructor() {
        super('Git action?', [
            { name: 'Status', value: 'status' },
            { name: 'Fetch', value: 'fetch' },
            { name: 'Pull', value: 'pull' },
            { name: 'Clone', value: 'clone' },
        ]);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    async status() {
        await this.gitCommand('status');
    }
    async __fetch() {
        await this.gitCommand('fetch');
    }
    async __pull() {
        await this.gitCommand('pull');
    }
    /**
     * Clone all project for microservices that belong to parent project
     */
    async __clone() {
        shelljs_1.default.cd(config_1.config.rootDir);
        const promises = [];
        for (const project of config_1.config.projects) {
            const cmd = `git clone git@${config_1.config.git.host}:${config_1.config.git.team}/${config_1.config.git.projectPrefix}-${project}.git ${project}`;
            const promise = util_1.util.execAsync(cmd).then((execResult) => {
                util_1.util.log(chalk_1.default.green(`DONE - ${project}`));
                return { [project]: execResult };
            });
            promises.push(promise);
        }
        const result = await Promise.all(promises);
        cli_service_1.cliService.printMessage(lodash_1.assignIn({}, ...result));
    }
}
module.exports = Git;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4ZWMvR2l0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxrREFBeUI7QUFFekIsbUNBQWlDO0FBQ2pDLHNEQUEyQjtBQUMzQix5REFBb0Q7QUFDcEQsbUNBQStCO0FBQy9CLDRDQUF3QztBQUN4QyxnREFBMkM7QUFHM0MsTUFBTSxHQUFJLFNBQVEsa0JBQU87SUFDdkIsZ0VBQWdFO0lBQ3hELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUM5QixNQUFNLFFBQVEsR0FBVSxFQUFFLENBQUE7UUFDMUIsS0FBSyxNQUFNLE9BQU8sSUFBSSxlQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JDLE1BQU0sR0FBRyxHQUFHLFVBQVUsZUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLElBQUksT0FBTyxFQUFFLENBQUE7WUFDNUQsTUFBTSxPQUFPLEdBQUcsV0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDdEQsV0FBSSxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQTtZQUNsQyxDQUFDLENBQUMsQ0FBQTtZQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDdkI7UUFDRCxNQUFNLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDMUMsd0JBQVUsQ0FBQyxZQUFZLENBQUMsaUJBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFDRDtRQUNFLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDbkIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7WUFDbkMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7WUFDakMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7U0FDZCxDQUFDLENBQUE7SUFDeEIsQ0FBQztJQUVELGdFQUFnRTtJQUN4RCxLQUFLLENBQUMsTUFBTTtRQUNsQixNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUNPLEtBQUssQ0FBQyxPQUFPO1FBQ25CLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBQ08sS0FBSyxDQUFDLE1BQU07UUFDbEIsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRDs7T0FFRztJQUNLLEtBQUssQ0FBQyxPQUFPO1FBQ25CLGlCQUFLLENBQUMsRUFBRSxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN4QixNQUFNLFFBQVEsR0FBVSxFQUFFLENBQUE7UUFDMUIsS0FBSyxNQUFNLE9BQU8sSUFBSSxlQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JDLE1BQU0sR0FBRyxHQUFHLGlCQUFpQixlQUFNLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxlQUFNLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxlQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxPQUFPLFFBQVEsT0FBTyxFQUFFLENBQUE7WUFDdkgsTUFBTSxPQUFPLEdBQUcsV0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDdEQsV0FBSSxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQTtZQUNsQyxDQUFDLENBQUMsQ0FBQTtZQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDdkI7UUFDRCxNQUFNLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDMUMsd0JBQVUsQ0FBQyxZQUFZLENBQUMsaUJBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQ2xELENBQUM7Q0FDRjtBQXJERCxpQkFBUyxHQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgeyBDaG9pY2VDb2xsZWN0aW9uIH0gZnJvbSAnaW5xdWlyZXInXG5pbXBvcnQgeyBhc3NpZ25JbiB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCBzaGVsbCBmcm9tICdzaGVsbGpzJ1xuaW1wb3J0IHsgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL2NsaS1zZXJ2aWNlJ1xuaW1wb3J0IHsgdXRpbCB9IGZyb20gJ3NyYy91dGlsJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuaW1wb3J0IHsgU3ViTWVudSB9IGZyb20gJ3NyYy91dGlsL3N1Yi1tZW51J1xuXG5leHBvcnQgPSBHaXRcbmNsYXNzIEdpdCBleHRlbmRzIFN1Yk1lbnUge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gIHByaXZhdGUgYXN5bmMgZ2l0Q29tbWFuZChjb21tYW5kKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcHJvbWlzZXM6IGFueVtdID0gW11cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgY29uZmlnLnByb2plY3RzKSB7XG4gICAgICBjb25zdCBjbWQgPSBgZ2l0IC1DICR7Y29uZmlnLnJvb3REaXJ9LyR7cHJvamVjdH0gJHtjb21tYW5kfWBcbiAgICAgIGNvbnN0IHByb21pc2UgPSB1dGlsLmV4ZWNBc3luYyhjbWQpLnRoZW4oKGV4ZWNSZXN1bHQpID0+IHtcbiAgICAgICAgdXRpbC5sb2coY2hhbGsuZ3JlZW4oYERPTkUgLSAke3Byb2plY3R9YCkpXG4gICAgICAgIHJldHVybiB7IFtwcm9qZWN0XTogZXhlY1Jlc3VsdCB9XG4gICAgICB9KVxuICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICBjbGlTZXJ2aWNlLnByaW50TWVzc2FnZShhc3NpZ25Jbih7fSwgLi4ucmVzdWx0KSlcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignR2l0IGFjdGlvbj8nLCBbXG4gICAgICB7IG5hbWU6ICdTdGF0dXMnLCB2YWx1ZTogJ3N0YXR1cycgfSxcbiAgICAgIHsgbmFtZTogJ0ZldGNoJywgdmFsdWU6ICdmZXRjaCcgfSxcbiAgICAgIHsgbmFtZTogJ1B1bGwnLCB2YWx1ZTogJ3B1bGwnIH0sXG4gICAgICB7IG5hbWU6ICdDbG9uZScsIHZhbHVlOiAnY2xvbmUnIH0sXG4gICAgXSBhcyBDaG9pY2VDb2xsZWN0aW9uKVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuICBwcml2YXRlIGFzeW5jIHN0YXR1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLmdpdENvbW1hbmQoJ3N0YXR1cycpXG4gIH1cbiAgcHJpdmF0ZSBhc3luYyBfX2ZldGNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuZ2l0Q29tbWFuZCgnZmV0Y2gnKVxuICB9XG4gIHByaXZhdGUgYXN5bmMgX19wdWxsKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuZ2l0Q29tbWFuZCgncHVsbCcpXG4gIH1cblxuICAvKipcbiAgICogQ2xvbmUgYWxsIHByb2plY3QgZm9yIG1pY3Jvc2VydmljZXMgdGhhdCBiZWxvbmcgdG8gcGFyZW50IHByb2plY3RcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX19jbG9uZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBzaGVsbC5jZChjb25maWcucm9vdERpcilcbiAgICBjb25zdCBwcm9taXNlczogYW55W10gPSBbXVxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBjb25maWcucHJvamVjdHMpIHtcbiAgICAgIGNvbnN0IGNtZCA9IGBnaXQgY2xvbmUgZ2l0QCR7Y29uZmlnLmdpdC5ob3N0fToke2NvbmZpZy5naXQudGVhbX0vJHtjb25maWcuZ2l0LnByb2plY3RQcmVmaXh9LSR7cHJvamVjdH0uZ2l0ICR7cHJvamVjdH1gXG4gICAgICBjb25zdCBwcm9taXNlID0gdXRpbC5leGVjQXN5bmMoY21kKS50aGVuKChleGVjUmVzdWx0KSA9PiB7XG4gICAgICAgIHV0aWwubG9nKGNoYWxrLmdyZWVuKGBET05FIC0gJHtwcm9qZWN0fWApKVxuICAgICAgICByZXR1cm4geyBbcHJvamVjdF06IGV4ZWNSZXN1bHQgfVxuICAgICAgfSlcbiAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSlcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgY2xpU2VydmljZS5wcmludE1lc3NhZ2UoYXNzaWduSW4oe30sIC4uLnJlc3VsdCkpXG4gIH1cbn1cbiJdfQ==