import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: #d22042; */
  background: linear-gradient(to bottom, #d22042 20%, #5600c6 100%);
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 600px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  text-align: center;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px;
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  ::placeholder {
    padding-left: 10px;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding-left: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid black;
  background-image: linear-gradient(to right, #d22042 20%, #5600c6 100%);
  color: white;
  font-size: 16px;
  cursor: pointer;
  :hover {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  :focus {
  }
`;
