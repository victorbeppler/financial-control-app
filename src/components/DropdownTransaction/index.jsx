import React, { useState, useEffect, useRef } from "react";
import { Root, Trigger, Portal } from "@radix-ui/react-dropdown-menu";
import {
  ArrowIco,
  Button,
  ContentWrapper,
  Icon,
  IconButton,
  MenuItem,
} from "./styles";

function DropdownMenuDemo({ onOpenTransaction, onOpenCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  function openModalCreateTransaction() {
    setIsOpen(false);
    onOpenTransaction();
  }

  function openModalCreateCategory() {
    setIsOpen(false);
    onOpenCategory();
  }

  function open() {
    setIsOpen(true);
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Root>
      <Trigger asChild>
        <IconButton onClick={open} aria-label="Customise options">
          <Icon src="/gear-bold-white.png" />
        </IconButton>
      </Trigger>

      {isOpen && (
        <Portal>
          <ContentWrapper sideOffset={5} ref={dropdownRef}>
            <MenuItem
              onClick={() => {
                openModalCreateCategory();
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
      )}
    </Root>
  );
}

export default DropdownMenuDemo;
