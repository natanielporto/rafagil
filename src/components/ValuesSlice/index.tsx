import Photo from "../../assets/photo1.jpg";
import * as S from "./styles";

export const ValueSlice = () => {
  return (
    <S.ValueContainer>
      <S.ImageContainer>
        <S.Image src={Photo} alt="Foto Rafaeli Gil" />
      </S.ImageContainer>
      <S.TextContainer>
        <S.TopText>
          Ajudamos você a se concentrar no que é realmente importante para
          expandir sua carreira:
        </S.TopText>
        <S.BottomText>
          Um perfil traçado você já tem. Agora vamos em busca do seu melhor
          perfil profissional possível.
        </S.BottomText>
      </S.TextContainer>
    </S.ValueContainer>
  );
};
