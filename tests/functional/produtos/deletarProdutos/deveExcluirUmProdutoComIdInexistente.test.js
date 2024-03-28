const { assert } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { deleteProdutosById } = require("../../../../core/src/service/produtos/deleteProdutosById.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC091 } = require("../../../../data/produtos/produtos.data")

describe(`Produtos - DELETE`, () => {

  let login
  before(`Deve realizar o cadastro de um adm e fazer o login`, async () => {
    await postUsuarios({ nome: TC091.usuario.name, email: TC091.usuario.email, password: TC091.usuario.password, administrador: TC091.usuario.administrador })
    login = await postLogin({ email: TC091.usuario.email, password: TC091.usuario.password })
  })

  it(`[TC-091] - Deve validar a exclusão de um produto com Id inexistente`, async () => {
    let deletarProduto = await deleteProdutosById(login.json.authorization, TC091.idInexistente)
    assert.equal(deletarProduto.json.message, TC091.messagem, 'A mensagem é diferente do esperado.')
  })
})