import { mshEnv } from '@beecode/msh-env';
import { setEnvLogger } from '@beecode/msh-env/util/logger';
import { LogLevel } from '@beecode/msh-logger';
import { LoggerStrategyConsole } from '@beecode/msh-logger/logger-strategy/console';
import { ConsoleLogStrategySimple } from '@beecode/msh-logger/logger-strategy/console/log-strategy/simple';
import { singletonPattern } from '@beecode/msh-util/singleton/pattern';
import dotenv from 'dotenv';
setEnvLogger(new LoggerStrategyConsole({ consoleLogStrategy: new ConsoleLogStrategySimple(), logLevel: LogLevel.INFO }));
const env = mshEnv();
dotenv.config({ path: './.msh' });
dotenv.config({ path: './.msh-user' });
export const config = singletonPattern(() => {
    return {
        // dockerBaseImages: env('DOCKER_BASE_IMAGES').json<string[]>().default([]).optional,
        cmd: {
            gitEnabled: env('CMD_GIT_ENABLED').boolean.default(true).required,
            // cleanEnabled: env('CMD_CLEAN_ENABLED').boolean.default(false).required,
            npmEnabled: env('CMD_NPM_ENABLED').boolean.default(true).required,
            // prEnabled: env('CMD_PR_ENABLED').boolean.default(false).required,
        },
        git: {
            host: env('GIT_HOST').string.default('bitbucket.org').required,
            password: env('GIT_PASSWORD').string.optional,
            projectPrefix: env('GIT_PROJECT_PREFIX').string.optional,
            team: env('GIT_TEAM').string.optional,
            username: env('GIT_USERNAME').string.optional,
        },
        logLevel: env('LOG_LEVEL').string.default('error').required,
        npm: {
            globalIgnorePackages: env('NPM_GLOBAL_IGNORE_PACKAGES').json().default([]).required,
        },
        projects: env('PROJECTS').json().default([]).required,
        pullRequestSkip: env('PULL_REQUEST_SKIP').json().default([]).required,
        rootDir: env('ROOT_DIR').string.default(process.cwd()).required,
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFBO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlFQUFpRSxDQUFBO0FBQzFHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFBO0FBQ3RFLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQTtBQUUzQixZQUFZLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksd0JBQXdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUV4SCxNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtBQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUE7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFBO0FBRXRDLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7SUFDM0MsT0FBTztRQUNOLHFGQUFxRjtRQUNyRixHQUFHLEVBQUU7WUFDSixVQUFVLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRO1lBQ2pFLDBFQUEwRTtZQUMxRSxVQUFVLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRO1lBQ2pFLG9FQUFvRTtTQUNwRTtRQUVELEdBQUcsRUFBRTtZQUNKLElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRO1lBQzlELFFBQVEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDN0MsYUFBYSxFQUFFLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQ3hELElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDckMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtTQUM3QztRQUVELFFBQVEsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRO1FBRTNELEdBQUcsRUFBRTtZQUNKLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLElBQUksRUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRO1NBQzdGO1FBRUQsUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUTtRQUMvRCxlQUFlLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxFQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVE7UUFDL0UsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVE7S0FDdEQsQ0FBQTtBQUNYLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbXNoRW52IH0gZnJvbSAnQGJlZWNvZGUvbXNoLWVudidcbmltcG9ydCB7IHNldEVudkxvZ2dlciB9IGZyb20gJ0BiZWVjb2RlL21zaC1lbnYvdXRpbC9sb2dnZXInXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gJ0BiZWVjb2RlL21zaC1sb2dnZXInXG5pbXBvcnQgeyBMb2dnZXJTdHJhdGVneUNvbnNvbGUgfSBmcm9tICdAYmVlY29kZS9tc2gtbG9nZ2VyL2xvZ2dlci1zdHJhdGVneS9jb25zb2xlJ1xuaW1wb3J0IHsgQ29uc29sZUxvZ1N0cmF0ZWd5U2ltcGxlIH0gZnJvbSAnQGJlZWNvZGUvbXNoLWxvZ2dlci9sb2dnZXItc3RyYXRlZ3kvY29uc29sZS9sb2ctc3RyYXRlZ3kvc2ltcGxlJ1xuaW1wb3J0IHsgc2luZ2xldG9uUGF0dGVybiB9IGZyb20gJ0BiZWVjb2RlL21zaC11dGlsL3NpbmdsZXRvbi9wYXR0ZXJuJ1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXG5cbnNldEVudkxvZ2dlcihuZXcgTG9nZ2VyU3RyYXRlZ3lDb25zb2xlKHsgY29uc29sZUxvZ1N0cmF0ZWd5OiBuZXcgQ29uc29sZUxvZ1N0cmF0ZWd5U2ltcGxlKCksIGxvZ0xldmVsOiBMb2dMZXZlbC5JTkZPIH0pKVxuXG5jb25zdCBlbnYgPSBtc2hFbnYoKVxuZG90ZW52LmNvbmZpZyh7IHBhdGg6ICcuLy5tc2gnIH0pXG5kb3RlbnYuY29uZmlnKHsgcGF0aDogJy4vLm1zaC11c2VyJyB9KVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0gc2luZ2xldG9uUGF0dGVybigoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Ly8gZG9ja2VyQmFzZUltYWdlczogZW52KCdET0NLRVJfQkFTRV9JTUFHRVMnKS5qc29uPHN0cmluZ1tdPigpLmRlZmF1bHQoW10pLm9wdGlvbmFsLFxuXHRcdGNtZDoge1xuXHRcdFx0Z2l0RW5hYmxlZDogZW52KCdDTURfR0lUX0VOQUJMRUQnKS5ib29sZWFuLmRlZmF1bHQodHJ1ZSkucmVxdWlyZWQsXG5cdFx0XHQvLyBjbGVhbkVuYWJsZWQ6IGVudignQ01EX0NMRUFOX0VOQUJMRUQnKS5ib29sZWFuLmRlZmF1bHQoZmFsc2UpLnJlcXVpcmVkLFxuXHRcdFx0bnBtRW5hYmxlZDogZW52KCdDTURfTlBNX0VOQUJMRUQnKS5ib29sZWFuLmRlZmF1bHQodHJ1ZSkucmVxdWlyZWQsXG5cdFx0XHQvLyBwckVuYWJsZWQ6IGVudignQ01EX1BSX0VOQUJMRUQnKS5ib29sZWFuLmRlZmF1bHQoZmFsc2UpLnJlcXVpcmVkLFxuXHRcdH0sXG5cblx0XHRnaXQ6IHtcblx0XHRcdGhvc3Q6IGVudignR0lUX0hPU1QnKS5zdHJpbmcuZGVmYXVsdCgnYml0YnVja2V0Lm9yZycpLnJlcXVpcmVkLFxuXHRcdFx0cGFzc3dvcmQ6IGVudignR0lUX1BBU1NXT1JEJykuc3RyaW5nLm9wdGlvbmFsLFxuXHRcdFx0cHJvamVjdFByZWZpeDogZW52KCdHSVRfUFJPSkVDVF9QUkVGSVgnKS5zdHJpbmcub3B0aW9uYWwsXG5cdFx0XHR0ZWFtOiBlbnYoJ0dJVF9URUFNJykuc3RyaW5nLm9wdGlvbmFsLFxuXHRcdFx0dXNlcm5hbWU6IGVudignR0lUX1VTRVJOQU1FJykuc3RyaW5nLm9wdGlvbmFsLFxuXHRcdH0sXG5cblx0XHRsb2dMZXZlbDogZW52KCdMT0dfTEVWRUwnKS5zdHJpbmcuZGVmYXVsdCgnZXJyb3InKS5yZXF1aXJlZCxcblxuXHRcdG5wbToge1xuXHRcdFx0Z2xvYmFsSWdub3JlUGFja2FnZXM6IGVudignTlBNX0dMT0JBTF9JR05PUkVfUEFDS0FHRVMnKS5qc29uPHN0cmluZ1tdPigpLmRlZmF1bHQoW10pLnJlcXVpcmVkLFxuXHRcdH0sXG5cblx0XHRwcm9qZWN0czogZW52KCdQUk9KRUNUUycpLmpzb248c3RyaW5nW10+KCkuZGVmYXVsdChbXSkucmVxdWlyZWQsXG5cdFx0cHVsbFJlcXVlc3RTa2lwOiBlbnYoJ1BVTExfUkVRVUVTVF9TS0lQJykuanNvbjxzdHJpbmdbXT4oKS5kZWZhdWx0KFtdKS5yZXF1aXJlZCxcblx0XHRyb290RGlyOiBlbnYoJ1JPT1RfRElSJykuc3RyaW5nLmRlZmF1bHQocHJvY2Vzcy5jd2QoKSkucmVxdWlyZWQsXG5cdH0gYXMgY29uc3Rcbn0pXG4iXX0=