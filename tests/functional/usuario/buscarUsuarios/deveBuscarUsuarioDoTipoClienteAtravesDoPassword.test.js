const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { assert, expect } = require("../../../../constants.js")
const { buscarUsuarioAtravesDoPassword } = require("../../../../core/src/service/usuarios/getAllUsuarios.service.js")
const { TC023 } = require("../../../../data/usuarios/usuarios.data.js")

describe("Usuário - GET", () => {

  before('Deve registrar um usuário do tipo cliente', async () => {
    await postUsuarios({nome: TC023.name, email: TC023.email, password: TC023.password, administrador: TC023.administrador})
  })

  it("[TC-023] - Deve validar a busca de um usuário do tipo cliente através do Password", async () => {
    let { usuarios } = await buscarUsuarioAtravesDoPassword(TC023.password)
    assert.equal(usuarios[0].nome, TC023.name, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].email, TC023.email, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].password, TC023.password, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].administrador, TC023.administrador, 'O nome é diferente do esperado')
    expect(usuarios[0]).to.have.property('_id')
    expect(usuarios[0]._id).to.be.a('string')
    expect(usuarios[0]._id).to.have.lengthOf.above(0)
  })
})
