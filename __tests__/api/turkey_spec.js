/*Project 2 - Test3 */

const frisby = require('frisby');
const baseURL = 'https://restcountries.eu/rest/v2/name/turkey';


it('Test-2: Verfiy Turkey Specifics', function () {
  return frisby.get(baseURL)
  .expect('header', 'Content-Type', 'application/json;charset=UTF-8')
  .then(function (res) {
    var body = res['_body'];
    expect(Array.isArray(body)).toBe(true);
    expect(body).toHaveLength(1);
    expect(body[0]).toHaveProperty('name');
    expect(body[0]).toHaveProperty('population');
    expect(body[0]).toHaveProperty('alpha2Code');
    expect(body[0]).toHaveProperty('area');
    expect(body[0]).toMatchObject({
      name: expect.any(String),
      population:expect.any(Number)
      
    });

  })
});
	 
