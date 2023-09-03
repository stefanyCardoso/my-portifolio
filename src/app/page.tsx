import Header from './componentes/Header/inde'
import './styles.scss'

export default function Home() {
  return (
    <main>
      <Header />
      <section className='info'>
        <div className='text'>
          <h1>Stéfany Cardoso</h1>
          <h2>Desenvolvedora front-end</h2>
          <ul>
            <li>Javascript</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
          <button>Contato</button>
        </div>
        <div className='image'>
          imagem
        </div>
      </section>
    </main>
  )
}
