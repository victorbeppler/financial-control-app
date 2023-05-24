import React, { useState } from "react";

import {
  Button,
  Container,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  FileInput,
  FormContainer,
  FormGroup,
  Input,
  Label,
} from "./styles";
import { categoryOptions } from "../../services/category-options.js";

function CadastroDespesaReceita() {
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [arquivos, setArquivos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(categoryOptions[0].name);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o envio do formulário para o backend
  };
  return (
    <Container>
      <h1>Cadastro de Despesa/Receita</h1>
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="categoria">Categoria</Label>
          <DropdownContainer>
            <DropdownButton
              onClick={() => setIsOpen(!isOpen)}
              aria-required="true"
            >
              {selectedOption}
            </DropdownButton>
            {isOpen && (
              <DropdownList>
                {categoryOptions.map((option) => (
                  <DropdownItem
                    key={option.id}
                    onClick={() => handleOptionClick(option.name)}
                  >
                    {option.name}
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </DropdownContainer>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="valor">Valor</Label>
          <Input
            id="valor"
            type="text"
            value={valor}
            onChange={(e) => {
              setValor(
                "R$ " +
                  e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d)(\d{2})$/, "$1,$2")
                    .replace(/(?=(\d{3})+(\D))\B/g, ".")
              );
            }}
            placeholder="R$ 0,00"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="data">Data</Label>
          <Input
            id="data"
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="arquivos">Arquivos</Label>
          <FileInput
            id="arquivos"
            type="file"
            multiple
            onChange={(e) => setArquivos(e.target.files)}
          />
        </FormGroup>

        <Button type="submit">Cadastrar</Button>
      </FormContainer>
    </Container>
  );
}

export default CadastroDespesaReceita;
