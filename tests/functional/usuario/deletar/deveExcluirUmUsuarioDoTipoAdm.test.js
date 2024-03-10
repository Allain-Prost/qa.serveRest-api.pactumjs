const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC02 } = require("../../../../data/functional/usuarios.data.js")
const { deleteUsuario } = require("../../../../core/src/service/usuarios/deleteUsuarios.service.js")
const { assert } = require("../../../../constants.js")

describe("Usuário - DELETE", () => {

  let userId
  before('Deve registrar um usuário do tipo Adm', async () => {
    userId = await postUsuarios({nome: TC02.name, email: TC02.email, password: TC02.password, administrador: TC02.administrador})
  })

  it("[TC-02] - Deve validar a exclusão de usuário do tipo Adm através do id", async () => {
    let { json } = await deleteUsuario(userId.json._id)
    assert.equal(json.message, TC02.message, 'A mensagem é diferente do esperado')
  })
})
