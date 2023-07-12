import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid #000;
  border-radius: 30px;
  background-color: #fff;
  z-index: 1000;
`;

export const ContainerX = styled.div`
  display: flex;
  top: 10px;
  right: 10px;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  position: flex;
`;

export const ButtonX = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  margin-top: 10px;
  margin-right: 10px;
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

export const IconX = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-bottom: 30px;
  gap: 20px;
`;

export const ButtonConfirm = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const ButtonCancel = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #f44336;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const Title = styled.h2`
  color: black;
  border-bottom: 1px solid black;
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
