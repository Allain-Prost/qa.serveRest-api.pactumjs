const { specPactumJs } = require("../../../../constants")

async function postCarrinhos({authorization, produtos, statusCodeResponse = 201}) {
  return await specPactumJs()
    .post(`${process.env.BASE_URL}/carrinhos`)
    .withHeaders({
        authorization: authorization
    })
    .withBody({
        produtos: produtos
    })
    .expectStatus(statusCodeResponse)
}

module.exports = {
  postCarrinhos
}