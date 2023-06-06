import workCoin from "../assets/coin-mac.webp";
import workCoin2 from "../assets/coin-laptop.png";
import projectTest from "../assets/project-test.png";
import projectTest2 from "../assets/project-test2.png";
import workDessert from "../assets/desert-mac.webp";
import workDessert2 from "../assets/dessert-laptop.png";
import memory from "../assets/memory-mac.webp";
import room from "../assets/room-mac.webp";
import room1 from "../assets/room-laptop.png";
import todo from "../assets/todo-mac.webp";
import timer from "../assets/timer-mac.webp";
import bxlReact from "@iconify/icons-bx/bxl-react";
import bxlJavascript from "@iconify/icons-bx/bxl-javascript";
import bxlSass from "@iconify/icons-bx/bxl-sass";
import bxlCss3 from "@iconify/icons-bx/bxl-css3";
import bxlHtml5 from "@iconify/icons-bx/bxl-html5";
import bxlGit from "@iconify/icons-bx/bxl-git";
import styledcomponentsIcon from "@iconify/icons-file-icons/styledcomponents";
import reduxFill from "@iconify/icons-akar-icons/redux-fill";

export const svgIcons = [
  { name: "React", svg: bxlReact },
  { name: "Javascript", svg: bxlJavascript },
  { name: "Redux", svg: reduxFill },
  { name: "Sass", svg: bxlSass },
  { name: "Css3", svg: bxlCss3 },
  { name: "Html5", svg: bxlHtml5 },
  { name: "Git", svg: bxlGit },
  { name: "Styled Components", svg: styledcomponentsIcon },
];

export const personalProjects = [
  {
    id: "id1",
    name: "Coin Market App",
    subTitle: "Desarrollo",
    imgSrcApp: room1,
    linkDemo: "https://coin-market-info.vercel.app/",
  },
  {
    id: "id2",
    name: "Ana fotografía",
    subTitle: "Diseño & Desarrollo",
    imgSrcApp: workCoin2,
    linkDemo: "https://tastypie.netlify.app/",
  },
  {
    id: "id3",
    name: "M&G Cakes",
    subTitle: "Diseño & Desarrollo",
    imgSrcApp: workDessert2,
    linkDemo: "https://memorybrain.netlify.com/",
  },
];
