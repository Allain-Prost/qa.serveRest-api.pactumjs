const { assert } = require("../../../../constants")
const { putProdutos } = require("../../../../core/src/service/produtos/putProduto.serviceById.service")
const { TC101 } = require("../../../../data/produtos/produtos.data")

describe(`Produtos - PUT`, () => {

  it(`[TC-101] - Deve validar a edição de um produto através do id com token inválido`, async () => {
    let editarNomeDoProduto = await putProdutos(TC101.tokenInvalido, TC101.idFake, TC101.editarProduto, 401)
    assert.equal(editarNomeDoProduto.json.message, TC101.message, 'A mensagem é diferente do esperado.')
  })
})