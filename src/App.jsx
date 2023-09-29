import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';


function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        
        <Sidebar />
        <main>
          <Post 
            author="Dener Pelizario"
            content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus."
          />

          <Post 
            author="Pedrão Pelizario"
            content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus."
          />
        </main>
      </div>
    </div>
  )
}

export default App
