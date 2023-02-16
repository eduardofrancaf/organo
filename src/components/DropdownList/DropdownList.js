import React from "react";
import "./DropdownList.css";

export default function DropdownList({
  items,
  label,
  isRequired,
  value,
  setValue,
}) {
  return (
    <div className="dropdown-list">
      <label>{label}</label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={isRequired}
      >
        <option value=""></option>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
