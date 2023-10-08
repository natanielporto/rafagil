import * as S from "./styles";

export const WorldSlice = () => {
  return (
    <S.WorldContainer>
      <S.TextContainer>
        <S.Title>Lugares que alcançamos</S.Title>
        <S.Description>
          Recolocação de candidatos pelo mundo: Canadá, EUA, Portugal, entre
          outros.
        </S.Description>
      </S.TextContainer>
      <S.ImageContainer>
        <S.Image
          src="https://plus.unsplash.com/premium_photo-1681488098851-e3913f3b1908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
          alt="Mapa do mundo"
        />
      </S.ImageContainer>
    </S.WorldContainer>
  );
};
