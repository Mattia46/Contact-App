angular.module('contactsApp', ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/views/contacts/contactList.html',
        controller: 'contactListController',
        controllerAs: 'contactListCtrl',
      })
      .state('contact-details', {
        url: '/details',
        templateUrl: 'app/views/contacts/contactDetails.html',
        controller: 'contactDetailsController',
        controllerAs: 'contactDetailsCtrl',
        params: {
          contact: null
        }

      })
    $urlRouterProvider.otherwise('/home');
  });
