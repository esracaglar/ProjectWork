/*Project 1 - Test3 */ 

let assert = require('assert');

Feature('Compare results');

BeforeSuite(({I}) => { 
  I.amOnPage('/');
});

// Create a data table for storing test data
let accounts = new DataTable(['search','result']); 
  
accounts.add(['Yamaha MT07','34']);
accounts.add(['Yamaha MT09','17']);
accounts.add(['Yamaha MT25','50']);

// Compare search results with data table values
Data(accounts).Scenario('Compare search results for Yamaha',async({I, current, basePage}) =>{
  

  // Search data table values  
  I.fillField(basePage.searchText, current.search); 
  I.click(basePage.mainSearchButton);
  const isButtonRendered = await I.grabNumberOfVisibleElements(basePage.motorcycleyamaha)

  // Check motocycle button is rendered
 if(isButtonRendered>=1){
  I.click(basePage.motorcycleyamaha)
 }

 // Assert values
 const value = await I.grabTextFrom(basePage.searchResult); 
 assert.equal(value, current.result)
 
 
});
