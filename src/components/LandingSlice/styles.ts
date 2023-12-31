import styled from "styled-components";
import Photo from "../../assets/photo.jpg";

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  margin-bottom: 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
  overflow: hidden;
  @media (min-width: 280px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  transform: scale(0.2);
  @media (min-width: 280px) {
    margin-top: -200px;
  }
  /* @media (min-width: 768px) {
    width: 50%;
  } */
`;

export const MainTitle = styled.span`
  font-family: "Staatliches";
  color: ${(props) => props.theme.secondary};
  font-size: 2rem;
  @media (min-width: 280px) {
    margin-top: -200px;
    width: 30%;
    margin-left: 30px;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${Photo}) no-repeat center;
  background-size: cover;
`;
