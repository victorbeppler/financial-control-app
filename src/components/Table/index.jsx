import React, { useState } from "react";

import {
  Container,
  TableCell,
  TableForm,
  Header,
  TableRow,
  TableRowBody,
  TBody,
  HeaderRow,
} from "./styles";
import EditTransaction from "../ModalTransaction";

function Table({ transactions }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  async function handleOpenModal(transaction) {
    setSelectedTransaction(transaction);
    setShowModal(true);
  }

  async function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <Container>
      <TableForm>
        <Header>
          <TableRow>
            <HeaderRow hideOnSmall>#</HeaderRow>
            <HeaderRow>Descricao</HeaderRow>
            <HeaderRow>Valor</HeaderRow>
            <HeaderRow>Status</HeaderRow>
            <HeaderRow hideOnSmall>Categoria</HeaderRow>
            <HeaderRow>Tipo de Lancamento</HeaderRow>
            <HeaderRow hideOnSmall>Adicionado Por</HeaderRow>
            <HeaderRow>Data de Vencimento</HeaderRow>
          </TableRow>
        </Header>
        <TBody>
          {transactions.map((transaction) => {
            return (
              <TableRowBody
                key={transaction.id}
                onClick={() => handleOpenModal(transaction)}
              >
                <TableCell hideOnSmall>{transaction.id}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell transactionType={transaction.category.type}>
                  {transaction.category.type === "Expense"
                    ? "- R$ " + transaction.amount
                    : "R$ " + transaction.amount}
                </TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell hideOnSmall>{transaction.category.name}</TableCell>
                <TableCell>
                  {transaction.category.type === "Income"
                    ? "Receita"
                    : "Despesa"}
                </TableCell>
                <TableCell hideOnSmall>{transaction.user.name}</TableCell>
                <TableCell>{transaction.dueDate}</TableCell>
              </TableRowBody>
            );
          })}
        </TBody>
      </TableForm>
      {showModal && (
        <EditTransaction
          onClose={handleCloseModal}
          transaction={selectedTransaction}
        />
      )}
    </Container>
  );
}

export default Table;
