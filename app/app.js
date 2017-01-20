angular.module('contactApp', ['ui.router'])

  .config(function ($stateProvider) {
   $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl',
      });
  });
