import { specPactumJs } from "../../constants";

export default async function postUsuarios(nome, email, password, administrador) {
  await specPactumJs()
    .post(`https://serverest.dev/usuarios`)
    .withBody({
      nome: nome,
      email: email,
      password: password,
      administrador: administrador,
    })
    .expectStatus(201)
}