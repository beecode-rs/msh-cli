[![Build Status](https://beecode.semaphoreci.com/badges/msh-cli/branches/main.svg?style=shields)](https://beecode.semaphoreci.com/projects/msh-cli)
[![codecov](https://codecov.io/gh/beecode-rs/msh-cli/branch/main/graph/badge.svg?token=MCN43D1C15)](https://codecov.io/gh/beecode-rs/msh-cli)
[![GitHub license](https://img.shields.io/github/license/beecode-rs/msh-cli)](https://github.com/beecode-rs/msh-cli/blob/main/LICENSE)  
[![NPM](https://nodei.co/npm/@beecode/msh-cli.png)](https://nodei.co/npm/@beecode/msh-cli)

# msh-cli

Micro-service helper: cli

<!-- toc -->

- [Idea](#idea)
- [Configuration](#configuration)
- [Features](#features)
  - [git](#git)
  - [npm](#npm)
- [Help](#help)

<!-- tocstop -->

# Idea

This tool was created to be used in specific environment. We are using it for managing multiple microservice project that are
sitting next to each other in one parent project.

example: Project name = `Simple Project` (short `sp`)

```
sp                      <parent project>
├── auth                <microservice>
├── node-common         <shared library>
├── type-definitions    <shared typescript definitions>
├── .gitignore          <parent project is ignoring all microservice projects>
├── .msh
├── docker-compose.yml
```

First feature added was the git bach commands and it was used to easily and quickly clone all repositories and perform functions
like `git status` and `git pull`. Because of this we decided to have certain naming convention.

We chose to have a prefix for every project which takes first letters of the projects name `Simple Project` => `sp`, so for
authentication microservice we get `sp-auth`. But when we clone it strip the prefix.

# Configuration

configuration is stored in the file `.msh` located at the root of your project. You can generate init config file by
calling `msh -i`.

```dotenv
PROJECTS=["auth","node-common","type-definitions",..]
GIT_TEAM=TeamName
GIT_PROJECT_PREFIX=tn

LOG_LEVEL=error

CMD_GIT_ENABLED=true
CMD_NPM_ENABLED=true
```

Also you can use `.msh-user` (next to the `.msh`) at your root dir to store user override values like

```dotenv
GIT_USERNAME=gituser@mail.com
GIT_PASSWORD=*****
```

# Features

- [git](#git)
  - status
  - fetch
  - pull
  - clone
- [npm](#npm)
  - install

### git

Perform git commands on all project specified in `.mas` config file under `PROJECTS`. All commands are executed asynchronously.

- **status** - Get git status for all microservice projects

- **fetch** - Perform git fetch for all microservice projects

- **pull** - Perform git pull for all microservice projects

- **clone** - Clone all microservice projects. If `GIT_PROJECT_PREFIX` is set the project prefix is going to be striped for all
  projects.

### npm

- **install** - Run `npm -i` for all project listed in `PROJECTS`.

# Help

```text
Usage: msh [command]

Command:

   -i | --init             Initiate .msh config file with default values

   -g | --git [option]
       options:
          clone            Clone all project
          pull             Pull all projects
          fetch            Fetch all projects
          status           Get status for all projects

   -n | --npm  [option]    Run npm i in all containers
       options:
          install          Run npm i for all projects

   -v | --version          Display cli version

   -h | --help             Display this help
```
