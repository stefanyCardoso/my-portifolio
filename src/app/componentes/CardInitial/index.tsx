import Image from 'next/image'
import './styles.scss';
import Link from 'next/link';

export const CardInitial = () => {
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
                <h1>Stéfany Cardoso</h1>
                <h2>Desenvolvedora front-end</h2>
                <ul>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </ul>
                <div className='div-button'>
                    <Link href={"https://web.whatsapp.com/send?phone=5511987741804"}>
                    <button className='btn-outline'>Contato</button>
                    </Link>

                    <a download={"/stefany-cv.pdf"}>
                    <button className='btn-inline'>Baixar CV</button>
                    </a>
                </div>
            </div>
        </section>
    )
}