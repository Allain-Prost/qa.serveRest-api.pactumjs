const { assert, expect } = require("../../../../constants")
const { deletarCarrinhoCacnelarCompra } = require("../../../../core/src/service/carrinho/deleteCarrinhoByToken.service")
const { postCarrinhos } = require("../../../../core/src/service/carrinho/postCarrinho.service")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC120 } = require("../../../../data/produtos/produtos.data")

describe('Carrinho - Post', async () => {

  let loginAdm, loginCliente, produto, produtoMontado = []
  before('Deve realizar o cadastro de um administrador e de um cliente, deve realizar login de ambos os usuários; Deve cadastrar um produto e adicionar esse produto a um carrinho', async () => {
    await postUsuarios({ nome: TC120.adm.name, email: TC120.adm.email, password: TC120.adm.password, administrador: TC120.adm.administrador })
    await postUsuarios({ nome: TC120.cliente.name, email: TC120.cliente.email, password: TC120.cliente.password, administrador: TC120.cliente.administrador })
    loginAdm = await postLogin({ email: TC120.adm.email, password: TC120.adm.password })
    loginCliente = await postLogin({ email: TC120.cliente.email, password: TC120.cliente.password })
    produto = await postProdutos(loginAdm.json.authorization, TC120.produto.nome, TC120.produto.preco, TC120.produto.descricao, TC120.produto.quantidade)
    produtoMontado.push({ idProduto: produto.json._id, quantidade: 1})
    await postCarrinhos({authorization: loginCliente.json.authorization, produtos: produtoMontado})
})

  it('[TC-120] - Deve validar a exclusão de um carrinho através do token do cliente', async () => {
    let excluirCarrinho = await deletarCarrinhoCacnelarCompra(loginCliente.json.authorization)
    assert.equal(excluirCarrinho.json.message, TC120.excluirCarrinho.message)
  })
})