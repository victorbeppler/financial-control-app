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

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [username, setUsername] = useState("");
  const [toast, setToast] = useState({
    showToast: false,
    title: "",
    description: "",
  });

  const showToastMessage = (title, description, pushNavigate, callback) => {
    setToast({ showToast: true, title, description });
    setTimeout(() => {
      setToast({ showToast: false, title: "", description: "" });
      if (pushNavigate) navigate("/login");
      if (callback) callback();
    }, 5000);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== passwordConfirmation) {
      return showToastMessage(
        "As senhas não coincidem!",
        "Tente novamente!",
        false
      );
    }

    try {
      const response = await ApiBack.post("/user/create", {
        email: email,
        username: username,
        password: password,
      });
      if (response?.data.success) {
        return showToastMessage(
          "Cadastro realizado com sucesso!",
          "Você será redirecionado para a página de login!",
          true
        );
      }
    } catch (err) {
      if (err?.response?.status == 400) {
        return showToastMessage(
          "Erro ao realizar o cadastro!",
          "Tente novamente!",
          false
        );
      }
    }
  }

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <Container>
      <BackgroundImage img="./register.jpg" />
      <Wrapper>
        <Title>Cadastre-se</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            required
            autoComplete="username"
            placeholder="Nome de Usuário"
            onChange={handleChange(setUsername)}
          />
          <Input
            type="email"
            required
            autoComplete="email"
            placeholder="E-mail"
            onChange={handleChange(setEmail)}
          />
          <Input
            type="password"
            required
            autoComplete="new-password"
            placeholder="Senha"
            onChange={handleChange(setPassword)}
          />
          <Input
            type="password"
            required
            autoComplete="new-password"
            placeholder="Repita a senha"
            onChange={handleChange(setPasswordConfirmation)}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link href="/login">Já possui conta?</Link>
      </Wrapper>
      {toast.showToast && (
        <Toast title={toast.title} description={toast.description} />
      )}
    </Container>
  );
}

export default Register;
