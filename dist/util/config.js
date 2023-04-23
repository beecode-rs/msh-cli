"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const msh_env_1 = require("@beecode/msh-env");
const logger_1 = require("@beecode/msh-env/lib/util/logger");
const msh_logger_1 = require("@beecode/msh-logger");
const console_1 = require("@beecode/msh-logger/lib/logger-strategy/console");
const simple_1 = require("@beecode/msh-logger/lib/logger-strategy/console/log-strategy/simple");
const pattern_1 = require("@beecode/msh-util/lib/singleton/pattern");
const dotenv_1 = __importDefault(require("dotenv"));
(0, logger_1.setEnvLogger)(new console_1.LoggerStrategyConsole({ consoleLogStrategy: new simple_1.ConsoleLogStrategySimple(), logLevel: msh_logger_1.LogLevel.INFO }));
const env = (0, msh_env_1.MshEnv)();
dotenv_1.default.config({ path: './.msh' });
dotenv_1.default.config({ path: './.msh-user' });
exports.config = (0, pattern_1.singletonPattern)(() => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhDQUF5QztBQUN6Qyw2REFBK0Q7QUFDL0Qsb0RBQThDO0FBQzlDLDZFQUF1RjtBQUN2RixnR0FBOEc7QUFDOUcscUVBQTBFO0FBQzFFLG9EQUEyQjtBQUUzQixJQUFBLHFCQUFZLEVBQUMsSUFBSSwrQkFBcUIsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksaUNBQXdCLEVBQUUsRUFBRSxRQUFRLEVBQUUscUJBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFFeEgsTUFBTSxHQUFHLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUE7QUFDcEIsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtBQUNqQyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFBO0FBRXpCLFFBQUEsTUFBTSxHQUFHLElBQUEsMEJBQWdCLEVBQUMsR0FBRyxFQUFFO0lBQzNDLE9BQU87UUFDTixxRkFBcUY7UUFDckYsR0FBRyxFQUFFO1lBQ0osVUFBVSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUTtZQUNqRSwwRUFBMEU7WUFDMUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUTtZQUNqRSxvRUFBb0U7U0FDcEU7UUFFRCxHQUFHLEVBQUU7WUFDSixJQUFJLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUTtZQUM5RCxRQUFRLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzdDLGFBQWEsRUFBRSxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUN4RCxJQUFJLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQ3JDLFFBQVEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7U0FDN0M7UUFFRCxRQUFRLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUTtRQUUzRCxHQUFHLEVBQUU7WUFDSixvQkFBb0IsRUFBRSxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLEVBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUTtTQUM3RjtRQUVELFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVE7UUFDL0QsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksRUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRO1FBQy9FLE9BQU8sRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRO0tBQ3RELENBQUE7QUFDWCxDQUFDLENBQUMsQ0FBQSJ9