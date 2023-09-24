import React from "react";
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
      author: "Maximiliano Gomes,",
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
      <S.Container>
        <S.MainTitle>O que os clientes dizem sobre nós</S.MainTitle>
        <S.PhraseContainer>
          {testimonials.map((test) => (
            <S.Phrase>
              <S.Icon>
                <BiSolidQuoteLeft size={54} color="#4ed107" />
              </S.Icon>
              <S.Title>{test.title}</S.Title>
              <div>
                <S.Author> - {test.author},</S.Author>
                <S.Company>{test.company}</S.Company>
              </div>
            </S.Phrase>
          ))}
        </S.PhraseContainer>
      </S.Container>
    </S.TestimonialContainer>
  );
};
