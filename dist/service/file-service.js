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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvZmlsZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJCQUF1QjtBQUVWLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLGVBQWUsRUFBRSxDQUFDLE1BQTBDLEVBQVEsRUFBRTtRQUNwRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQTtRQUNqQyxPQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDMUMsQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcyB9IGZyb20gJ216J1xuXG5leHBvcnQgY29uc3QgZmlsZVNlcnZpY2UgPSB7XG4gIHdyaXRlVG9GaWxlU3luYzogKHBhcmFtczogeyBmaWxlUGF0aDogc3RyaW5nOyBkYXRhOiBzdHJpbmcgfSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgZmlsZVBhdGgsIGRhdGEgfSA9IHBhcmFtc1xuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIGRhdGEsICd1dGY4JylcbiAgfSxcbn1cbiJdfQ==