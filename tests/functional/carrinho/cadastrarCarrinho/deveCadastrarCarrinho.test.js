const { assert, expect } = require("../../../../constants")
const { postCarrinhos } = require("../../../../core/src/service/carrinho/postCarrinho.service")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC110 } = require("../../../../data/produtos/produtos.data")

describe('Carrinho - Post', async () => {

  let loginAdm, loginCliente, produto, produtoMontado = []
  before('Deve realizar o cadastro de um administrador e de um cliente, deve realizar login de ambos os usuários; Deve cadastrar um produto e adicionar esse produto a um carrinho', async () => {
    await postUsuarios({ nome: TC110.adm.name, email: TC110.adm.email, password: TC110.adm.password, administrador: TC110.adm.administrador })
    await postUsuarios({ nome: TC110.cliente.name, email: TC110.cliente.email, password: TC110.cliente.password, administrador: TC110.cliente.administrador })
    loginAdm = await postLogin({ email: TC110.adm.email, password: TC110.adm.password })
    loginCliente = await postLogin({ email: TC110.cliente.email, password: TC110.cliente.password })
    produto = await postProdutos(loginAdm.json.authorization, TC110.produto.nome, TC110.produto.preco, TC110.produto.descricao, TC110.produto.quantidade)
  })

  it('[TC-110] - Deve validar o cadastro de um carrinho', async () => {
    produtoMontado.push({ idProduto: produto.json._id, quantidade: 1 })
    let carrinho = await postCarrinhos({authorization: loginCliente.json.authorization, produtos: produtoMontado})
    assert.equal(carrinho.json.message, TC110.cadastroCarrinho.message)
    expect(carrinho.json).to.have.property('_id')
    expect(carrinho.json._id).to.be.a('string')
    expect(carrinho.json._id).to.have.lengthOf.above(0)
  })
})