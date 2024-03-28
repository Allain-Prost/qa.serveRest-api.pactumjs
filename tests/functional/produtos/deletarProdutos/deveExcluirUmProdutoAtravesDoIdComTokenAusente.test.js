const { assert } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { deleteProdutosById } = require("../../../../core/src/service/produtos/deleteProdutosById.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC093 } = require("../../../../data/produtos/produtos.data")

describe(`Produtos - DELETE`, () => {

  let login, novoProduto
  before(`Deve realizar o cadastro de um adm, fazer o login e cadastrar um produto`, async () => {
    await postUsuarios({ nome: TC093.usuario.name, email: TC093.usuario.email, password: TC093.usuario.password, administrador: TC093.usuario.administrador })
    login = await postLogin({ email: TC093.usuario.email, password: TC093.usuario.password })
    novoProduto = await postProdutos(login.json.authorization, TC093.produto.nome, TC093.produto.preco, TC093.produto.descricao, TC093.produto.quantidade)
  })

  it(`[TC-093] - Deve validar a exclusão de um produto através do id com token ausente`, async () => {
    let deletarProduto = await deleteProdutosById(TC093.tokenAusente, novoProduto.json._id, 401)
    assert.equal(deletarProduto.json.message, TC093.messagem, 'A mensagem é diferente do esperado.')
  })
})