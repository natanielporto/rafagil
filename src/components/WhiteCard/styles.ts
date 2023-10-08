import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const CardContainer = styled.div<{ orientation: "left" | "right" }>`
  background-color: ${(props) => props.theme.tertiaryBg};
  padding: 5rem;
  height: calc(90vh);
  width: 100%;
  margin: 0;
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
  @media only screen and (min-width: 768px) {
    margin-top: 2.5rem;
  }

  @media only screen and (min-width: 1024px) {
    padding: 2.5rem;
  }
  @media only screen and (min-width: 1280px) {
    padding: 5rem;
  }
`;

export const Title = styled.div`
  font-family: "Staatliches", cursive;
  text-transform: capitalize;
  font-size: 4rem;
  margin-bottom: 1rem;
  @media only screen and (min-width: 768px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 0;
    padding-top: 0;
  }
`;
export const CTA = styled.div`
  padding: 12px 24px;
  background-color: ${(props) => props.theme.secondaryBg};
  display: inline-block;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  cursor: pointer;
  font-size: 3.5rem;
  border-radius: 60px;
  margin-bottom: 1rem;
  @media only screen and (min-width: 415px) {
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 4rem;
    font-size: 2rem;
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 2rem;
  }
`;
export const MainInfo = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 2.65rem;
  width: 80%;
  margin-bottom: 2rem;
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 415px) {
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;
export const Description = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  margin-bottom: 2rem;
  width: 100%;
  font-size: 2.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
