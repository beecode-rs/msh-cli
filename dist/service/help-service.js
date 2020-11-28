"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpService = void 0;
exports.helpService = {
    text: () => {
        return `
Usage: msh [option...]

Command:

   -g | --git [cmd]
      options:
          clone        Clone all project
          pull         Pull all projects
          fetch        Fetch all projects
          status       Get status for all projects

   -i | --init         Initiate .msh config file with default values

   -c | --clean [cmd]
      options:
          npm          Clean all node_modules folders
          docker       Remove all docker images (do a "docker-compose down" command first)

   -n | --npm          Run npm i in all containers
      options:
          -g           Gather all npm packages to a global package.json
          -i           Run npm i for all projects

   -p | --pr           Generate PR for all projects (added option to auto merge)

   -h | --help         Display this help
`;
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvaGVscC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLElBQUksRUFBRSxHQUFXLEVBQUU7UUFDakIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkJWLENBQUE7SUFDQyxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBoZWxwU2VydmljZSA9IHtcbiAgdGV4dDogKCk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIGBcblVzYWdlOiBtc2ggW29wdGlvbi4uLl1cblxuQ29tbWFuZDpcblxuICAgLWcgfCAtLWdpdCBbY21kXVxuICAgICAgb3B0aW9uczpcbiAgICAgICAgICBjbG9uZSAgICAgICAgQ2xvbmUgYWxsIHByb2plY3RcbiAgICAgICAgICBwdWxsICAgICAgICAgUHVsbCBhbGwgcHJvamVjdHNcbiAgICAgICAgICBmZXRjaCAgICAgICAgRmV0Y2ggYWxsIHByb2plY3RzXG4gICAgICAgICAgc3RhdHVzICAgICAgIEdldCBzdGF0dXMgZm9yIGFsbCBwcm9qZWN0c1xuXG4gICAtaSB8IC0taW5pdCAgICAgICAgIEluaXRpYXRlIC5tc2ggY29uZmlnIGZpbGUgd2l0aCBkZWZhdWx0IHZhbHVlc1xuXG4gICAtYyB8IC0tY2xlYW4gW2NtZF1cbiAgICAgIG9wdGlvbnM6XG4gICAgICAgICAgbnBtICAgICAgICAgIENsZWFuIGFsbCBub2RlX21vZHVsZXMgZm9sZGVyc1xuICAgICAgICAgIGRvY2tlciAgICAgICBSZW1vdmUgYWxsIGRvY2tlciBpbWFnZXMgKGRvIGEgXCJkb2NrZXItY29tcG9zZSBkb3duXCIgY29tbWFuZCBmaXJzdClcblxuICAgLW4gfCAtLW5wbSAgICAgICAgICBSdW4gbnBtIGkgaW4gYWxsIGNvbnRhaW5lcnNcbiAgICAgIG9wdGlvbnM6XG4gICAgICAgICAgLWcgICAgICAgICAgIEdhdGhlciBhbGwgbnBtIHBhY2thZ2VzIHRvIGEgZ2xvYmFsIHBhY2thZ2UuanNvblxuICAgICAgICAgIC1pICAgICAgICAgICBSdW4gbnBtIGkgZm9yIGFsbCBwcm9qZWN0c1xuXG4gICAtcCB8IC0tcHIgICAgICAgICAgIEdlbmVyYXRlIFBSIGZvciBhbGwgcHJvamVjdHMgKGFkZGVkIG9wdGlvbiB0byBhdXRvIG1lcmdlKVxuXG4gICAtaCB8IC0taGVscCAgICAgICAgIERpc3BsYXkgdGhpcyBoZWxwXG5gXG4gIH0sXG59XG4iXX0=