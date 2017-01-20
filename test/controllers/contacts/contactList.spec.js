describe('Contact List Controller: ', function () {

  var ctrl;
  var $q;
  var deferred;
  var apiMock;
  var scope;
  var state;

  beforeEach(module('contactsApp'));
  beforeEach(inject(function($controller, $q, $rootScope){
    scope = $rootScope.$new();
    state = {
      go: jasmine.createSpy()
    };
    deferred = $q.defer();
    apiMock = {
      getContactList: function(){
        return deferred.promise;
      }
    };
    ctrl = $controller('contactListController', {
      api: apiMock,
      $scope: scope,
      $state: state
    });

  }));

  it('should call the api service synchronously and asynchronously', function() {
    deferred.resolve('obj');
    apiMock.getContactList().then(function(){});
    expect(ctrl.contactList).toBeUndefined();
    scope.$apply();
    expect(ctrl.contactList).toBe('obj');
  });


  describe('Contact List after the api call', function(){
    beforeEach(function(){
      deferred.resolve(contactList);
      apiMock.getContactList().then(function(){});
      scope.$apply();
    })

    it('should has an list of 4 contacts', function(){
      expect(ctrl.contactList.length).toEqual(4);
      expect(ctrl.contactList[0].name).toEqual("leanne graham")
    });

    it('should add a new contact', function(){
      expect(ctrl.contactList.length).toEqual(4);
      ctrl.addContact(newContact, contactList);
      expect(ctrl.contactList.length).toEqual(5);
    });

    it('should call $state.go to show the contacts details', function(){
      ctrl.showContactDetail(contactList[0]);
      expect(state.go).toHaveBeenCalledWith('contact-details', {contact: contactList[0]})
    })
  });
});
