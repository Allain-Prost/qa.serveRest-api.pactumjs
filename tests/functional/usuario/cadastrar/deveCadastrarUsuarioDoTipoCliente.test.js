const { expect, assert } = require("../../../../constants.js")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC05 } = require("../../../../data/functional/usuarios.data.js")

describe("Usuário - POST", () => {

  it("[TC-05] - Deve validar o cadastro de um usuário do tipo cliente", async () => {
    let { json } = await postUsuarios({nome: TC05.name, email: TC05.email, password: TC05.password, administrador: TC05.administrador})
    assert.equal(json.message, TC05.message, 'A mensagem é diferente do esperado')
    expect(json).to.have.property('_id')
    expect(json._id).to.be.a('string')
    expect(json._id).to.have.lengthOf.above(0)
  })
})
