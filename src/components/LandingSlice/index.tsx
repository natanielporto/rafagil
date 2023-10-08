import Photo from "../../assets/photo.jpg";
import Logo from "../../assets/logo.png";
import * as S from "./styles";

export const LandingSlice = () => {
  return (
    <S.Wrapper>
      <S.LeftContainer>
        <S.Logo src={Logo} alt="Logo Rafaeli Gil em formato de um R e um G" />
        <S.MainTitle>Sua consultoria para o sucesso</S.MainTitle>
      </S.LeftContainer>
      <S.RightContainer>
        <S.Image src={Photo} alt="Foto Rafaeli Gil" />
      </S.RightContainer>
    </S.Wrapper>
  );
};
