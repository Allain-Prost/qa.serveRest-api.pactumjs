const { expect } = require("../../constants.js")
const { getAllUsers } = require("../../core/src/service/usuarios/getAllUsuarios.service.js")

describe("Usuário - POST", () => {

  it("[TC-05] - Should register a customer", async () => {
    let { json } = await getAllUsers()
    expect(json).to.be.an('object')
    expect(json).to.have.property('quantidade');
    expect(json).to.have.property('usuarios').that.is.an('array');
  })
})
