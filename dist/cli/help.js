"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = void 0;
const util_1 = require("src/util");
const help = {
    printHelp: () => {
        util_1.util.log(`
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
`);
    },
};
exports.help = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvaGVscC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBK0I7QUFFL0IsTUFBTSxJQUFJLEdBQUc7SUFDWCxTQUFTLEVBQUUsR0FBUyxFQUFFO1FBQ3BCLFdBQUksQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXdCWixDQUFDLENBQUE7SUFDQSxDQUFDO0NBQ0YsQ0FBQTtBQUVRLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXRpbCB9IGZyb20gJ3NyYy91dGlsJ1xuXG5jb25zdCBoZWxwID0ge1xuICBwcmludEhlbHA6ICgpOiB2b2lkID0+IHtcbiAgICB1dGlsLmxvZyhgXG5Vc2FnZTogbXNoIFtvcHRpb24uLi5dXG5cbk9wdGlvbnM6XG5cbiAgIC1nIHwgLS1naXQgW2NtZF1cbiAgICAgIGNtZDpcbiAgICAgICAgICBjbG9uZSAgICAgICAgQ2xvbmUgYWxsIHByb2plY3RcbiAgICAgICAgICBwdWxsICAgICAgICAgUHVsbCBhbGwgcHJvamVjdHNcbiAgICAgICAgICBmZXRjaCAgICAgICAgRmV0Y2ggYWxsIHByb2plY3RzXG4gICAgICAgICAgc3RhdHVzICAgICAgIEdldCBzdGF0dXMgZm9yIGFsbCBwcm9qZWN0c1xuXG4gICAtaSB8IC0taW5pdCAgICAgICAgIEluaXRpYXRlIC5tc2ggY29uZmlnIGZpbGUgd2l0aCBkZWZhdWx0IHZhbHVlc1xuXG4gICAtYyB8IC0tY2xlYW4gW2NtZF1cbiAgICAgIGNtZDpcbiAgICAgICAgICBucG0gICAgICAgICAgQ2xlYW4gYWxsIG5vZGVfbW9kdWxlcyBmb2xkZXJzXG4gICAgICAgICAgZG9ja2VyICAgICAgIFJlbW92ZSBhbGwgZG9ja2VyIGltYWdlcyAoZG8gYSBcImRvY2tlci1jb21wb3NlIGRvd25cIiBjb21tYW5kIGZpcnN0KVxuXG4gICAtbiB8IC0tbnBtICAgICAgICAgIFJ1biBucG0gaSBpbiBhbGwgY29udGFpbmVyc1xuXG4gICAtcCB8IC0tcHIgICAgICAgICAgIEdlbmVyYXRlIFBSIGZvciBhbGwgcHJvamVjdHMgKGFkZGVkIG9wdGlvbiB0byBhdXRvIG1lcmdlKVxuXG4gICAtaCB8IC0taGVscCAgICAgICAgIERpc3BsYXkgdGhpcyBoZWxwXG5gKVxuICB9LFxufVxuXG5leHBvcnQgeyBoZWxwIH1cbiJdfQ==