import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

export const Header = () => {
    return (
      <div className="header">
        <h1 className='logo'>SC.</h1>
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          <Image
           src="/nav-menu.png"
           alt="menu"
           width={24}
           height={24}
           priority
          />
        </label>
         <nav>
          <ul>
            <li>
              <a href={'#home'} >Home</a>
            </li>
            <li>
              <a href={'#about'} >Sobre mim</a>
            </li>
            <li>
              <a href={'#skills'} >Skills</a>
            </li>
            <li>
              <a href={'#projects'} >Projetos</a>
            </li>
          </ul>
        </nav>
        <Link
          href={"https://web.whatsapp.com/send?phone=5511987741804"}>
          <button 
            className='btn-outline'>Contato</button>
        </Link>
      </div>
    )
  }
  
