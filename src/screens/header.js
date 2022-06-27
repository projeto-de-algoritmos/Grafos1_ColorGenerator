import React from "react";
import logo from "../imgs/logo.png";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2%",
      }}
    >
      <img src={logo} width="180px" height="150px" />
      <h1>Seja bem vindo ao ColorGenerator</h1>
    </div>
  );
};

export default Header;
