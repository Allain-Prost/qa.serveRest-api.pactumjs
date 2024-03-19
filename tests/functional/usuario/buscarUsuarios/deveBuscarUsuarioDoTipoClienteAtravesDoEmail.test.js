const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { assert, expect } = require("../../../../constants.js")
const { buscarUsuarioAtravesDoEmail } = require("../../../../core/src/service/usuarios/getAllUsuarios.service.js")
const { TC022 } = require("../../../../data/usuarios/usuarios.data.js")

describe("Usuário - GET", () => {

  before('Deve registrar um usuário do tipo cliente', async () => {
    await postUsuarios({nome: TC022.name, email: TC022.email, password: TC022.password, administrador: TC022.administrador})
  })

  it("[TC-022] - Deve validar a busca de um usuário do tipo cliente através do Email", async () => {
    let { usuarios } = await buscarUsuarioAtravesDoEmail(TC022.email)
    assert.equal(usuarios[0].nome, TC022.name, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].email, TC022.email, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].password, TC022.password, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].administrador, TC022.administrador, 'O nome é diferente do esperado')
    expect(usuarios[0]).to.have.property('_id')
    expect(usuarios[0]._id).to.be.a('string')
    expect(usuarios[0]._id).to.have.lengthOf.above(0)
  })
})
