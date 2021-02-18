/*Project 1 - Test1 */ 

Feature('Check main page items');

BeforeSuite(({I}) => { 
    I.amOnPage('/');
  });

//Check main page top menu items
Scenario('Check main page top menu items', ({ I, basePage }) => {

        I.seeElement(basePage.logo);
        I.seeElement(basePage.searchText);
        I.seeElement(basePage.detailSearch);
        I.seeElement(basePage.login);
        I.seeElement(basePage.register);
        I.seeElement(basePage.newclassified);
    });

// Check number of images
Scenario('Check number of images',({ I, basePage }) =>{
 
    I.seeNumberOfElements(basePage.numberOfImages,56);
    
   });
   
// Check left menu items
Scenario('Check left menu items', ({ I, basePage }) => {
    
    I.seeElement(basePage.vehicle);
    I.seeElement(basePage.automobile);
    I.seeElement(basePage.suv);
    I.seeElement(basePage.motorcycle);
});   
    

