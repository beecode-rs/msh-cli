"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index-init");
const msh_app_boot_1 = require("@beecode/msh-app-boot");
const cli_app_1 = require("./app/cli-app");
const update_notifier_util_1 = require("./util/update-notifier-util");
update_notifier_util_1.updateNotifierUtil.check().catch((err) => console.log(err)); // eslint-disable-line no-console
new msh_app_boot_1.AppStarter(new cli_app_1.CliApp()).start().catch((err) => console.log(err)); // eslint-disable-line no-console
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LWNsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUV2Qix3REFBa0Q7QUFDbEQsNkNBQXdDO0FBQ3hDLHdFQUFrRTtBQUVsRSx5Q0FBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLGlDQUFpQztBQUU3RixJQUFJLHlCQUFVLENBQUMsSUFBSSxnQkFBTSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLGlDQUFpQyJ9