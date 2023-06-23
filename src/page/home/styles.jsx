import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerSaldo = styled.div`
  width: 83%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SaldoBancario = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 10px;
  height: 30px;
  /* width: 200px; */
  padding: 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-weight: bold;
`;

export const ContainerFunctions = styled.div`
  width: 87%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 30px;
`;

export const ContainerMes = styled.div`
  width: 83%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

export const Caret = styled.img`
  width: 20px;
  height: 20px;
`;

export const CaretRight = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const MesAtual = styled.p`
  padding: 0 20px;
  display: flex;
`;

export const Plus = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
// o container do botão add precisa ficr no final do containerMes
export const ContainerButtonAdd = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 10%;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const TableContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  flex: 1;
  width: 85%;
  /* height: 80%; */
`;
