
interface sikil {
    type: string,
    level: number
}

interface projects {
    icon: string,
    title: string,
    description: string,
    linkWeb: string,
    linkGit: string,
}

interface hobbies {
    id: number,
    name: string
}

export const SKILLS: Array<sikil> = [
    {type: "HTML", level: 99},
    {type: "CSS", level: 98},
    {type: "JavaScript", level: 95},
    {type: "React.js", level: 92},
    {type: "Typescript", level: 85},
    {type: "NextJS", level: 80},
    {type: "Styled-Components", level: 90},
    {type: "jQuery", level: 80},
    {type: "Jest", level: 60},
    {type: "Angular", level: 50},
    {type: "PHP", level: 36},
    {type: "SQL", level: 30}
];

export const PROJECTS: Array<projects> = [
    {
        icon: "/calculadora.png",
        title: 'Calculadora',
        description: 'Projeto de um calculadora componentizada com ReactJS, Nextjs e Styled-Components.',
        linkWeb: '',
        linkGit: '',
    },
    {
        icon: "/hp.png",
        title: 'Wiki Harry Potter',
        description: 'Projeto de integração com API de wiki do Harry Potter, realizado com ReactJS, Nextjs, Typescript, Jest e Styled-Components.',
        linkWeb: '',
        linkGit: '',
    },
];

export const HOBBIES: Array<hobbies> = [
    {
        id: 1, 
        name: 'Dançar'
    },
    {
        id: 2,
        name: 'Ler'
    },
    {
        id: 3, 
        name: 'Teatro'
    },
    {
        id: 4,
        name: 'Gatos'
    },
  ];
  