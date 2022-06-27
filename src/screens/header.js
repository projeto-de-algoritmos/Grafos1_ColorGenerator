import React from "react";
import logo from "../imgs/logo.png";
import { HeaderDiv } from "./Style";

const Header = () => {
  return (
    <HeaderDiv>
      <img src={logo} width="180px" height="150px" />
      <h1>Seja bem vindo ao ColorGenerator</h1>
    </HeaderDiv>
  );
};

export default Header;
