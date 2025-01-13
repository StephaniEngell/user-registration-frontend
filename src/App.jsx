import * as S from "./styles";

function Home() {
  const titlePage = "Cadastro de usuários";

  return (
    <S.Container>
      <S.BackgroundImg>
        <img src="" alt="" />
      </S.BackgroundImg>

      <S.Form>
        <S.Title>{titlePage}</S.Title>

        <S.ContainerInputs>
          <div>
            <div>
              <S.Label>
                Nome<span>*</span>
              </S.Label>
              <S.Input type="text" placeholder="Nome do usuário" />
            </div>

            <div>
              <S.Label>
                Idade<span>*</span>
              </S.Label>
              <S.Input type="number" placeholder="Idade do usuário" />
            </div>
          </div>

          <div>
            <S.Label>
              E-mail<span>*</span>
            </S.Label>
            <S.Input type="email" placeholder="E-mail do usuário" />
          </div>
        </S.ContainerInputs>

        <S.Button>Cadastrar Usuário</S.Button>
      </S.Form>
    </S.Container>
  );
}

export default Home;
