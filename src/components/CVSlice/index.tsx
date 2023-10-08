import { WhiteCard } from "../WhiteCard";
import { GreenCard } from "../GreenCard";
import * as S from "./styles";

const greenText = [
  "Avaliação e orientação especializada na elaboração de currículos e perfis no LinkedIn para se destacar.",
  "Treinamento personalizado para brilhar em entrevistas e apresentações pessoais.",
  "Um plano estratégico para alcançar seus objetivos de carreira, seja você um iniciante ou um profissional experiente.",
  "Assistência dedicada na busca por oportunidades de recolocação em empresas de tecnologia líderes.",
];

export const CVSlice = () => {
  return (
    <S.RelocationContainer>
      <WhiteCard
        orientation="left"
        title="o cv irresistivel"
        cta="Inscreva-se agora"
        mainInfo="Ensinamos a otimizar o seu CV para garantir a vaga dos seus sonhos"
        description="%95 feito com o uso de palavras-chave, estrutura de alta qualidade, modelo adequado e com pecisão na composiçcão de cada detalhe, vamos destacar o seu PERFIL."
      />
      <GreenCard description={greenText} />
    </S.RelocationContainer>
  );
};
