import React, { useState } from "react";

import {
  BackgroundImage,
  Button,
  Container,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from "./styles";
import axios from "axios";
import Toast from "../../components/Toast";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/session",
        {
          email: email,
          password: password,
        }
      );
      console.log(response);
      if (response?.data.success) {
        console.log("Chegou aqui");
        setToastTitle("Login realizado com sucesso!");
        setToastDescription("Você será redirecionado para a página inicial!");
        setShowToast(true);
        console.log(response.data);
        console.log({
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          token: response.data.token,
        });
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: response.data.user.id,
            name: response.data.user.name,
            email: response.data.user.email,
            token: response.data.token,
          })
        );

        setTimeout(() => {
          setShowToast(false);
          window.location.href = "/";
        }, 5000);
      }
    } catch (err) {
      if (err?.response?.status == 400) {
        setToastTitle("E-mail ou senha inválidos!");
        setToastDescription("Tente novamente!");
        setShowToast(true);

        await setTimeout(() => {
          setShowToast(false);
        }, 5000);
      }
    }
  }

  return (
    <Container img="./login.jpg">
      <BackgroundImage img="./login.jpg" />
      <Wrapper>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            value={email}
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <Link href="/register">Ainda não tem conta?</Link>
      </Wrapper>
      {showToast && <Toast title={toastTitle} description={toastDescription} />}
    </Container>
  );
}

export default login;
