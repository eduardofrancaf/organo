import "./TextInput.css";

const TextInput = ({ label, placeholder, isRequired }) => {
  return (
    <div className="text-field">
      <label>{label}</label>
      <input required={isRequired} placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
