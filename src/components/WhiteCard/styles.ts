import styled from "styled-components";


export const CardContainer = styled.div<{ orientation: "left" | "right" }>`
  background-color: ${(props) => props.theme.tertiaryBg};
  padding: 1rem;
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
`;

export const Title = styled.div`
  font-family: "Staatliches", cursive;
  text-transform: capitalize;
  font-size: 2rem;
  padding: 1rem 0;
`;

export const CTA = styled.div`
  padding: 12px 24px;
  background-color: ${(props) => props.theme.secondaryBg};
  display: inline-block;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 999px;
  margin: 1rem 0;
`;

export const MainInfo = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1.5rem;
  margin: 2rem 0;
  line-height: 1.25;
  font-weight: 400;
`;

export const Description = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  margin-bottom: 2rem;
  width: 100%;
  font-size: 1.25rem;
  line-height: 1.5;
`;
