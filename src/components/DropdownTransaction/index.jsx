import React from "react";
import { Root, Trigger, Portal } from "@radix-ui/react-dropdown-menu";
import {
  ArrowIco,
  Button,
  ContentWrapper,
  Icon,
  IconButton,
  MenuItem,
} from "./styles";

function DropdownMenuDemo({ onOpen }) {
  function openModalCreateTransaction() {
    console.log("openModalCreateTransaction");
    onOpen();
  }

  return (
    <Root>
      <Trigger asChild>
        <IconButton aria-label="Customise options">
          <Icon src="/gear-bold-white.png" />
        </IconButton>
      </Trigger>

      <Portal>
        <ContentWrapper sideOffset={5}>
          <MenuItem
            onClick={() => {
              console.log("Olá");
            }}
          >
            <Button>Cadastro de Categoria</Button>
          </MenuItem>

          <MenuItem lastitem="true">
            <Button onClick={openModalCreateTransaction}>
              Cadastro de Transações
            </Button>
          </MenuItem>

          <ArrowIco />
        </ContentWrapper>
      </Portal>
    </Root>
  );
}

export default DropdownMenuDemo;
