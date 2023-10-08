import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';


export function Comment(props) { 

  //Função para deletar comentário
  function handleDeleteComment(){
    
    props.onDeleteComment(props.content) // fazendo uma funcao chamada deleteComment que recebe content
  }


  return (
    <header className={styles.comment}>
      
      <Avatar border={false} photo="https://avatars.githubusercontent.com/u/107011276?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>  
              <strong>Dener Pelizario</strong>
              <time title='11 de Maio ás 08:13' dateTime='2023-09-29 09:20:40'>Cerca de 1h atrás</time>
            </div>

            <button
              onClick={handleDeleteComment} // ao clicar no btn chama a funcao
              title='Deletar Comentário'
            >
              <Trash size={20}/>
            </button> 
            
          </header>

          <p>{props.content}</p>
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