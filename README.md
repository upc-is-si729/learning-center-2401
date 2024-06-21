# Learning Center Web Application

## Summary
Learning Center Application, illustrating CRUD behavior and in-app navigation, with Angular Material and Angular Router. It also uses a JSON Server Fake API.

## Features
- Material Design
- JSON Server Fake API
- CRUD operations
- In-app navigation

## Dependencies
- Angular Material
- Angular Router
- JSON Server
- HttpClient
- Reactive Forms


## Fake API start
Run the following commands to start the fake API server:
```bash
cd server
sh start.sh

```

## Identity and Access Management Features
In  this version, the application includes support for user identity and access management. The following features are available:
- Sign Up
- Sign In
- Sign Out

In order to use these features, you need to replace the server base path to use the Identity and Access Management Server implemented with Spring Boot. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
