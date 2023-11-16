import { Header } from './componentes/Header'
import { CardProjects } from './componentes/CardProjects'
import { CardSkills } from './componentes/CardSkills'
import { Carrousel } from './componentes/Carousel'
import { Container } from './componentes/Container'
import { CardInitial } from './componentes/CardInitial'
import { CardAbout } from './componentes/CardAbout'
import './styles.scss'


export default function Home() {
  return (
    <main>
      <Container>
        <Header />
        <CardInitial />
      </Container>
      <Carrousel />
      <Container>
        <CardAbout />
        <CardSkills />
        <CardProjects />
      </Container>

      <footer>
        @todos diretos preservados
      </footer>
    </main>
  )
}
