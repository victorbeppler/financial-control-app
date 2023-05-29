import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: 0.3s;
  /* background-color: #000; */
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  :hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;
