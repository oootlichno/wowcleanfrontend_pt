import React from "react";
import logo from "../img/FullLogo_Transparent_wowclean_c.png";
import { Link } from "react-router-dom";
import Contact from "../components/phonecall";
import Email from "../components/emailwrite";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-column footer-logo">
          <Link to="/">
            <img src={logo} alt="WOWClean Logo" />
          </Link>
        </div>

        {/* Navigation */}
        <div className="footer-column footer-nav">
          <ul>
            <li>
              <Link to="/aboutus">Sobre nós</Link>
            </li>
            <li>
              <Link to="/services">Serviços</Link>
            </li>
            <li>
              <Link to="/industries">Indústrias</Link>
            </li>
            {/* <li>
              <Link to="/products">Produtos</Link>
            </li> */}
            <li>
              <Link to="/articles">Artigos</Link>
            </li>
            <li>
              <Link to="/contacts">Contacto</Link>
            </li>
            <div className="contact-container">
  <div className="contact-item">
    <Contact phone="+351 (93) 828-24-28" />
  </div>
  <div className="contact-item">
    <Email email="help@wowcleanpt.com" />
  </div>
</div>
          </ul>
        
        </div>
       
      </div>

      <div className="footer-bottom">
        <div className="Policy">
        <p>
  <a
    href="https://www.livroreclamacoes.pt/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#fff" }}
  >
    Livro de Reclamações Eletrónico
  </a>
</p>
          <p>
            &copy; {currentYear} CPG WOW CLEAN LDA. Todos os direitos reservados. Clique aqui {" "}
            <Link to="/privacy-policy" style={{ color: "#fff" }}>
            política de Privacidade
            </Link>{" "}
            para ler mais. 
          </p>
        </div>
        <div className="footer-social">
          <a
            href="https://www.facebook.com/cpgwowclean"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/cpgwowclean_pt?igsh=Z29sY2oyZGkxaG1x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/wow-clean-portugal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
