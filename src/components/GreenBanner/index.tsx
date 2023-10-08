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
  const phoneNumber = "+5512996211534";

  const handleClick = () => {
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.location.href = whatsappWebUrl;
  };
  return (
    <S.Wrapper>
      <S.CardContainer>
        <S.Title>{title}</S.Title>
        <S.CTA onClick={handleClick}>{cta}</S.CTA>
        <S.MainInfo>{mainInfo}</S.MainInfo>
        <S.Description>{description}</S.Description>
      </S.CardContainer>
    </S.Wrapper>
  );
};
