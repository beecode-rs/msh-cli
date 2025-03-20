"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shellDal = void 0;
var _shelljs = _interopRequireDefault(require("shelljs"));
var _logger = require("../util/logger.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var shellDal = exports.shellDal = {
  cd: function cd(dir) {
    _shelljs["default"].cd(dir);
  },
  // exec: (cmd: string): Promise<ExecResult> =>
  //   new Promise((resolve, reject) => {
  //     logger().debug(shellDal.pwd())
  //     const child = shell.exec(cmd, { async: true, silent: true })
  //     const result = { stdout: '', stderr: '', errorOccurred: false }
  //
  //     if (child.stdout) {
  //       child.stdout.on('data', (data) => {
  //         result.stdout = (result.stdout ?? '') + data.toString()
  //       })
  //       child.stdout.on('end', () => {
  //         resolve(result)
  //       })
  //     } else if (child.stderr) {
  //       child.stderr.on('end', () => {
  //         resolve(result)
  //       })
  //     }
  //
  //     if (child.stderr) {
  //       child.stderr.on('data', (data) => {
  //         result.stderr = (result.stderr ?? '') + data.toString()
  //         result.errorOccurred = (child.exitCode ?? 0) !== 0
  //       })
  //     }
  //   }),
  exec: function exec(cmd) {
    return new Promise(function (resolve) {
      (0, _logger.logger)().debug(shellDal.pwd());
      _shelljs["default"].exec(cmd, {
        silent: true
      }, function (code, stdout, stderr) {
        var errorOccurred = code !== 0;
        return resolve({
          errorOccurred: errorOccurred,
          stderr: stderr,
          stdout: stdout
        });
      });
    });
  },
  print: function print(message) {
    _shelljs["default"].echo(message);
  },
  pwd: function pwd() {
    return _shelljs["default"].pwd();
  }
};