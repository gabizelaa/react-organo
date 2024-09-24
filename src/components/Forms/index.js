import TextBox from "../TextBox";
import DropdownList from "../Dropdown List";
import Button from "../Button";
import "./Forms.css";

const Forms = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    ' Inovação e Gestão'
    ]

    const onSubmit = (event) => {
      event.preventDefault(); // Previne o comportamento padrão do formulário (refresh)
      console.log("Form foi submetido")
    }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <h2>
          Preencha os dados para criar o card do colaborador.
        </h2>
        <TextBox mandatory={true} label="Nome"  placeholder="Digite seu nome" />
        <TextBox mandatory={true} label="Cargo" placeholder="Digite seu cargo" />
        <TextBox label="Imagem" placeholder="Informe o endereço da imagem" />
        <DropdownList mandatory={true} label="Time" items={times}/>
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
};

export default Forms;
