import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 320px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  overflow: hidden;
`;

export const ToastHeader = styled.div`
  background-color: #5600c6;
  color: #fff;
  padding: 8px 16px;
`;

export const ToastBody = styled.div`
  padding: 16px;
`;
