"use strict";

require("./index-init.js");
var _mshAppBoot = require("@beecode/msh-app-boot");
var _httpServerApp = require("./app/http-server-app.js");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
new _mshAppBoot.AppStarter(new _httpServerApp.HttpServerApp()).start()["catch"](function (err) {
  return console.log(err);
}); // eslint-disable-line no-console