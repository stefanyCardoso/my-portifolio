import SkillBars from "componentes/SkillBars";
import './styles.scss';

export const Skills = () => {
    return (
        <section className='skillss' id="skills">
            <h2>Skills</h2>
            <p className='subtitle'>Aqui estão listados meus principais conhecimentos.</p>
            <SkillBars />
        </section>
    )
}