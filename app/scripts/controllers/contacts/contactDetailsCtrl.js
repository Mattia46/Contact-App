angular.module('contactsApp')
  .controller('contactDetailsController', function($stateParams, $state){

    var self = this;
    self.contact = $stateParams.contact;

    self.close = function(){
      $state.go('home');
    };
  })
