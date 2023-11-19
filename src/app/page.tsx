import { Header } from 'componentes/Header'
import { Carrousel } from 'componentes/Carousel'
import { Container } from 'componentes/Container'
import { Projects } from 'app/sessions/Projects'
import { Initial } from 'app/sessions/Initial'
import { About } from 'app/sessions/About'
import { Skills } from 'app/sessions/Skills'
import { Experience } from './sessions/Experience'
import './styles.scss'

export default function Home() {
  return (
    <main>
      <Container>
        <Header />
        <Initial />
      </Container>
      <Carrousel />
      <Container>
        <About />
        <Experience />

        <Skills />
        <Projects />
      </Container>

      <footer>
        @todos diretos preservados
      </footer>
    </main>
  )
}
