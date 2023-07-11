import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  flex: 1;
  width: 85%;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TableForm = styled.table`
  border-collapse: collapse;
  width: 100%;
  animation: ${fadeIn} 1s;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Header = styled.thead`
  border-bottom: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  transition: transform 0.2;
  height: 10px;
`;

export const HeaderRow = styled.th`
  text-align: left;
  padding: 8px;
  color: #000;
  font-family: "Roboto", sans-serif;
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 0.6rem;
    display: ${(props) => (props.hideOnSmall ? "none" : "table-cell")};
  }
`;
export const TableRowBody = styled.tr`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  transition: transform 0.2;
  height: 10px;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    outline: 1px solid red;
    cursor: pointer;
    box-shadow: 0 0 10px red;
    transform: translateY(-2px);
    font-size: 1rem;
    font-weight: 300;
  }
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

export const TableCell = styled.td`
  height: auto;
  text-align: left;
  padding: 8px;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    transition: transform 0.2;
    display: ${(props) => (props.hideOnSmall ? "none" : "table-cell")};
  }
`;

export const TBody = styled.tbody`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  transition: transform 0.2;
  height: 10px;
  @media (max-width: 768px) {
    font-size: 0.6rem;
    transition: transform 0.2;
  }
`;
