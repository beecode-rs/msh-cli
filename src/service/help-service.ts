export const helpService = {
  text: (): string => {
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
`
  },
}
