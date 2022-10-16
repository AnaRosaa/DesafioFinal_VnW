import React from "react";
import { Link } from "react-router-dom";
import * as S from "./HeaderStyle.js";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration-color: #ffd700;
  display: flex;
  width: 9vw;
  justify-content: space-evenly;
  height: 5vh;
  &:hover {
    color: #ffd700;
    cursor: pointer;
    font-weight: 7px bold;
    text-shadow: #ffffff 0.1em 0.1em 0.2em;
  }
  @media screen and (min-width: 360px) and (max-width: 800px) {
    margin-right: 15vw;
  }
`;

export default function Header() {
  return (
    <S.Header>
      <S.Nav>
        <S.Ul>
          <StyledLink href="/Home">Home</StyledLink>
          <StyledLink href="/About">About</StyledLink>
          <StyledLink href="/Works">Works</StyledLink>
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
}