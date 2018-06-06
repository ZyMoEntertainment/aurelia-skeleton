# Aurelia Skeleton

## Setup Node Environment
1) Ensure you have node 8.0+ installed
2) Open a terminal on the root directory and type `npm install`

## Install Gulp CLI
1) Run `npm install -g gulp-cli`

## Install Aurelia CLI
1) Run `npm install -g aurelia-cli`

## Running the app locally
1a) Run `au run --watch` to run with browsersync live reload

1b) Run `au run` to run without live reload

##NOTES:
1) Anytime you install a new NPM package you will also need to stick the necessary dependencies inside the `/aurelia_project/aurelia.json` file
2) Environments are setup within the `/aurelia_projects/environments` directory 
3) Routes are setup in the `/src/app.js file`
4) The main configuration is done in the `/src/main.js` file
5) Global resources that can be used in any aurelia project, and most other frameworks with some very minor changes can be found in `/src/resources/` directory


Enjoy
