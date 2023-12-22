import postUsuarios from "../../core/src/service/usuarios/postUsuarios.service"
import TC01 from "../../data/functional/usuarios.data"

describe("User", () => {

  it("[TC-01] - Should register a customer type user", async () => {
    const responsePostUser = await postUsuarios({nome: TC01.name, email: TC01.email, password: TC01.password, administrador: TC01.administrador})
    console.log(responsePostUser.json)
  })
})
