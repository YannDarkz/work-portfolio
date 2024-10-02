import Logo from '../../images/logo_emanuel.png'
import styles from './header.module.scss'


const Header = (): JSX.Element => {

    return (
        <header className={styles.header_container}>
            <img className={styles.logo} src={Logo} alt='logo' />

            <nav className={styles.nav}>
                <ul className={styles.list_container}>
                    <li> <a href='#about'>Sobre mim</a> </li>
                    <li> <a href='#skills'>Habilidades</a> </li>
                    <li> <a href='#myProjects'>Meus Projetos </a> </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header