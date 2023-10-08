import Photo from "../../assets/photo1.png";
import * as S from "./styles";

export const ValueSlice = () => {
  return (
    <S.ValueContainer>
      <S.ImageContainer>
        <S.Image src={Photo} alt="Foto Rafaeli Gil" />
      </S.ImageContainer>
      <S.TextContainer>
        <S.TopText>
          Ajudamos você a se concentrar nas coisas importantes para expandir sua
          carreira
        </S.TopText>
        <S.BottomText>
          Este bloco de texto é para uma breve visão geral da empresa.
        </S.BottomText>
      </S.TextContainer>
    </S.ValueContainer>
  );
};
