import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
  BackgroundImage,
  Button,
  Container,
  Form,
  Input,
  Link,
  Logo,
  PasswordInputContainer,
  PasswordViewIcon,
  Title,
  Wrapper,
} from "./styles";
import Toast from "../../components/Toast";
import ApiBack from "../../services/base-back.js";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
        <Logo src="./logo/logo_transparent.png" alt="Logo" />
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            value={email}
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInputContainer>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordViewIcon onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </PasswordViewIcon>
          </PasswordInputContainer>
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

export default Login;
