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
        init: {
            type: 'boolean',
            alias: 'i',
        },
    },
    selectedCommandCount: (params) => {
        const miniOpts = minimist_options_1.default(params.options);
        const commands = exports.argsService.argToObject(params);
        return miniOpts.boolean.reduce((sum, cmd) => {
            return commands[cmd] ? ++sum : sum;
        }, 0);
    },
    argToObject: (params) => {
        const miniOpts = minimist_options_1.default(params.options);
        return minimist_1.default(params.args, miniOpts);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJncy1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvYXJncy1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdEQUErQjtBQUMvQix3RUFBMkQ7QUF5QjlDLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLGlCQUFpQixFQUFFO1FBQ2pCLGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLEdBQUc7U0FDWDtRQUNELEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLEdBQUc7U0FDWDtLQUNTO0lBQ1osaUJBQWlCLEVBQUU7UUFDakIsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO0tBQ1M7SUFDWixvQkFBb0IsRUFBRSxDQUFDLE1BQXlCLEVBQVUsRUFBRTtRQUMxRCxNQUFNLFFBQVEsR0FBRywwQkFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNoRCxNQUFNLFFBQVEsR0FBRyxtQkFBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoRCxPQUFRLFFBQVEsQ0FBQyxPQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN4RCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNwQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDUCxDQUFDO0lBQ0QsV0FBVyxFQUFFLENBQWdDLE1BQXlCLEVBQUssRUFBRTtRQUMzRSxNQUFNLFFBQVEsR0FBRywwQkFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNoRCxPQUFPLGtCQUFRLENBQUksTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaW5pbWlzdCBmcm9tICdtaW5pbWlzdCdcbmltcG9ydCBtaW5pbWlzdE9wdGlvbnMsIHsgT3B0aW9ucyB9IGZyb20gJ21pbmltaXN0LW9wdGlvbnMnXG5cbmV4cG9ydCB0eXBlIGFyZ3NTZXJ2aWNlUGFyYW1zID0ge1xuICBhcmdzOiBzdHJpbmdbXVxuICBvcHRpb25zOiBPcHRpb25zXG59XG5cbmV4cG9ydCB0eXBlIGFwcENvbW1hbmRzID0gbWluaW1pc3QuUGFyc2VkQXJncyAmIHtcbiAgJ2h0dHAtc2VydmVyJzogYm9vbGVhblxuICBIOiBib29sZWFuXG4gIHR1aTogYm9vbGVhblxuICBUOiBib29sZWFuXG59XG5leHBvcnQgdHlwZSBjbGlDb21tYW5kcyA9IG1pbmltaXN0LlBhcnNlZEFyZ3MgJiB7XG4gIGhlbHA6IGJvb2xlYW5cbiAgaDogYm9vbGVhblxuICB2ZXJzaW9uOiBib29sZWFuXG4gIHY6IGJvb2xlYW5cbiAgZ2l0OiBib29sZWFuXG4gIGc6IGJvb2xlYW5cbiAgbnBtOiBib29sZWFuXG4gIG46IGJvb2xlYW5cbiAgaW5pdDogYm9vbGVhblxuICBpOiBib29sZWFuXG59XG5leHBvcnQgY29uc3QgYXJnc1NlcnZpY2UgPSB7XG4gIGFwcENvbW1hbmRPcHRpb25zOiB7XG4gICAgJ2h0dHAtc2VydmVyJzoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgYWxpYXM6ICdIJyxcbiAgICB9LFxuICAgIHR1aToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgYWxpYXM6ICdUJyxcbiAgICB9LFxuICB9IGFzIE9wdGlvbnMsXG4gIGNsaUNvbW1hbmRPcHRpb25zOiB7XG4gICAgaGVscDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgYWxpYXM6ICdoJyxcbiAgICB9LFxuICAgIHZlcnNpb246IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGFsaWFzOiAndicsXG4gICAgfSxcbiAgICBnaXQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGFsaWFzOiAnZycsXG4gICAgfSxcbiAgICBucG06IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGFsaWFzOiAnbicsXG4gICAgfSxcbiAgICBpbml0OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBhbGlhczogJ2knLFxuICAgIH0sXG4gIH0gYXMgT3B0aW9ucyxcbiAgc2VsZWN0ZWRDb21tYW5kQ291bnQ6IChwYXJhbXM6IGFyZ3NTZXJ2aWNlUGFyYW1zKTogbnVtYmVyID0+IHtcbiAgICBjb25zdCBtaW5pT3B0cyA9IG1pbmltaXN0T3B0aW9ucyhwYXJhbXMub3B0aW9ucylcbiAgICBjb25zdCBjb21tYW5kcyA9IGFyZ3NTZXJ2aWNlLmFyZ1RvT2JqZWN0KHBhcmFtcylcbiAgICByZXR1cm4gKG1pbmlPcHRzLmJvb2xlYW4gYXMgc3RyaW5nW10pLnJlZHVjZSgoc3VtLCBjbWQpID0+IHtcbiAgICAgIHJldHVybiBjb21tYW5kc1tjbWRdID8gKytzdW0gOiBzdW1cbiAgICB9LCAwKVxuICB9LFxuICBhcmdUb09iamVjdDogPFQgZXh0ZW5kcyBtaW5pbWlzdC5QYXJzZWRBcmdzPihwYXJhbXM6IGFyZ3NTZXJ2aWNlUGFyYW1zKTogVCA9PiB7XG4gICAgY29uc3QgbWluaU9wdHMgPSBtaW5pbWlzdE9wdGlvbnMocGFyYW1zLm9wdGlvbnMpXG4gICAgcmV0dXJuIG1pbmltaXN0PFQ+KHBhcmFtcy5hcmdzLCBtaW5pT3B0cylcbiAgfSxcbn1cbiJdfQ==