"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpService = void 0;
exports.helpService = {
    text: () => {
        return `
Usage: msh [option...]

Options:

   -g | --git [cmd]
      cmd:
          clone        Clone all project
          pull         Pull all projects
          fetch        Fetch all projects
          status       Get status for all projects

   -i | --init         Initiate .msh config file with default values

   -c | --clean [cmd]
      cmd:
          npm          Clean all node_modules folders
          docker       Remove all docker images (do a "docker-compose down" command first)

   -n | --npm          Run npm i in all containers

   -p | --pr           Generate PR for all projects (added option to auto merge)

   -h | --help         Display this help
`;
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvaGVscC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLElBQUksRUFBRSxHQUFXLEVBQUU7UUFDakIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBd0JWLENBQUE7SUFDQyxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBoZWxwU2VydmljZSA9IHtcbiAgdGV4dDogKCk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIGBcblVzYWdlOiBtc2ggW29wdGlvbi4uLl1cblxuT3B0aW9uczpcblxuICAgLWcgfCAtLWdpdCBbY21kXVxuICAgICAgY21kOlxuICAgICAgICAgIGNsb25lICAgICAgICBDbG9uZSBhbGwgcHJvamVjdFxuICAgICAgICAgIHB1bGwgICAgICAgICBQdWxsIGFsbCBwcm9qZWN0c1xuICAgICAgICAgIGZldGNoICAgICAgICBGZXRjaCBhbGwgcHJvamVjdHNcbiAgICAgICAgICBzdGF0dXMgICAgICAgR2V0IHN0YXR1cyBmb3IgYWxsIHByb2plY3RzXG5cbiAgIC1pIHwgLS1pbml0ICAgICAgICAgSW5pdGlhdGUgLm1zaCBjb25maWcgZmlsZSB3aXRoIGRlZmF1bHQgdmFsdWVzXG5cbiAgIC1jIHwgLS1jbGVhbiBbY21kXVxuICAgICAgY21kOlxuICAgICAgICAgIG5wbSAgICAgICAgICBDbGVhbiBhbGwgbm9kZV9tb2R1bGVzIGZvbGRlcnNcbiAgICAgICAgICBkb2NrZXIgICAgICAgUmVtb3ZlIGFsbCBkb2NrZXIgaW1hZ2VzIChkbyBhIFwiZG9ja2VyLWNvbXBvc2UgZG93blwiIGNvbW1hbmQgZmlyc3QpXG5cbiAgIC1uIHwgLS1ucG0gICAgICAgICAgUnVuIG5wbSBpIGluIGFsbCBjb250YWluZXJzXG5cbiAgIC1wIHwgLS1wciAgICAgICAgICAgR2VuZXJhdGUgUFIgZm9yIGFsbCBwcm9qZWN0cyAoYWRkZWQgb3B0aW9uIHRvIGF1dG8gbWVyZ2UpXG5cbiAgIC1oIHwgLS1oZWxwICAgICAgICAgRGlzcGxheSB0aGlzIGhlbHBcbmBcbiAgfSxcbn1cbiJdfQ==