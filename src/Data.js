const myProject1 = "/project1.png";
const myProject2 = "/project2.png";
const myProject3 = "/project3.png";
import { FaMedal } from "react-icons/fa";

export const myProjects = [
  {
    id: 1,
    img: myProject1,
    name: "Buscador de cep",
    description:
      "Um projeto feito em ReactJS para consumir uma API externa que busca dados relacionados a um cep.",
    hrefDemo: "https://buscador-cep-react-mu.vercel.app/",
    hrefCode: "https://github.com/SoaresLeonardo/buscador-cep-react",
  },
  {
    id: 2,
    img: myProject2,
    name: "Shopping cart",
    description:
      "Meu projeto shopping cart feito em ReactJS, onde podemos adicionar um item ao carrinho e remover.",
    hrefDemo: "https://shopping-cart-sooty-one.vercel.app/",
    hrefCode: "https://github.com/SoaresLeonardo/shopping-cart",
  },
  {
    id: 3,
    img: myProject3,
    name: "Tela de login",
    description:
      "Uma tela de login e cadastro feita em HTML5, CSS3 e JavaScript e contém validações de campo.",
    hrefDemo: "https://login-page-one-self.vercel.app/",
    hrefCode: "https://github.com/SoaresLeonardo/login-page",
  },
];

export const aboutInfo = [
  "Me chamo Leo e sou um programador com experiência, e com vários projetos no ar, busco ajudar as pessoas na área de desenvolvimento com o meu conhecimento e dar o máximo de mim para realizar um ótimo trabalho!",
];

export const aboutSkills = [
  {
    id: 1,
    icon: FaMedal,
    name: "Experience",
    description: "1 ano",
  },
  {
    id: 1,
    icon: FaMedal,
    name: "Experience",
    description: "1 ano",
  },
  {
    id: 1,
    icon: FaMedal,
    name: "Experience",
    description: "1 ano",
  },
];

export const skillsFrontEndInfo = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "NodeJS",
];
