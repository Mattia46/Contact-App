angular.module('contactApp', ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/views/contacts/contactList.html',
        controller: 'contactListController',
        controllerAs: 'contactListCtrl',
      });
 $urlRouterProvider.otherwise('/home');
  });
