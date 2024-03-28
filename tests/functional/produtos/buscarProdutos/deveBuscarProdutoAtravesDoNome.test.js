const { assert } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { getProdutos } = require("../../../../core/src/service/produtos/getProdutos.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC082 } = require("../../../../data/produtos/produtos.data")

describe(`Produtos - GET`, () => {

  let login
  before(`Deve realizar o cadastro de um adm, fazer o login e cadastrar um produto`, async () => {
    await postUsuarios({ nome: TC082.usuario.name, email: TC082.usuario.email, password: TC082.usuario.password, administrador: TC082.usuario.administrador })
    login = await postLogin({ email: TC082.usuario.email, password: TC082.usuario.password })
    await postProdutos(login.json.authorization, TC082.produto.nome, TC082.produto.preco, TC082.produto.descricao, TC082.produto.quantidade)
  })

  it(`[TC-082] - Deve validar a busca de um produto através do nome`, async () => {
    let buscarProduto = await getProdutos({nome: TC082.produto.nome})
    buscarProduto = buscarProduto.json.produtos[0]
    assert.equal(buscarProduto.nome, TC082.produto.nome, 'O nome do produto é diferente do esperado')
    assert.equal(buscarProduto.descricao, TC082.produto.descricao, 'A descricao do produto é diferente do esperado')
    assert.equal(buscarProduto.quantidade, TC082.produto.quantidade, 'A quantidade do produto é diferente do esperado')
    assert.equal(buscarProduto.preco, TC082.produto.preco, 'O preco do produto é diferente do esperado')
  })
})