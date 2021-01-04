"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootController = void 0;
const git_controller_1 = require("src/controller/cli-controller/git-controller");
const npm_controller_1 = require("src/controller/cli-controller/npm-controller");
const cli_service_1 = require("src/service/cli-service");
exports.rootController = {
    router: async (argv) => {
        switch (true) {
            case argv.help:
                return cli_service_1.cliService.printHelp();
            case argv.version:
                return cli_service_1.cliService.printVersion();
            case argv.npm:
                return npm_controller_1.npmController.router(argv);
            case argv.git:
                return git_controller_1.gitController.router(argv);
            default:
                throw new Error(`Unknown command selected!`);
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2xpLWNvbnRyb2xsZXIvcm9vdC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlGQUE0RTtBQUM1RSxpRkFBNEU7QUFDNUUseURBQW9EO0FBRXZDLFFBQUEsY0FBYyxHQUFHO0lBQzVCLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBZ0IsRUFBaUIsRUFBRTtRQUNoRCxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLElBQUk7Z0JBQ1osT0FBTyx3QkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQy9CLEtBQUssSUFBSSxDQUFDLE9BQU87Z0JBQ2YsT0FBTyx3QkFBVSxDQUFDLFlBQVksRUFBRSxDQUFBO1lBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUc7Z0JBQ1gsT0FBTyw4QkFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHO2dCQUNYLE9BQU8sOEJBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbkM7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1NBQy9DO0lBQ0gsQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXJzZWRBcmdzIH0gZnJvbSAnbWluaW1pc3QnXG5pbXBvcnQgeyBnaXRDb250cm9sbGVyIH0gZnJvbSAnc3JjL2NvbnRyb2xsZXIvY2xpLWNvbnRyb2xsZXIvZ2l0LWNvbnRyb2xsZXInXG5pbXBvcnQgeyBucG1Db250cm9sbGVyIH0gZnJvbSAnc3JjL2NvbnRyb2xsZXIvY2xpLWNvbnRyb2xsZXIvbnBtLWNvbnRyb2xsZXInXG5pbXBvcnQgeyBjbGlTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2UvY2xpLXNlcnZpY2UnXG5cbmV4cG9ydCBjb25zdCByb290Q29udHJvbGxlciA9IHtcbiAgcm91dGVyOiBhc3luYyAoYXJndjogUGFyc2VkQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBhcmd2LmhlbHA6XG4gICAgICAgIHJldHVybiBjbGlTZXJ2aWNlLnByaW50SGVscCgpXG4gICAgICBjYXNlIGFyZ3YudmVyc2lvbjpcbiAgICAgICAgcmV0dXJuIGNsaVNlcnZpY2UucHJpbnRWZXJzaW9uKClcbiAgICAgIGNhc2UgYXJndi5ucG06XG4gICAgICAgIHJldHVybiBucG1Db250cm9sbGVyLnJvdXRlcihhcmd2KVxuICAgICAgY2FzZSBhcmd2LmdpdDpcbiAgICAgICAgcmV0dXJuIGdpdENvbnRyb2xsZXIucm91dGVyKGFyZ3YpXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gY29tbWFuZCBzZWxlY3RlZCFgKVxuICAgIH1cbiAgfSxcbn1cbiJdfQ==