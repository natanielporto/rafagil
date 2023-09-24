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
  return (
    <div>
      <S.CardContainer orientation={orientation}>
        <S.Title>{title}</S.Title>
        <S.CTA>{cta}</S.CTA>
        <S.MainInfo>{mainInfo}</S.MainInfo>
        <S.Description>{description}</S.Description>
      </S.CardContainer>
    </div>
  );
};
