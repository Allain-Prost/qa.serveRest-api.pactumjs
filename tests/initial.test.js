// test.js
const { spec } = require('pactum');

it('should get a response with status code 200', async () => {
  await spec()
    .get('https://serverest.dev/#/')
    .expectStatus(200);
});
