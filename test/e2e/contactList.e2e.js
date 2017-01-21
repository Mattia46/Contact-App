describe('Contact App', function(){
  it('should has a title', function(){
    browser.get('/');
    expect(browser.getTitle()).toEqual('Contact App')
  })

  it('should show or hide the add new contact form', function(){
    var button = element(by.id('addContactButton'));
    var newContact = element(by.model('newContact.name'));
    expect(newContact.isPresent()).toBe(false);
    button.click()
    expect(newContact.isPresent()).toBe(true);
  })

  it('should add a new contact', function(){
    var contact = {};
    contact.name = element(by.model('newContact.name')).sendKeys('Mattia');
    contact.email = element(by.model('newContact.email')).sendKeys('Mattia.assogna@gmail.com');
    name = element(by.model('newContact.name')).sendKeys('Mattia');
    contact. job = element(by.model('newContact.job')).sendKeys('Software Developer');
    contact.location = element(by.model('newContact.location')).sendKeys('London');
    contact.tag = element(by.model('newContact.tag')).sendKeys('Friend');
    contact.button = element(by.buttonText('Confirm'));
    var contacts = element.all(by.repeater('contact in contactListCtrl.contactList'));
    expect(contacts.first()).toBe(contact);
  })
})
