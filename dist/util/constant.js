import { singletonPattern } from '@beecode/msh-util/singleton/pattern';
// @ts-expect-error
import packageJson from '#packageJson' assert { type: 'json' };
export const constant = singletonPattern(() => Object.freeze({
    projectName: packageJson.name,
    projectVersion: packageJson.version,
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9jb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQTtBQUV0RSxtQkFBbUI7QUFDbkIsT0FBTyxXQUFXLE1BQU0sY0FBYyxDQUFDLFNBQVMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFBO0FBRTlELE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FDN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNiLFdBQVcsRUFBRSxXQUFXLENBQUMsSUFBSTtJQUM3QixjQUFjLEVBQUUsV0FBVyxDQUFDLE9BQU87Q0FDbkMsQ0FBQyxDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaW5nbGV0b25QYXR0ZXJuIH0gZnJvbSAnQGJlZWNvZGUvbXNoLXV0aWwvc2luZ2xldG9uL3BhdHRlcm4nXG5cbi8vIEB0cy1leHBlY3QtZXJyb3JcbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tICcjcGFja2FnZUpzb24nIGFzc2VydCB7IHR5cGU6ICdqc29uJyB9XG5cbmV4cG9ydCBjb25zdCBjb25zdGFudCA9IHNpbmdsZXRvblBhdHRlcm4oKCkgPT5cblx0T2JqZWN0LmZyZWV6ZSh7XG5cdFx0cHJvamVjdE5hbWU6IHBhY2thZ2VKc29uLm5hbWUsXG5cdFx0cHJvamVjdFZlcnNpb246IHBhY2thZ2VKc29uLnZlcnNpb24sXG5cdH0pXG4pXG4iXX0=