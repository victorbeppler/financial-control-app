import React from "react";

import { Button, Container, Form, Input, Title, Wrapper } from "./styles";

function login() {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>

        <Form>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Entrar</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default login;
