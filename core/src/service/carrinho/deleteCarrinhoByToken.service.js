const { specPactumJs } = require("../../../../constants");

async function deletarCarrinhoCacnelarCompra(authorization, _id, statusCodeResponse = 200) {
  return await specPactumJs()
  .delete(`${process.env.BASE_URL}/carrinhos/cancelar-compra`)
  .withHeaders("authorization", authorization)
  .expectStatus(statusCodeResponse)
}

module.exports = {
  deletarCarrinhoCacnelarCompra
}