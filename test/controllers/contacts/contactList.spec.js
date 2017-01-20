describe('Contact List Controller: ', function () {

  var ctrl;
  var $q;
  var deferred;
  var apiMock;
  var scope;
  var state;
  var contactList = [
    {
      name:"leanne graham",
      email:"leanne@gmail.com",
      job:"web developer",
      location:"london",
      tag:"friends",
      avatar:"http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },
    {
      name:"ervin howell",
      email:"ervin@gmail.com",
      job:"tech lead",
      location:"london",
      tag:"friends",
      avatar:"http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },
    {
      name:"clementine bauch",
      email:"clementine@gmail.com",job:"web developer",
      location:"liverpool",
      tag:"following",
      avatar:"http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },
    {
      name:"chelsey dietrich",
      email:"chelsey@gmail.com",
      job:"baker",
      location:"london",
      tag:"family",
      avatar:"http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    }
  ]
  var newContact = {
    name: 'Mattia',
    email: 'mattia.assogna@gmail.com',
    job: 'Software Developer',
    location: 'London',
    tag: 'friend'
  }

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


