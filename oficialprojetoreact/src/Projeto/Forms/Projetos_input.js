import styles from "../../Styles/Projetos_input.module.css"
function Projetos_input({type, text, name, placeholder, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlfor={name}>{text}</label>
            <input type={type} 
            name={name}
            placeholder={placeholder}
            id={name}
            onChange={handleOnChange}
            value={value}
            />
            

        </div>
    );
}
export default Projetos_input;