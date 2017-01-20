angular.module('contactsApp')
  .controller('contactListController', function(api, $state, $scope){

    var self = this;

    (function(){
      api.getContactList().then(function(data){
        self.contactList = data;
      }).catch(function(e){
        console.log('error')
      })
    })();

    self.showContactDetail = function(contact){
      $state.go('contact-details', {contact: contact});
    }

    self.addContact = function(newContact, list){
      $scope.addContact = false;
      $scope.newContact = {};
      return list.unshift(newContact);
    }
  });

