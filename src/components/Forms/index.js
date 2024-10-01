import TextBox from "../TextBox";
import DropdownList from "../Dropdown List";
import Button from "../Button";
import { useState } from "react";
import "./Forms.css";

const Forms = (props) => {

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    props.toTheRegisteredCollaborator({
      name,
      position,
      image,
      team,
    })
    setName("")
    setPosition("")
    setImage("")
    setTeam("")
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextBox
          mandatory={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          whenModified={(value) => setName(value)}
        />
        <TextBox
          mandatory={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={position}
          whenModified={(value) => setPosition(value)}
        />
        <TextBox
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={image}
          whenModified={(value) => setImage(value)}
        />
        <DropdownList
          mandatory={true}
          label="Time"
          items={props.teams}
          value={team}
          whenModified={value => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Forms;
