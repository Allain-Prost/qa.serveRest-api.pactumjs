const { assert, expect } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC070 } = require("../../../../data/produtos/produtos.data")

describe('Produtos - Post', async () => {

  let login
  before('Deve realizar o cadastro de um administrador e realizar login', async () => {
    await postUsuarios({ nome: TC070.usuario.name, email: TC070.usuario.email, password: TC070.usuario.password, administrador: TC070.usuario.administrador })
    login = await postLogin({ email: TC070.usuario.email, password: TC070.usuario.password })
  })

  it('[TC-070] - Deve validar o cadastro de um produto', async () => {
    let produto = await postProdutos(login.json.authorization, TC070.produto.nome, TC070.produto.preco, TC070.produto.descricao, TC070.produto.quantidade)
    assert.equal(produto.json.message, TC070.cadastroProduto.message)
    expect(produto.json).to.have.property('_id')
    expect(produto.json._id).to.be.a('string')
    expect(produto.json._id).to.have.lengthOf.above(0)
  })
})