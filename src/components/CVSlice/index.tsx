import { WhiteCard } from "../WhiteCard";
import { GreenCard } from "../GreenCard";
import * as S from "./styles";

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
      <GreenCard description="texto falando um pouco sobre o plano do serviço" />
    </S.RelocationContainer>
  );
};
