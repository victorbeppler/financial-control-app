import React from "react";
import { Container, ToastHeader, ToastBody } from "./styles";

function Toast({ title, description }) {
  return (
    <Container>
      <ToastHeader>{title}</ToastHeader>
      <ToastBody>{description}</ToastBody>
    </Container>
  );
}

export default Toast;
