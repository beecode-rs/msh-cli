import './index-init';
import { AppStarter } from '@beecode/msh-app-boot';
import { HttpServerApp } from '#src/app/http-server-app';
new AppStarter(new HttpServerApp()).start().catch((err) => {
    if (err instanceof Error) {
        console.error(err.message); // eslint-disable-line no-console
        return;
    }
    console.log(err); // eslint-disable-line no-console
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtc2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LXNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGNBQWMsQ0FBQTtBQUVyQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUE7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFBO0FBRXhELElBQUksVUFBVSxDQUFDLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFZLEVBQUUsRUFBRTtJQUNsRSxJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDLGlDQUFpQztRQUU1RCxPQUFNO0lBQ1AsQ0FBQztJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyxpQ0FBaUM7QUFDbkQsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vaW5kZXgtaW5pdCdcblxuaW1wb3J0IHsgQXBwU3RhcnRlciB9IGZyb20gJ0BiZWVjb2RlL21zaC1hcHAtYm9vdCdcblxuaW1wb3J0IHsgSHR0cFNlcnZlckFwcCB9IGZyb20gJyNzcmMvYXBwL2h0dHAtc2VydmVyLWFwcCdcblxubmV3IEFwcFN0YXJ0ZXIobmV3IEh0dHBTZXJ2ZXJBcHAoKSkuc3RhcnQoKS5jYXRjaCgoZXJyOiB1bmtub3duKSA9PiB7XG5cdGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG5cdFx0cmV0dXJuXG5cdH1cblx0Y29uc29sZS5sb2coZXJyKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbn0pXG4iXX0=