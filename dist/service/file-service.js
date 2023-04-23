"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileService = void 0;
const mz_1 = require("mz");
exports.fileService = {
    writeToFileSync: (params) => {
        const { filePath, data } = params;
        mz_1.fs.writeFileSync(filePath, data, 'utf8');
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvZmlsZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJCQUF1QjtBQUVWLFFBQUEsV0FBVyxHQUFHO0lBQzFCLGVBQWUsRUFBRSxDQUFDLE1BQTBDLEVBQVEsRUFBRTtRQUNyRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQTtRQUNqQyxPQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDekMsQ0FBQztDQUNELENBQUEifQ==