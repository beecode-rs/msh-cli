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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9vYmplY3QtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLFVBQVUsR0FBRztJQUN6QixnQkFBZ0IsRUFBRSxDQUFnQyxTQUFZLEVBQUssRUFBRTtRQUNwRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzNCLElBQUksRUFBRTthQUNOLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRXpCLE9BQU8sR0FBRyxDQUFBO1FBQ1gsQ0FBQyxFQUFFLEVBQUUsQ0FBTSxDQUFBO0lBQ2IsQ0FBQztDQUNELENBQUEifQ==