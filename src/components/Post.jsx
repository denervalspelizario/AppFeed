import { Comment } from './Comment';
import styles from './Post.module.css';



export function Post() {
  return (
    <article className={styles.post}>
     <header className={styles.postHeader}>
      <div className={styles.author}>
        <img 
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/107011276?v=4" 
          alt="Foto de perfil" 
        />
        <div className={styles.authorInfo}>
          <strong>Denerval S Pelizario</strong>
          <span>Web Developer</span>
        </div>
      </div>

      <time title='11 de Maio ás 08:13' dateTime='2023-09-29 09:20:40'>Publicado há 1h</time>
     </header>

     <div className={styles.content}>
        <p>fala galera ✌️✌️</p>
        <p>Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no Ignite da RocketSeat</p>
        <p><a href="#">dener.dev/feed</a></p>
        <p>
          <a href="#">#novoprejeto</a>{' '}
          <a href="#">#ignite</a>{' '}
        </p>
     </div>

     <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      
      <textarea
        placeholder='Deixe um comentário'
      />
      <footer>
        <button type='submit'>Publicar</button>
      </footer>
     </form>

     <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />
     </div>
    </article>
  )
}