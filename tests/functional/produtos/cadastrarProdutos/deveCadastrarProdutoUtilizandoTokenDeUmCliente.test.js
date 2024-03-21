const { assert } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC073 } = require("../../../../data/produtos/produtos.data")

describe('Produtos - Post', async () => {

  let login
  before('Deve realizar o cadastro de um administrador e realizar login', async () => {
    await postUsuarios({ nome: TC073.usuario.name, email: TC073.usuario.email, password: TC073.usuario.password, administrador: TC073.usuario.administrador })
    login = await postLogin({ email: TC073.usuario.email, password: TC073.usuario.password })
  })

  it('[TC-073] - Deve validar o cadastro de um produto utilizando um token de um cliente', async () => {
    let produto = await postProdutos(login.json.authorization, TC073.produto.nome, TC073.produto.preco, TC073.produto.descricao, TC073.produto.quantidade, 403)
    assert.equal(produto.json.message, TC073.cadastroProduto.message)
  })
})