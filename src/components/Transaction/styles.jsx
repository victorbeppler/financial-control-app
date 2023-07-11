import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  border: 2px solid #000;
  border-radius: 30px;
  padding: 0px 0px 30px 0px;
  background-color: #fff;
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
  margin-top: 5px;
`;

export const Dropdown = styled.select`
  padding: 0.6rem;
  font-family: "Roboto", sans-serif;
  width: 300px;
  height: 35px;
  border-radius: 0.5rem;
  border: 1px solid black;
  font-size: 0.8rem;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const ContainerX = styled.div`
  display: flex;
  top: 10px;
  right: 10px;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
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

export const DropdownButton = styled.button`
  width: 290px;
  height: 35px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: "Roboto", sans-serif;
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
  /* border: 1px solid #ccc; */
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
  width: 290px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  padding-left: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
