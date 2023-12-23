const { postUsuarios } = require("../../core/src/service/usuarios/postUsuarios.service.js")
const { TC10 } = require("../../data/functional/usuarios.data.js")
const { assert } = require("../../constants.js")

describe("Usuário - POST", () => {

  it("[TC-10] - Should register a user without a Adm", async () => {
    let { json } = await postUsuarios({nome: TC10.name, email: TC10.email, password: TC10.password, administrador: TC10.administrador, statusCodeResponse: 400})
    assert.equal(json.administrador, TC10.message, 'A mensagem é diferente do esperado')
  })
})
