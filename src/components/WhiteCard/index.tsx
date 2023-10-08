import * as S from "./styles";

interface WhiteCardProps {
  title: string;
  cta: string;
  mainInfo: string;
  description: string;
  orientation: "left" | "right";
}

export const WhiteCard = ({
  title,
  cta,
  mainInfo,
  description,
  orientation,
}: WhiteCardProps) => {
  const phoneNumber = "+5512996211534";

  const handleClick = () => {
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.location.href = whatsappWebUrl;
  };
  return (
    <div>
      <S.CardContainer orientation={orientation}>
        <S.Title>{title}</S.Title>
        <S.CTA onClick={handleClick}>{cta}</S.CTA>
        <S.MainInfo>{mainInfo}</S.MainInfo>
        <S.Description>{description}</S.Description>
      </S.CardContainer>
    </div>
  );
};
