const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC05 } = require("../../../../data/usuarios/usuarios.data.js")
const { assert } = require("../../../../constants.js")

describe("Usuário - POST", () => {

  it("[TC-05] - Deve validar o registro de um usuário do tipo ADM sem senha", async () => {
    let { json } = await postUsuarios({nome: TC05.name, email: TC05.email, password: TC05.password, administrador: TC05.administrador, statusCodeResponse: 400})
    assert.equal(json.password, TC05.message, 'A mensagem é diferente do esperado')
  })
})
