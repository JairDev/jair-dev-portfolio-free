import coinLaptop from "../assets/portfolio-track/coin-laptop.webp";
import coinLaptopMedium from "../assets/portfolio-track/coin-laptop-medium.webp";
import coinLaptopSmall from "../assets/portfolio-track/coin-laptop-small.webp";
import coinData from "../assets/portfolio-track/coin-data.webp";
import coinPortfolio from "../assets/portfolio-track/coin-portfolio.webp";
import converter from "../assets/portfolio-track/converter.webp";
import emptyPortfolio from "../assets/portfolio-track/empty-portfolio.webp";
import hero from "../assets/portfolio-track/hero.webp";
import login from "../assets/portfolio-track/login.webp";
import news from "../assets/portfolio-track/news.webp";
import selectCoinName from "../assets/portfolio-track/select-coin-name.webp";
//
import organicLaptop from "../assets/organic-food/organic-laptop.webp";
import organicLaptopMedium from "../assets/organic-food/organic-laptop-medium.webp";
import organicLaptopSmall from "../assets/organic-food/organic-laptop-small.webp";
import organicHero from "../assets/organic-food/content-hero-organic.webp";
import organicBenefits from "../assets/organic-food/benefits-organic.webp";
import organicProducts from "../assets/organic-food/products-organic.webp";
import organicLanding from "../assets/organic-food/landing-organic.webp";
//
import andreafLaptop from "../assets/andreaf/andreaf-laptop.webp";
import andreafLaptopMedium from "../assets/andreaf/andreaf-laptop-medium.webp";
import andreafLaptopSmall from "../assets/andreaf/andreaf-laptop-small.webp";
import andreafWork from "../assets/andreaf/andreaf-work.webp";
import andreafWorkDetail from "../assets/andreaf/andreaf-work-detail.webp";
import andreaFooter from "../assets/andreaf/andreaf-footer.webp";
import andreafAbout from "../assets/andreaf/andreaf-about.webp";

export const personalProjects = [
  {
    id: "coin-market-track",
    demo: true,
    name: "Coin market track",
    role: "Desarrollo Web",
    imgSrcApp: coinLaptop,
    imgSrcAppMedium: coinLaptopMedium,
    imgSrcAppSmall: coinLaptopSmall,
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
    description: `Aplicación web para crear un portafolio de tus activos, seguimiento de precio y estar
    al tanto de las noticias en tendencia sobre criptomonedas.`,
    url: "https://portfoliotrack.vercel.app",
  },
  {
    id: "andrea-portfolio",
    demo: true,
    name: "Andrea Portafolio",
    role: "Desarrollo Web",
    imgSrcApp: andreafLaptop,
    imgSrcAppMedium: andreafLaptopMedium,
    imgSrcAppSmall: andreafLaptopSmall,
    descriptionImg: [
      andreafWork,
      andreafWorkDetail,
      andreafAbout,
      andreaFooter,
    ],
    imageAlt:
      "Imagen de una laptop con el fondo de pantalla de una website sobre una empresa que vende semillas orgánicas",
    url: "https://andreaf.netlify.app/",
    description: `Desarrollo web de un portafolio para una fotógrafa.`,
  },
  {
    id: "organic-food-co",
    demo: false,
    name: "Organic food co.",
    role: "Diseño UI",
    imgSrcApp: organicLaptop,
    imgSrcAppMedium: organicLaptopMedium,
    imgSrcAppSmall: organicLaptopSmall,
    descriptionImg: [
      organicHero,
      organicBenefits,
      organicProducts,
      organicLanding,
    ],
    imageAlt:
      "Imagen de una laptop con el fondo de pantalla de una website sobre una empresa que vende semillas orgánicas",
    description: `Diseño web prototipo para una empresa que vende semillas orgánicas en línea.`,
  },
];
