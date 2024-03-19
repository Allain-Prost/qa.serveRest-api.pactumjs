const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { assert } = require("../../../../constants.js")
const { TC03 } = require("../../../../data/usuarios/usuarios.data.js")

describe("Usuário - POST", () => {

  before('Deve registrar um usuário do tipo ADM', async () => {
    await postUsuarios({nome: TC03.name, email: TC03.email, password: TC03.password, administrador: TC03.administrador})
  })

  it("[TC-03] - Deve validar o registro de um usuário do tipo ADM com e-mail repetido", async () => {
    let { json } = await postUsuarios({nome: TC03.name, email: TC03.email, password: TC03.password, administrador: TC03.administrador, statusCodeResponse: 400})
    assert.equal(json.message, TC03.message, 'A mensagem é diferente do esperado')
  })
})
