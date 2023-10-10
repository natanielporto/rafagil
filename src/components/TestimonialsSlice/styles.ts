import styled from "styled-components";

export const TestimonialContainer = styled.div`
  /* height: 110vh;

  @media only screen and (min-width: 768px) {
    height: 100vh;
  }
  @media only screen and (min-width: 1024px) {
    height: 130vh;
  } */
  padding: 1rem;
  margin: 2rem 0;
`;

export const Container = styled.div`
  margin: 2rem 0;
`;

export const PhraseContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const MainTitle = styled.div`
  font-family: "Staatliches", cursive;
  text-transform: capitalize;
  font-size: 1.5rem;
  color: ${(props) => props.theme.tertiary};
  text-align: center;

`;

export const Phrase = styled.div`
  border: solid 1px ${(props) => props.theme.tertiary};
  padding: 1.5rem;
  color: ${(props) => props.theme.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.25rem;

  + div {
    margin-top: 1rem;
  }

  @media screen and (min-width: 768px) {
    + div {
      margin-top: 0rem;
      margin-left: 1rem;
    }
  }
`;

export const Icon = styled.div`
  margin-bottom: 1rem;
`;

export const Title = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1.25rem;
  line-height: 1.5;
`;
export const Who = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  align-items: center;
  gap: 0.5rem;
`

export const Author = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
`;

export const Company = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
`;
