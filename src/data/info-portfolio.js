import workCoin2 from "../assets/coin-laptop.webp";
import workDessert2 from "../assets/dessert-laptop.webp";
import room1 from "../assets/room-laptop.webp";

export const personalProjects = [
  {
    id: "coin-market-track",
    name: "Coin market track",
    role: "Desarrollo",
    imgSrcApp: room1,
    imageAlt:
      "Imagen de una laptop con el fondo de pantalla de una website sobre criptomonedas",
    linkDemo: "https://coin-market-info.vercel.app/",
    description: `Aplicación web para crear un portafolio de tus activos, seguimiento de precio y estar
    al tanto de las noticias en tendencia sobre criptomonedas.`,
  },
  {
    id: "id2",
    name: "Ana fotografía",
    subTitle: "Diseño & Desarrollo",
    imgSrcApp: workCoin2,
    imageAlt:
      "Imagen de una laptop con el fondo de pantalla de una website sobre un fotógafo",
    linkDemo: "https://tastypie.netlify.app/",
  },
  {
    id: "id3",
    name: "M&G Cakes",
    subTitle: "Diseño & Desarrollo",
    imgSrcApp: workDessert2,
    imageAlt:
      "Imagen de una laptop con el fondo de pantalla de una website sobre una repostera",
    linkDemo: "https://memorybrain.netlify.com/",
  },
];
