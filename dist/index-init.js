"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const logger_1 = require("@beecode/msh-app-boot/lib/util/logger");
const logger_2 = require("./util/logger");
process.on('uncaughtException', (error) => (0, logger_2.logger)().error('Uncaught Exception', { error }));
process.on('unhandledRejection', (error) => (0, logger_2.logger)().error('Unhandled Rejection', { error }));
(0, logger_1.setAppBootLogger)((0, logger_2.logger)());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC1pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQW9DO0FBQ3BDLGtFQUF3RTtBQUN4RSw0Q0FBd0M7QUFFeEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBQSxlQUFNLEdBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDM0YsT0FBTyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBQSxlQUFNLEdBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFFN0YsSUFBQSx5QkFBZ0IsRUFBQyxJQUFBLGVBQU0sR0FBRSxDQUFDLENBQUEifQ==