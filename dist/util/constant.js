"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constant = void 0;
const pattern_1 = require("@beecode/msh-util/lib/singleton/pattern");
const packageJson = require('../../package.json'); // eslint-disable-line
exports.constant = (0, pattern_1.singletonPattern)(() => Object.freeze({
    projectName: packageJson.name,
    projectVersion: packageJson.version,
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9jb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBMEU7QUFFMUUsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUEsQ0FBQyxzQkFBc0I7QUFFM0QsUUFBQSxRQUFRLEdBQUcsSUFBQSwwQkFBZ0IsRUFBQyxHQUFHLEVBQUUsQ0FDN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNiLFdBQVcsRUFBRSxXQUFXLENBQUMsSUFBSTtJQUM3QixjQUFjLEVBQUUsV0FBVyxDQUFDLE9BQU87Q0FDbkMsQ0FBQyxDQUNGLENBQUEifQ==