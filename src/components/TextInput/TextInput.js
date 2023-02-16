import "./TextInput.css";

const TextInput = ({ label, placeholder, isRequired, value, setValue }) => {
  return (
    <div className="text-field">
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={isRequired}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
