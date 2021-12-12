"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNotifierUtil = void 0;
const update_notifier_1 = __importDefault(require("update-notifier"));
const packageJson = require('../../package.json'); // eslint-disable-line
exports.updateNotifierUtil = {
    check: () => {
        (0, update_notifier_1.default)({ pkg: packageJson }).notify();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLW5vdGlmaWVyLXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC91cGRhdGUtbm90aWZpZXItdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzRUFBNEM7QUFFNUMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUEsQ0FBQyxzQkFBc0I7QUFFM0QsUUFBQSxrQkFBa0IsR0FBRztJQUNoQyxLQUFLLEVBQUUsR0FBUyxFQUFFO1FBQ2hCLElBQUEseUJBQWMsRUFBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQy9DLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVwZGF0ZU5vdGlmaWVyIGZyb20gJ3VwZGF0ZS1ub3RpZmllcidcblxuY29uc3QgcGFja2FnZUpzb24gPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVOb3RpZmllclV0aWwgPSB7XG4gIGNoZWNrOiAoKTogdm9pZCA9PiB7XG4gICAgdXBkYXRlTm90aWZpZXIoeyBwa2c6IHBhY2thZ2VKc29uIH0pLm5vdGlmeSgpXG4gIH0sXG59XG4iXX0=