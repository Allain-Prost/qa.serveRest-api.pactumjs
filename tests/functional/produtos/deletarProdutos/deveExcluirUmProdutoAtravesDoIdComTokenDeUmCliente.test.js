const { assert } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { deleteProdutosById } = require("../../../../core/src/service/produtos/deleteProdutosById.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC094 } = require("../../../../data/produtos/produtos.data")

describe(`Produtos - DELETE`, () => {

  let login, novoProduto
  before(`Deve realizar o cadastro de um adm, fazer o login e cadastrar um produto`, async () => {
    await postUsuarios({ nome: TC094.usuario.name, email: TC094.usuario.email, password: TC094.usuario.password, administrador: TC094.usuario.administrador })
    login = await postLogin({ email: TC094.usuario.email, password: TC094.usuario.password })
    novoProduto = await postProdutos(login.json.authorization, TC094.produto.nome, TC094.produto.preco, TC094.produto.descricao, TC094.produto.quantidade, 403)
  })

  it(`[TC-094] - Deve validar a exclusão de um produto com token de um cliente`, async () => {
    let deletarProduto = await deleteProdutosById(login.json.authorization, novoProduto.json._id, 403)
    assert.equal(deletarProduto.json.message, TC094.messagem, 'A mensagem é diferente do esperado.')
  })
})