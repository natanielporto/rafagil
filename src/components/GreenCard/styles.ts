import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.secondaryBg};
`;

export const CardContainer = styled.ul`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.5;
  padding: 0 1rem;
`;
