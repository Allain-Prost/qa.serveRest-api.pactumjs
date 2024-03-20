const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { assert, expect } = require("../../../../constants.js")
const { getUsuarioById } = require("../../../../core/src/service/usuarios/getUsuarioById.service.js")
const { TC020 } = require("../../../../data/usuarios/usuarios.data.js")

describe("Usuário - GET", () => {

  let userId
  before('Deve registrar um usuário do tipo cliente', async () => {
    userId = await postUsuarios({nome: TC020.name, email: TC020.email, password: TC020.password, administrador: TC020.administrador})
  })

  it("[TC-020] - Deve validar a busca de um usuário do tipo cliente através do ID", async () => {
    let { json } = await getUsuarioById(userId.json._id)
    assert.equal(json.nome, TC020.name, 'O nome é diferente do esperado')
    assert.equal(json.email, TC020.email, 'O nome é diferente do esperado')
    assert.equal(json.password, TC020.password, 'O nome é diferente do esperado')
    assert.equal(json.administrador, TC020.administrador, 'O nome é diferente do esperado')
    expect(json).to.have.property('_id')
    expect(json._id).to.be.a('string')
    expect(json._id).to.have.lengthOf.above(0)
  })
})
