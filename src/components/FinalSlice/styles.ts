import { styled } from "styled-components";

export const FinalContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  color: ${(props) => props.theme.secondary};
  margin-bottom: 10rem;
  border-bottom: 1px solid ${(props) => props.theme.secondary};
`;

export const ImageContainer = styled.div`
  margin-top: 2.5rem;
`;

export const Image = styled.img`
  height: 300px;
  width: 1280px;
  object-fit: cover;
`;

export const Title = styled.div`
  font-family: "Staatliches", cursive;
  text-transform: capitalize;
  font-size: 4rem;
  margin-bottom: 2rem;
  margin-top: 3rem;
  width: 50%;
  padding-left: 10rem;
  @media only screen and (min-width: 415px) {
    padding-left: 0rem;
  }
`;

export const Description = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.secondary};
  display: flex;
  flex-direction: column;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding-inline: 10rem;
  @media only screen and (min-width: 415px) {
    padding-inline: 0rem;
  }
`;
export const Logo = styled.img`
  transform: scale(0.6);
  margin-left: -200px;
`;
