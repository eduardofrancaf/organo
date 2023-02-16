import React from "react";
import "./Colaborador.css";

export default function Colaborador({ name, image, position, headerColor }) {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{backgroundColor: headerColor}}>
        <img src={image} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
}
