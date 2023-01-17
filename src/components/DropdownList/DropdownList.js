import React from "react";
import "./DropdownList.css";

export default function DropdownList({ items, label, isRequired }) {
  return (
    <div className="dropdown-list">
      <label>{label}</label>
      <select required={isRequired}>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
