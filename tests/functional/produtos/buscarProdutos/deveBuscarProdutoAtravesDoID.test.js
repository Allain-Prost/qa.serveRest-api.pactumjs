const { assert } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { getProdutos } = require("../../../../core/src/service/produtos/getProdutos.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC081 } = require("../../../../data/produtos/produtos.data")

describe(`Produtos - GET`, () => {

  let login, novoProduto
  before(`Deve realizar o cadastro de um produto`, async () => {
    await postUsuarios({ nome: TC081.usuario.name, email: TC081.usuario.email, password: TC081.usuario.password, administrador: TC081.usuario.administrador })
    login = await postLogin({ email: TC081.usuario.email, password: TC081.usuario.password })
    novoProduto = await postProdutos(login.json.authorization, TC081.produto.nome, TC081.produto.preco, TC081.produto.descricao, TC081.produto.quantidade)
  })

  it(`[TC-081] - Deve buscar o produto através do id`, async () => {
    let buscarProduto = await getProdutos({id: novoProduto.json._id})
    buscarProduto = buscarProduto.json.produtos[0]
    assert.equal(buscarProduto.nome, TC081.produto.nome, 'O nome do produto é diferente do esperado')
    assert.equal(buscarProduto.descricao, TC081.produto.descricao, 'A descricao do produto é diferente do esperado')
    assert.equal(buscarProduto.quantidade, TC081.produto.quantidade, 'A quantidade do produto é diferente do esperado')
    assert.equal(buscarProduto.preco, TC081.produto.preco, 'O preco do produto é diferente do esperado')
  })
})