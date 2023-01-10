import React from "react";
import "./Form.css";
import TextInput from "../TextInput/TextInput";

export default function Form() {
  return (
    <section className="form">
      <form >
        <h2>Preencha os dados para criar os dados do colaborador.</h2>
        <TextInput label="Nome" placeholder={"Digite seu nome"} />
        <TextInput label="Cargo" placeholder={"Digite seu cargo"} />
        <TextInput label="Imagem" placeholder={"Digite o endereço da imagem"} />
      </form>
    </section>
  );
}
