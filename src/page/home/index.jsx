import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TransactionForm from "../../components/Transaction";
import Header from "../../components/Header";
import Table from "../../components/Table";
import DropdownTransaction from "../../components/DropdownTransaction";
import CategoryForm from "../../components/Category";
import Toast from "../../components/Toast";
import ApiBack from "../../services/base-back";
import { DateFormatService } from "../../services/date-format";
import {
  ButtonArrow,
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
  const history = useNavigate();
  const { idEnvironment } = useParams();
  const Environment = JSON.parse(localStorage.getItem("Environment"));
  const [category, setCategory] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");
  const [isModalCreateDespesaReceita, setIsModalCreateDespesaReceita] =
    useState(false);
  const [isModalCreateCategory, setIsModalCreateCategory] = useState(false);
  const [bankAccount, setBanckAccount] = useState(0);
  const [date, setDate] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    nameMonth: "",
  });

  async function ConsultTransaction() {
    const response = await ApiBack.get(
      `/transaction/${idEnvironment}/${date.year}-${date.month}`
    );
    if (response.status === 200) {
      let amountBanckAccount = 0;
      setTransaction(response.data);
      for (const transc of response.data) {
        if (transc.category.type === "Income") {
          amountBanckAccount = amountBanckAccount + transc.amount;
        }
        if (transc.category.type === "Expense") {
          amountBanckAccount = amountBanckAccount - transc.amount;
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

  async function actualizeMonth() {
    try {
      const monthName = await new DateFormatService().format(date.month);
      setDate((prevState) => ({
        ...prevState,
        nameMonth: monthName,
      }));
    } catch (error) {}
  }

  async function handlePreviousMonth() {
    const { month, year } = await incrementMonth(false);
    const monthName = await new DateFormatService().format(month);
    setDate({
      month: month,
      year: year,
      nameMonth: monthName,
    });
  }

  async function handleNextMonth() {
    const { month, year } = await incrementMonth(true);
    const monthName = await new DateFormatService().format(month);
    setDate({
      month: month,
      year: year,
      nameMonth: monthName,
    });
  }

  async function incrementMonth(increment) {
    let newMonth = date.month;
    let newYear = date.year;

    if (increment) {
      if (newMonth === 12) {
        newMonth = 1;
        newYear = newYear + 1;
      } else {
        newMonth = newMonth + 1;
      }
    } else {
      if (newMonth === 1) {
        newMonth = 12;
        newYear = newYear - 1;
      } else {
        newMonth = newMonth - 1;
      }
    }

    return {
      month: newMonth,
      year: newYear,
    };
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      history("/login");
      return;
    }
    actualizeMonth();
    ConsultCategory();
    ConsultTransaction();
  }, [localStorage.getItem("user"), history]);

  useEffect(() => {
    ConsultTransaction();
  }, [date]);

  return (
    <>
      <Header />
      <Container>
        <h1>{Environment.title}</h1>
        <ContainerSaldo>
          <SaldoBancario>
            Saldo Bancario: R$ {bankAccount ? bankAccount : 0}
          </SaldoBancario>
        </ContainerSaldo>
        <ContainerFunctions>
          <ContainerMes>
            <ButtonArrow onClick={handlePreviousMonth}>
              <Caret src="/caret-left-fill-black.png" alt="Caret Left" />
            </ButtonArrow>
            <MesAtual>
              {date.nameMonth} - {date.year}
            </MesAtual>
            <ButtonArrow onClick={handleNextMonth}>
              <Caret src="/caret-right-fill-black.png" alt="Caret Left" />
            </ButtonArrow>
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
