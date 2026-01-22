import React, { useState } from "react";
import image from "../img/wowclean_clean.webp";
import QuoteForm from "../components/quote";
import shape from "../img/Shape.png";

const AboutUs = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const handleGetQuoteClick = () => {
    setShowQuoteForm(true);
    setTimeout(() => {
      document.getElementById("quote-section").scrollIntoView({ behavior: "smooth" });
    }, 100); 
  };

  return (
    <div className="about-page">
  {/* Background Shape */}
  <div class="shape-container">
  <img src={shape} alt="Background Shape" className="shape-image-about" />
</div>

  {/* About Header */}
  <div className="about-header">
    <div className="about-text">
      <h1>Sobre nós</h1>
      <p>
      Bem-vindo à WOW Clean! Com anos de experiência, orgulhamo-nos de oferecer serviços de limpeza de casas de banho da mais alta qualidade. A nossa equipa dedicada garante que o seu espaço fica impecavelmente limpo, utilizando produtos ecológicos e técnicas avançadas. Estamos empenhados em prestar um atendimento excecional, personalizado para atender às suas necessidades específicas. Deixe-nos tratar da limpeza da sua casa de banho, porque a primeira impressão é a que fica. Estamos empenhados em prestar um serviço excepcional, personalizado para atender às suas necessidades específicas.
      </p>
      
      {/* Centered Button */}
      <div className="about-button">
        <button className="about-quote-button" onClick={handleGetQuoteClick}>
        Solicite um orçamento
        </button>
      </div>
    </div>
    <div className="about-image">
      <img src={image} alt="About Us" />
    </div>
  </div>

      {/* Conditionally Render Quote Form */}
      {showQuoteForm && (
        <div id="quote-section" className="quote-section">
          <QuoteForm />
        </div>
      )}
    </div>
  );
};

export default AboutUs;