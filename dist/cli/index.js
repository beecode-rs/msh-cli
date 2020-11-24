"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const alias_1 = require("src/cli/alias");
const help_1 = require("src/cli/help");
const init_1 = require("src/cli/init");
const Clean = require("src/exec/Clean");
const Git = require("src/exec/Git");
const NPM = require("src/exec/NPM");
const PR = require("src/exec/PR");
const cli_service_1 = require("src/service/cli-service");
const util_1 = require("src/util");
const constant_1 = require("src/util/constant");
const cli = {
    hasArguments: (argv) => {
        let hasArgs = false;
        if (Object.keys(argv).length > 1)
            hasArgs = true;
        if (argv._.length > 0)
            hasArgs = true;
        if (cli.requestRunningMultipleCommands(argv)) {
            util_1.util.log('ERROR !!! - CLI can run only one cmd at a time');
            process.exit();
        }
        if (hasArgs)
            cli_service_1.cliService.exitAfterCommandExecuted = true; // TODO use memory dao/service
        return hasArgs;
    },
    run: async (argv) => {
        if (argv.help)
            help_1.help.printHelp();
        else if (argv.version)
            util_1.util.log(`v${constant_1.constant.projectVersion}`);
        else if (argv.init)
            init_1.init.create();
        else if (argv.clean)
            await new Clean().run(argv.clean);
        else if (argv.npm)
            await new NPM().run('global');
        else if (argv.pr)
            await new PR().run('createMergePR');
        else if (argv.git)
            await new Git().run(argv.git);
        else
            util_1.util.log('ERROR !!! - Command not found');
    },
    requestRunningMultipleCommands: (argv) => Object.values(alias_1.alias).reduce((sum, cmd) => (argv[cmd] ? ++sum : sum), 0) > 1,
    allowPrintConfigForCmd: (argv) => !argv.help && !argv.init && !argv.version,
};
exports.cli = cli;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFxQztBQUNyQyx1Q0FBbUM7QUFDbkMsdUNBQW1DO0FBQ25DLHdDQUF3QztBQUN4QyxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLGtDQUFrQztBQUNsQyx5REFBb0Q7QUFDcEQsbUNBQStCO0FBQy9CLGdEQUE0QztBQUU1QyxNQUFNLEdBQUcsR0FBRztJQUNWLFlBQVksRUFBRSxDQUFDLElBQUksRUFBVyxFQUFFO1FBQzlCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ2hELElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFFckMsSUFBSSxHQUFHLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUMsV0FBSSxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFBO1lBQzFELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUNmO1FBRUQsSUFBSSxPQUFPO1lBQUUsd0JBQVUsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUEsQ0FBQyw4QkFBOEI7UUFDdEYsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUNELEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFpQixFQUFFO1FBQ2pDLElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7YUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLFdBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxtQkFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUE7YUFDekQsSUFBSSxJQUFJLENBQUMsSUFBSTtZQUFFLFdBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTthQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDakQsSUFBSSxJQUFJLENBQUMsR0FBRztZQUFFLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7YUFDM0MsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUFFLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7YUFDaEQsSUFBSSxJQUFJLENBQUMsR0FBRztZQUFFLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBOztZQUMzQyxXQUFJLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUNELDhCQUE4QixFQUFFLENBQUMsSUFBSSxFQUFXLEVBQUUsQ0FDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDN0Usc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLEVBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztDQUNyRixDQUFBO0FBRVEsa0JBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGlhcyB9IGZyb20gJ3NyYy9jbGkvYWxpYXMnXG5pbXBvcnQgeyBoZWxwIH0gZnJvbSAnc3JjL2NsaS9oZWxwJ1xuaW1wb3J0IHsgaW5pdCB9IGZyb20gJ3NyYy9jbGkvaW5pdCdcbmltcG9ydCBDbGVhbiA9IHJlcXVpcmUoJ3NyYy9leGVjL0NsZWFuJylcbmltcG9ydCBHaXQgPSByZXF1aXJlKCdzcmMvZXhlYy9HaXQnKVxuaW1wb3J0IE5QTSA9IHJlcXVpcmUoJ3NyYy9leGVjL05QTScpXG5pbXBvcnQgUFIgPSByZXF1aXJlKCdzcmMvZXhlYy9QUicpXG5pbXBvcnQgeyBjbGlTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UvY2xpLXNlcnZpY2UnXG5pbXBvcnQgeyB1dGlsIH0gZnJvbSAnc3JjL3V0aWwnXG5pbXBvcnQgeyBjb25zdGFudCB9IGZyb20gJ3NyYy91dGlsL2NvbnN0YW50J1xuXG5jb25zdCBjbGkgPSB7XG4gIGhhc0FyZ3VtZW50czogKGFyZ3YpOiBib29sZWFuID0+IHtcbiAgICBsZXQgaGFzQXJncyA9IGZhbHNlXG4gICAgaWYgKE9iamVjdC5rZXlzKGFyZ3YpLmxlbmd0aCA+IDEpIGhhc0FyZ3MgPSB0cnVlXG4gICAgaWYgKGFyZ3YuXy5sZW5ndGggPiAwKSBoYXNBcmdzID0gdHJ1ZVxuXG4gICAgaWYgKGNsaS5yZXF1ZXN0UnVubmluZ011bHRpcGxlQ29tbWFuZHMoYXJndikpIHtcbiAgICAgIHV0aWwubG9nKCdFUlJPUiAhISEgLSBDTEkgY2FuIHJ1biBvbmx5IG9uZSBjbWQgYXQgYSB0aW1lJylcbiAgICAgIHByb2Nlc3MuZXhpdCgpXG4gICAgfVxuXG4gICAgaWYgKGhhc0FyZ3MpIGNsaVNlcnZpY2UuZXhpdEFmdGVyQ29tbWFuZEV4ZWN1dGVkID0gdHJ1ZSAvLyBUT0RPIHVzZSBtZW1vcnkgZGFvL3NlcnZpY2VcbiAgICByZXR1cm4gaGFzQXJnc1xuICB9LFxuICBydW46IGFzeW5jIChhcmd2KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKGFyZ3YuaGVscCkgaGVscC5wcmludEhlbHAoKVxuICAgIGVsc2UgaWYgKGFyZ3YudmVyc2lvbikgdXRpbC5sb2coYHYke2NvbnN0YW50LnByb2plY3RWZXJzaW9ufWApXG4gICAgZWxzZSBpZiAoYXJndi5pbml0KSBpbml0LmNyZWF0ZSgpXG4gICAgZWxzZSBpZiAoYXJndi5jbGVhbikgYXdhaXQgbmV3IENsZWFuKCkucnVuKGFyZ3YuY2xlYW4pXG4gICAgZWxzZSBpZiAoYXJndi5ucG0pIGF3YWl0IG5ldyBOUE0oKS5ydW4oJ2dsb2JhbCcpXG4gICAgZWxzZSBpZiAoYXJndi5wcikgYXdhaXQgbmV3IFBSKCkucnVuKCdjcmVhdGVNZXJnZVBSJylcbiAgICBlbHNlIGlmIChhcmd2LmdpdCkgYXdhaXQgbmV3IEdpdCgpLnJ1bihhcmd2LmdpdClcbiAgICBlbHNlIHV0aWwubG9nKCdFUlJPUiAhISEgLSBDb21tYW5kIG5vdCBmb3VuZCcpXG4gIH0sXG4gIHJlcXVlc3RSdW5uaW5nTXVsdGlwbGVDb21tYW5kczogKGFyZ3YpOiBib29sZWFuID0+XG4gICAgT2JqZWN0LnZhbHVlcyhhbGlhcykucmVkdWNlKChzdW0sIGNtZCkgPT4gKGFyZ3ZbY21kXSA/ICsrc3VtIDogc3VtKSwgMCkgPiAxLFxuICBhbGxvd1ByaW50Q29uZmlnRm9yQ21kOiAoYXJndik6IGJvb2xlYW4gPT4gIWFyZ3YuaGVscCAmJiAhYXJndi5pbml0ICYmICFhcmd2LnZlcnNpb24sXG59XG5cbmV4cG9ydCB7IGNsaSB9XG4iXX0=