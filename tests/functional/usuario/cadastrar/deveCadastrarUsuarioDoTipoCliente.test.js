const { expect, assert } = require("../../../../constants.js")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC02 } = require("../../../../data/usuarios/usuarios.data.js")

describe("Usuário - POST", () => {

  it("[TC-02] - Deve validar o cadastro de um usuário do tipo cliente", async () => {
    let { json } = await postUsuarios({nome: TC02.name, email: TC02.email, password: TC02.password, administrador: TC02.administrador})
    assert.equal(json.message, TC02.message, 'A mensagem é diferente do esperado')
    expect(json).to.have.property('_id')
    expect(json._id).to.be.a('string')
    expect(json._id).to.have.lengthOf.above(0)
  })
})
