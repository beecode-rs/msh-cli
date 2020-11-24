"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliService = void 0;
const chalk_1 = __importDefault(require("chalk"));
const minimist_options_1 = __importDefault(require("minimist-options"));
const help_service_1 = require("src/service/help-service");
const util_1 = require("src/util");
const constant_1 = require("src/util/constant");
const logger_1 = require("src/util/logger");
exports.cliService = {
    exitAfterCommandExecuted: false,
    printMessage: (messages) => {
        for (const [key, val] of Object.entries(messages)) {
            util_1.util.log(chalk_1.default.cyan(key));
            for (const msg of val.stdout.split('\n')) {
                util_1.util.log(msg);
            }
            for (const msg of val.stderr.split('\n')) {
                util_1.util.log(chalk_1.default.red(msg));
            }
        }
    },
    commands: minimist_options_1.default({
        help: {
            type: 'boolean',
            alias: 'h',
        },
        version: {
            type: 'boolean',
            alias: 'v',
        },
    }),
    options: minimist_options_1.default({
        arguments: 'string',
    }),
    print: (msg) => {
        // eslint-disable-next-line no-console
        console.log(msg);
    },
    hasOneCommandSelected: (argv) => {
        const cmdCount = exports.cliService.commandsSelected(argv);
        if (cmdCount > 1) {
            exports.cliService.print('ERROR !!! - CLI can run only one cmd at a time');
            return false;
        }
        return cmdCount === 1;
    },
    commandsSelected: (argv) => exports.cliService.commands.boolean.reduce((sum, cmd) => {
        return argv[cmd] ? ++sum : sum;
    }, 0),
    printVersion: () => logger_1.logger.info(`v${constant_1.constant.projectVersion}`),
    printHelp: () => exports.cliService.print(help_service_1.helpService.text()),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9jbGktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFFekIsd0VBQThDO0FBQzlDLDJEQUFzRDtBQUN0RCxtQ0FBK0I7QUFDL0IsZ0RBQTRDO0FBQzVDLDRDQUF3QztBQUUzQixRQUFBLFVBQVUsR0FBRztJQUN4Qix3QkFBd0IsRUFBRSxLQUFLO0lBQy9CLFlBQVksRUFBRSxDQUFDLFFBQWEsRUFBUSxFQUFFO1FBQ3BDLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pELFdBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ3pCLEtBQUssTUFBTSxHQUFHLElBQUssR0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pELFdBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDZDtZQUNELEtBQUssTUFBTSxHQUFHLElBQUssR0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pELFdBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2FBQ3pCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsUUFBUSxFQUFFLDBCQUFlLENBQUM7UUFDeEIsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYO0tBQ0YsQ0FBQztJQUNGLE9BQU8sRUFBRSwwQkFBZSxDQUFDO1FBQ3ZCLFNBQVMsRUFBRSxRQUFRO0tBQ3BCLENBQUM7SUFDRixLQUFLLEVBQUUsQ0FBQyxHQUFXLEVBQVEsRUFBRTtRQUMzQixzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBQ0QscUJBQXFCLEVBQUUsQ0FBQyxJQUFnQixFQUFXLEVBQUU7UUFDbkQsTUFBTSxRQUFRLEdBQUcsa0JBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNsRCxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDaEIsa0JBQVUsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQTtZQUNsRSxPQUFPLEtBQUssQ0FBQTtTQUNiO1FBQ0QsT0FBTyxRQUFRLEtBQUssQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxDQUFDLElBQWdCLEVBQVUsRUFBRSxDQUM1QyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUM1RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtJQUNoQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1AsWUFBWSxFQUFFLEdBQVMsRUFBRSxDQUFDLGVBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3BFLFNBQVMsRUFBRSxHQUFTLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLEtBQUssQ0FBQywwQkFBVyxDQUFDLElBQUksRUFBRSxDQUFDO0NBQzVELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgeyBQYXJzZWRBcmdzIH0gZnJvbSAnbWluaW1pc3QnXG5pbXBvcnQgbWluaW1pc3RPcHRpb25zIGZyb20gJ21pbmltaXN0LW9wdGlvbnMnXG5pbXBvcnQgeyBoZWxwU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL2hlbHAtc2VydmljZSdcbmltcG9ydCB7IHV0aWwgfSBmcm9tICdzcmMvdXRpbCdcbmltcG9ydCB7IGNvbnN0YW50IH0gZnJvbSAnc3JjL3V0aWwvY29uc3RhbnQnXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdzcmMvdXRpbC9sb2dnZXInXG5cbmV4cG9ydCBjb25zdCBjbGlTZXJ2aWNlID0ge1xuICBleGl0QWZ0ZXJDb21tYW5kRXhlY3V0ZWQ6IGZhbHNlLFxuICBwcmludE1lc3NhZ2U6IChtZXNzYWdlczogYW55KTogdm9pZCA9PiB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKG1lc3NhZ2VzKSkge1xuICAgICAgdXRpbC5sb2coY2hhbGsuY3lhbihrZXkpKVxuICAgICAgZm9yIChjb25zdCBtc2cgb2YgKHZhbCBhcyBhbnkpLnN0ZG91dC5zcGxpdCgnXFxuJykpIHtcbiAgICAgICAgdXRpbC5sb2cobXNnKVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBtc2cgb2YgKHZhbCBhcyBhbnkpLnN0ZGVyci5zcGxpdCgnXFxuJykpIHtcbiAgICAgICAgdXRpbC5sb2coY2hhbGsucmVkKG1zZykpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjb21tYW5kczogbWluaW1pc3RPcHRpb25zKHtcbiAgICBoZWxwOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBhbGlhczogJ2gnLFxuICAgIH0sXG4gICAgdmVyc2lvbjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgYWxpYXM6ICd2JyxcbiAgICB9LFxuICB9KSxcbiAgb3B0aW9uczogbWluaW1pc3RPcHRpb25zKHtcbiAgICBhcmd1bWVudHM6ICdzdHJpbmcnLFxuICB9KSxcbiAgcHJpbnQ6IChtc2c6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2cobXNnKVxuICB9LFxuICBoYXNPbmVDb21tYW5kU2VsZWN0ZWQ6IChhcmd2OiBQYXJzZWRBcmdzKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgY21kQ291bnQgPSBjbGlTZXJ2aWNlLmNvbW1hbmRzU2VsZWN0ZWQoYXJndilcbiAgICBpZiAoY21kQ291bnQgPiAxKSB7XG4gICAgICBjbGlTZXJ2aWNlLnByaW50KCdFUlJPUiAhISEgLSBDTEkgY2FuIHJ1biBvbmx5IG9uZSBjbWQgYXQgYSB0aW1lJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gY21kQ291bnQgPT09IDFcbiAgfSxcbiAgY29tbWFuZHNTZWxlY3RlZDogKGFyZ3Y6IFBhcnNlZEFyZ3MpOiBudW1iZXIgPT5cbiAgICAoY2xpU2VydmljZS5jb21tYW5kcy5ib29sZWFuIGFzIHN0cmluZ1tdKS5yZWR1Y2UoKHN1bSwgY21kKSA9PiB7XG4gICAgICByZXR1cm4gYXJndltjbWRdID8gKytzdW0gOiBzdW1cbiAgICB9LCAwKSxcbiAgcHJpbnRWZXJzaW9uOiAoKTogdm9pZCA9PiBsb2dnZXIuaW5mbyhgdiR7Y29uc3RhbnQucHJvamVjdFZlcnNpb259YCksXG4gIHByaW50SGVscDogKCk6IHZvaWQgPT4gY2xpU2VydmljZS5wcmludChoZWxwU2VydmljZS50ZXh0KCkpLFxufVxuIl19