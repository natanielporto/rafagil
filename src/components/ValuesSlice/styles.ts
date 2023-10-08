import styled from "styled-components";

export const ValueContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  margin-top: 2.5rem;
  height: 90vh;
`;

export const TextContainer = styled.div`
  margin-top: 2.5rem;
  height: 90vh;
  background-color: ${(props) => props.theme.secondaryBg};
  padding: 5rem;
`;

export const TopText = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  font-size: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 7rem;
  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BottomText = styled.div`
  font-family: "Staatliches", cursive;
  font-size: 3rem;
`;
