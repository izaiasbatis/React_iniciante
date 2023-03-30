import {useState, useEffect} from "react"
import styles from '../Styles/ProjetoFormularios.module.css'
import Projetos_input from './Forms/Projetos_input'
import Select from './Forms/Select';
import Submete_botton from './Forms/Submeter_botton';

function ProjetoFormularios({handleSubmit, btnText, projectData}) {/* importando btntext do componente pai New projects*/
    const[categories, setCategories] = useState([]) 
    const[ project, setProject] = useState(projectData || {})   
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
    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project)
    }
    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value})
        console.log(project)
    }
        function handleCategory(e){
        setProject({ 
            ...project, 
            category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },             
        })
        console.log(project)
    }
    return(
        <form onSubmit={submit}  className={styles.formulário}>
            <div><Projetos_input  
            type="text" 
            name="name" 
            text="Nome do Projeto" 
            placeholder="Insira o nome do Projeto" 
            handleOnChange={handleChange}
            value={project.name ? project.name : ''}/></div>

            <div><Projetos_input  
            type="number" 
            name="budget" 
            text="Orçamento do projeto" 
            placeholder="Insira o orçamento total" 
            handleOnChange={handleChange}
            value={project.budget ? project.budget : ''}/></div>

            <Select 
            name="category_id" 
            text="Selecione uma categoria" 
            options={categories} 
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
            />

            <Submete_botton text={btnText}/>
        </form>
    )
}
export default ProjetoFormularios;