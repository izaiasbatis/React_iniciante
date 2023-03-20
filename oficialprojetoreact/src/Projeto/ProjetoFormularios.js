import styles from '../Styles/ProjetoFormularios.module.css'
import Projetos_input from './Forms/Projetos_input'

function ProjetoFormularios() {
    return(
        <form className={styles.formulário}>
            <div><Projetos_input type="text" name="name" text="Nome do Projeto" placeholder="Insira o nome do Projeto"/></div>
            <div><Projetos_input type="number" name="budget" text="Orçamento do projeto" placeholder="Insira o orçamento total"/></div>
            <div>
                <select name="categoria_id">
                    <option disable selected>Selecionar categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value= "criar projeto">
                </input>
            </div>
        </form>
    )
}
export default ProjetoFormularios;