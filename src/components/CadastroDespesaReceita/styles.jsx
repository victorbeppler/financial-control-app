import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  border: 2px solid #000;
  border-radius: 30px;
  padding: 0px 0px 30px 0px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 300px;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  width: 300px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 300px;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  list-style: none;
  z-index: 9999;
`;

export const DropdownItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 8px;
  width: 150px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

export const Input = styled.input`
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const FileInput = styled.input`
  height: 30px;
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
