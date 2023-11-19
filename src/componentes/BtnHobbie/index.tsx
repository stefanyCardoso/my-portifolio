import { HOBBIES } from 'utils/json'
import './styles.scss'

export default function BtnHobbie() {

  return (
   <div className='div-content'>
      {HOBBIES.map((item) => {
        return (
          <div key={item.id} className='card'>
            <p className='name-skill'>
              {item.name}
            </p>
          </div>
        )
      })}
    </div>
    
  )}