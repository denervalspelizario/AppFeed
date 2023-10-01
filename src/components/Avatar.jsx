import styles from './Avatar.module.css'


export function Avatar({border = true, photo }) {

  return (
    <img
      className={border ? styles.avatarWithBorder : styles.avatar} // condição se class for border(true ou não passada) a estilizacao será  avatarWithBorder
      src={photo}
      alt="foto de perfil" 
    />
  )
}