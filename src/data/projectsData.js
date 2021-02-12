import torontoImg from "../assets/img/BarberiaToronto.png";
import portfolioImg from "../assets/img/PortfolioWeb.png";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Web",
    img: [portfolioImg],
    desc:
      "La página que estás viendo! Diseñada con React JS y Material UI, está optimizada para crear un portafolio personal aplicable a cualquier perfil. Tiene un diseño minimalista en una sóla página, sólo con los datos más importantes y un apartado para agregar variedad de proyectos con múltiples imágenes.",
    link: "https://github.com/estebanlen/portfolio",
  },
  {
    id: 2,
    title: "Toronto Web",
    img: [torontoImg],
    desc:
      "Página offline en proceso, para una barbería, realizada con React JS y Material UI. Con un diseño sencillo, está diseñada para uso de los empleados de una barbería. Mediante ella podrán agregar, modificar y eliminar turnos, además de ver en una tabla todos los turnos para determinado día. También se permitirá modificar la información de los barberos y sus horarios laborales. Por último, se mostrarán la cantidad de cortes (de cabello, barba o ambas) que realizó cada barbero en un mes determinado. Proximamente más imagenes!",
    link: "https://gitlab.com/gonzina/torontoweb",
  },
  {
    id: 3,
    title: "Toronto App",
    img: [torontoImg],
    desc:
      "App para Android y iOS diseñada para una barbería. Diseñada con React Native y Firebase para guardar los datos, esta app permitirá a los usuarios crearse un perfil, y pedir turnos en una barbería. Podrán elegir la fecha, tipo de corte, y barbero a cargo. La app además recordará al usuario cuando un turno se aproxima. Este proyecto aún está en desarrollo.",
    link: "https://gitlab.com/gonzina/torontoapp",
  },
];

export default projectsData;
