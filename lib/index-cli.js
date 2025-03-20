"use strict";

require("./index-init.js");
var _mshAppBoot = require("@beecode/msh-app-boot");
var _cliApp = require("./app/cli-app.js");
var _updateNotifierUtil = require("./util/update-notifier-util.js");
void _updateNotifierUtil.updateNotifierUtil.check();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
new _mshAppBoot.AppStarter(new _cliApp.CliApp()).start()["catch"](function (err) {
  console.log(err); // eslint-disable-line no-console
});