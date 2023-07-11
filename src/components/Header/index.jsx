import React from "react";

import {
  ButtonHome,
  ButtonSingOut,
  Container,
  ContainerHome,
  ContainerSingOut,
  Icon,
  NameUser,
} from "./styles";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));

  function handleSingOut() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  function handleHome() {
    window.location.href = "/";
  }

  return (
    <Container>
      {/* {<h1>{user.name}</h1>} */}
      <ContainerHome>
        <ButtonHome onClick={handleHome}>
          <Icon src="/house-bold.png" />
        </ButtonHome>
      </ContainerHome>
      <ContainerSingOut>
        <ButtonSingOut onClick={handleSingOut}>
          <NameUser>{user.name}</NameUser>
          <Icon src="/sign-out-bold.png" />
        </ButtonSingOut>
      </ContainerSingOut>
    </Container>
  );
}

export default Header;
