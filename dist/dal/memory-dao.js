"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoryDao = exports.MemorySlot = void 0;
const memory = {};
var MemorySlot;
(function (MemorySlot) {
    MemorySlot["CONFIG"] = "config";
})(MemorySlot = exports.MemorySlot || (exports.MemorySlot = {}));
exports.memoryDao = {
    get: (memorySlot) => {
        return memory[memorySlot];
    },
    set: (memorySlot, value) => {
        memory[memorySlot] = value;
    },
    clear: (memorySlot) => {
        delete memory[memorySlot];
    },
    isSet: (memorySlot) => {
        return typeof exports.memoryDao.get(memorySlot) !== 'undefined';
    },
    setOnlyOnce: (memorySlot, value) => {
        if (exports.memoryDao.isSet(memorySlot))
            throw new Error(`Memory slog [${memorySlot}] is already set`);
        return exports.memoryDao.set(memorySlot, value);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LWRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYWwvbWVtb3J5LWRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLE1BQU0sR0FBUSxFQUFFLENBQUE7QUFFdEIsSUFBWSxVQUVYO0FBRkQsV0FBWSxVQUFVO0lBQ3BCLCtCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFGVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUVyQjtBQUVZLFFBQUEsU0FBUyxHQUFHO0lBQ3ZCLEdBQUcsRUFBRSxDQUFDLFVBQXNCLEVBQU8sRUFBRTtRQUNuQyxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBQ0QsR0FBRyxFQUFFLENBQUMsVUFBc0IsRUFBRSxLQUFVLEVBQVEsRUFBRTtRQUNoRCxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFBO0lBQzVCLENBQUM7SUFDRCxLQUFLLEVBQUUsQ0FBQyxVQUFzQixFQUFRLEVBQUU7UUFDdEMsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUNELEtBQUssRUFBRSxDQUFDLFVBQXNCLEVBQVcsRUFBRTtRQUN6QyxPQUFPLE9BQU8saUJBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssV0FBVyxDQUFBO0lBQ3pELENBQUM7SUFDRCxXQUFXLEVBQUUsQ0FBQyxVQUFzQixFQUFFLEtBQVUsRUFBUSxFQUFFO1FBQ3hELElBQUksaUJBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsVUFBVSxrQkFBa0IsQ0FBQyxDQUFBO1FBQzlGLE9BQU8saUJBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVtb3J5OiBhbnkgPSB7fVxuXG5leHBvcnQgZW51bSBNZW1vcnlTbG90IHtcbiAgQ09ORklHID0gJ2NvbmZpZycsXG59XG5cbmV4cG9ydCBjb25zdCBtZW1vcnlEYW8gPSB7XG4gIGdldDogKG1lbW9yeVNsb3Q6IE1lbW9yeVNsb3QpOiBhbnkgPT4ge1xuICAgIHJldHVybiBtZW1vcnlbbWVtb3J5U2xvdF1cbiAgfSxcbiAgc2V0OiAobWVtb3J5U2xvdDogTWVtb3J5U2xvdCwgdmFsdWU6IGFueSk6IHZvaWQgPT4ge1xuICAgIG1lbW9yeVttZW1vcnlTbG90XSA9IHZhbHVlXG4gIH0sXG4gIGNsZWFyOiAobWVtb3J5U2xvdDogTWVtb3J5U2xvdCk6IHZvaWQgPT4ge1xuICAgIGRlbGV0ZSBtZW1vcnlbbWVtb3J5U2xvdF1cbiAgfSxcbiAgaXNTZXQ6IChtZW1vcnlTbG90OiBNZW1vcnlTbG90KTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBtZW1vcnlEYW8uZ2V0KG1lbW9yeVNsb3QpICE9PSAndW5kZWZpbmVkJ1xuICB9LFxuICBzZXRPbmx5T25jZTogKG1lbW9yeVNsb3Q6IE1lbW9yeVNsb3QsIHZhbHVlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBpZiAobWVtb3J5RGFvLmlzU2V0KG1lbW9yeVNsb3QpKSB0aHJvdyBuZXcgRXJyb3IoYE1lbW9yeSBzbG9nIFske21lbW9yeVNsb3R9XSBpcyBhbHJlYWR5IHNldGApXG4gICAgcmV0dXJuIG1lbW9yeURhby5zZXQobWVtb3J5U2xvdCwgdmFsdWUpXG4gIH0sXG59XG4iXX0=