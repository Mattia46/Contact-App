## CONTACT APP
The task is to build a *responsive website* to show a list of contacts, showing their full name, email and profile photo.
The user can click on each contact to see more granular details and add new contacts as well.
The app respect the separation of concerns.
The angular version used is the 1.6.1 This version has changed the way how to handle the $http promise. Now use then and
catch instead of success and error. 

## Technologies used

* Javascript
* AngularJS
* Jasmine
* Karma
* Protractor
* Selenium
* HTML
* CSS
* FlexBox

## Testing

I am using Jasmine as a test framework, [Karma](https://karma-runner.github.io/0.13/index.html) as a test runner and [Protractor](http://angular.github.io/protractor/#/) for the end to end Test

## In order to test the app you need to have installed globally:

* [NodeJS](https://nodejs.org/en/);
* [karma](https://karma-runner.github.io/0.13/index.html);
* [Protractor](http://angular.github.io/protractor/#/);

#### Clone the repo
```
$ git clone https://github.com/Mattia46/Contact-App.git
$ cd Contact-App
```

#### Install webdriver and a server (I've used http-server)
```
$ webdriver-manager update
```

####  Install the dependencies
```
$ npn install
```

## How to run functional test:

* Run the webdriver manager
```
$ npm start
$ webdriver-manager start
```
* Run protractor from the main folder
```
$ protractor test/e2e/conf.js
```

## How to run the unit test:
```
$ npm test
```

## Webpage:
```
$ npm start
http://localhost:3000/
```
## Notable issues

* Although all the tests pass, there are also not as many protractor tests as I would like to have because even if
I allowed the CORS in the api headers, the response to preflight request doesn't pass access control check.
In the Chrome browser I have used Allow-Control-Allow-Origin: * plugin

## Troubleshooting:
* If webdriver refuse to connect, that means that the chrome version used is not compatible. You need to update it:
```
$ npm cache clean
$ webdriver-manager clean
$ npm install -g webdriver-manager
```
