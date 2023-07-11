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
              <TableRowBody key={transaction.id}>
                <TableCell hideOnSmall>{transaction.id}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{"R$ " + transaction.amount}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell hideOnSmall>{transaction.category.name}</TableCell>
                <TableCell>{transaction.category.type}</TableCell>
                <TableCell hideOnSmall>{transaction.user.name}</TableCell>
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
