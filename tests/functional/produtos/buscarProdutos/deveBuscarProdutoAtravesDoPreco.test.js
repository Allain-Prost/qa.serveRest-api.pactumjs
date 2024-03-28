const { assert } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { getProdutos } = require("../../../../core/src/service/produtos/getProdutos.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC080 } = require("../../../../data/produtos/produtos.data")

describe(`Produtos - GET`, () => {

  let login
  before(`Deve realizar o cadastro de um adm, fazer o login e cadastrar um produto`, async () => {
    await postUsuarios({ nome: TC080.usuario.name, email: TC080.usuario.email, password: TC080.usuario.password, administrador: TC080.usuario.administrador })
    login = await postLogin({ email: TC080.usuario.email, password: TC080.usuario.password })
    await postProdutos(login.json.authorization, TC080.produto.nome, TC080.produto.preco, TC080.produto.descricao, TC080.produto.quantidade)
  })

  it(`[TC-080] - Deve validar a busca de um produto através do preço`, async () => {
    let buscarProduto = await getProdutos({preco: TC080.produto.preco})
    buscarProduto = buscarProduto.json.produtos[0]
    assert.equal(buscarProduto.nome, TC080.produto.nome, 'O nome do produto é diferente do esperado')
    assert.equal(buscarProduto.descricao, TC080.produto.descricao, 'A descricao do produto é diferente do esperado')
    assert.equal(buscarProduto.quantidade, TC080.produto.quantidade, 'A quantidade do produto é diferente do esperado')
    assert.equal(buscarProduto.preco, TC080.produto.preco, 'O preco do produto é diferente do esperado')
  })
})