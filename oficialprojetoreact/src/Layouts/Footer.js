import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from '../Styles/Footer.module.css'
function Footer( ){
    return(<footer className={styles.footer}>
        <ul className={styles.item}>
            <li > <FaFacebook/> </li>
            <li > <FaInstagram/> </li>
            <li > <FaLinkedin/> </li>
        </ul>
        <p className={styles.item}> <span className={styles.span}>Projeto Costs</span> &copy; 2023 </p>
    </footer>)

}
export default Footer;

