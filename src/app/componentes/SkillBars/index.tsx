'use client';
import { SKILLS } from "@/app/utils/json";
import { useEffect, useState } from "react";
import './styles.scss';

const SkillBars = () => {
    const [collapsed, setColapsed] = useState(true);
    const skills= SKILLS;
    
    useEffect(() => {
        setTimeout(() => {
            setColapsed(false);
          }, 1000);
    });
      
  
      return(  
        <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>
          
          <ul className="skills">
            {skills.slice(0, 6).map((skill, index) => 
              <li
                key={skill.type}
                style={{ width: `${skill.level}%`}}
              >
                <p>{skill.type}<span>{skill.level}</span></p>
              </li>
            )}
          </ul>

          <ul className="skills">
            {skills.slice(6).map((skill, index) => 
              <li
                key={skill.type}
                style={{ width: `${skill.level}%`}}
              >
                <p>{skill.type}<span>{skill.level}</span></p>
              </li>
            )}
          </ul>
        </div>
      )
}

export default SkillBars;