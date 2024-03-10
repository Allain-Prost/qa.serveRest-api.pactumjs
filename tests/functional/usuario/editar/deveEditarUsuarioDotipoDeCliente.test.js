const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC04 } = require("../../../../data/functional/usuarios.data.js")
const { assert } = require("../../../../constants.js")
const { putUsuarioById } = require("../../../../core/src/service/usuarios/putUsuarioById.service.js")

describe("Usuário - POST", () => {

  let userId
  before('Deve registrar um usuário do tipo cliente', async () => {
    userId = await postUsuarios({nome: TC04.name, email: TC04.email, password: TC04.password, administrador: TC04.administrador})
  })

  it("[TC-04] - Deve validar a edição do NOME de um usuário do tipo cliente através do ID", async () => {
    let { json } = await putUsuarioById({id: userId.json._id, nome: TC04.newName, email: TC04.email, password: TC04.password, administrador: TC04.administrador})
    assert.equal(json.message, TC04.message, 'A mensagem é diferente do esperado')
  })
})
