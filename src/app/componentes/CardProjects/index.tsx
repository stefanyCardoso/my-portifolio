import Project from "../Projects";
import './styles.scss';

export const CardProjects = () => {
    return (
        <section className='projects' id="projects">
            <h2>Projetos</h2>
            <p>Aqui estão listados meus principais projetos.</p>
            <div className='div-project'>
                <Project/>      
            </div>
        </section>
    )
}