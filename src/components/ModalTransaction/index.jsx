import React, { useState } from "react";

import {
  ButtonCancel,
  ButtonConfirm,
  ButtonX,
  Container,
  ContainerButtons,
  ContainerX,
  IconX,
} from "./styles.jsx";

import Toast from "../Toast/index.jsx";
import ApiBack from "../../services/base-back.js";

function EditTransaction({ onClose, transaction }) {
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
      setToast({
        showToast: true,
        title: "Notificação",
        description: "Transação deletada com sucesso",
      });
      setTimeout(() => {
        setToast({
          showToast: false,
          title: "",
          description: "",
        });
        onClose();
        window.location.reload();
      }, 2300);
    } else {
      setToast({
        showToast: true,
        title: "Notificação",
        description: "Erro ao deletar transação",
      });
      setTimeout(() => {
        setToast({
          showToast: false,
          title: "",
          description: "",
        });
        onClose();
      }, 2300);
    }
  }

  return (
    <Container>
      <ContainerX>
        <ButtonX onClick={onClose}>
          <IconX src="/x.png" />
        </ButtonX>
      </ContainerX>
      <h2>{transaction.description}</h2>
      <ContainerButtons>
        <ButtonConfirm>Editar</ButtonConfirm>
        <ButtonCancel onClick={deleteTransaction}>Excluir</ButtonCancel>
      </ContainerButtons>

      {toast.showToast && (
        <Toast title={toast.title} description={toast.description} />
      )}
    </Container>
  );
}

export default EditTransaction;
