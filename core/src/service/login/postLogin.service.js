const { specPactumJs } = require("../../../../constants")

async function postLogin({email, password, statusCodeResponse = 200}) {
  return await specPactumJs()
    .post(`${process.env.BASE_URL}/login`)
    .withBody({
      email: email,
      password: password
    })
    .expectStatus(statusCodeResponse)
}

module.exports = {
  postLogin
}