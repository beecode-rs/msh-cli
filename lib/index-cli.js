"use strict";

require("./index-init.js");
var _mshAppBoot = require("@beecode/msh-app-boot");
var _cliApp = require("./app/cli-app.js");
var _updateNotifierUtil = require("./util/update-notifier-util.js");
_updateNotifierUtil.updateNotifierUtil.check();
new _mshAppBoot.AppStarter(new _cliApp.CliApp()).start()["catch"](function (err) {
  if (err instanceof Error) {
    console.error(err.message); // eslint-disable-line no-console

    return;
  }
  console.log(err); // eslint-disable-line no-console
});