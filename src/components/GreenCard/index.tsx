import * as S from "./styles";

export const GreenCard = ({ description }: { description: string[] }) => {
  return (
    <S.Wrapper>
      <S.CardContainer>
        {description.map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </S.CardContainer>
      ;
    </S.Wrapper>
  );
};
