import React from "react";
import "./Form.css";
import TextInput from "../TextInput/TextInput";
import DropdownList from "../DropdownList";

const teams = [
  "Programação",
  "Front-End",
  "Data Science",
  "Devops",
  "UX e Design",
  "Mobile",
  " Inovação e Gestão",
];

export default function Form() {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar os dados do colaborador.</h2>
        <TextInput label="Nome" placeholder={"Digite seu nome"} />
        <TextInput label="Cargo" placeholder={"Digite seu cargo"} />
        <TextInput label="Imagem" placeholder={"Digite o endereço da imagem"} />
        <DropdownList label={'Times'} items={teams} />
      </form>
    </section>
  );
}
