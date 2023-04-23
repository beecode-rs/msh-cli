"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terminalWrapperFactory = exports.TerminalWrapper = void 0;
const shell_service_1 = require("../service/shell-service");
class TerminalWrapper {
    _command;
    constructor(params) {
        const { command } = params;
        this._command = command;
    }
    async execute() {
        const results = await this._command.execute();
        const printableStdMessages = results.map((r) => ({
            [r.name ?? '<cmd>']: { errorOccurred: !!r.errorMessage, stderr: r.errorMessage ?? '', stdout: r.stringResult ?? '' },
        }));
        shell_service_1.shellService.printStdMessage(...printableStdMessages);
    }
}
exports.TerminalWrapper = TerminalWrapper;
const terminalWrapperFactory = (...params) => new TerminalWrapper(...params);
exports.terminalWrapperFactory = terminalWrapperFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybWluYWwtd3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL3Rlcm1pbmFsLXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkRBQXdEO0FBRXhELE1BQWEsZUFBZTtJQUNSLFFBQVEsQ0FBWTtJQUN2QyxZQUFZLE1BQStCO1FBQzFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUE7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPO1FBQ1osTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzdDLE1BQU0sb0JBQW9CLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLEVBQUUsRUFBRTtTQUNwSCxDQUFDLENBQUMsQ0FBQTtRQUNILDRCQUFZLENBQUMsZUFBZSxDQUFDLEdBQUcsb0JBQW9CLENBQUMsQ0FBQTtJQUN0RCxDQUFDO0NBQ0Q7QUFkRCwwQ0FjQztBQUVNLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxHQUFHLE1BQXFELEVBQW1CLEVBQUUsQ0FDbkgsSUFBSSxlQUFlLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQTtBQURsQixRQUFBLHNCQUFzQiwwQkFDSiJ9