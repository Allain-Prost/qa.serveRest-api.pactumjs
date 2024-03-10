const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC035 } = require("../../../../data/functional/usuarios.data.js")
const { assert, expect } = require("../../../../constants.js")
const { buscarUsuarioAtravesDoPassword } = require("../../../../core/src/service/usuarios/getAllUsuarios.service.js")

describe("Usuário - GET", () => {

  before('Deve registrar um usuário do tipo cliente', async () => {
    await postUsuarios({nome: TC035.name, email: TC035.email, password: TC035.password, administrador: TC035.administrador})
  })

  it("[TC-035] - Deve validar a busca de um usuário do tipo cliente através do Password", async () => {
    let { usuarios } = await buscarUsuarioAtravesDoPassword(TC035.password)
    assert.equal(usuarios[0].nome, TC035.name, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].email, TC035.email, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].password, TC035.password, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].administrador, TC035.administrador, 'O nome é diferente do esperado')
    expect(usuarios[0]).to.have.property('_id')
    expect(usuarios[0]._id).to.be.a('string')
    expect(usuarios[0]._id).to.have.lengthOf.above(0)
  })
})
