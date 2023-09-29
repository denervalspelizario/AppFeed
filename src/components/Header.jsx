import styles from './Header.module.css';
import logo from '../assets/logoFeed.svg';


export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo do app Feed" />
    </header>
  )
}