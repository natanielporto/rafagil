import { WhiteCard } from "../WhiteCard";
import { GreenCard } from "../GreenCard";
import * as S from "./styles";

const greenText = [
  "Uma avaliação abrangente de suas habilidades e objetivos de carreira.",
  "Orientação especializada na elaboração de currículos e perfis no LinkedIn para se destacar.",
  "Treinamento personalizado para brilhar em entrevistas e apresentações pessoais.",
  "Um plano estratégico para alcançar seus objetivos de carreira, seja você um iniciante ou um profissional experiente.",
  "Assistência dedicada na busca por oportunidades de recolocação em empresas de tecnologia líderes.",
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
