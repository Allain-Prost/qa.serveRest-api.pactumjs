const { postUsuarios } = require("../../core/src/service/usuarios/postUsuarios.service.js")
const { TC04 } = require("../../data/functional/usuarios.data.js")
const { assert } = require("../../constants.js")
const { putUsuarioById } = require("../../core/src/service/usuarios/putUsuarioById.service.js")

describe("Usuário - POST", () => {

  let userId
  before('Should register a customer type user', async () => {
    userId = await postUsuarios({nome: TC04.name, email: TC04.email, password: TC04.password, administrador: TC04.administrador})
  })

  it("[TC-04] - Should edit a customer type user", async () => {
    let { json } = await putUsuarioById({id: userId.json._id, nome: TC04.newName, email: TC04.newEmail, password: TC04.password, administrador: TC04.administrador})
    assert.equal(json.message, TC04.message, 'A mensagem é diferente do esperado')
  })
})
