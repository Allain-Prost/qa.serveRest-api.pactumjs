const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { assert } = require("../../../../constants.js")
const { putUsuarioById } = require("../../../../core/src/service/usuarios/putUsuarioById.service.js")
const { TC050 } = require("../../../../data/usuarios/usuarios.data.js")

describe("Usuário - POST", () => {

  let userId
  before('Deve registrar um usuário do tipo cliente', async () => {
    userId = await postUsuarios({nome: TC050.name, email: TC050.email, password: TC050.password, administrador: TC050.administrador})
  })

  it("[TC-050] - Deve validar a edição do NOME de um usuário do tipo cliente através do ID", async () => {
    let { json } = await putUsuarioById({id: userId.json._id, nome: TC050.newName, email: TC050.email, password: TC050.password, administrador: TC050.administrador})
    assert.equal(json.message, TC050.message, 'A mensagem é diferente do esperado')
  })
})
