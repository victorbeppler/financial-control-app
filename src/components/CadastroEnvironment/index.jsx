import React, { useState } from "react";

import {
  Button,
  ButtonX,
  Container,
  ContainerX,
  Form,
  IconX,
  Input,
  TextArea,
  Title,
} from "./styles";
import ApiBack from "../../services/base-back.js";

function CadastroEnvironment({ onClose, UserData, onClick }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await ApiBack.post("/environment/create", {
      name: name,
      description: description,
      user: UserData.id,
    });
    if (response.status === 201) {
      onClick(true);
    }
  }

  return (
    <Container>
      <Title>Cadastro de Ambiente</Title>
      <ContainerX>
        <ButtonX onClick={onClose}>
          <IconX src="/x.png" />
        </ButtonX>
      </ContainerX>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          required
          placeholder="Nome do Ambiente"
          maxLength={20}
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          type="text"
          required
          aria-multiline
          maxLength={50}
          placeholder="Descrição do Ambiente"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
}

export default CadastroEnvironment;
