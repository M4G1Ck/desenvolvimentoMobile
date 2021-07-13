import React from "react";

import {Container, Logo, ImageLogo, ZeroLogo } from "./style";

const Header = () => {
  return (
    <Container>
      <Logo>
        <ImageLogo resizeMode="contain" source={require("../../../assets/splash/splash-branco.png")}/>
      </Logo>
    </Container>
  );
};

export default Header;