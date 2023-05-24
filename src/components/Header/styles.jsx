import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 0px 8px #000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
