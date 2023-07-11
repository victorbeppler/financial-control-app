import React from "react";

import { Container, Description, Title, Wrapper } from "./styles";

function Cards({ idEnvironment, title, description }) {
  async function handleClick() {
    localStorage.setItem(
      "Environment",
      JSON.stringify({
        idEnvironment: idEnvironment,
        title: title,
        description: description,
      })
    );
    window.location.href = `/environment/${idEnvironment}}`;
  }

  return (
    <Container onClick={handleClick}>
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Wrapper>
    </Container>
  );
}

export default Cards;
