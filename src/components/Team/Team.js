import React from "react";
import "./Team.css";
import Colaborador from "../Colaborador/Colaborador";

export default function Team({ name, primaryColor, secondaryColor, members }) {
  return (
    <section className="team" style={{ backgroundColor: secondaryColor }}>
      <h3 style={{ borderColor: primaryColor }}>{name}</h3>
      <div className="membersList">
        {members.map((member) => (
          <Colaborador
            key={member.name}
            name={member.name}
            image={member.image}
            position={member.position}
            headerColor={primaryColor}
          />
        ))}
      </div>
    </section>
  );
}
