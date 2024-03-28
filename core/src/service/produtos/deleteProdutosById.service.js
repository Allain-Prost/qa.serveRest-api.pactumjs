const { specPactumJs } = require("../../../../constants");

async function deleteProdutosById(authorization, _id, statusCodeResponse = 200) {
  return await specPactumJs()
  .delete(`${process.env.BASE_URL}/produtos/{_id}`)
  .withHeaders("authorization", authorization)
  .withPathParams("_id", _id)
  .expectStatus(statusCodeResponse)
}

module.exports = {
  deleteProdutosById
}