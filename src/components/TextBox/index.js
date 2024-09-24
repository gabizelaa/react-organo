import "./TextBox.css"

const TextBox = (props) => {

    const modifiedPlaceholder = `${props.placeholder}...`

    return (
        <div className="text-box">
            <label>{props.label}</label>
            <input required={props.mandatory} placeholder={modifiedPlaceholder}/>
        </div>
    )

}

export default TextBox;
