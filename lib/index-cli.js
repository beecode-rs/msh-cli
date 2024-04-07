"use strict";

require("#/index-init");
var _mshAppBoot = require("@beecode/msh-app-boot");
var _cliApp = require("./app/cli-app.js");
var _updateNotifierUtil = require("./util/update-notifier-util.js");
_updateNotifierUtil.updateNotifierUtil.check()["catch"](function (err) {
  return console.log(err);
}); // eslint-disable-line no-console

// eslint-disable-next-line @typescript-eslint/no-explicit-any
new _mshAppBoot.AppStarter(new _cliApp.CliApp()).start()["catch"](function (err) {
  return console.log(err);
}); // eslint-disable-line no-console