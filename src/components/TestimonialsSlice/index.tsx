import { BiSolidQuoteLeft } from "react-icons/bi";
import * as S from "./styles";

export const TestimonialSlice = () => {
  const testimonials = [
    {
      author: "Marta Batista",
      company: "Venica Serviços",
      title:
        "Aumentei a credibilidade do meu CV e em poucos dias consegui o meu tão esperado SIM!",
    },
    {
      author: "Maximiliano Gomes",
      company: "Aero Verde Turismo",
      title:
        "Aumentei a credibilidade do meu CV e em poucos dias consegui o meu tão esperado SIM!",
    },
    {
      author: "Samuel Castro",
      company: "Lernerra",
      title:
        "Aumentei a credibilidade do meu CV e em poucos dias consegui o meu tão esperado SIM!",
    },
  ];

  return (
    <S.TestimonialContainer>
      <S.MainTitle>O que os clientes dizem sobre nós</S.MainTitle>
      <S.Container>
        <S.PhraseContainer>
          {testimonials.map((test) => (
            <S.Phrase key={test.author}>
              <S.Icon>
                <BiSolidQuoteLeft size={54} color="#4ed107" />
              </S.Icon>
              <S.Title>{test.title}</S.Title>
              <S.Who>
                <S.Author> - {test.author},</S.Author>
                <S.Company>{test.company}</S.Company>
              </S.Who>
            </S.Phrase>
          ))}
        </S.PhraseContainer>
      </S.Container>
    </S.TestimonialContainer>
  );
};
