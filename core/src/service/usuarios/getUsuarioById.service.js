const { specPactumJs } = require("../../../../constants");

async function getUsuarioById(id) {
  return await specPactumJs()
    .get(`${process.env.BASE_URL}/usuarios/{_id}`)
    .withPathParams({
      _id: id 
    })
    .expectStatus(200)
}

module.exports = {
  getUsuarioById
}