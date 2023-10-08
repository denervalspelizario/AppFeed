import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import './global.css'
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/107011276?v=4',
      name: 'Pedro Pelizario',
      role: 'Desenvovedor Front-End Senior'
    },
    content: [
      {type: 'paragraph', content: 'fala galera ✌️✌️',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no Ignite da RocketSeat',},
      {type: 'link', content: 'dener.dev/feed',}
    ],
    publishedAt: new Date('2023-10-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/107011276?v=4',
      name: 'Denerval Pelizario',
      role: 'Desenvovedor Back-End Senior'
    },
    content: [
      {type: 'paragraph', content: 'fala galera ✌️✌️',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no Ignite da RocketSeat',},
      {type: 'link', content: 'dener.dev/feed',}
    ],
    publishedAt: new Date('2023-10-03 20:00:00')
  }
];




function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        
        <Sidebar />
        <main>
          {posts.map( post => { // usar sempre map para usar component varias vez só mudando os dados
           return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
