import React from "react";
import people from "../img/image_main_about.webp";



const Homeabout = () => {
    return (
        <div className="company-description-container">
        <div className="company-text">
        <div className="company-about-title">
A nossa equipe        </div>
          <p>
          A WOWClean dedica-se a prestar serviços de limpeza excecionais para empresas e organizações de todas as dimensões. Com a missão de manter a higiene e a limpeza dos "melhores serviços de limpeza de casas de banho", orgulhamo-nos de oferecer soluções de limpeza fiáveis, minuciosas e amigas do ambiente. A nossa equipa experiente compreende os desafios específicos da limpeza comercial e trabalha em estreita colaboração com os clientes para satisfazer as suas necessidades. De restaurantes a salões de beleza, de postos de abastecimento de combustível a armazéns, os nossos serviços são personalizados para manter os seus espaços impecavelmente limpos e acolhedores.
          </p>
        </div>
        <div className="company-image">
          <img src={people} alt="WOWClean team" />
        </div>
      </div>
    );
  };
  
  export default Homeabout;