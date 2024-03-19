const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC06 } = require("../../../../data/usuarios/usuarios.data.js")
const { assert } = require("../../../../constants.js")

describe("Usuário - POST", () => {

  it("[TC-06] - Deve validar o registro de um usuário do tipo ADM sem e-mail", async () => {
    let { json } = await postUsuarios({nome: TC06.name, email: TC06.email, password: TC06.password, administrador: TC06.administrador, statusCodeResponse: 400})
    assert.equal(json.email, TC06.message, 'A mensagem é diferente do esperado')
  })
})
