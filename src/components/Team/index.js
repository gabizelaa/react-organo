import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {
  const css = { backgroundColor: props.secondaryColor };

  return props.collaborators.length > 0 ? (
    <section className="team" style={css}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="collaborators">
        {props.collaborators.map((collaborator) => (
          <collaborator
            backgroundColor={props.primaryColor}
            key={Collaborator.name}
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
