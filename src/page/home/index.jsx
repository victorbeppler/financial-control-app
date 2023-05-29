import CadastroDespesaReceita from "../../components/CadastroDespesaReceita";
import Header from "../../components/Header";
import {
  ButtonAdd,
  Caret,
  Container,
  ContainerButtonAdd,
  ContainerFunctions,
  ContainerMes,
  ContainerSaldo,
  MesAtual,
  Plus,
  SaldoBancario,
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableRowBody,
} from "./styles";

function Home() {
  // const user = localStorage.getItem("user");
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Container>
      <Header />
      {/* {console.log(user.name)} */}
      <ContainerSaldo>
        <SaldoBancario>Saldo Bancario: 3000</SaldoBancario>
      </ContainerSaldo>
      <ContainerFunctions>
        <ContainerMes>
          <Caret src="/caret-left-fill-black.png" alt="Caret Left" />
          <MesAtual>Maio</MesAtual>
          <Caret src="/caret-right-fill-black.png" alt="Caret Left" />
        </ContainerMes>
        <ContainerButtonAdd>
          <ButtonAdd>
            <Plus src="/plus-bold-white.png" />
          </ButtonAdd>
        </ContainerButtonAdd>
      </ContainerFunctions>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>#</TableHeaderCell>
              <TableHeaderCell>Categoria</TableHeaderCell>
              <TableHeaderCell>Valor</TableHeaderCell>
              <TableHeaderCell>Data</TableHeaderCell>
              <TableHeaderCell>Tipo de Lancamento</TableHeaderCell>
              <TableHeaderCell>Adicionado Por</TableHeaderCell>
              <TableHeaderCell>Anexos</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRowBody>
              <TableCell>1</TableCell>
              <TableCell>Alimentação</TableCell>
              <TableCell>100</TableCell>
              <TableCell>01/01/2021</TableCell>
              <TableCell>Despesa</TableCell>
              <TableCell>João</TableCell>
              <TableCell>0</TableCell>
            </TableRowBody>
            <TableRowBody>
              <TableCell>1</TableCell>
              <TableCell>Alimentação</TableCell>
              <TableCell>100</TableCell>
              <TableCell>01/01/2021</TableCell>
              <TableCell>Despesa</TableCell>
              <TableCell>João</TableCell>
              <TableCell>0</TableCell>
            </TableRowBody>
            <TableRowBody>
              <TableCell>1</TableCell>
              <TableCell>Alimentação</TableCell>
              <TableCell>100</TableCell>
              <TableCell>01/01/2021</TableCell>
              <TableCell>Despesa</TableCell>
              <TableCell>João</TableCell>
              <TableCell>0</TableCell>
            </TableRowBody>
          </tbody>
        </Table>
      </TableContainer>
      <CadastroDespesaReceita />
    </Container>
  );
}

export default Home;
