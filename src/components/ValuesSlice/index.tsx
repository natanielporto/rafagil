import * as S from "./styles";

export const ValueSlice = () => {
  return (
    <S.ValueContainer>
      <S.Background />
      <S.Content>
        {/* <S.ImageContainer>
          <S.Image src={Photo} alt="Foto Rafaeli Gil" />
        </S.ImageContainer> */}
        <S.TextContainer>
          <S.TopText>
            Ajudamos você a se concentrar no que é realmente importante para
            expandir sua carreira:
          </S.TopText>
          <S.BottomText>
            Um perfil traçado você já tem. Agora vamos em busca do seu melhor
            perfil profissional possível.
          </S.BottomText>
          <S.Image />
        </S.TextContainer>
      </S.Content>
    </S.ValueContainer>
  );
};
