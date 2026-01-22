import React from "react";
import bannerImage from "../img/image 70.webp";
import shape from "../img/Shape.png";

const Banner = () => {
  return (
    <div className="main">
      <div className="shape-container">
        <img src={shape} alt="Shape Background" className="shape-image" />
      </div>
      <div className="banner">
        <div className="banner-text">
          <h1>WOWCLEAN</h1>
{/*           <h2>A falta de higiene prejudica a sua reputação. Tal como uma doença, uma má reputação espalha-se se não for combatida logo na sua origem.</h2>
 */}          <p>
          Ao contrário da maioria dos serviços de limpeza, que raramente vão além da limpeza superficial, o nosso programa de higienização de casas de banho WowClean chega aos locais invisíveis — onde os germes e as bactérias causadoras de doenças prosperam e se multiplicam. Combatemos essa acumulação logo na sua origem e garantimos que nunca mais regressa.
 
Oferecemos com orgulho uma variedade de serviços de limpeza comercial de casas de banho acessíveis para todos os setores.

          </p>
          <div className="banner-button">
            <a href="#quote-form-section" className="quote-button">
            Solicite um orçamento
            </a>
          </div>
        </div>
        <img
          src={bannerImage}
          alt="WOWClean Banner"
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default Banner;
 