import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 0px 8px #000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  /* margin-left: 10px; */
`;

export const ContainerHome = styled.div`
  width: 70%;
  display: flex;
  padding-left: 50px;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerSingOut = styled.div`
  width: 30%;
  padding-right: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonSingOut = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const ButtonHome = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const NameUser = styled.h2`
  color: white;
  padding-right: 20px;
`;
