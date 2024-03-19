const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { deleteUsuario } = require("../../../../core/src/service/usuarios/deleteUsuarios.service.js")
const { assert } = require("../../../../constants.js")
const { TC040 } = require("../../../../data/usuarios/usuarios.data.js")

describe("Usuário - DELETE", () => {

  let userId
  before('Deve registrar um usuário do tipo Adm', async () => {
    userId = await postUsuarios({nome: TC040.name, email: TC040.email, password: TC040.password, administrador: TC040.administrador})
  })

  it("[TC-040] - Deve validar a exclusão de usuário do tipo Adm através do id", async () => {
    let { json } = await deleteUsuario(userId.json._id)
    assert.equal(json.message, TC040.message, 'A mensagem é diferente do esperado')
  })
})
