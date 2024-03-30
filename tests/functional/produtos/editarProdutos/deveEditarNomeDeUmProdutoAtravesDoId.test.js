const { assert } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { putProdutos } = require("../../../../core/src/service/produtos/putProduto.serviceById.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC100 } = require("../../../../data/produtos/produtos.data")

describe(`Produtos - PUT`, () => {

  let login, novoProduto
  before(`Deve realizar o cadastro de um adm, fazer o login e cadastrar um produto`, async () => {
    await postUsuarios({ nome: TC100.usuario.name, email: TC100.usuario.email, password: TC100.usuario.password, administrador: TC100.usuario.administrador })
    login = await postLogin({ email: TC100.usuario.email, password: TC100.usuario.password })
    novoProduto = await postProdutos(login.json.authorization, TC100.produto.nome, TC100.produto.preco, TC100.produto.descricao, TC100.produto.quantidade)
  })

  it(`[TC-100] - Deve validar a edição do nome de um produto através do id;`, async () => {
    let editarNomeDoProduto = await putProdutos(login.json.authorization, novoProduto.json._id, TC100.editarProduto)
    assert.equal(deletarProduto.json.message, TC100.messagem, 'A mensagem é diferente do esperado.')
  })
})