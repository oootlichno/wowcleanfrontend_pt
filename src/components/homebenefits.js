import React from "react";
import bactreria from "../img/bacteria.png";
import clock from "../img/clock.png";
import vector from "../img/Vector.png";

const OurBenefits = () => {
  const benefits = [
    {
      icon: bactreria,
      title: "Higiene e desinfeção melhoradas",
      description:
        "Os profissionais de limpeza utilizam técnicas e produtos avançados para desinfetar as casas de banho, reduzindo os germes e promovendo um ambiente mais saudável.",
    },
    {
      icon: clock,
      title: "Poupe tempo e esforço",
      description:
        "Ao externalizar a limpeza da sua casa de banho, ganha tempo e energia para se concentrar em tarefas mais importantes ou prioridades pessoais, enquanto os nossos especialistas tratam da limpeza de forma eficiente. Deixe para nós todo o trabalho sujo.",
    },
    {
      icon: vector,
      title: "Resultados consistentes e de elevada qualidade",
      description:
        "Os profissionais de limpeza são treinados para manter elevados padrões de qualidade, garantindo que a sua casa de banho está impecavelmente limpa e livre de odores, melhorando a sua experiência global.",
    },
  ];

  return (
    <section className="our-benefits">
      <h2 className="benefits-title">Os nossos benefícios</h2>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">
              <img src={benefit.icon} alt={benefit.title} />
            </div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBenefits;

