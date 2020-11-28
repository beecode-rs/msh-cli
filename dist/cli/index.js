"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const alias_1 = require("src/cli/alias");
// import { help } from 'src/cli/help'
// import { init } from 'src/cli/init'
// import Clean = require('src/exec/Clean')
// import Git = require('src/exec/Git')
// import NPM = require('src/exec/NPM')
// import PR = require('src/exec/PR')
const cli_service_1 = require("src/service/cli-service");
// import { util } from 'src/util'
// import { constant } from 'src/util/constant'
const cli = {
    hasArguments: (argv) => {
        let hasArgs = false;
        if (Object.keys(argv).length > 1)
            hasArgs = true;
        if (argv._.length > 0)
            hasArgs = true;
        if (cli.requestRunningMultipleCommands(argv)) {
            // util.log('ERROR !!! - CLI can run only one cmd at a time')
            process.exit();
        }
        if (hasArgs)
            cli_service_1.cliService.exitAfterCommandExecuted = true; // TODO use memory dao/service
        return hasArgs;
    },
    run: async (argv) => {
        // if (argv.help) help.printHelp()
        // else if (argv.version) util.log(`v${constant.projectVersion}`)
        // else if (argv.init) init.create()
        // else if (argv.clean) await new Clean().run(argv.clean)
        // else if (argv.npm) await new NPM().run('global')
        // else if (argv.pr) await new PR().run('createMergePR')
        // else if (argv.git) await new Git().run(argv.git)
        // else util.log('ERROR !!! - Command not found')
    },
    requestRunningMultipleCommands: (argv) => Object.values(alias_1.alias).reduce((sum, cmd) => (argv[cmd] ? ++sum : sum), 0) > 1,
    allowPrintConfigForCmd: (argv) => !argv.help && !argv.init && !argv.version,
};
exports.cli = cli;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLDJDQUEyQztBQUMzQyx1Q0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNyQyx5REFBb0Q7QUFDcEQsa0NBQWtDO0FBQ2xDLCtDQUErQztBQUUvQyxNQUFNLEdBQUcsR0FBRztJQUNWLFlBQVksRUFBRSxDQUFDLElBQUksRUFBVyxFQUFFO1FBQzlCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ2hELElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFFckMsSUFBSSxHQUFHLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUMsNkRBQTZEO1lBQzdELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUNmO1FBRUQsSUFBSSxPQUFPO1lBQUUsd0JBQVUsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUEsQ0FBQyw4QkFBOEI7UUFDdEYsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUNELEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFpQixFQUFFO1FBQ2pDLGtDQUFrQztRQUNsQyxpRUFBaUU7UUFDakUsb0NBQW9DO1FBQ3BDLHlEQUF5RDtRQUN6RCxtREFBbUQ7UUFDbkQsd0RBQXdEO1FBQ3hELG1EQUFtRDtRQUNuRCxpREFBaUQ7SUFDbkQsQ0FBQztJQUNELDhCQUE4QixFQUFFLENBQUMsSUFBSSxFQUFXLEVBQUUsQ0FDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDN0Usc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLEVBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztDQUNyRixDQUFBO0FBRVEsa0JBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGlhcyB9IGZyb20gJ3NyYy9jbGkvYWxpYXMnXG4vLyBpbXBvcnQgeyBoZWxwIH0gZnJvbSAnc3JjL2NsaS9oZWxwJ1xuLy8gaW1wb3J0IHsgaW5pdCB9IGZyb20gJ3NyYy9jbGkvaW5pdCdcbi8vIGltcG9ydCBDbGVhbiA9IHJlcXVpcmUoJ3NyYy9leGVjL0NsZWFuJylcbi8vIGltcG9ydCBHaXQgPSByZXF1aXJlKCdzcmMvZXhlYy9HaXQnKVxuLy8gaW1wb3J0IE5QTSA9IHJlcXVpcmUoJ3NyYy9leGVjL05QTScpXG4vLyBpbXBvcnQgUFIgPSByZXF1aXJlKCdzcmMvZXhlYy9QUicpXG5pbXBvcnQgeyBjbGlTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UvY2xpLXNlcnZpY2UnXG4vLyBpbXBvcnQgeyB1dGlsIH0gZnJvbSAnc3JjL3V0aWwnXG4vLyBpbXBvcnQgeyBjb25zdGFudCB9IGZyb20gJ3NyYy91dGlsL2NvbnN0YW50J1xuXG5jb25zdCBjbGkgPSB7XG4gIGhhc0FyZ3VtZW50czogKGFyZ3YpOiBib29sZWFuID0+IHtcbiAgICBsZXQgaGFzQXJncyA9IGZhbHNlXG4gICAgaWYgKE9iamVjdC5rZXlzKGFyZ3YpLmxlbmd0aCA+IDEpIGhhc0FyZ3MgPSB0cnVlXG4gICAgaWYgKGFyZ3YuXy5sZW5ndGggPiAwKSBoYXNBcmdzID0gdHJ1ZVxuXG4gICAgaWYgKGNsaS5yZXF1ZXN0UnVubmluZ011bHRpcGxlQ29tbWFuZHMoYXJndikpIHtcbiAgICAgIC8vIHV0aWwubG9nKCdFUlJPUiAhISEgLSBDTEkgY2FuIHJ1biBvbmx5IG9uZSBjbWQgYXQgYSB0aW1lJylcbiAgICAgIHByb2Nlc3MuZXhpdCgpXG4gICAgfVxuXG4gICAgaWYgKGhhc0FyZ3MpIGNsaVNlcnZpY2UuZXhpdEFmdGVyQ29tbWFuZEV4ZWN1dGVkID0gdHJ1ZSAvLyBUT0RPIHVzZSBtZW1vcnkgZGFvL3NlcnZpY2VcbiAgICByZXR1cm4gaGFzQXJnc1xuICB9LFxuICBydW46IGFzeW5jIChhcmd2KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgLy8gaWYgKGFyZ3YuaGVscCkgaGVscC5wcmludEhlbHAoKVxuICAgIC8vIGVsc2UgaWYgKGFyZ3YudmVyc2lvbikgdXRpbC5sb2coYHYke2NvbnN0YW50LnByb2plY3RWZXJzaW9ufWApXG4gICAgLy8gZWxzZSBpZiAoYXJndi5pbml0KSBpbml0LmNyZWF0ZSgpXG4gICAgLy8gZWxzZSBpZiAoYXJndi5jbGVhbikgYXdhaXQgbmV3IENsZWFuKCkucnVuKGFyZ3YuY2xlYW4pXG4gICAgLy8gZWxzZSBpZiAoYXJndi5ucG0pIGF3YWl0IG5ldyBOUE0oKS5ydW4oJ2dsb2JhbCcpXG4gICAgLy8gZWxzZSBpZiAoYXJndi5wcikgYXdhaXQgbmV3IFBSKCkucnVuKCdjcmVhdGVNZXJnZVBSJylcbiAgICAvLyBlbHNlIGlmIChhcmd2LmdpdCkgYXdhaXQgbmV3IEdpdCgpLnJ1bihhcmd2LmdpdClcbiAgICAvLyBlbHNlIHV0aWwubG9nKCdFUlJPUiAhISEgLSBDb21tYW5kIG5vdCBmb3VuZCcpXG4gIH0sXG4gIHJlcXVlc3RSdW5uaW5nTXVsdGlwbGVDb21tYW5kczogKGFyZ3YpOiBib29sZWFuID0+XG4gICAgT2JqZWN0LnZhbHVlcyhhbGlhcykucmVkdWNlKChzdW0sIGNtZCkgPT4gKGFyZ3ZbY21kXSA/ICsrc3VtIDogc3VtKSwgMCkgPiAxLFxuICBhbGxvd1ByaW50Q29uZmlnRm9yQ21kOiAoYXJndik6IGJvb2xlYW4gPT4gIWFyZ3YuaGVscCAmJiAhYXJndi5pbml0ICYmICFhcmd2LnZlcnNpb24sXG59XG5cbmV4cG9ydCB7IGNsaSB9XG4iXX0=