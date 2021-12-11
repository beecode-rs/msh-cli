"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectUtil = void 0;
exports.objectUtil = {
    sortObjectByKeys: (unordered) => {
        return Object.keys(unordered)
            .sort()
            .reduce((obj, key) => {
            obj[key] = unordered[key];
            return obj;
        }, {});
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9vYmplY3QtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLFVBQVUsR0FBRztJQUN4QixnQkFBZ0IsRUFBRSxDQUFpQyxTQUFZLEVBQUssRUFBRTtRQUNwRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzFCLElBQUksRUFBRTthQUNOLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3pCLE9BQU8sR0FBRyxDQUFBO1FBQ1osQ0FBQyxFQUFFLEVBQUUsQ0FBTSxDQUFBO0lBQ2YsQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgb2JqZWN0VXRpbCA9IHtcbiAgc29ydE9iamVjdEJ5S2V5czogPFQgZXh0ZW5kcyB7IFtrOiBzdHJpbmddOiBhbnkgfT4odW5vcmRlcmVkOiBUKTogVCA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHVub3JkZXJlZClcbiAgICAgIC5zb3J0KClcbiAgICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICAgIG9ialtrZXldID0gdW5vcmRlcmVkW2tleV1cbiAgICAgICAgcmV0dXJuIG9ialxuICAgICAgfSwge30pIGFzIFRcbiAgfSxcbn1cbiJdfQ==