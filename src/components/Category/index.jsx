import React, { useState } from "react";
import { categoryOptions } from "../../services/category-options.js";

import {
  Button,
  ButtonX,
  Container,
  ContainerX,
  Dropdown,
  FormContainer,
  FormGroup,
  IconX,
  Input,
  Label,
} from "./styles.jsx";

// import ApiBack from "../../services/base-back";
import Toast from "../Toast/index.jsx";
import { useParams } from "react-router-dom";
import ApiBack from "../../services/base-back.js";

function CategoryForm({ onClose }) {
  //page
  const { idEnvironment } = useParams();
  //user
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  //form
  const [nome, setNome] = useState("");
  const [type, setType] = useState("");
  // //toast
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(nome, type);
    console.log(idEnvironment);
    console.log(user);
    if (type === "999") {
      setToastTitle("Erro ao cadastrar");
      setToastDescription("Selecione uma categoria");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return;
    }
    try {
      const response = await ApiBack.post("/category/create", {
        name: nome,
        type: type,
        environment: idEnvironment,
        user: user.id,
      });
      console.log(response);
      if (response.status === 201) {
        setToastTitle("Soliciatação enviada com sucesso");
        setToastDescription("Sua transação foi cadastrada com sucesso!");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          onClose();
        }, 5000);
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        setToastTitle("Erro ao cadastrar");
        setToastDescription(
          error?.response?.data?.error
            ? error.response.data.error
            : "Erro interno ao criar a transação!"
        );
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      }
      if (error.message == "Selecione uma categoria") {
        setToastTitle("Erro ao cadastrar");
        setToastDescription(error);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      }
    }
  }

  return (
    <Container>
      <ContainerX>
        <ButtonX onClick={onClose}>
          <IconX src="/x.png" />
        </ButtonX>
        <h2>Cadastro de Categoria</h2>
      </ContainerX>
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            required
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Label htmlFor="categoria">Categoria</Label>
          <Dropdown
            value={type}
            required
            onChange={(e) => setType(e.target.value)}
          >
            <option key={999} value="999">
              Selecione
            </option>
            {categoryOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Dropdown>
        </FormGroup>
        <Button type="submit">Cadastrar</Button>
      </FormContainer>
      {showToast && <Toast title={toastTitle} description={toastDescription} />}
    </Container>
  );
}

export default CategoryForm;
