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
              <Link href={'#home'}>Home</Link>
            </li>
            <li>
              <Link href={'#about'}>Sobre mim</Link>
            </li>
            <li>
              <Link href={'#experience'}>Experiências</Link>
            </li>
            <li>
              <Link href={'#skills'}>Skills</Link>
            </li>
            <li>
              <Link href={'#projects'}>Projetos</Link>
            </li>
          </ul>
        </nav>
        <Link target='_blank' href={"https://wa.me/5511987741804"}>
          <button className='btn-outline'>Contato</button>
        </Link>
      </div>
    )
  }
  