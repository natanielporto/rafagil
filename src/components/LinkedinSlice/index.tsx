import { WhiteCard } from "../WhiteCard";
import { GreenCard } from "../GreenCard";
import * as S from "./styles";

const greenText = [
  "Destaque suas habilidades, conquistas e experiências para impressionar recrutadores e empregadores.",
  "Te ensino a lapidar suas habilidades e conhecimentos para atrair oportunidades que combinem com seu perfil.",
  "Esteja preparado para brilhar em entrevistas, com dicas personalizadas e treinamento para apresentações pessoais.",
  "Este serviço é perfeito para você, que busca ascensão profissional, recolocação ou a mudança de emprego desejada.",
];

export const LinkedinSlice = () => {
  return (
    <S.RelocationContainer>
      <GreenCard description={greenText} />
      <WhiteCard
        orientation="right"
        title="upgrade no seu LinkedIn"
        cta="Inscreva-se agora"
        mainInfo="Tudo o que precisa para ter um perfil de destaque para os recrutadores."
        description="Vou te ensinar a ter um LinkedIn ESTRATÉGICO, desde como estruturar os campos de maneira acertiva, melhor forma para desenvolver o networking atẽ como escrever conteũdos de destaque."
      />
    </S.RelocationContainer>
  );
};
