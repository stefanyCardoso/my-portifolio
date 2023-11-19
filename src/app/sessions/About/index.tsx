import Image from 'next/image'
import BtnHobbie from 'componentes/BtnHobbie';
import './styles.scss';

export const About = () => {
    return (
        <section className='about' id='about'>
            <div className='ft'>
                <Image
                    src="/eu2.svg"
                    alt="foto-session-2"
                    className='img-perfil'
                    width={600}
                    height={700}
                    priority
                />
            </div>

            <div className='text-describe'>
            <h2 className='text-h2'>Quem sou eu?</h2>
            <p className='p-text'> 
                Tenho 22 anos e moro em Jandira, São Paulo. 
                Atuo como Desenvolvedora front-end há 5 anos. Iniciei meus 
                estudos com um Técnico de informática no SENAI de Jandira, 
                onde tive meu primeiro contato com o desenvolvimento de software. 
                Aprendi todos os processos de desenvolvimento desde o front-end, back-end, 
                gerenciamento de projetos e administração de banco de dados.
            </p>
            <p className='p-text'> 
                Durante o período do curso aprendi linguagens como: SQL, JAVA, PHP, JavaScript, e aprendi também HTML, 
                CSS e Bootstrap.
                Assim que finalizei o curso, comecei a trabalhar atuando com o Framework
                AngularJS. Logo após comecei a atuar com
                ReactJS, onde fui especializando meu conhecimento. E em uma outra oportunidade voltei a atuar com o Angular 8. 
            </p>
            <p className='p-text'>
                No geral, em minhas experiências
                profissionais tive oportunidades de obter
                conhecimento de diversas tecnologias como:
                Material UI, Jest, NextJS, Styled-componets,
                TypeScript, entre outras. Atuei em times com
                modelo SCRUM/KAMBAN, aprendi também
                processos de DEVOPS, CI/CD, e versionamento de
                código com GIT (GitHub, GitLab).
            </p>
            <p className='p-text'>
                Sou uma pessoa muito interessada e determinada, não tenho problemas com mudanças, 
                sou muito adaptável e tenho facilidade de aprendizado. Nesses últimos anos tive contato com bastante 
                tecnologias e lido bem com essas mudanças de linguagens, pois tenho uma base de conhecimento bem consolidada, 
                qualquer código que eu pegar consigo desvendar e resolver o problema. Tenho uma ótima capacidade analítica, 
                e um raciocínio lógico bem elaborado.
            </p>
            
            <h3 className='text-h3'>Paixões</h3>
            
            <BtnHobbie></BtnHobbie>
            </div>
        </section>
    )
}