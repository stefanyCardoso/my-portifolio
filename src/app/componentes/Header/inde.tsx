import Image from 'next/image';
import './style.scss';

export default function Header() {
    return (
      <div className="header">
        <Image
          src="/SC.png"
          alt="Logo"
          className='logo'
          width={50}
          height={50}
          priority
        />
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
         <nav>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Sobre mim</a></li>
            <li><a href='#'>Certificados</a></li>
            <li><a href='#'>Projetos</a></li>
          </ul>
        </nav>
        <button> Contato </button>
      </div>
    )
  }
  