import Project from "componentes/Projects";
import './styles.scss';

export const Projects = () => {
    return (
        <section className='projects' id="projects">
            <h2>Projetos</h2>
            <p className="subtitle">Aqui estão listados meus principais projetos.</p>
            <div className='div-project'>
                <Project/>      
            </div>
        </section>
    )
}