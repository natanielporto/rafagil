import * as S from "./styles";

interface GreenBannerProps {
  title: string;
  cta: string;
  mainInfo: string;
  description: string;
}

export const GreenBanner = ({
  title,
  cta,
  mainInfo,
  description,
}: GreenBannerProps) => {
  return (
    <S.Wrapper>
      <S.CardContainer>
        <S.Title>{title}</S.Title>
        <S.CTA>{cta}</S.CTA>
        <S.MainInfo>{mainInfo}</S.MainInfo>
        <S.Description>{description}</S.Description>
      </S.CardContainer>
    </S.Wrapper>
  );
};
