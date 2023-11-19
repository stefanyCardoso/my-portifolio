
interface sikil {
    type: string,
    level: number,
    time: string,
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
    {type: "HTML", level: 98, time: '6 Anos'},
    {type: "CSS", level: 98, time: '6 Anos'},
    {type: "JavaScript", level: 98, time: '6 Anos'},
    {type: "React.js", level: 93,time: '5 Anos'},
    {type: "Typescript", level: 85, time: '3 Anos'},
    {type: "NextJS", level: 85, time: '3 Anos'},
    {type: "Styled-Components", level: 80, time: '4 Anos'},
    {type: "jQuery", level: 80, time: '4 Anos'},
    {type: "Jest", level: 60, time: '2 Anos'},
    {type: "PHP", level: 60, time: '2 Anos'},
    {type: "SQL", level: 60, time: '2 Anos' },
    {type: "Angular", level: 50, time: '1 Anos'},
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
  