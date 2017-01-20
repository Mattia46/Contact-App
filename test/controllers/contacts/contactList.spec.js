describe('Contact List Controller: ', function () {

  var ctrl;
  var $q;
  var deferred;
  var apiMock;
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

  beforeEach(module('contactsApp'));
  beforeEach(inject(function($controller, $q){
    deferred = $q.defer();
    apiMock = {
      getContactList: function(){
        return deferred.promise;
      }
    };
    ctrl = $controller('contactListController', {
      api: apiMock,
    });

  }));

  it('should call the api service synchronously and asynchronously', inject(function($rootScope) {
    deferred.resolve('obj');
    apiMock.getContactList().then(function(){});
    expect(ctrl.contactList).toBeUndefined();
    $rootScope.$apply();
    expect(ctrl.contactList).toBe('obj');
  }));

  it('should has an list of 4 contacts', inject(function($rootScope){
    deferred.resolve(contactList);
    apiMock.getContactList().then(function(){});
    $rootScope.$apply();
    expect(ctrl.contactList.length).toEqual(4);
    expect(ctrl.contactList[0].name).toEqual("leanne graham")
  }));
});



