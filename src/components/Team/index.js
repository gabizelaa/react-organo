import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {
  const css = { backgroundColor: props.secondaryColor };
  const collaborators = props.collaborators || []; // Definindo um valor padrão

  return collaborators.length > 0 ? (
    <section className="team" style={css}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="collaborators">
        {collaborators.map((collaborator) => (
          <Collaborator // Corrigindo para usar o componente correto
            backgroundColor={props.primaryColor}
            key={collaborator.name} // Corrigindo para usar o nome do colaborador
            name={collaborator.name}
            position={collaborator.position}
            image={collaborator.image}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};


export default Team;
