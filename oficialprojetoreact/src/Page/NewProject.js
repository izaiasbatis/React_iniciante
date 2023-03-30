import styles from '../Styles/NewProject.module.css';
import ProjetoFormularios from '../Projeto/ProjetoFormularios'
import { useNavigate } from 'react-router-dom'
function NewProject() {
    const navigate = useNavigate()

    function createPost(project){
        // initialize cost and services
    project.cost = 0
    project.services = []
    fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify(project),
    })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirecionar
            navigate('/projects', {message: 'Criado com sucesso!'})
        })
        .catch((err) => console.log(err))
        
    }

    return(<div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p> Crie seu projeto para adicionar os serviços!</p>
        <ProjetoFormularios handleSubmit={createPost} btnText="Criar Projeto"/>

    </div>);
};

export default NewProject;