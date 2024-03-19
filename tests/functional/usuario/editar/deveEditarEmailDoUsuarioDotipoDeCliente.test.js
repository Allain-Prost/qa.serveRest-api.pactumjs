const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { assert } = require("../../../../constants.js")
const { putUsuarioById } = require("../../../../core/src/service/usuarios/putUsuarioById.service.js")
const { TC051 } = require("../../../../data/usuarios/usuarios.data.js")

describe("Usuário - POST", () => {

  let userId
  before('Deve registrar um usuário do tipo cliente', async () => {
    userId = await postUsuarios({nome: TC051.name, email: TC051.email, password: TC051.password, administrador: TC051.administrador})
  })

  it("[TC-051] - Deve validar a edição do E-mail de um usuário do tipo cliente através do ID", async () => {
    let { json } = await putUsuarioById({id: userId.json._id, nome: TC051.name, email: TC051.newEmail, password: TC051.password, administrador: TC051.administrador})
    assert.equal(json.message, TC051.message, 'A mensagem é diferente do esperado')
  })
})
