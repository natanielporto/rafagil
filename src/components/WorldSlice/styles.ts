import { styled } from "styled-components";

export const WorldContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  height: calc(40vh);
  margin-top: 2.5rem;
  background-color: ${(props) => props.theme.secondary};
  padding-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  height: 500px;
  width: 1280px;
  object-fit: cover;
`;

export const Title = styled.div`
  font-family: "Staatliches", cursive;
  text-transform: capitalize;
  font-size: 4rem;
  margin-bottom: 2rem;
  margin-top: 4rem;
  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const Description = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 2.65rem;
  width: 70%;
  margin-bottom: 2rem;
  text-align: center;
  @media only screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;
