/*Project 2 - Test1 */

const frisby = require('frisby');
const baseURL = 'https://restcountries.eu/rest/v2';

it('Test-1: Verfiy Service and Country Specifics', function () {
  return frisby.get(baseURL)
  .expect('header', 'Content-Type', 'application/json;charset=UTF-8')
  .expect('status', 200)
  .then(function (res) {
     var data=JSON.parse(JSON.stringify(res['_body']));
     expect(data).toHaveLength(250);
     expect(data).toContainEqual(expect.objectContaining({name: 'Turkey', alpha2Code: 'TR', alpha3Code: 'TUR'}));
  })
});
	 
