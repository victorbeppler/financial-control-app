import Cards from "../../components/Cards";
import Header from "../../components/Header";
import {
  BackgroundImage,
  Container,
  Title,
  TitleWrapper,
  Wrapp,
} from "./styles";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Header />
      <Container img="/environment.jpg">
        {/* <BackgroundImage img="/environment.jpg" /> */}
        <Title>Ambiente</Title>

        <Wrapp>
          {/* <TitleWrapper> */}
          {/* </TitleWrapper> */}
          <Cards />
          <Cards />
          <Cards />
        </Wrapp>
      </Container>
    </>
  );
}

export default Home;
