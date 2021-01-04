"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.argsService = void 0;
const minimist_1 = __importDefault(require("minimist"));
const minimist_options_1 = __importDefault(require("minimist-options"));
exports.argsService = {
    appCommandOptions: {
        'http-server': {
            type: 'boolean',
            alias: 'H',
        },
        tui: {
            type: 'boolean',
            alias: 'T',
        },
    },
    cliCommandOptions: {
        help: {
            type: 'boolean',
            alias: 'h',
        },
        version: {
            type: 'boolean',
            alias: 'v',
        },
        git: {
            type: 'boolean',
            alias: 'g',
        },
        npm: {
            type: 'boolean',
            alias: 'n',
        },
    },
    selectedCommandCount: (params) => {
        const miniOpts = minimist_options_1.default(params.options);
        const commands = exports.argsService.argToObject(params);
        return miniOpts.boolean.reduce((sum, cmd) => {
            return commands[cmd] ? ++sum : sum;
        }, 0);
    },
    oneCommandIsSelected: (params) => {
        const cmdCount = exports.argsService.selectedCommandCount(params);
        return cmdCount === 1;
    },
    argToObject: (params) => {
        const miniOpts = minimist_options_1.default(params.options);
        return minimist_1.default(params.args, miniOpts);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJncy1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvYXJncy1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdEQUErQjtBQUMvQix3RUFBMkQ7QUF1QjlDLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLGlCQUFpQixFQUFFO1FBQ2pCLGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLEdBQUc7U0FDWDtRQUNELEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLEdBQUc7U0FDWDtLQUNTO0lBQ1osaUJBQWlCLEVBQUU7UUFDakIsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO0tBQ1M7SUFDWixvQkFBb0IsRUFBRSxDQUFDLE1BQXlCLEVBQVUsRUFBRTtRQUMxRCxNQUFNLFFBQVEsR0FBRywwQkFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNoRCxNQUFNLFFBQVEsR0FBRyxtQkFBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoRCxPQUFRLFFBQVEsQ0FBQyxPQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN4RCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNwQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDUCxDQUFDO0lBQ0Qsb0JBQW9CLEVBQUUsQ0FBQyxNQUF5QixFQUFXLEVBQUU7UUFDM0QsTUFBTSxRQUFRLEdBQUcsbUJBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN6RCxPQUFPLFFBQVEsS0FBSyxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUNELFdBQVcsRUFBRSxDQUFnQyxNQUF5QixFQUFLLEVBQUU7UUFDM0UsTUFBTSxRQUFRLEdBQUcsMEJBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDaEQsT0FBTyxrQkFBUSxDQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDM0MsQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWluaW1pc3QgZnJvbSAnbWluaW1pc3QnXG5pbXBvcnQgbWluaW1pc3RPcHRpb25zLCB7IE9wdGlvbnMgfSBmcm9tICdtaW5pbWlzdC1vcHRpb25zJ1xuXG5leHBvcnQgdHlwZSBhcmdzU2VydmljZVBhcmFtcyA9IHtcbiAgYXJnczogc3RyaW5nW11cbiAgb3B0aW9uczogT3B0aW9uc1xufVxuXG5leHBvcnQgdHlwZSBhcHBDb21tYW5kcyA9IG1pbmltaXN0LlBhcnNlZEFyZ3MgJiB7XG4gICdodHRwLXNlcnZlcic6IGJvb2xlYW5cbiAgSDogYm9vbGVhblxuICB0dWk6IGJvb2xlYW5cbiAgVDogYm9vbGVhblxufVxuZXhwb3J0IHR5cGUgY2xpQ29tbWFuZHMgPSBtaW5pbWlzdC5QYXJzZWRBcmdzICYge1xuICBoZWxwOiBib29sZWFuXG4gIGg6IGJvb2xlYW5cbiAgdmVyc2lvbjogYm9vbGVhblxuICB2OiBib29sZWFuXG4gIGdpdDogYm9vbGVhblxuICBnOiBib29sZWFuXG4gIG5wbTogYm9vbGVhblxuICBuOiBib29sZWFuXG59XG5leHBvcnQgY29uc3QgYXJnc1NlcnZpY2UgPSB7XG4gIGFwcENvbW1hbmRPcHRpb25zOiB7XG4gICAgJ2h0dHAtc2VydmVyJzoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgYWxpYXM6ICdIJyxcbiAgICB9LFxuICAgIHR1aToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgYWxpYXM6ICdUJyxcbiAgICB9LFxuICB9IGFzIE9wdGlvbnMsXG4gIGNsaUNvbW1hbmRPcHRpb25zOiB7XG4gICAgaGVscDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgYWxpYXM6ICdoJyxcbiAgICB9LFxuICAgIHZlcnNpb246IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGFsaWFzOiAndicsXG4gICAgfSxcbiAgICBnaXQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGFsaWFzOiAnZycsXG4gICAgfSxcbiAgICBucG06IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGFsaWFzOiAnbicsXG4gICAgfSxcbiAgfSBhcyBPcHRpb25zLFxuICBzZWxlY3RlZENvbW1hbmRDb3VudDogKHBhcmFtczogYXJnc1NlcnZpY2VQYXJhbXMpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IG1pbmlPcHRzID0gbWluaW1pc3RPcHRpb25zKHBhcmFtcy5vcHRpb25zKVxuICAgIGNvbnN0IGNvbW1hbmRzID0gYXJnc1NlcnZpY2UuYXJnVG9PYmplY3QocGFyYW1zKVxuICAgIHJldHVybiAobWluaU9wdHMuYm9vbGVhbiBhcyBzdHJpbmdbXSkucmVkdWNlKChzdW0sIGNtZCkgPT4ge1xuICAgICAgcmV0dXJuIGNvbW1hbmRzW2NtZF0gPyArK3N1bSA6IHN1bVxuICAgIH0sIDApXG4gIH0sXG4gIG9uZUNvbW1hbmRJc1NlbGVjdGVkOiAocGFyYW1zOiBhcmdzU2VydmljZVBhcmFtcyk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGNtZENvdW50ID0gYXJnc1NlcnZpY2Uuc2VsZWN0ZWRDb21tYW5kQ291bnQocGFyYW1zKVxuICAgIHJldHVybiBjbWRDb3VudCA9PT0gMVxuICB9LFxuICBhcmdUb09iamVjdDogPFQgZXh0ZW5kcyBtaW5pbWlzdC5QYXJzZWRBcmdzPihwYXJhbXM6IGFyZ3NTZXJ2aWNlUGFyYW1zKTogVCA9PiB7XG4gICAgY29uc3QgbWluaU9wdHMgPSBtaW5pbWlzdE9wdGlvbnMocGFyYW1zLm9wdGlvbnMpXG4gICAgcmV0dXJuIG1pbmltaXN0PFQ+KHBhcmFtcy5hcmdzLCBtaW5pT3B0cylcbiAgfSxcbn1cbiJdfQ==