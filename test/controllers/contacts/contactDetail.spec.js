describe('Contact Details', function(){

  var ctrl;
  var state;
  var stateParams;
  var scope;
  var contact = {
    name: 'Mattia',
    email: 'mattia.assogna@gmail.com',
    job: 'Software Developer',
    location: 'London',
    tag: 'friend'
  }


  beforeEach(module('contactsApp'))
  beforeEach(inject(function($rootScope, $controller){
    state = {
      go: jasmine.createSpy()
    }
    stateParams = {
      contact: contact
    }
    ctrl = $controller('contactDetailsController', {
      $state: state,
      $stateParams: stateParams
    })
  }))

  it('should receive a contact', function(){
    expect(ctrl.contact).toBe(contact);
  });

  it('should redirect to home if close', function(){
    ctrl.close();
    expect(state.go).toHaveBeenCalledWith('home');
  })
})
