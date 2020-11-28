"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.npmService = void 0;
const service_1 = require("src/service");
const util_1 = require("src/util");
exports.npmService = {
    install: async () => {
        const promises = util_1.config.projects.map((project) => {
            return new Promise((resolve, rejects) => {
                service_1.cliService.cd(project);
                const cmd = `npm i -s`;
                service_1.cliService
                    .exec({ cmd })
                    .then((result) => {
                    util_1.logger.debug(`exec done for project [${project}]`);
                    util_1.logger.debug(JSON.stringify({ [project]: result }));
                    resolve({ [project]: result });
                })
                    .catch(rejects);
                service_1.cliService.cd('..');
            });
        });
        const results = await Promise.all(promises);
        service_1.cliService.printStdMessage(...results);
    },
    global: () => {
        throw new Error('Not implemented yet');
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9ucG0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBeUQ7QUFDekQsbUNBQXlDO0FBRTVCLFFBQUEsVUFBVSxHQUFHO0lBQ3hCLE9BQU8sRUFBRSxLQUFLLElBQW1CLEVBQUU7UUFDakMsTUFBTSxRQUFRLEdBQUcsYUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMvQyxPQUFPLElBQUksT0FBTyxDQUFrQixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtnQkFDdkQsb0JBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3RCLE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQTtnQkFDdEIsb0JBQVU7cUJBQ1AsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7cUJBQ2IsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7b0JBQ2YsYUFBTSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsT0FBTyxHQUFHLENBQUMsQ0FBQTtvQkFDbEQsYUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7b0JBQ25ELE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDakIsb0JBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDckIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMzQyxvQkFBVSxDQUFDLGVBQWUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRCxNQUFNLEVBQUUsR0FBUyxFQUFFO1FBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaW50U3RkTWVzc2FnZSwgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlJ1xuaW1wb3J0IHsgY29uZmlnLCBsb2dnZXIgfSBmcm9tICdzcmMvdXRpbCdcblxuZXhwb3J0IGNvbnN0IG5wbVNlcnZpY2UgPSB7XG4gIGluc3RhbGw6IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBwcm9taXNlcyA9IGNvbmZpZy5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxQcmludFN0ZE1lc3NhZ2U+KChyZXNvbHZlLCByZWplY3RzKSA9PiB7XG4gICAgICAgIGNsaVNlcnZpY2UuY2QocHJvamVjdClcbiAgICAgICAgY29uc3QgY21kID0gYG5wbSBpIC1zYFxuICAgICAgICBjbGlTZXJ2aWNlXG4gICAgICAgICAgLmV4ZWMoeyBjbWQgfSlcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoYGV4ZWMgZG9uZSBmb3IgcHJvamVjdCBbJHtwcm9qZWN0fV1gKVxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKEpTT04uc3RyaW5naWZ5KHsgW3Byb2plY3RdOiByZXN1bHQgfSkpXG4gICAgICAgICAgICByZXNvbHZlKHsgW3Byb2plY3RdOiByZXN1bHQgfSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChyZWplY3RzKVxuICAgICAgICBjbGlTZXJ2aWNlLmNkKCcuLicpXG4gICAgICB9KVxuICAgIH0pXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgIGNsaVNlcnZpY2UucHJpbnRTdGRNZXNzYWdlKC4uLnJlc3VsdHMpXG4gIH0sXG4gIGdsb2JhbDogKCk6IHZvaWQgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkIHlldCcpXG4gIH0sXG59XG4iXX0=