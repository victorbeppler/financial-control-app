import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(3px);
`;

export const Wrapper = styled.div`
  position: absolute;
  /* top: 0;
  left: 0; */
  /* height: 350px; */
  /* width: 100%; */
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* opacity: 40%; */
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  /* font-weight: bold; */
  color: black;
  text-align: center;
  /* padding: 20px; */
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
  padding-left: 10px;
  :focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #5600c6;
  color: white;
  font-size: 16px;
  cursor: pointer;
  opacity: calc(100% - 30%);
  :hover {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    opacity: 100%;
  }
`;

export const Link = styled.a`
  padding: 10px;
  font-size: 16px;
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: #5600c6;
  }
`;
