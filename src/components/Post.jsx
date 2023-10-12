import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { format } from 'date-fns';



export function Post(post) {
  const [comments, setComments] = useState([
    "Post muito bacana, hein?"
  ])

  const [newCommentText, setNewCommentText] = useState('')

  // usando dateTimeFormated para formatar uma data 
  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm ")


  // Função Adiciona um comentário
  function handleCreateNewComment(){
    event.preventDefault(); //evitando atualizar automaticamente

    setComments([...comments, newCommentText]); // adiciona os dados na state comments os dados que já tem(..comments)
                                                // com um novo elemento(newCommentText)
    setNewCommentText('') // zerando os dados de textarea atravez do state 
  }



// Função para DELETAR comentário
  function deleteCommentData(commentToDelete){

    // filtrando todos os comentarios diferente de comentarios recebido(commentToDelete)
    const commentsWithoutDeleteOne = comments.filter( comment => { 
      return comment !== commentToDelete;
    });

    // atualizando state que tem todos os comentarios sem a lista e comentario
    // no mundo real isso seria um query la no db exluindo comentario como não tem db ser feito via js
    setComments(commentsWithoutDeleteOne);
  }

// Funcão pega os dados de textarea
  function handleNewCommentChange(){
    event.target.setCustomValidity('') // como em handleNewCommentInvalid trata o erro vazio aqui precisa zerar esse tratamento
    setNewCommentText(event.target.value)
  }  

// Função para tratar comentários considerados inválidos
  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatório') //setCustomValidity = erro de campo vazio, ajustando msg
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
     <header className={styles.postHeader}>
      <div className={styles.author}>

        <Avatar 
          border  
          photo={post.author.avatarUrl} // usando as props(post) para adicionar os dados de forma dinamica
        />
        
        <div className={styles.authorInfo}>
        
          <strong>{post.author.name}</strong>
          <span>{post.author.role}</span>
        
        </div>
      </div>

      <time title='11 de Maio ás 08:13' dateTime='2023-09-29 09:20:40'>{publishedDateFormatted}</time>
     </header>

     <div className={styles.content}>
        {post.content.map(post => {  // todo map precisa determinar o key 
          if(post.type === 'paragraph'){
            return <p  key={post.content} >{post.content}</p>
          } else if (post.type === 'link'){
            return <p  key={post.content} ><a href="#">{post.content}</a></p>
          }
        })}
     </div>

     <form 
      className={styles.commentForm}
      onSubmit={handleCreateNewComment}
     >
      <strong>Deixe seu feedback</strong>
      
      <textarea
        placeholder='Deixe um comentário'
        onChange={handleNewCommentChange}
        value={newCommentText}
        required={true} // garantindo que a textarea vai ter validacao pelo html e usuario não possa cilcar no btn 
                        // e dentro do input estiver vazio

        onInvalid={handleNewCommentInvalid} //onInvalid sempre que campo do input estiver invalido(netse caso vazio) então  chamara essa funcao              
      />
      <footer>
        <button 
          type='submit'
          disabled={isNewCommentEmpty} // sera desabilitado o btn se na state newComment não tiber nenhum dados
        >
          Publicar
        </button>
      </footer>
     </form>
   
     <div className={styles.commentList}>
      {
        comments.map(comment => { // fazendo um map
          return (
            <Comment
              content={comment} 
              key={comment}
              onDeleteComment={deleteCommentData} // propsDeFuncao={funcaoQueDeletaComment}
            />
          )
        })
      }
     </div>
    </article>
  )
}