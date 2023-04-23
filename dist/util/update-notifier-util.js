"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNotifierUtil = void 0;
const update_notifier_1 = __importDefault(require("update-notifier"));
const packageJson = require('../../package.json'); // eslint-disable-line
exports.updateNotifierUtil = {
    check: async () => {
        (0, update_notifier_1.default)({ pkg: packageJson }).notify();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLW5vdGlmaWVyLXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC91cGRhdGUtbm90aWZpZXItdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzRUFBNEM7QUFFNUMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUEsQ0FBQyxzQkFBc0I7QUFFM0QsUUFBQSxrQkFBa0IsR0FBRztJQUNqQyxLQUFLLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQ2hDLElBQUEseUJBQWMsRUFBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQzlDLENBQUM7Q0FDRCxDQUFBIn0=