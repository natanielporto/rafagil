import { WhiteCard } from "../WhiteCard";
import { GreenCard } from "../GreenCard";
import * as S from "./styles";

const greenText = [
  "Enfrente os desafios de elaborar seu currículo e perfil no LinkedIn.",
  "Adquira habilidades para se destacar em apresentações pessoais e entrevistas.",
  "Procure uma oportunidade de recolocação ou mude de emprego.",
  "Para quem tem ambição e almeja reconhecimento no mercado de trabalho.",
];

export const CarreerBoostSlice = () => {
  return (
    <S.RelocationContainer>
      <GreenCard description={greenText} />
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
