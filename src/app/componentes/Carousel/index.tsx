'use client';
import { RefObject, useRef, useState } from 'react';
import Carousel, { VisibleSlidesState } from "react-simply-carousel";
import './styles.scss';

export const Carrousel = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const customerLogo = useRef(null);

    const skills = [
        {
            id: 1, 
            name: 'javascript'
        },
        {
            id: 2,
            name: 'React'
        },
        {
            id: 3, 
            name: 'Jest'
        },
        {
            id: 4,
            name: 'Typescript'
        },
    ]

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
                delay={1000}
                easing='ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1)'
                activeSlideIndex={activeSlideIndex} 
                onRequestChange={index}>
                {skills.map((c) => {
                    return (
                        <div className='div-text' key={c.id} >
                            <p>{c.name}</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}
