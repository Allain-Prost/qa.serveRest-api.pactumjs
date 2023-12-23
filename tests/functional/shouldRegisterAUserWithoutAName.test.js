const { postUsuarios } = require("../../core/src/service/usuarios/postUsuarios.service.js")
const { TC08 } = require("../../data/functional/usuarios.data.js")
const { assert } = require("../../constants.js")

describe("Usuário - POST", () => {

  it("[TC-08] - Should register a user without a name", async () => {
    let { json } = await postUsuarios({nome: TC08.name, email: TC08.email, password: TC08.password, administrador: TC08.administrador, statusCodeResponse: 400})
    assert.equal(json.nome, TC08.message, 'A mensagem é diferente do esperado')
  })
})
