import React from "react";
import "./DropdownList.css";

export default function DropdownList({ items, label }) {
  return (
    <div className="dropdown-list">
      <label>{label}</label>
      <select>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
