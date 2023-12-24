const { assert } = require("../../../constants")
const { postLogin } = require("../../../core/src/service/login/postLogin.service")
const { TC12 } = require("../../../data/functional/login/login.data")
const { describeName } = require("../../../data/global/describeName.data")

describe(describeName.login.functional, () => {
    it('[TC-12] - Deve realizar login com usuário do tipo Adm', async () => {
        let { json } = await postLogin({email: TC12.email, password: TC12.password, statusCodeResponse: 401})
        assert.equal(json.message, TC12.messageLogin, 'A mensagem é diferente do esperado')
    })
})