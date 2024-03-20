const { specPactumJs } = require("../../../../constants")

async function postProdutos(authorization, nome, preco, descricao, quantidade, statusCodeResponse = 201) {
  return await specPactumJs()
    .post(`${process.env.BASE_URL}/produtos`)
    .withHeaders("authorization", authorization)
    .withBody({
      "nome": nome,
      "preco": preco,
      "descricao": descricao,
      "quantidade": quantidade
    })
    .expectStatus(statusCodeResponse)
}

module.exports = {
  postProdutos
}