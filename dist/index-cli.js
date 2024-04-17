import './index-init.js';
import { AppStarter } from '@beecode/msh-app-boot';
import { CliApp } from './app/cli-app.js';
import { updateNotifierUtil } from './util/update-notifier-util.js';
updateNotifierUtil.check().catch((err) => console.log(err)); // eslint-disable-line no-console
// eslint-disable-next-line @typescript-eslint/no-explicit-any
new AppStarter(new CliApp()).start().catch((err) => console.log(err)); // eslint-disable-line no-console
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LWNsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGlCQUFpQixDQUFBO0FBRXhCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUVsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUE7QUFFbkUsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQyxpQ0FBaUM7QUFFN0YsOERBQThEO0FBQzlELElBQUksVUFBVSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnI3NyYy9pbmRleC1pbml0J1xuXG5pbXBvcnQgeyBBcHBTdGFydGVyIH0gZnJvbSAnQGJlZWNvZGUvbXNoLWFwcC1ib290J1xuXG5pbXBvcnQgeyBDbGlBcHAgfSBmcm9tICcjc3JjL2FwcC9jbGktYXBwJ1xuaW1wb3J0IHsgdXBkYXRlTm90aWZpZXJVdGlsIH0gZnJvbSAnI3NyYy91dGlsL3VwZGF0ZS1ub3RpZmllci11dGlsJ1xuXG51cGRhdGVOb3RpZmllclV0aWwuY2hlY2soKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbm5ldyBBcHBTdGFydGVyKG5ldyBDbGlBcHAoKSkuc3RhcnQoKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycikpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuIl19