import React, { useState } from "react";

import {
  ButtonCancel,
  ButtonConfirm,
  ButtonX,
  Container,
  ContainerButtons,
  ContainerInfo,
  ContainerX,
  IconX,
  Title,
} from "./styles.jsx";

import Toast from "../Toast/index.jsx";
import ApiBack from "../../services/base-back.js";

function EditTransaction({ onClose, transaction, toastInfo }) {
  const [toast, setToast] = useState({
    showToast: false,
    title: "",
    description: "",
  });

  async function deleteTransaction() {
    console.log(transaction);
    const response = await ApiBack.post(
      `/transaction/delete/${transaction.id}`
    );
    if (response?.data?.success) {
      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 2300);
    } else {
      setTimeout(() => {
        onClose();
      }, 2300);
    }
  }

  async function editTransaction() {
    // toastInfo({
    //   showToast: true,
    //   title: "Notificação",
    //   description: "Edição de transação em andamento.",
    // })
    // setToast({
    //   showToast: true,
    //   title: "Notificação",
    //   description: "Edição de transação em andamento.",
    // });
    // setTimeout(() => {
    //   setToast({
    //     showToast: false,
    //     title: "",
    //     description: "",
    //   });
    //   onClose();
    // }, 2300);
  }

  return (
    <Container>
      <ContainerX>
        <ButtonX onClick={onClose}>
          <IconX src="/x.png" />
        </ButtonX>
      </ContainerX>
      <Title>{transaction.description}</Title>
      <ContainerInfo>
        <p>Valor: {transaction.amount}</p>
        <p>
          Tipo: {transaction.category.type === "Income" ? "Receita" : "Despesa"}
        </p>
        <p>Status: {transaction.status}</p>
        <p>Categoria: {transaction.category.name}</p>
        <p>Data: {transaction.dueDate}</p>
      </ContainerInfo>
      <ContainerButtons>
        <ButtonConfirm onClick={editTransaction}>Editar</ButtonConfirm>
        <ButtonCancel onClick={deleteTransaction}>Excluir</ButtonCancel>
      </ContainerButtons>

      {toast.showToast && (
        <Toast title={toast.title} description={toast.description} />
      )}
    </Container>
  );
}

export default EditTransaction;
