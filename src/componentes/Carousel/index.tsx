'use client';
import { useState } from 'react';
import Carousel from 'react-simply-carousel';
import { SKILLS } from "utils/json";
import './styles.scss';

export const Carrousel = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const skills = SKILLS;

    const index = (newActiveSlideIndex: any) => {
        setActiveSlideIndex(newActiveSlideIndex);
      };

    return (
        <div className='div-container'>
            <Carousel
                centerMode
                containerProps={{
                    style: {
                      width: "100%",
                      height: '80%',
                      justifyContent: "space-between",
                      userSelect: "none",
                      paddingTop: '15px',
                    }
                  }}
                forwardBtnProps={{}}
                backwardBtnProps={{}}
                autoplay={true}
                speed={100}
                delay={700}
                easing='ease-in-out, cubic-bezier(0.25, 0.1, 0.25, 1)'
                activeSlideIndex={activeSlideIndex} 
                onRequestChange={index}>
                {skills.map((c, index) => {
                    return (
                        <div className='div-text' key={index} >
                            <p>{c.type}</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}
