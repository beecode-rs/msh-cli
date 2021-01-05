"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpService = void 0;
exports.helpService = {
    text: () => {
        return [
            'Usage: msh [command]',
            '',
            'Command:',
            '',
            '   -i | --init             Initiate .msh config file with default values',
            '',
            '   -g | --git [option]',
            '       options:',
            '          clone            Clone all project',
            '          pull             Pull all projects',
            '          fetch            Fetch all projects',
            '          status           Get status for all projects',
            '',
            '   -n | --npm  [option]    Run npm i in all containers',
            '       options:',
            '          install          Run npm i for all projects',
            // '          global           !!!Not Implemented yet!!! Gather all npm packages to a global package.json',
            // '',
            // '   -c | --clean [option]',
            // '       options:',
            // '          npm              Clean all node_modules folders',
            // '          docker           Remove all docker images (do a "docker-compose down" command first)',
            // '',
            // '   -p | --pr               Generate PR for all projects (added option to auto merge)',
            '',
            '   -v | --version          Display cli version',
            '',
            '   -h | --help             Display this help',
        ].join('\n');
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvaGVscC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLElBQUksRUFBRSxHQUFXLEVBQUU7UUFDakIsT0FBTztZQUNMLHNCQUFzQjtZQUN0QixFQUFFO1lBQ0YsVUFBVTtZQUNWLEVBQUU7WUFDRiwwRUFBMEU7WUFDMUUsRUFBRTtZQUNGLHdCQUF3QjtZQUN4QixpQkFBaUI7WUFDakIsOENBQThDO1lBQzlDLDhDQUE4QztZQUM5QywrQ0FBK0M7WUFDL0Msd0RBQXdEO1lBQ3hELEVBQUU7WUFDRix3REFBd0Q7WUFDeEQsaUJBQWlCO1lBQ2pCLHVEQUF1RDtZQUN2RCwyR0FBMkc7WUFDM0csTUFBTTtZQUNOLDhCQUE4QjtZQUM5QixxQkFBcUI7WUFDckIsK0RBQStEO1lBQy9ELG9HQUFvRztZQUNwRyxNQUFNO1lBQ04sMEZBQTBGO1lBQzFGLEVBQUU7WUFDRixnREFBZ0Q7WUFDaEQsRUFBRTtZQUNGLDhDQUE4QztTQUMvQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNkLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGhlbHBTZXJ2aWNlID0ge1xuICB0ZXh0OiAoKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgJ1VzYWdlOiBtc2ggW2NvbW1hbmRdJyxcbiAgICAgICcnLFxuICAgICAgJ0NvbW1hbmQ6JyxcbiAgICAgICcnLFxuICAgICAgJyAgIC1pIHwgLS1pbml0ICAgICAgICAgICAgIEluaXRpYXRlIC5tc2ggY29uZmlnIGZpbGUgd2l0aCBkZWZhdWx0IHZhbHVlcycsXG4gICAgICAnJyxcbiAgICAgICcgICAtZyB8IC0tZ2l0IFtvcHRpb25dJyxcbiAgICAgICcgICAgICAgb3B0aW9uczonLFxuICAgICAgJyAgICAgICAgICBjbG9uZSAgICAgICAgICAgIENsb25lIGFsbCBwcm9qZWN0JyxcbiAgICAgICcgICAgICAgICAgcHVsbCAgICAgICAgICAgICBQdWxsIGFsbCBwcm9qZWN0cycsXG4gICAgICAnICAgICAgICAgIGZldGNoICAgICAgICAgICAgRmV0Y2ggYWxsIHByb2plY3RzJyxcbiAgICAgICcgICAgICAgICAgc3RhdHVzICAgICAgICAgICBHZXQgc3RhdHVzIGZvciBhbGwgcHJvamVjdHMnLFxuICAgICAgJycsXG4gICAgICAnICAgLW4gfCAtLW5wbSAgW29wdGlvbl0gICAgUnVuIG5wbSBpIGluIGFsbCBjb250YWluZXJzJyxcbiAgICAgICcgICAgICAgb3B0aW9uczonLFxuICAgICAgJyAgICAgICAgICBpbnN0YWxsICAgICAgICAgIFJ1biBucG0gaSBmb3IgYWxsIHByb2plY3RzJyxcbiAgICAgIC8vICcgICAgICAgICAgZ2xvYmFsICAgICAgICAgICAhISFOb3QgSW1wbGVtZW50ZWQgeWV0ISEhIEdhdGhlciBhbGwgbnBtIHBhY2thZ2VzIHRvIGEgZ2xvYmFsIHBhY2thZ2UuanNvbicsXG4gICAgICAvLyAnJyxcbiAgICAgIC8vICcgICAtYyB8IC0tY2xlYW4gW29wdGlvbl0nLFxuICAgICAgLy8gJyAgICAgICBvcHRpb25zOicsXG4gICAgICAvLyAnICAgICAgICAgIG5wbSAgICAgICAgICAgICAgQ2xlYW4gYWxsIG5vZGVfbW9kdWxlcyBmb2xkZXJzJyxcbiAgICAgIC8vICcgICAgICAgICAgZG9ja2VyICAgICAgICAgICBSZW1vdmUgYWxsIGRvY2tlciBpbWFnZXMgKGRvIGEgXCJkb2NrZXItY29tcG9zZSBkb3duXCIgY29tbWFuZCBmaXJzdCknLFxuICAgICAgLy8gJycsXG4gICAgICAvLyAnICAgLXAgfCAtLXByICAgICAgICAgICAgICAgR2VuZXJhdGUgUFIgZm9yIGFsbCBwcm9qZWN0cyAoYWRkZWQgb3B0aW9uIHRvIGF1dG8gbWVyZ2UpJyxcbiAgICAgICcnLFxuICAgICAgJyAgIC12IHwgLS12ZXJzaW9uICAgICAgICAgIERpc3BsYXkgY2xpIHZlcnNpb24nLFxuICAgICAgJycsXG4gICAgICAnICAgLWggfCAtLWhlbHAgICAgICAgICAgICAgRGlzcGxheSB0aGlzIGhlbHAnLFxuICAgIF0uam9pbignXFxuJylcbiAgfSxcbn1cbiJdfQ==