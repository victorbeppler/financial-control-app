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
import Toast from "../../components/Toast";
import ApiBack from "../../services/base-back.js";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [username, setUsername] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== passwordConfirmation) {
      setToastTitle("Senhas não coincidem!");
      setToastDescription("Tente novamente!");
      setShowToast(true);
      await setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
    try {
      const response = await ApiBack.post("/user/create", {
        email: email,
        username: username,
        password: password,
      });
      if (response?.data.success) {
        setToastTitle("Cadastro realizado com sucesso!");
        setToastDescription("Você será redirecionado para a página de login!");
        setShowToast(true);

        setTimeout(() => {
          setShowToast(false);
          window.location.href = "/login";
        }, 5000);
      }
    } catch (err) {
      if (err?.response?.status == 400) {
        setToastTitle(err.response.data.type);
        setToastDescription("Tente novamente!");
        setShowToast(true);

        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      }
    }
  }

  return (
    <Container>
      <BackgroundImage img="./register.jpg" />
      <Wrapper>
        <Title>Cadastre-se</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            required
            placeholder="Nome de Usuário"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="email"
            required
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            required
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            required
            placeholder="Repita a senha"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link href="/login">Já possui conta?</Link>
      </Wrapper>
      {showToast && <Toast title={toastTitle} description={toastDescription} />}
    </Container>
  );
}

export default Register;
