import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
  @media only screen and (min-width: 821px) {
    max-width: 100%;
    height: 100vh;
    padding-top: 1rem;
  }
`;

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBg};
  padding: 5rem;
  height: 90vh;
  margin: 2.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-family: "Staatliches", cursive;
  text-transform: capitalize;
  font-size: 4rem;
  /* margin-bottom: 2rem; */
`;

export const CTA = styled.div`
  display: inline-block;
  font-family: "Open Sans", sans-serif;
  font-size: 3rem;
  padding: 12px 24px;
  background-color: ${(props) => props.theme.tertiaryBg};
  border-radius: 60px;
  margin-bottom: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const MainInfo = styled.div`
  font-size: 2.5rem;
  font-family: "Bricolage Grotesque", sans-serif;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Description = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
`;
