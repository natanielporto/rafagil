import React from "react";
import Logo from "../../assets/logo.png";
import * as S from "./styles";

export const FinalSlice = () => {
  return (
    <S.FinalContainer>
      <S.ImageContainer>
        <S.Image
          src="https://plus.unsplash.com/premium_photo-1661740258370-67d4a99c154d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
          alt="Mapa do mundo"
        />
      </S.ImageContainer>
      <S.TextContainer>
        <S.Title>Vamos trabalhar, acredito em você!</S.Title>
      </S.TextContainer>
      <S.Social>
        <S.Logo src={Logo} alt="" />
        <S.Description>
          <span>Tel. (12)3456-7890</span>
          <span>e-mail: rafagil@gmail.com</span>
          <span>Social: @rafagil</span>
        </S.Description>
      </S.Social>
    </S.FinalContainer>
  );
};
