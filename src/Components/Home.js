import React from "react";
import * as S from "../Style/HomeStyle.js";
import instagram from "../Img/Instagram.png";
import github from "../Img/github.png";
import Eu1 from "../Img/Eu1.png";
import Header from "../Header/Header";

export default function Home() {
  return (
    <S.Container>
      <Header />
      <S.DivTwo>
        <S.ImgT src={Eu1} />
      </S.DivTwo>
      <S.DivBox>
        <S.H1>Ana Rosa</S.H1>
      </S.DivBox>
      <S.Figure>
        <a href="https://www.instagram.com/by_ana1/">
          <S.ImgTwo src={instagram} />
        </a>
        <a href="https://github.com/AnaRosaa">
          <S.ImgTwo src={github} />
        </a>
      </S.Figure>
    </S.Container>
  );
}