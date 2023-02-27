// Aqui serão adicionados itens que serão utilizado sempre por isso o chamamos de container
import styles from './Container.module.css' /*Aqui onde importamos o módulo css*/
function Container(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div> /*aqui `${styles.container}` como utilizamos o módulo style e também como damos
        comando de atuação nos filhos da div pai no APP em Container */
    );
};
export default Container;