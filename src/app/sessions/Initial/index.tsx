import Image from 'next/image'
import Link from 'next/link';
import './styles.scss';

export const Initial = () => {
    return (
        <section className='info' id='home'>
            
            <div className='image'>
                <Image
                    src="/eu.jpg"
                    alt="Foto"
                    className='img-perfil'
                    width={500}
                    height={500}
                    priority
                />
            </div>
            <div className='text'>
                <h1 className='text-h1'>Stéfany Cardoso</h1>
                <h2 className='text-h2'>Desenvolvedora front-end</h2>
                <ul>
                    <li>Javascript</li>
                    <li>React </li>
                    <li>NextJS</li>
                </ul>
                <div className='div-button'>
                    <Link target='_blank' href={"https://wa.me/5511987741804"}>
                    <button className='btn-outline'>Contato</button>
                    </Link>

                    <a href={"/stefany-cv.pdf"} download={true}>
                    <button className='btn-inline'>Baixar CV</button>
                    </a>
                </div>
            </div>
        </section>
    )
}