import React from "react";
import "./Form.css";
import TextInput from "../TextInput/TextInput";
import DropdownList from "../DropdownList";
import Button from "../Button";
import { useState } from "react";

const Form = ({ teams, onAddEmployeeCallback }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onAddEmployeeCallback({ name, position, image, team });
    setName("");
    setPosition("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <h2>Preencha os dados para criar os dados do colaborador.</h2>
        <TextInput
          value={name}
          setValue={setName}
          isRequired={true}
          label="Nome"
          placeholder={"Digite seu nome"}
        />
        <TextInput
          value={position}
          setValue={setPosition}
          isRequired={true}
          label="Cargo"
          placeholder={"Digite seu cargo"}
        />
        <TextInput
          value={image}
          setValue={setImage}
          label="Imagem"
          placeholder={"Digite o endereço da imagem"}
        />
        <DropdownList
          value={team}
          setValue={setTeam}
          isRequired={true}
          label={"Times"}
          items={teams}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
