# Affordable Housing

This is the start of the affordable Housing for Durham website, which is part of [Code for Durham](http://codefordurham.com/).

This project is built with Vue, Quasar, and D3

Documentation for Vue:

https://vuejs.org/v2/guide/

Documentation for Quasar:

http://quasar-framework.org/

The map was derived from the d3 cartogram, at:

https://github.com/shawnbot/topogram,


The data for the map was obtained from the NC OneMap at:

http://www.nconemap.com/ and from Durham Neighborhood Commpass at:

http://compass.durhamnc.gov/

**Getting up and running**

Clone or download this repo.

Install dependencies
```
$ npm install
```
Run the front end on localhost
```
$ npm run dev
```

This application is currently configured to access data through a Django Rest Framework (DRF). The current DRF for this project is datahub-be. You need to clone or download this GitHub repository and follow the instructions in the README:

https://github.com/codefordurham/datahub-be

The back end provides the data to generate the maps. When it is setup and running the maps will show in the app.

## Quasar App

> A Quasar project

Install Quasar globally in your machine to get use of the CLIs
```
npm install -g quasar-cli
```

## Build Setup

``` bash

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```

## Contributing
Contact [Colin Copeland](https://github.com/copelco) to request write permission to the repos.

Read through the USERSTORIES.md and TODO.md. User stories are the desired features of the application. Todos are items like researching technologies that we may use or how to implement a feature.

Look at the issues on the repos. Claim an issue under 'Assignees' by assigning yourself to the issue.

Pull from master branch. Switch to a branch `git checkout -b <your name>`. Only push to your branch. Do not push to master! Run your branch locally to check for errors before submitting a pull request. In the comments, reference the issue number that the pull request resolves, or any questions.
