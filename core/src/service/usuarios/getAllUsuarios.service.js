const { specPactumJs } = require("../../../../constants");

async function getAllUsers({atributo, valorDoAtributo, statusCode = 200}) {
  return await specPactumJs()
    .get(`${process.env.BASE_URL}/usuarios`)
    .withQueryParams(atributo, valorDoAtributo)
    .expectStatus(statusCode)
}

async function buscarUsuarioAtravesDoNome(nome) {
  let usuario = await getAllUsers({atributo: 'nome', valorDoAtributo:nome})
  return usuario.json
}

async function buscarUsuarioAtravesDoEmail(email) {
  let usuario = await getAllUsers({atributo: 'email', valorDoAtributo:email})
  return usuario.json
}

async function buscarUsuarioAtravesDoPassword(password) {
  let usuario = await getAllUsers({atributo: 'password', valorDoAtributo:password})
  return usuario.json
}

module.exports = {
  getAllUsers, buscarUsuarioAtravesDoNome, buscarUsuarioAtravesDoEmail, buscarUsuarioAtravesDoPassword
}
