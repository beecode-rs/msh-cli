"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index-init");
const msh_app_boot_1 = require("@beecode/msh-app-boot");
const http_server_app_1 = require("./app/http-server-app");
new msh_app_boot_1.AppStarter(new http_server_app_1.HttpServerApp()).start().catch((err) => console.log(err)); // eslint-disable-line no-console
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtc2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LXNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdCQUFxQjtBQUVyQix3REFBa0Q7QUFDbEQsNkRBQXVEO0FBRXZELElBQUkseUJBQVUsQ0FBQyxJQUFJLCtCQUFhLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUMsaUNBQWlDIn0=