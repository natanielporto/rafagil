import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 60%;
  height: 100vh;
  @media only screen and (min-width: 360px) {
    width: 100vw;
  }
`;

export const CardContainer = styled.div<{ orientation: "left" | "right" }>`
  background-color: ${(props) => props.theme.tertiaryBg};
  padding: 5rem;
  height: calc(90vh);
  margin: 2.5rem;
  ${({ orientation }) =>
    orientation === "left" &&
    `
    margin-left: 0;
  `}
  ${({ orientation }) =>
    orientation === "right" &&
    `
    margin-right: 0;
  `}
  @media only screen and (min-width: 360px) {
    width: 100%;
    margin: 0;
  }
`;

export const Title = styled.div`
  font-family: "Staatliches", cursive;
  text-transform: capitalize;
  font-size: 4rem;
  margin-bottom: 3rem;
  @media only screen and (min-width: 360px) {
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 415px) {
    margin-bottom: 2rem;
  }
`;
export const CTA = styled.div`
  padding: 12px 24px;
  background-color: ${(props) => props.theme.secondaryBg};
  border-radius: 30px;
  display: inline-block;
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  margin-bottom: 3rem;
  cursor: pointer;
  @media only screen and (min-width: 415px) {
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 821px) {
    margin-bottom: 4rem;
  }

  @media only screen and (min-width: 360px) {
    font-size: 3.5rem;
    border-radius: 60px;
    margin-bottom: 1rem;
  }
`;
export const MainInfo = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 2.65rem;
  width: 80%;
  margin-bottom: 3rem;
  @media only screen and (min-width: 360px) {
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 415px) {
    margin-bottom: 2rem;
  }
`;
export const Description = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1.5rem;
  width: 75%;
  margin-bottom: 2rem;

  @media only screen and (min-width: 360px) {
    width: 100%;
    font-size: 2rem;
  }
`;
