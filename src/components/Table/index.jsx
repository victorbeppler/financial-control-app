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
                {/* // quando for despesa, o valor deve ser negativo */}
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
    </Container>
  );
}

export default Table;
