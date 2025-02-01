import * as S from "./styles";

import { useRef } from "react";
import api from "../../services/api";

import UsersImage from "../../assets/users.png";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser() {
    const data = await api.post("/usuarios", {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value,
    });

    console.log(data);
  }

  return (
    <S.Container>
      <S.BackgroundImg>
        <img src={UsersImage} alt="" />
      </S.BackgroundImg>

      <S.Form>
        <S.Title>Cadastro de usuários</S.Title>

        <S.ContainerInputs>
          <div>
            <S.Label>
              Nome<span> *</span>
            </S.Label>
            <S.Input
              type="text"
              placeholder="Nome do usuário"
              ref={inputName}
            />
          </div>

          <div>
            <S.Label>
              Idade<span> *</span>
            </S.Label>
            <S.Input
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
            />
          </div>
        </S.ContainerInputs>

        <S.InputEmail>
          <S.Label>
            E-mail<span> *</span>
          </S.Label>
          <S.Input
            type="email"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          />
        </S.InputEmail>

        <S.Button type="button" onClick={registerNewUser}>
          Cadastrar Usuário
        </S.Button>
      </S.Form>
    </S.Container>
  );
}

export default Home;
