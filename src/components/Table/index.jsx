import React from "react";

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

function Table({ transactions }) {
  return (
    <Container>
      <TableForm>
        <Header>
          <TableRow>
            <HeaderRow>#</HeaderRow>
            <HeaderRow>Descricao</HeaderRow>
            <HeaderRow>Valor</HeaderRow>
            <HeaderRow>Status</HeaderRow>
            <HeaderRow>Categoria</HeaderRow>
            <HeaderRow>Tipo de Lancamento</HeaderRow>
            <HeaderRow>Adicionado Por</HeaderRow>
            <HeaderRow>Data de Vencimento</HeaderRow>
          </TableRow>
        </Header>
        <TBody>
          {transactions.map((transaction) => {
            return (
              <TableRowBody>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{"R$ " + transaction.amount}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>{transaction.category.name}</TableCell>
                <TableCell>{transaction.category.type}</TableCell>
                <TableCell>{transaction.user.name}</TableCell>
                <TableCell>{transaction.dueDate}</TableCell>
              </TableRowBody>
            );
          })}
        </TBody>
      </TableForm>
    </Container>
  );
}

export default Table;
