import "./DropdownList.css";

const DropdownList = (props) => {
    return (
      <div className="dropdown-list">
        <label>{props.label}</label>
        <select required={props.mandatory}>
          {props.items.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    );
  };

export default DropdownList;
