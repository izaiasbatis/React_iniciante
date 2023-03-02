import styles from '../Styles/NewProject.module.css';
import ProjetoFormularios from '../Projeto/ProjetoFormularios'
function NewProject() {
    return(<div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p> Crie seu projeto para adicionar os serviços!</p>
        <ProjetoFormularios/>

    </div>);
};

export default NewProject;