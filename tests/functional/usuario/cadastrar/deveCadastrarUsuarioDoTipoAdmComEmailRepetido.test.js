const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC06 } = require("../../../../data/functional/usuarios.data.js")
const { assert } = require("../../../../constants.js")

describe("Usuário - POST", () => {

  before('Deve registrar um usuário do tipo ADM', async () => {
    await postUsuarios({nome: TC06.name, email: TC06.email, password: TC06.password, administrador: TC06.administrador})
  })

  it("[TC-06] - Deve registrar um cliente do tipo ADM com e-mail repetido", async () => {
    let { json } = await postUsuarios({nome: TC06.name, email: TC06.email, password: TC06.password, administrador: TC06.administrador, statusCodeResponse: 400})
    assert.equal(json.message, TC06.message, 'A mensagem é diferente do esperado')
  })
})
