import Image from 'next/image';
import { PROJECTS } from "utils/json";
import './styles.scss'
import Link from 'next/link';

export default function Project() {
  return (
    <div className='container-proj'>
      {PROJECTS.map((project, index) => 
        <div className='cardP' key={index}>
          <div className='img-project'>
            <Image
              src={project.icon}
              alt="Logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <h3 className='text-h3'>{project.title}</h3>
          <p>{project.description}</p>
          <Link href={project.linkWeb}>
            <button className='btn-outline' disabled={project.linkWeb === ''? true : false}>Link Web</button>
          </Link>
          <Link href={project.linkGit}>
            <button className='btn-inline' disabled={project.linkGit === ''? true : false}>GitHub</button>
          </Link>
        </div>
      )}
    </div>
  )}