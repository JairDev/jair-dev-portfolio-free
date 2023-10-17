import coinLaptop from "../assets/portfolio-track/coin-laptop.webp";
import coinLaptopMedium from "../assets/portfolio-track/coin-laptop-medium.webp";
import coinLaptopSmall from "../assets/portfolio-track/coin-laptop-small.webp";
import coinHeroLarge from "../assets/portfolio-track/hero-large.webp";
import coinHeroSmall from "../assets/portfolio-track/hero-small.webp";
import coinLoginLarge from "../assets/portfolio-track/login-large.webp";
import coinLoginSmall from "../assets/portfolio-track/login-small.webp";
import coinConverterLarge from "../assets/portfolio-track/converter-large.webp";
import coinConverterSmall from "../assets/portfolio-track/converter-small.webp";
import coinPortfolioLarge from "../assets/portfolio-track/portfolio-large.webp";
import coinPortfolioSmall from "../assets/portfolio-track/portfolio-small.webp";
import coinNewsLarge from "../assets/portfolio-track/news-large.webp";
import coinNewsSmall from "../assets/portfolio-track/news-small.webp";

//
import andreafLaptop from "../assets/andreaf/andreaf-laptop.webp";
import andreafLaptopMedium from "../assets/andreaf/andreaf-laptop-medium.webp";
import andreafLaptopSmall from "../assets/andreaf/andreaf-laptop-small.webp";
import andreafHeroLarge from "../assets/andreaf/andreaf-hero-large.webp";
import andreafHeroSmall from "../assets/andreaf/andreaf-hero-small.webp";
import andreafAboutLarge from "../assets/andreaf/andreaf-about-large.webp";
import andreafAboutSmall from "../assets/andreaf/andreaf-about-small.webp";
import andreafMenuLarge from "../assets/andreaf/andreaf-menu-large.webp";
import andreafMenuSmall from "../assets/andreaf/andreaf-menu-small.webp";
import andreafWorkLarge from "../assets/andreaf/andreaf-work-large.webp";
import andreafWorkSmall from "../assets/andreaf/andreaf-work-small.webp";

//
import organicLaptop from "../assets/organic-food/organic-laptop.webp";
import organicLaptopMedium from "../assets/organic-food/organic-laptop-medium.webp";
import organicLaptopSmall from "../assets/organic-food/organic-laptop-small.webp";
import organicHeroLarge from "../assets/organic-food/organic-hero-large.webp";
import organicHeroSmall from "../assets/organic-food/organic-hero-small.webp";
import organicBenefitsLarge from "../assets/organic-food/organic-benefits-large.webp";
import organicBenefitsSmall from "../assets/organic-food/organic-benefits-small.webp";
import organicProductsLarge from "../assets/organic-food/organic-products-large.webp";
import organicProductsSmall from "../assets/organic-food/organic-products-large.webp";
import organicLandingLarge from "../assets/organic-food/landing-organic.webp";
import organicLandingSmall from "../assets/organic-food/landing-organic-small.webp";

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
      { small: coinHeroSmall, large: coinHeroLarge },
      { small: coinNewsSmall, large: coinNewsLarge },
      { small: coinLoginSmall, large: coinLoginLarge },
      { small: coinPortfolioSmall, large: coinPortfolioLarge },
      { small: coinConverterSmall, large: coinConverterLarge },
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
      { small: andreafHeroSmall, large: andreafHeroLarge },
      { small: andreafWorkSmall, large: andreafWorkLarge },
      { small: andreafAboutSmall, large: andreafAboutLarge },
      { small: andreafMenuSmall, large: andreafMenuLarge },
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
      { small: organicHeroSmall, large: organicHeroLarge },
      { small: organicBenefitsSmall, large: organicBenefitsLarge },
      { small: organicProductsSmall, large: organicProductsLarge },
      { small: organicLandingSmall, large: organicLandingLarge },
    ],
    imageAlt:
      "Imagen de una laptop con el fondo de pantalla de una website sobre una empresa que vende semillas orgánicas",
    description: `Diseño web prototipo para una empresa que vende semillas orgánicas en línea.`,
  },
];
