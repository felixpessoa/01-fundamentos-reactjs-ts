import styles from './Header.module.css'
import logo from '../assets/react-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="LogoTipo"/>
        </header>
    );
}   
