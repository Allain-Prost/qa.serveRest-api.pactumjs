const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC09 } = require("../../../../data/functional/usuarios.data.js")
const { assert } = require("../../../../constants.js")

describe("Usuário - POST", () => {

  it("[TC-09] - Deve registrar um usuário sem e-mail", async () => {
    let { json } = await postUsuarios({nome: TC09.name, email: TC09.email, password: TC09.password, administrador: TC09.administrador, statusCodeResponse: 400})
    assert.equal(json.email, TC09.message, 'A mensagem é diferente do esperado')
  })
})
