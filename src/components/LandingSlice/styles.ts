import styled from "styled-components";
import Photo from "../../assets/photo.jpg";

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
  overflow: hidden;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  transform: scale(0.2);
`;

export const MainTitle = styled.span`
  font-family: "Staatliches";
  color: ${(props) => props.theme.secondary};
  font-size: 2rem;
`;

export const Background = styled.div`
  flex: 1;

  background: url(${Photo}) no-repeat center;
  background-size: cover;
`;

