import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';


export function Comment() {
  return (
    <header className={styles.comment}>
      <img
          className={styles.avatar} 
          src="https://avatars.githubusercontent.com/u/107011276?v=4" 
          alt="foto de perfil" 
        />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>  
              <strong>Dener Pelizario</strong>
              <time title='11 de Maio ás 08:13' dateTime='2023-09-29 09:20:40'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar Comentário'>
              <Trash size={20}/>
            </button> 
            
          </header>

          <p>Muito bom Dener, parabéns!! ✌️✌️</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Apaludir <span>20</span>
          </button>
        </footer>
      </div>  
    </header>
  )
}