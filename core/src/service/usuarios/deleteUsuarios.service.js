const { specPactumJs } = require("../../../../constants");

async function deleteUsuario(id){
  return await specPactumJs()
    .delete(`${process.env.BASE_URL}/usuarios/{_id}`)
    .withPathParams({
      _id: id
    })
    .expectStatus(200)
}

module.exports = {
  deleteUsuario
}