const { postUsuarios } = require("../../core/src/service/usuarios/postUsuarios.service.js")
const { TC07 } = require("../../data/functional/usuarios.data.js")
const { assert } = require("../../constants.js")

describe("Usuário - POST", () => {

  it("[TC-07] - Should register a user without a password", async () => {
    let { json } = await postUsuarios({nome: TC07.name, email: TC07.email, password: '', administrador: TC07.administrador, statusCodeResponse: 400})
    console.log(json)
    assert.equal(json.password, TC07.message, 'A mensagem é diferente do esperado')
  })
})
