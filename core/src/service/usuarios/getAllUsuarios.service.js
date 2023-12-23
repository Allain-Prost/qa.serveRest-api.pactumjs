const { specPactumJs } = require("../../../../constants");

async function getAllUsers() {
  return await specPactumJs()
    .get(`${process.env.BASE_URL}/usuarios`)
    .expectStatus(200)
}

module.exports = {
  getAllUsers
}
