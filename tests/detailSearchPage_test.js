/*Project 1 - Test2 */

Feature('Detail Search');

 var minimum='1998';
 var maximum='1999';
 var security= 'Çekiş Kontrolü';

 
 BeforeSuite(({I}) => { 
  I.amOnPage('/');
});


Scenario('Detailed search with given values', ({I, basePage}) => {
  
 // Click on detailed search then select given motorcycles model
 I.click(basePage.detailSearch);
 I.click(basePage.vehicles);
 I.waitForElement(basePage.motorcycles, 10); // secs
 I.click(basePage.motorcycles);
 I.amOnPage(basePage.mt07ABS);

 // Fill min and max years
 I.fillField(basePage.minYear,minimum);
 I.fillField(basePage.maxYear,maximum);
 I.scrollTo(basePage.minYear, 120, 100);
 I.wait(2);

 // Select color as grey
 I.scrollTo(basePage.footerMenu,100,100)
 I.click(basePage.color);
 I.waitForElement(basePage.color);
 I.click(basePage.grey);
 
 
 // Select security as Çekiş Kontrolü
 I.scrollTo(basePage.footerMenu,100,100)
 I.click(security);

 //Control search result
 I.click(basePage.searchButton);
 I.waitForText(basePage.notFound,10);

});