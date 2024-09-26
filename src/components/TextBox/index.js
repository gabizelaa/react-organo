import "./TextBox.css";

const TextBox = (props) => {
  const modifiedPlaceholder = `${props.placeholder}...`;

  const whenTyped = (event) => {
    props.whenModified(event.target.value);
  };

  return (
    <div className="text-box">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={whenTyped}
        required={props.mandatory}
        placeholder={modifiedPlaceholder}
      />
    </div>
  );
};

export default TextBox;
