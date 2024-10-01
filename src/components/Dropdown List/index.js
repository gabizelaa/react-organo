import "./DropdownList.css";

const DropdownList = (props) => {
  console.log(props.items);

  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.whenModified(event.target.value)}
        required={props.mandatory}
        value={props.value}
      >
      <option value=""></option>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
