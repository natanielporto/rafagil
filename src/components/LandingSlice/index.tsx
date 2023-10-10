import Logo from "../../assets/rafa-gil-logo-white.png";
import * as S from "./styles";

export const LandingSlice = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.LeftContainer>
          <S.Logo src={Logo} alt="Logo Rafaeli Gil em formato de um R e um G" />
          <S.MainTitle>Sua consultoria para o sucesso</S.MainTitle>
        </S.LeftContainer>
      </S.Content>
      <S.Background/>
    </S.Wrapper>
  );
};
