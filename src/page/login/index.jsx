import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
import Toast from "../../components/Toast";
import ApiBack from "../../services/base-back.js";

function login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({
    showToast: false,
    title: "",
    description: "",
  });

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await ApiBack.post("/user/session", {
        email: email,
        password: password,
      });
      if (response?.data.success) {
        setToast({
          showToast: true,
          title: "Login realizado com sucesso!",
          description: "Você será redirecionado para a página inicial!",
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
          setToast({
            showToast: false,
            title: "",
            description: "",
          });
          navigate("/");
        }, 5000);
      }
    } catch (err) {
      if (err?.response?.status == 400) {
        setToastTitle("");
        setToastDescription("");
        setToast({
          showToast: true,
          title: "Ocorreu um erro ao realizar o login!",
          description: "E-mail ou senha inválidos, Tente novamente!",
        });

        setTimeout(() => {
          setToast({
            showToast: false,
            title: "",
            description: "",
          });
        }, 5000);
      } else {
        setToast({
          showToast: true,
          title: "Ocorreu um erro ao realizar o login!",
          description: "Tente novamente mais tarde!",
        });

        setTimeout(() => {
          setToast({
            showToast: false,
            title: "",
            description: "",
          });
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
      {toast.showToast && (
        <Toast title={toast.title} description={toast.description} />
      )}
    </Container>
  );
}

export default login;
