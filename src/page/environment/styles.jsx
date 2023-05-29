import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(3px);
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 4%;
  /* align-items: center;
  justify-content: center; */
  left: 50%;
  transform: translateX(-50%);
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #000;
`;

export const Wrapp = styled.div`
  /* position: absolute; */
  width: 80%;
  height: 70vh;
  margin: 0px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
