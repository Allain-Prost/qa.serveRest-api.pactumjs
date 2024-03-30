const { assert } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { putProdutos } = require("../../../../core/src/service/produtos/putProduto.serviceById.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC102 } = require("../../../../data/produtos/produtos.data")

describe(`Produtos - PUT`, () => {

  let login, novoProduto
  before(`Deve realizar o cadastro de um adm, fazer o login e cadastrar um produto`, async () => {
    await postUsuarios({ nome: TC102.usuario.name, email: TC102.usuario.email, password: TC102.usuario.password, administrador: TC102.usuario.administrador })
    login = await postLogin({ email: TC102.usuario.email, password: TC102.usuario.password })
  })

  it(`[TC-102] - Deve validar a edição de um produto através do id com token de um cliente`, async () => {
    let editarNomeDoProduto = await putProdutos(login.json.authorization, TC102.idFake, TC102.editarProduto, 403)
    assert.equal(editarNomeDoProduto.json.message, TC102.messagem, 'A mensagem é diferente do esperado.')
  })
})