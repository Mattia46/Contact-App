describe('Api service', function(){

  var apiMock;
  var httpBackend;
  beforeEach(module('contactsApp'))
  beforeEach(inject(function(api, $httpBackend){
    apiMock = api,
    httpBackend = $httpBackend

    httpBackend.when('GET', "http://www.mocky.io/v2/58088826100000e9232b75b0")
      .respond({contact: 'Mattia Assogna'})
  }))

  it('should has getContactList defined', function(){
    expect(apiMock.getContactList).toBeDefined();
  });

  it('should call mocky url', function(){
    apiMock.getContactList()
    httpBackend.flush();
    httpBackend.expectGET("http://www.mocky.io/v2/58088826100000e9232b75b0");
  });
});


