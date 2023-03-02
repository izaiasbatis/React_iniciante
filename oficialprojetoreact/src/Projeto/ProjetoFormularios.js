import styles from '../Styles/ProjetoFormularios.module.css'

function ProjetoFormularios() {
    return(
        <form className={styles.formulário}>
            <div><input type='text' placeholder='Insira o nome do Projeto'/></div>
            <div><input type='number' placeholder='Insira o orçamento total'/></div>
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