import { WhiteCard } from "../WhiteCard";
import { GreenCard } from "../GreenCard";
import * as S from "./styles";

export const CarreerBoostSlice = () => {
  return (
    <S.RelocationContainer>
      <GreenCard description="texto falando um pouco sobre o plano do serviço" />
      <WhiteCard
        orientation="right"
        title="acelerador de carreira"
        cta="Inscreva-se agora"
        mainInfo="Tudo o que precisa para ter um perfil de destaque para os recrutadores"
        description="Vou te ensinar a ter um LinkedIn ESTRATÉGICO, desde como estruturar os campos de maneira acertiva, melhor forma para desenvolver o networking atẽ como escrever conteũdos de destaque."
      />
    </S.RelocationContainer>
  );
};
