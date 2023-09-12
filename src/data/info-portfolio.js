import coinmarketTrack from "../assets/coin-laptop.webp";
import coinData from "../assets/coin-data.png";
import coinPortfolio from "../assets/coin-portfolio.png";
import converter from "../assets/converter.png";
import emptyPortfolio from "../assets/empty-portfolio.png";
import hero from "../assets/hero.png";
import login from "../assets/login.png";
import news from "../assets/news.png";
import selectCoinName from "../assets/select-coin-name.png";

import organicLaptop from "../assets/organic-laptop.webp";
import organicHero from "../assets/content-hero-organic.png";
import organicBenefits from "../assets/benefits-organic.png";
import organicProducts from "../assets/products-organic.webp";
import organicLanding from "../assets/landing-organic.webp";

export const personalProjects = [
  {
    id: "coin-market-track",
    demo: true,
    name: "Coin market track",
    role: "Desarrollo Web",
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
    id: "organic-food-co",
    demo: false,
    name: "Organic food co.",
    role: "Diseño UI",
    imgSrcApp: organicLaptop,
    descriptionImg: [
      organicHero,
      organicBenefits,
      organicProducts,
      organicLanding,
    ],
    imageAlt:
      "Imagen de una laptop con el fondo de pantalla de una website sobre una empresa que vende semillas orgánicas",
    linkDemo: "https://tastypie.netlify.app/",
    description: `Diseño web prototipo para una empresa que vende semillas orgánicas en línea.`,
  },
];
