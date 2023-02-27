import styles from '../Styles/Home.module.css'
import saving from '../img/savings.svg'
import LinkButton from '../Layouts/LinkButton';

function Home() {
    return(
        <section className={styles.container_home}>
            <h1> Bem-vindos ao <span> Costs</span></h1>
            <p>Inicie seu projeto da maneira ideal!</p>
            {/*Aqui logo abaixo, onde teremos no direcinamento para realizar o cadastro do projeto*/}
            <LinkButton to='/newproject' text="Criar novo projeto"/>
            <img src={saving} alt='Imagem home encima de um cofrinho de porco'></img> 
            {/* Aqui salvamos uma imagem */}
        </section>
    );
};

export default Home;