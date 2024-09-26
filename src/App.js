import "./App.css";
import { useState } from "react";
import Banner from "./components/Banner";
import Forms from "./components/Forms";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const toTheNewAddedCollaborator = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Forms
        toTheRegisteredCollaborator={toTheNewAddedCollaborator(collaborators)}
      />
    </div>
  );
}

export default App;
