import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #000;
`;

export const Wrapp = styled.div`
  position: relative;
  width: 80%;
  min-height: 70vh;
  margin: 0px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90vw;
    height: 100%;
    border-radius: 0px;
  }
`;

export const ContainerButtonAdd = styled.div`
  display: flex;
  top: 10px;
  right: 10px;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonAdd = styled.button`
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

export const Plus = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  width: 250px;
  height: 200px;
  /* border-radius: 10px; */
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;
