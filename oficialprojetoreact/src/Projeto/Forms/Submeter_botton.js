import styles from "../../Styles/Submeter_botton.module.css"
function Submete_botton({ text }){
    return(
        <div >
            <botton className={styles.btn}>{text}</botton>

        </div>
    );
}
export default Submete_botton;