"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const msh_node_env_1 = __importStar(require("@beecode/msh-node-env"));
const dotenv_1 = __importDefault(require("dotenv"));
const env = msh_node_env_1.default({ loggerStrategy: new msh_node_env_1.logger.ConsoleLogger(msh_node_env_1.logger.LogLevel.INFO) });
dotenv_1.default.config({ path: './.msh' });
dotenv_1.default.config({ path: './.msh-user' });
exports.config = Object.freeze({
    rootDir: env('ROOT_DIR').string.default(process.cwd()).required,
    projects: env('PROJECTS').json().default([]).required,
    pullRequestSkip: env('PULL_REQUEST_SKIP').json().default([]).required,
    git: {
        team: env('GIT_TEAM').string.optional,
        projectPrefix: env('GIT_PROJECT_PREFIX').string.optional,
        host: env('GIT_HOST').string.default('bitbucket.org').required,
        username: env('GIT_USERNAME').string.optional,
        password: env('GIT_PASSWORD').string.optional,
    },
    dockerBaseImages: env('DOCKER_BASE_IMAGES').json().default([]).optional,
    cmd: {
        gitEnabled: env('CMD_GIT_ENABLED').boolean.default(true).required,
        cleanEnabled: env('CMD_CLEAN_ENABLED').boolean.default(true).required,
        npmEnabled: env('CMD_NPM_ENABLED').boolean.default(true).required,
        prEnabled: env('CMD_PR_ENABLED').boolean.default(true).required,
    },
    logLevel: env('LOG_LEVEL').string.default('debug').required,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBMEQ7QUFDMUQsb0RBQTJCO0FBRTNCLE1BQU0sR0FBRyxHQUFHLHNCQUFVLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxxQkFBTSxDQUFDLGFBQWEsQ0FBQyxxQkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDMUYsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtBQUNqQyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFBO0FBRXpCLFFBQUEsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVE7SUFDL0QsUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBb0I7SUFDakUsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRO0lBQ3JFLEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDckMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQ3hELElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRO1FBQzlELFFBQVEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDN0MsUUFBUSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtLQUM5QztJQUNELGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRO0lBQ3ZFLEdBQUcsRUFBRTtRQUNILFVBQVUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVE7UUFDakUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUTtRQUNyRSxVQUFVLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRO1FBQ2pFLFNBQVMsRUFBRSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVE7S0FDaEU7SUFDRCxRQUFRLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUTtDQUM1RCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNoTm9kZUVudiwgeyBsb2dnZXIgfSBmcm9tICdAYmVlY29kZS9tc2gtbm9kZS1lbnYnXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcblxuY29uc3QgZW52ID0gTXNoTm9kZUVudih7IGxvZ2dlclN0cmF0ZWd5OiBuZXcgbG9nZ2VyLkNvbnNvbGVMb2dnZXIobG9nZ2VyLkxvZ0xldmVsLklORk8pIH0pXG5kb3RlbnYuY29uZmlnKHsgcGF0aDogJy4vLm1zaCcgfSlcbmRvdGVudi5jb25maWcoeyBwYXRoOiAnLi8ubXNoLXVzZXInIH0pXG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBPYmplY3QuZnJlZXplKHtcbiAgcm9vdERpcjogZW52KCdST09UX0RJUicpLnN0cmluZy5kZWZhdWx0KHByb2Nlc3MuY3dkKCkpLnJlcXVpcmVkLFxuICBwcm9qZWN0czogZW52KCdQUk9KRUNUUycpLmpzb24oKS5kZWZhdWx0KFtdKS5yZXF1aXJlZCBhcyBzdHJpbmdbXSxcbiAgcHVsbFJlcXVlc3RTa2lwOiBlbnYoJ1BVTExfUkVRVUVTVF9TS0lQJykuanNvbigpLmRlZmF1bHQoW10pLnJlcXVpcmVkLFxuICBnaXQ6IHtcbiAgICB0ZWFtOiBlbnYoJ0dJVF9URUFNJykuc3RyaW5nLm9wdGlvbmFsLFxuICAgIHByb2plY3RQcmVmaXg6IGVudignR0lUX1BST0pFQ1RfUFJFRklYJykuc3RyaW5nLm9wdGlvbmFsLFxuICAgIGhvc3Q6IGVudignR0lUX0hPU1QnKS5zdHJpbmcuZGVmYXVsdCgnYml0YnVja2V0Lm9yZycpLnJlcXVpcmVkLFxuICAgIHVzZXJuYW1lOiBlbnYoJ0dJVF9VU0VSTkFNRScpLnN0cmluZy5vcHRpb25hbCxcbiAgICBwYXNzd29yZDogZW52KCdHSVRfUEFTU1dPUkQnKS5zdHJpbmcub3B0aW9uYWwsXG4gIH0sXG4gIGRvY2tlckJhc2VJbWFnZXM6IGVudignRE9DS0VSX0JBU0VfSU1BR0VTJykuanNvbigpLmRlZmF1bHQoW10pLm9wdGlvbmFsLFxuICBjbWQ6IHtcbiAgICBnaXRFbmFibGVkOiBlbnYoJ0NNRF9HSVRfRU5BQkxFRCcpLmJvb2xlYW4uZGVmYXVsdCh0cnVlKS5yZXF1aXJlZCxcbiAgICBjbGVhbkVuYWJsZWQ6IGVudignQ01EX0NMRUFOX0VOQUJMRUQnKS5ib29sZWFuLmRlZmF1bHQodHJ1ZSkucmVxdWlyZWQsXG4gICAgbnBtRW5hYmxlZDogZW52KCdDTURfTlBNX0VOQUJMRUQnKS5ib29sZWFuLmRlZmF1bHQodHJ1ZSkucmVxdWlyZWQsXG4gICAgcHJFbmFibGVkOiBlbnYoJ0NNRF9QUl9FTkFCTEVEJykuYm9vbGVhbi5kZWZhdWx0KHRydWUpLnJlcXVpcmVkLFxuICB9LFxuICBsb2dMZXZlbDogZW52KCdMT0dfTEVWRUwnKS5zdHJpbmcuZGVmYXVsdCgnZGVidWcnKS5yZXF1aXJlZCxcbn0pXG4iXX0=