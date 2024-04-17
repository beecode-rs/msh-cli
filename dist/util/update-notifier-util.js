import packageJson from '../../package.json' assert { type: 'json' };
import updateNotifier from 'update-notifier';
export const updateNotifierUtil = {
    check: async () => {
        updateNotifier({ pkg: packageJson }).notify();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLW5vdGlmaWVyLXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC91cGRhdGUtbm90aWZpZXItdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFdBQVcsTUFBTSxvQkFBb0IsQ0FBQyxTQUFTLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQTtBQUNwRSxPQUFPLGNBQWMsTUFBTSxpQkFBaUIsQ0FBQTtBQUU1QyxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRztJQUNqQyxLQUFLLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQ2hDLGNBQWMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQzlDLENBQUM7Q0FDRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhY2thZ2VKc29uIGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbicgYXNzZXJ0IHsgdHlwZTogJ2pzb24nIH1cbmltcG9ydCB1cGRhdGVOb3RpZmllciBmcm9tICd1cGRhdGUtbm90aWZpZXInXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVOb3RpZmllclV0aWwgPSB7XG5cdGNoZWNrOiBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0dXBkYXRlTm90aWZpZXIoeyBwa2c6IHBhY2thZ2VKc29uIH0pLm5vdGlmeSgpXG5cdH0sXG59XG4iXX0=