import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  border: 2px solid #000;
  border-radius: 30px;
  padding: 0px 0px 30px 0px;
  background-color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding-left: 10px;
`;

export const TextArea = styled.textarea`
  width: 400px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding-left: 10px;
  padding-top: 4px;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const ContainerX = styled.div`
  display: flex;
  top: 10px;
  right: 10px;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
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
