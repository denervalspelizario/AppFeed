import styles from './Sidebar.module.css';
import Banner from '../assets/bannerFundo.png'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';


export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img
        className={styles.cover} 
        src={Banner} 
        alt="Banner de fundo de perfil" 
      />

      <div className={styles.profile}>
        <Avatar border photo="https://avatars.githubusercontent.com/u/107011276?v=4"/>
        <strong>Denerval S Pelizario</strong>
        <span>Desenvolvedor Full Stack</span>
      </div>

      <footer>
        
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </div>
  )
}