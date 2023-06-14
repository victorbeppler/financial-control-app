import { Content, Item, Arrow } from "@radix-ui/react-dropdown-menu";
import styled, { css } from "styled-components";

export const ContentWrapper = styled(Content)`
  min-width: 220px;
  border-radius: 6px;
  background-color: white;
  border: 1px solid black;
  padding: 5px;
  gap: 5px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-side="top"] {
    animation-name: slideDownAndFade;
  }

  &[data-side="right"] {
    animation-name: slideLeftAndFade;
  }

  &[data-side="bottom"] {
    animation-name: slideUpAndFade;
  }

  &[data-side="left"] {
    animation-name: slideRightAndFade;
  }
`;

export const MenuItem = styled(Item)`
  font-size: 16px;
  line-height: 1;
  color: black;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 5px;
  position: relative;
  padding-left: 25px;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-bottom: none;
  padding: 8px;

  ${(props) =>
    !props.lastitem &&
    css`
      border-bottom: 1px solid black;
      border-radius: 0px;
    `}

  :focus {
    scale: 1.05;
  }
  &[data-disabled] {
    color: var(--mauve8);
    pointer-events: none;
  }

  &[data-highlighted] {
    background-color: var(--violet9);
    color: var(--violet1);
  }
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 10%;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ArrowIco = styled(Arrow)`
  width: 10px;
  fill: black;
`;

const slideUpAndFadeAnimation = css`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFadeAnimation = css`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDownAndFadeAnimation = css`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFadeAnimation = css`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const DropdownMenuContent = styled.div`
  ${slideUpAndFadeAnimation}
  ${slideDownAndFadeAnimation}
  ${slideRightAndFadeAnimation}
  ${slideLeftAndFadeAnimation}
`;

export const Button = styled.button`
  margin: 5px;
  border: none;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
`;
