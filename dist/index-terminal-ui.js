"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index-init");
const msh_app_boot_1 = require("@beecode/msh-app-boot");
const tui_app_1 = require("./app/tui-app");
new msh_app_boot_1.AppStarter(new tui_app_1.TuiApp()).start().catch((err) => console.log(err)); // eslint-disable-line no-console
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtdGVybWluYWwtdWkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgtdGVybWluYWwtdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3QkFBcUI7QUFFckIsd0RBQWtEO0FBQ2xELDZDQUF3QztBQUV4QyxJQUFJLHlCQUFVLENBQUMsSUFBSSxnQkFBTSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLGlDQUFpQyJ9