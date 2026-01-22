import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="thank-you-container">
  <h1>Obrigado!</h1>
  <p>A sua oferta foi enviada com sucesso.</p>
  <p>Um gestor entrará em contacto consigo e apresentará a proposta no prazo de 24 horas.</p>
  <Link to="/" className="back-home-link">
    Voltar à página inicial
  </Link>
</div>
  );
};

export default ThankYou;