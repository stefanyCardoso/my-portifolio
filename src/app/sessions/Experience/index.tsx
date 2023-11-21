import { Box } from "componentes/Box"
import './styles.scss'

export const Experience = () => {
    return (
        <div className="session" id="experience">
            <h2 className="text-h2">Minhas Experiências</h2>
            <div className="timeline">
                <div className="container left">
                    <Box className='content'>
                        <h3>Tikal tech</h3>
                        <p className="p-data">08/2019 - 02/2021</p>
                        <div className="display">
                            <label>Função:</label>
                            <p>Desenvolvedora Front-end</p>
                        </div>
                        <div className="display">
                            <label>Nível:</label>
                            <p>Júnior</p>
                        </div>
                        <p className="p-description">
                            Era responsável pela manutenção do projeto em AngularJS, resolvendo bugs e fazendo uma limpeza de código. 
                            Depois fui responsável pela migração de tecnologia do projeto para o ReactJS, criando todo o ecossistema de 
                            funcionalidades do App dentro do front-end. Nesse processo lidei com a construção de um projeto do zero, criando 
                            um layout completamente responsivo e componentizado a partir de um layout estabelecido pelo time de Design. 
                            Atuei fazendo também a tratativa dos dados e integrações com apis, também nas integrações de pagamento com 
                            as plataformas Iugu e Stripe.
                            No front-end era utilizado o ReactJS como principal tecnologia, o Material-UI para componentização, GitHub 
                            para o versionamento de código e AWS como serviço de nuvem.
                        </p>

                        <label>Principais tasks:</label>
                        <p>AngularJS, ReactJS, Material-UI, Styled-components, API REST, GitHub.</p>
                    </Box>
                </div>
                <div className="container right">
                    <Box className='content'>
                        <h3>Galeria Pagé</h3>
                        <p className="p-data">04/2021 - 07/2021</p>
                        <div className="display">
                            <label>Função:</label>
                            <p>Desenvolvedora Front-end</p>
                        </div>
                        <div className="display">
                            <label>Nível:</label>
                            <p>Júnior</p>
                        </div>
                        <p className="p-description">
                        Fui responsável pela construção e manutenção do front-end, atuando na criação de
                        layouts responsivos com as principais tecnologias: Angular 8, Typescript

                        </p>

                        <label>Principais tasks:</label>
                        <p>Angular, Typescript, GitLab.</p>
                    </Box>
                </div>
                <div className="container left">
                    <Box className='content'>
                        <h3>B8ONE</h3>
                        <p className="p-data">07/2021 - 10/2021</p>
                        <div className="display">
                            <label>Função:</label>
                            <p>Desenvolvedora Front-end</p>
                        </div>
                        <div className="display">
                            <label>Nível:</label>
                            <p>Pleno</p>
                        </div>
                        <p className="p-description">
                            Fui responsável pela construção e manutenção do front-end, em páginas deentro da
                            plataforma VTEX, com as principais tecnologias: JavaScript, CSS, HTML5
                        </p>

                        <label>Principais tasks:</label>
                        <p>JavaScript, CSS, HTML5.</p>
                    </Box>
                </div>
                <div className="container right">
                    <Box className='content'>
                        <h3>GFT</h3>
                        <p className="p-data">10/2021 - 03/2023</p>
                        <div className="display">
                            <label>Função:</label>
                            <p>Desenvolvedora Front-end</p>
                        </div>
                        <div className="display">
                            <label>Nível:</label>
                            <p>Pleno</p>
                        </div>
                        <p className="p-description">
                            Atuei no projeto da CVC, onde fui responsável pela parte do front-end no time de Circuitos. Atuei na criação de componentes dos steps de compra, gerando a integração com microfrontends. Fiz manutenção de testes utilizando o JEST, e gerenciamento de dados utilizando o Redux. As principais tecnologias utilizadas foram: ReactJS, NextJS, JEST, Styled-components.
                        </p>

                        <label>Principais tasks:</label>
                        <p>NextsJS, ReactJS, Typescript, Jest, GitHub, Jenkins.</p>
                    </Box>
                </div>
            </div>
        </div>
    )
}