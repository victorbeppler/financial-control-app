import React, { useState } from "react";

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
} from "./styles";
import { StatusOption } from "../../services/status.js";
import ApiBack from "../../services/base-back";
import Toast from "../Toast";
import { useParams } from "react-router-dom";

function TransactionForm({ listOfCategory, onClose }) {
  const { idEnvironment } = useParams();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [statusSelected, setStatusSelected] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await ApiBack.post("/transaction/create", {
        description: descricao,
        category: categorySelected,
        value: valor,
        date: data,
        status: statusSelected,
        environment: idEnvironment,
        user: user.id,
      });
      if (response.status === 201) {
        setToastTitle("Solicitação enviada com sucesso");
        setToastDescription("Sua transação foi cadastrada com sucesso!");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          onClose();
        }, 5000);
      }
    } catch (error) {
      console.log(error.response);
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
    }
  }

  return (
    <Container>
      <ContainerX>
        <ButtonX onClick={onClose}>
          <IconX src="/x.png" />
        </ButtonX>
        <h2>Cadastro de Transações</h2>
      </ContainerX>
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="descricao">Descrição</Label>
          <Input
            id="descricao"
            required
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <Label htmlFor="categoria">Categoria</Label>
          <Dropdown
            value={categorySelected}
            required
            onChange={(e) => setCategorySelected(e.target.value)}
          >
            <option value="999">Selecione</option>
            {listOfCategory.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </Dropdown>

          <Label htmlFor="valor">Valor</Label>
          <Input
            id="valor"
            required
            type="text"
            value={valor}
            onChange={(e) => {
              setValor(
                "R$ " +
                  e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d)(\d{2})$/, "$1,$2")
                    .replace(/(?=(\d{3})+(\D))\B/g, ".")
              );
            }}
            placeholder="R$ 0,00"
          />
          <Label htmlFor="data">Data de Vencimento</Label>
          <Input
            id="data"
            type="date"
            value={data}
            required
            onChange={(e) => setData(e.target.value)}
          />
          <Label htmlFor="status">Status</Label>
          <Dropdown
            value={statusSelected}
            required
            onChange={(e) => setStatusSelected(e.target.value)}
          >
            <option value="999">Selecione</option>
            {StatusOption.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </Dropdown>
        </FormGroup>
        <Button type="submit">Cadastrar</Button>
      </FormContainer>
      {showToast && <Toast title={toastTitle} description={toastDescription} />}
    </Container>
  );
}

export default TransactionForm;
