const { assert } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { getProdutos } = require("../../../../core/src/service/produtos/getProdutos.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC083 } = require("../../../../data/produtos/produtos.data")

describe(`Produtos - GET`, () => {

  let login, novoProduto
  before(`Deve realizar o cadastro de um adm, fazer o login e cadastrar um produto`, async () => {
    await postUsuarios({ nome: TC083.usuario.name, email: TC083.usuario.email, password: TC083.usuario.password, administrador: TC083.usuario.administrador })
    login = await postLogin({ email: TC083.usuario.email, password: TC083.usuario.password })
    novoProduto = await postProdutos(login.json.authorization, TC083.produto.nome, TC083.produto.preco, TC083.produto.descricao, TC083.produto.quantidade)
  })

  it(`[TC-083] - Deve validar a busca de produto utilizando todos os filtros`, async () => {
    let buscarProduto = await getProdutos({id: novoProduto.json._id, nome: TC083.produto.nome, preco: TC083.produto.preco, descricao: TC083.produto.descricao, quantidade: TC083.produto.quantidade})
    buscarProduto = buscarProduto.json.produtos[0]
    assert.equal(buscarProduto.nome, TC083.produto.nome, 'O nome do produto é diferente do esperado')
    assert.equal(buscarProduto.descricao, TC083.produto.descricao, 'A descricao do produto é diferente do esperado')
    assert.equal(buscarProduto.quantidade, TC083.produto.quantidade, 'A quantidade do produto é diferente do esperado')
    assert.equal(buscarProduto.preco, TC083.produto.preco, 'O preco do produto é diferente do esperado')
  })
})