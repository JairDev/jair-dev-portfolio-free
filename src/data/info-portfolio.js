import coinmarketTrack from "../assets/coin-laptop.webp";
import workDessert2 from "../assets/dessert-laptop.webp";
import room1 from "../assets/room-laptop.webp";

import coinData from "../assets/coin-data.png";
import coinPortfolio from "../assets/coin-portfolio.png";
import converter from "../assets/converter.png";
import emptyPortfolio from "../assets/empty-portfolio.png";
import hero from "../assets/hero.png";
import login from "../assets/login.png";
import news from "../assets/news.png";
import selectCoinName from "../assets/select-coin-name.png";

export const personalProjects = [
  {
    id: "coin-market-track",
    name: "Coin market track",
    role: "Desarrollo",
    imgSrcApp: coinmarketTrack,
    descriptionImg: [
      hero,
      news,
      login,
      emptyPortfolio,
      selectCoinName,
      coinData,
      coinPortfolio,
      converter,
    ],
    imageAlt:
      "Imagen de una laptop con el fondo de pantalla de una website sobre criptomonedas",
    linkDemo: "https://coin-market-info.vercel.app/",
    description: `Aplicación web para crear un portafolio de tus activos, seguimiento de precio y estar
    al tanto de las noticias en tendencia sobre criptomonedas.`,
    url: "https://portfolio-tracker-pi.vercel.app/home",
  },
  {
    id: "id2",
    name: "Ana fotografía",
    role: "Diseño & Desarrollo",
    imgSrcApp: room1,
    imageAlt:
      "Imagen de una laptop con el fondo de pantalla de una website sobre un fotógafo",
    linkDemo: "https://tastypie.netlify.app/",
  },
  {
    id: "id3",
    name: "M&G Cakes",
    role: "Diseño & Desarrollo",
    imgSrcApp: workDessert2,
    imageAlt:
      "Imagen de una laptop con el fondo de pantalla de una website sobre una repostera",
    linkDemo: "https://memorybrain.netlify.com/",
  },
];
