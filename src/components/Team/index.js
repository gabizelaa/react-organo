import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {
  const background = { backgroundColor: props.secondaryColor };
  const border = { borderColor: props.primaryColor };

  return props.collaborators.length > 0 ? (
    <section className="team" style={background}>
      <h3 style={border}>{props.name}</h3>
      <div className="collaborators">
        {props.collaborators.map((collaborator) => (
          <Collaborator
            backgroundColor={props.primaryColor}
            key={collaborator.name} // Adicione uma key única aqui para evitar erros de renderização
            name={collaborator.name}
            position={collaborator.position}
            image={collaborator.image}
          />
        ))}
      </div>
    </section>
  ) : null;
};

export default Team;
