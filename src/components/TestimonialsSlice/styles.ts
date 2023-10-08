import styled from "styled-components";

export const TestimonialContainer = styled.div`
  height: 100vh;
`;

export const Container = styled.div`
  padding: 5rem;
  height: 90vh;
  margin: 2.5rem 0;
`;

export const PhraseContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MainTitle = styled.div`
  font-family: "Staatliches", cursive;
  text-transform: capitalize;
  font-size: 4rem;
  margin-top: 4rem;
  color: ${(props) => props.theme.tertiary};
  text-align: center;
  @media only screen and (min-width: 821px) {
    margin-bottom: 5rem;
  }
`;

export const Phrase = styled.div`
  width: 33%;
  border: solid 1px ${(props) => props.theme.tertiary};
  padding: 3rem;
  color: ${(props) => props.theme.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
`;

export const Icon = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
`;
export const Author = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1.5rem;
`;
export const Company = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
`;
