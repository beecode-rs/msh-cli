"use strict";

require("./index-init.js");
var _mshAppBoot = require("@beecode/msh-app-boot");
var _tuiApp = require("./app/tui-app.js");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
new _mshAppBoot.AppStarter(new _tuiApp.TuiApp()).start()["catch"](function (err) {
  return console.log(err);
}); // eslint-disable-line no-console