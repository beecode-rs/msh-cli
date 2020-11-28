"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliService = void 0;
const chalk_1 = __importDefault(require("chalk"));
const minimist_options_1 = __importDefault(require("minimist-options"));
const dal_1 = require("src/dal");
const service_1 = require("src/service");
const util_1 = require("src/util");
exports.cliService = {
    exitAfterCommandExecuted: false,
    _commands: minimist_options_1.default({
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
    }),
    _options: minimist_options_1.default({
        arguments: 'string',
    }),
    _selectedCommandCount: (argv) => exports.cliService._commands.boolean.reduce((sum, cmd) => {
        return argv[cmd] ? ++sum : sum;
    }, 0),
    cliArguments: () => {
        return { ...exports.cliService._options, ...exports.cliService._commands };
    },
    commandIsSelected: (argv) => {
        const cmdCount = exports.cliService._selectedCommandCount(argv);
        if (cmdCount > 1)
            throw new Error('ERROR !!! - CLI can run only one cmd at a time');
        return cmdCount === 1;
    },
    printStdMessage: (...messageArgs) => {
        const messages = exports.cliService._joinResults(messageArgs);
        for (const [key, execResult] of Object.entries(messages)) {
            dal_1.cliDal.print(chalk_1.default.cyan(key));
            for (const msg of execResult.stdout.split('\n'))
                dal_1.cliDal.print(msg);
            for (const msg of execResult.stderr.split('\n'))
                dal_1.cliDal.print(chalk_1.default.red(msg));
        }
    },
    _joinResults: (results) => {
        return results.reduce((agg, cur) => {
            agg = Object.assign(agg, cur);
            return agg;
        }, {});
    },
    printError: (message) => {
        dal_1.cliDal.print(chalk_1.default.red(message));
    },
    printVersion: () => dal_1.cliDal.print(`v${util_1.constant.projectVersion}`),
    printHelp: () => dal_1.cliDal.print(service_1.helpService.text()),
    exec: dal_1.cliDal.exec,
    cd: dal_1.cliDal.cd,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9jbGktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFFekIsd0VBQThDO0FBQzlDLGlDQUE0QztBQUM1Qyx5Q0FBeUM7QUFDekMsbUNBQW1DO0FBTXRCLFFBQUEsVUFBVSxHQUFHO0lBQ3hCLHdCQUF3QixFQUFFLEtBQUs7SUFDL0IsU0FBUyxFQUFFLDBCQUFlLENBQUM7UUFDekIsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO0tBQ0YsQ0FBQztJQUNGLFFBQVEsRUFBRSwwQkFBZSxDQUFDO1FBQ3hCLFNBQVMsRUFBRSxRQUFRO0tBQ3BCLENBQUM7SUFDRixxQkFBcUIsRUFBRSxDQUFDLElBQWdCLEVBQVUsRUFBRSxDQUNqRCxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUM3RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtJQUNoQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1AsWUFBWSxFQUFFLEdBQWtCLEVBQUU7UUFDaEMsT0FBTyxFQUFFLEdBQUcsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxrQkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQzVELENBQUM7SUFDRCxpQkFBaUIsRUFBRSxDQUFDLElBQWdCLEVBQVcsRUFBRTtRQUMvQyxNQUFNLFFBQVEsR0FBRyxrQkFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZELElBQUksUUFBUSxHQUFHLENBQUM7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUE7UUFDbkYsT0FBTyxRQUFRLEtBQUssQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFDRCxlQUFlLEVBQUUsQ0FBQyxHQUFHLFdBQThCLEVBQVEsRUFBRTtRQUMzRCxNQUFNLFFBQVEsR0FBRyxrQkFBVSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNyRCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN4RCxZQUFNLENBQUMsS0FBSyxDQUFDLGVBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUM3QixLQUFLLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFBRSxZQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xFLEtBQUssTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUFFLFlBQU0sQ0FBQyxLQUFLLENBQUMsZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQzlFO0lBQ0gsQ0FBQztJQUNELFlBQVksRUFBRSxDQUFDLE9BQTBCLEVBQW1CLEVBQUU7UUFDNUQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2pDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUM3QixPQUFPLEdBQUcsQ0FBQTtRQUNaLENBQUMsRUFBRSxFQUFxQixDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUNELFVBQVUsRUFBRSxDQUFDLE9BQWUsRUFBUSxFQUFFO1FBQ3BDLFlBQU0sQ0FBQyxLQUFLLENBQUMsZUFBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFDRCxZQUFZLEVBQUUsR0FBUyxFQUFFLENBQUMsWUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLGVBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNyRSxTQUFTLEVBQUUsR0FBUyxFQUFFLENBQUMsWUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZELElBQUksRUFBRSxZQUFNLENBQUMsSUFBSTtJQUNqQixFQUFFLEVBQUUsWUFBTSxDQUFDLEVBQUU7Q0FDZCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IG1pbmltaXN0LCB7IFBhcnNlZEFyZ3MgfSBmcm9tICdtaW5pbWlzdCdcbmltcG9ydCBtaW5pbWlzdE9wdGlvbnMgZnJvbSAnbWluaW1pc3Qtb3B0aW9ucydcbmltcG9ydCB7IEV4ZWNSZXN1bHQsIGNsaURhbCB9IGZyb20gJ3NyYy9kYWwnXG5pbXBvcnQgeyBoZWxwU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlJ1xuaW1wb3J0IHsgY29uc3RhbnQgfSBmcm9tICdzcmMvdXRpbCdcblxuZXhwb3J0IHR5cGUgUHJpbnRTdGRNZXNzYWdlID0ge1xuICBba2V5OiBzdHJpbmddOiBFeGVjUmVzdWx0XG59XG5cbmV4cG9ydCBjb25zdCBjbGlTZXJ2aWNlID0ge1xuICBleGl0QWZ0ZXJDb21tYW5kRXhlY3V0ZWQ6IGZhbHNlLFxuICBfY29tbWFuZHM6IG1pbmltaXN0T3B0aW9ucyh7XG4gICAgaGVscDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgYWxpYXM6ICdoJyxcbiAgICB9LFxuICAgIHZlcnNpb246IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGFsaWFzOiAndicsXG4gICAgfSxcbiAgICBnaXQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGFsaWFzOiAnZycsXG4gICAgfSxcbiAgICBucG06IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGFsaWFzOiAnbicsXG4gICAgfSxcbiAgfSksXG4gIF9vcHRpb25zOiBtaW5pbWlzdE9wdGlvbnMoe1xuICAgIGFyZ3VtZW50czogJ3N0cmluZycsXG4gIH0pLFxuICBfc2VsZWN0ZWRDb21tYW5kQ291bnQ6IChhcmd2OiBQYXJzZWRBcmdzKTogbnVtYmVyID0+XG4gICAgKGNsaVNlcnZpY2UuX2NvbW1hbmRzLmJvb2xlYW4gYXMgc3RyaW5nW10pLnJlZHVjZSgoc3VtLCBjbWQpID0+IHtcbiAgICAgIHJldHVybiBhcmd2W2NtZF0gPyArK3N1bSA6IHN1bVxuICAgIH0sIDApLFxuICBjbGlBcmd1bWVudHM6ICgpOiBtaW5pbWlzdC5PcHRzID0+IHtcbiAgICByZXR1cm4geyAuLi5jbGlTZXJ2aWNlLl9vcHRpb25zLCAuLi5jbGlTZXJ2aWNlLl9jb21tYW5kcyB9XG4gIH0sXG4gIGNvbW1hbmRJc1NlbGVjdGVkOiAoYXJndjogUGFyc2VkQXJncyk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGNtZENvdW50ID0gY2xpU2VydmljZS5fc2VsZWN0ZWRDb21tYW5kQ291bnQoYXJndilcbiAgICBpZiAoY21kQ291bnQgPiAxKSB0aHJvdyBuZXcgRXJyb3IoJ0VSUk9SICEhISAtIENMSSBjYW4gcnVuIG9ubHkgb25lIGNtZCBhdCBhIHRpbWUnKVxuICAgIHJldHVybiBjbWRDb3VudCA9PT0gMVxuICB9LFxuICBwcmludFN0ZE1lc3NhZ2U6ICguLi5tZXNzYWdlQXJnczogUHJpbnRTdGRNZXNzYWdlW10pOiB2b2lkID0+IHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGNsaVNlcnZpY2UuX2pvaW5SZXN1bHRzKG1lc3NhZ2VBcmdzKVxuICAgIGZvciAoY29uc3QgW2tleSwgZXhlY1Jlc3VsdF0gb2YgT2JqZWN0LmVudHJpZXMobWVzc2FnZXMpKSB7XG4gICAgICBjbGlEYWwucHJpbnQoY2hhbGsuY3lhbihrZXkpKVxuICAgICAgZm9yIChjb25zdCBtc2cgb2YgZXhlY1Jlc3VsdC5zdGRvdXQuc3BsaXQoJ1xcbicpKSBjbGlEYWwucHJpbnQobXNnKVxuICAgICAgZm9yIChjb25zdCBtc2cgb2YgZXhlY1Jlc3VsdC5zdGRlcnIuc3BsaXQoJ1xcbicpKSBjbGlEYWwucHJpbnQoY2hhbGsucmVkKG1zZykpXG4gICAgfVxuICB9LFxuICBfam9pblJlc3VsdHM6IChyZXN1bHRzOiBQcmludFN0ZE1lc3NhZ2VbXSk6IFByaW50U3RkTWVzc2FnZSA9PiB7XG4gICAgcmV0dXJuIHJlc3VsdHMucmVkdWNlKChhZ2csIGN1cikgPT4ge1xuICAgICAgYWdnID0gT2JqZWN0LmFzc2lnbihhZ2csIGN1cilcbiAgICAgIHJldHVybiBhZ2dcbiAgICB9LCB7fSBhcyBQcmludFN0ZE1lc3NhZ2UpXG4gIH0sXG4gIHByaW50RXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjbGlEYWwucHJpbnQoY2hhbGsucmVkKG1lc3NhZ2UpKVxuICB9LFxuICBwcmludFZlcnNpb246ICgpOiB2b2lkID0+IGNsaURhbC5wcmludChgdiR7Y29uc3RhbnQucHJvamVjdFZlcnNpb259YCksXG4gIHByaW50SGVscDogKCk6IHZvaWQgPT4gY2xpRGFsLnByaW50KGhlbHBTZXJ2aWNlLnRleHQoKSksXG4gIGV4ZWM6IGNsaURhbC5leGVjLFxuICBjZDogY2xpRGFsLmNkLFxufVxuIl19