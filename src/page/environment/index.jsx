import { useEffect, useState } from "react";
import CadastroEnvironment from "../../components/CadastroEnvironment";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import {
  ButtonAdd,
  CardWrapper,
  Container,
  ContainerButtonAdd,
  ContainerCard,
  Plus,
  Wrapp,
} from "./styles";
import ApiBack from "../../services/base-back.js";
import Toast from "../../components/Toast";

function EnvironmentSelect() {
  const [environments, setEnvironments] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  async function ConsultEnvironments(idUser) {
    const response = await ApiBack.get(`/environment/${idUser}}`);
    setEnvironments(response.data.success);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      window.location.href = "/login";
    }
    ConsultEnvironments(user.id);
  }, [localStorage.getItem("user"), showToast]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function CreateEnvironmentModal() {
    setIsModalVisible(true);
  }

  function handleModalClose() {
    setIsModalVisible(false);
  }

  async function toast() {
    setIsModalVisible(false);
    setToastTitle("Ambiente cadastrado com sucesso!");
    setToastDescription("Seu ambiente foi cadastrado com sucesso!");
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }

  console.log(user);

  return (
    <>
      <Header />
      <Container img="/environment.jpg">
        <Wrapp>
          <ContainerCard>
            {environments.map((environment) => (
              <CardWrapper key={environment.environment.id}>
                <Cards
                  idEnvironment={environment.environment.id}
                  title={environment.environment.name}
                  description={environment.environment.description}
                />
              </CardWrapper>
            ))}
          </ContainerCard>
          <ContainerButtonAdd>
            <ButtonAdd onClick={CreateEnvironmentModal}>
              <Plus src="/plus-bold-white.png" />
            </ButtonAdd>
          </ContainerButtonAdd>
        </Wrapp>
        {isModalVisible && (
          <CadastroEnvironment
            onClose={handleModalClose}
            UserData={user}
            onClick={toast}
          />
        )}
      </Container>
      {showToast && <Toast title={toastTitle} description={toastDescription} />}
    </>
  );
}

export default EnvironmentSelect;
