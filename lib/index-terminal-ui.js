"use strict";

require("./index-init.js");
var _mshAppBoot = require("@beecode/msh-app-boot");
var _tuiApp = require("./app/tui-app.js");
new _mshAppBoot.AppStarter(new _tuiApp.TuiApp()).start()["catch"](function (err) {
  if (err instanceof Error) {
    console.error(err.message); // eslint-disable-line no-console

    return;
  }
  console.log(err); // eslint-disable-line no-console
});