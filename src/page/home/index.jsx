import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import TransactionForm from "../../components/Transaction";
import Header from "../../components/Header";
import Table from "../../components/Table";
import DropdownTransaction from "../../components/DropdownTransaction";
import CategoryForm from "../../components/Category";
import Toast from "../../components/Toast";
import ApiBack from "../../services/base-back";
import {
  Caret,
  Container,
  ContainerButtonAdd,
  ContainerFunctions,
  ContainerMes,
  ContainerSaldo,
  MesAtual,
  SaldoBancario,
} from "./styles";

function Home() {
  const { idEnvironment } = useParams();
  const [category, setCategory] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");
  const [isModalCreateDespesaReceita, setIsModalCreateDespesaReceita] =
    useState(false);
  const [isModalCreateCategory, setIsModalCreateCategory] = useState(false);
  const [bankAccount, setBanckAccount] = useState(0);

  async function ConsultTransaction() {
    const response = await ApiBack.get(`/transaction/${idEnvironment}`);
    if (response.status === 200) {
      let amountBanckAccount = 0;
      setTransaction(response.data);
      for (const transc of response.data) {
        if (transc.category.type === "Income") {
          amountBanckAccount = amountBanckAccount + transc.amount;
        }
      }
      setBanckAccount(amountBanckAccount);
    }
  }

  async function ConsultCategory() {
    try {
      const response = await ApiBack.get(
        `/category/` + idEnvironment.replace(/\D/g, "")
      );
      if (response.status === 200) {
        setCategory(response.data);
      }
    } catch (error) {}
  }

  const handleOpenTransaction = () => {
    setIsModalCreateCategory(false);
    setIsModalCreateDespesaReceita(true);
  };

  const handleOpenCategory = () => {
    setIsModalCreateDespesaReceita(false);
    setIsModalCreateCategory(true);
  };

  useEffect(
    () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        window.location.href = "/login";
        return;
      }
      ConsultCategory();
      ConsultTransaction();
    },
    [localStorage.getItem("user")],
    isModalCreateCategory,
    isModalCreateDespesaReceita
  );

  return (
    <>
      <Container>
        <Header />
        <ContainerSaldo>
          <SaldoBancario>
            Saldo Bancario: R$ {bankAccount ? bankAccount : 0}
          </SaldoBancario>
        </ContainerSaldo>
        <ContainerFunctions>
          <ContainerMes>
            <Caret src="/caret-left-fill-black.png" alt="Caret Left" />
            <MesAtual>Maio</MesAtual>
            <Caret src="/caret-right-fill-black.png" alt="Caret Left" />
          </ContainerMes>
          <ContainerButtonAdd>
            <DropdownTransaction
              onOpenTransaction={handleOpenTransaction}
              onOpenCategory={handleOpenCategory}
            />
          </ContainerButtonAdd>
        </ContainerFunctions>
        <Table transactions={transaction} />
        {isModalCreateDespesaReceita && (
          <TransactionForm
            onClose={() => setIsModalCreateDespesaReceita(false)}
            listOfCategory={category}
          />
        )}
        {isModalCreateCategory && (
          <CategoryForm onClose={() => setIsModalCreateCategory(false)} />
        )}
        {showToast && (
          <Toast title={toastTitle} description={toastDescription} />
        )}
      </Container>
    </>
  );
}

export default Home;
