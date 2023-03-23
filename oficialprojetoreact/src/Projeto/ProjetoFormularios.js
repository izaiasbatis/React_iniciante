import {useState, useEffect} from "react"
import styles from '../Styles/ProjetoFormularios.module.css'
import Projetos_input from './Forms/Projetos_input'
import Select from './Forms/Select';
import Submete_botton from './Forms/Submeter_botton';

function ProjetoFormularios({btnText}) {/* importando btntext do componente pai New projects*/
    const[categories, setCategories] = useState([])    
    useEffect(() => {
    fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type':'application/json'
        }
    }).then((resp) => resp.json())
    .then((data) => {setCategories(data)})
    .catch((err) => console.log(err))
    }, [])
    return(
        <form className={styles.formulário}>
            <div><Projetos_input type="text" name="name" text="Nome do Projeto" placeholder="Insira o nome do Projeto"/></div>
            <div><Projetos_input type="number" name="budget" text="Orçamento do projeto" placeholder="Insira o orçamento total"/></div>
            <Select name="category_id" text="Selecione uma categoria" options={categories}/>
            <Submete_botton text={btnText}/>
        </form>
    )
}
export default ProjetoFormularios;