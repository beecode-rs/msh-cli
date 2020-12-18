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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLDJDQUEyQztBQUMzQyx1Q0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNyQyx5REFBb0Q7QUFDcEQsa0NBQWtDO0FBQ2xDLCtDQUErQztBQUUvQyxNQUFNLEdBQUcsR0FBRztJQUNWLFlBQVksRUFBRSxDQUFDLElBQUksRUFBVyxFQUFFO1FBQzlCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ2hELElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFFckMsSUFBSSxHQUFHLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUMsNkRBQTZEO1lBQzdELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUNmO1FBRUQsSUFBSSxPQUFPO1lBQUUsd0JBQVUsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUEsQ0FBQyw4QkFBOEI7UUFDdEYsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUNELEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFpQixFQUFFO1FBQ2pDLGtDQUFrQztRQUNsQyxpRUFBaUU7UUFDakUsb0NBQW9DO1FBQ3BDLHlEQUF5RDtRQUN6RCxtREFBbUQ7UUFDbkQsd0RBQXdEO1FBQ3hELG1EQUFtRDtRQUNuRCxpREFBaUQ7SUFDbkQsQ0FBQztJQUNELDhCQUE4QixFQUFFLENBQUMsSUFBSSxFQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM5SCxzQkFBc0IsRUFBRSxDQUFDLElBQUksRUFBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO0NBQ3JGLENBQUE7QUFFUSxrQkFBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsaWFzIH0gZnJvbSAnc3JjL2NsaS9hbGlhcydcbi8vIGltcG9ydCB7IGhlbHAgfSBmcm9tICdzcmMvY2xpL2hlbHAnXG4vLyBpbXBvcnQgeyBpbml0IH0gZnJvbSAnc3JjL2NsaS9pbml0J1xuLy8gaW1wb3J0IENsZWFuID0gcmVxdWlyZSgnc3JjL2V4ZWMvQ2xlYW4nKVxuLy8gaW1wb3J0IEdpdCA9IHJlcXVpcmUoJ3NyYy9leGVjL0dpdCcpXG4vLyBpbXBvcnQgTlBNID0gcmVxdWlyZSgnc3JjL2V4ZWMvTlBNJylcbi8vIGltcG9ydCBQUiA9IHJlcXVpcmUoJ3NyYy9leGVjL1BSJylcbmltcG9ydCB7IGNsaVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9jbGktc2VydmljZSdcbi8vIGltcG9ydCB7IHV0aWwgfSBmcm9tICdzcmMvdXRpbCdcbi8vIGltcG9ydCB7IGNvbnN0YW50IH0gZnJvbSAnc3JjL3V0aWwvY29uc3RhbnQnXG5cbmNvbnN0IGNsaSA9IHtcbiAgaGFzQXJndW1lbnRzOiAoYXJndik6IGJvb2xlYW4gPT4ge1xuICAgIGxldCBoYXNBcmdzID0gZmFsc2VcbiAgICBpZiAoT2JqZWN0LmtleXMoYXJndikubGVuZ3RoID4gMSkgaGFzQXJncyA9IHRydWVcbiAgICBpZiAoYXJndi5fLmxlbmd0aCA+IDApIGhhc0FyZ3MgPSB0cnVlXG5cbiAgICBpZiAoY2xpLnJlcXVlc3RSdW5uaW5nTXVsdGlwbGVDb21tYW5kcyhhcmd2KSkge1xuICAgICAgLy8gdXRpbC5sb2coJ0VSUk9SICEhISAtIENMSSBjYW4gcnVuIG9ubHkgb25lIGNtZCBhdCBhIHRpbWUnKVxuICAgICAgcHJvY2Vzcy5leGl0KClcbiAgICB9XG5cbiAgICBpZiAoaGFzQXJncykgY2xpU2VydmljZS5leGl0QWZ0ZXJDb21tYW5kRXhlY3V0ZWQgPSB0cnVlIC8vIFRPRE8gdXNlIG1lbW9yeSBkYW8vc2VydmljZVxuICAgIHJldHVybiBoYXNBcmdzXG4gIH0sXG4gIHJ1bjogYXN5bmMgKGFyZ3YpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAvLyBpZiAoYXJndi5oZWxwKSBoZWxwLnByaW50SGVscCgpXG4gICAgLy8gZWxzZSBpZiAoYXJndi52ZXJzaW9uKSB1dGlsLmxvZyhgdiR7Y29uc3RhbnQucHJvamVjdFZlcnNpb259YClcbiAgICAvLyBlbHNlIGlmIChhcmd2LmluaXQpIGluaXQuY3JlYXRlKClcbiAgICAvLyBlbHNlIGlmIChhcmd2LmNsZWFuKSBhd2FpdCBuZXcgQ2xlYW4oKS5ydW4oYXJndi5jbGVhbilcbiAgICAvLyBlbHNlIGlmIChhcmd2Lm5wbSkgYXdhaXQgbmV3IE5QTSgpLnJ1bignZ2xvYmFsJylcbiAgICAvLyBlbHNlIGlmIChhcmd2LnByKSBhd2FpdCBuZXcgUFIoKS5ydW4oJ2NyZWF0ZU1lcmdlUFInKVxuICAgIC8vIGVsc2UgaWYgKGFyZ3YuZ2l0KSBhd2FpdCBuZXcgR2l0KCkucnVuKGFyZ3YuZ2l0KVxuICAgIC8vIGVsc2UgdXRpbC5sb2coJ0VSUk9SICEhISAtIENvbW1hbmQgbm90IGZvdW5kJylcbiAgfSxcbiAgcmVxdWVzdFJ1bm5pbmdNdWx0aXBsZUNvbW1hbmRzOiAoYXJndik6IGJvb2xlYW4gPT4gT2JqZWN0LnZhbHVlcyhhbGlhcykucmVkdWNlKChzdW0sIGNtZCkgPT4gKGFyZ3ZbY21kXSA/ICsrc3VtIDogc3VtKSwgMCkgPiAxLFxuICBhbGxvd1ByaW50Q29uZmlnRm9yQ21kOiAoYXJndik6IGJvb2xlYW4gPT4gIWFyZ3YuaGVscCAmJiAhYXJndi5pbml0ICYmICFhcmd2LnZlcnNpb24sXG59XG5cbmV4cG9ydCB7IGNsaSB9XG4iXX0=