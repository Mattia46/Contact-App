angular.module('contactsApp')
  .controller('contactDetailsController', function($stateParams, $state){

    console.log('contact', $stateParams);
    var self = this;

    self.contact = $stateParams.contact;

    self.close = function(){
      $state.go('home');
    };

  })
