import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
    to { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  margin: 100px auto;
  width: 50px;
  height: 50px;
  border: solid 6px #ccc;
  border-top-color: #d22042;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
