angular.module('contactsApp')
  .controller('contactListController', function(api){

    var self = this;

    (function(){
      api.getContactList().then(function(data){
        self.contactList = data;
      }).catch(function(e){
        console.log('error')
      })
    })();
  });

