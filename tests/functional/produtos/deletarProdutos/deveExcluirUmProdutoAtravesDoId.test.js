const { assert } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { deleteProdutosById } = require("../../../../core/src/service/produtos/deleteProdutosById.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC090 } = require("../../../../data/produtos/produtos.data")

describe(`Produtos - DELETE`, () => {

  let login, novoProduto
  before(`Deve realizar o cadastro de um adm, fazer o login e cadastrar um produto`, async () => {
    await postUsuarios({ nome: TC090.usuario.name, email: TC090.usuario.email, password: TC090.usuario.password, administrador: TC090.usuario.administrador })
    login = await postLogin({ email: TC090.usuario.email, password: TC090.usuario.password })
    novoProduto = await postProdutos(login.json.authorization, TC090.produto.nome, TC090.produto.preco, TC090.produto.descricao, TC090.produto.quantidade)
  })

  it(`[TC-090] - Deve validar a exclusão de um produto através do id;`, async () => {
    let deletarProduto = await deleteProdutosById(login.json.authorization, novoProduto.json._id)
    assert.equal(deletarProduto.json.message, TC090.messagem, 'A mensagem é diferente do esperado.')
  })
})