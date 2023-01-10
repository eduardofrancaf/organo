import "./TextInput.css";

const TextInput = ({ label, placeholder }) => {
  return (
    <div className="text-field">
      <label>{label}</label>
      <input placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
