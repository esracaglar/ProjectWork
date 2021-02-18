/*Project 2 - Test3 */

const frisby = require('frisby');
const baseURL = 'https://restcountries.eu/rest/v2/name/turkey';
const bordersURL='https://restcountries.eu/rest/v2/alpha/';

it('Test-3: Verfiy Turkey Borders', function () {
  return frisby.get(baseURL)
  .expect('header', 'Content-Type', 'application/json;charset=UTF-8')
  .then(function (tur) {
    var body = tur['_body'];
    var aze= body[0]['borders'][1];
    return frisby.get(bordersURL + aze)
    .expect('status', 200)
  })
    .then(function (res_az) {
      var data_az=JSON.parse(JSON.stringify(res_az['_body']));
      expect(data_az.capital).toBe('Baku')
  })
});