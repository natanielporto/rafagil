import { WhiteCard } from "../WhiteCard";
import { GreenCard } from "../GreenCard";
import * as S from "./styles";

export const RelocationSlice = () => {
  return (
    <S.RelocationContainer>
      <WhiteCard
        orientation="left"
        title="plano de recolocação"
        cta="Inscreva-se agora"
        mainInfo="Descubra as estratégias essenciais para sua recolocação profissional."
        description="Domine as estratégias necessárias para a sua recolocação e crie um plano de carreira sólido que o torne altamente desejado no mercado de trabalho. "
      />
      <GreenCard description="texto falando um pouco sobre o plano do serviço" />
    </S.RelocationContainer>
  );
};
