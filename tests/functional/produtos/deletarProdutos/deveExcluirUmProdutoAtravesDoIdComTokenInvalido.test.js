const { assert } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { deleteProdutosById } = require("../../../../core/src/service/produtos/deleteProdutosById.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC092 } = require("../../../../data/produtos/produtos.data")

describe(`Produtos - DELETE`, () => {

  let login, novoProduto
  before(`Deve realizar o cadastro de um adm, fazer o login e cadastrar um produto`, async () => {
    await postUsuarios({ nome: TC092.usuario.name, email: TC092.usuario.email, password: TC092.usuario.password, administrador: TC092.usuario.administrador })
    login = await postLogin({ email: TC092.usuario.email, password: TC092.usuario.password })
    novoProduto = await postProdutos(login.json.authorization, TC092.produto.nome, TC092.produto.preco, TC092.produto.descricao, TC092.produto.quantidade)
  })

  it(`[TC-092] - Deve validar a exclusão de um produto através do id com token inválido`, async () => {
    let deletarProduto = await deleteProdutosById(TC092.tokenInvalido, novoProduto.json._id, 401)
    assert.equal(deletarProduto.json.message, TC092.messagem, 'A mensagem é diferente do esperado.')
  })
})