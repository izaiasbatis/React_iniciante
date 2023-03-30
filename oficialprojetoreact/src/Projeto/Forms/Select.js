import styles from "../../Styles/Select.module.css"
function Select({ text, name, options, handleOnChange, handleCategory, value}){
    return(
        <div className={styles.form_control}>
            <label htmlfor={name}>{text}</label>
            <select name={name} 
            onChange={handleOnChange}
            value={value || ''}
            id={name}>
            <option>Selecione uma opção</option>
            {options.map((option) => (
                <option value={option.id} 
                    key={option.id}>
                    {option.name}

                </option>
            ))}
            </select>

        </div>
    );
}
export default Select;