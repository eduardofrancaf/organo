import React from "react";
import "./Form.css";
import TextInput from "../TextInput/TextInput";
import DropdownList from "../DropdownList";
import Button from "../Button";

const teams = [
  "Programação",
  "Front-End",
  "Data Science",
  "Devops",
  "UX e Design",
  "Mobile",
  " Inovação e Gestão",
];

const onSubmit = (e) => {
  e.preventDefault();
  console.log("Criar executado");
};

export default function Form() {
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <h2>Preencha os dados para criar os dados do colaborador.</h2>
        <TextInput
          isRequired={true}
          label="Nome"
          placeholder={"Digite seu nome"}
        />
        <TextInput
          isRequired={true}
          label="Cargo"
          placeholder={"Digite seu cargo"}
        />
        <TextInput label="Imagem" placeholder={"Digite o endereço da imagem"} />
        <DropdownList isRequired={true} label={"Times"} items={teams} />
        <Button>Criar card</Button>
      </form>
    </section>
  );
}
