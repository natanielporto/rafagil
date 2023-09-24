import * as S from "./styles";

export const GreenCard = ({ description }: { description: string }) => {
  return (
    <S.Wrapper>
      <S.CardContainer>{description}</S.CardContainer>;
    </S.Wrapper>
  );
};
