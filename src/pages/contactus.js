import React from "react";
import ContactForm from "../components/contactform";
import shape from "../img/Shape.png";
import phone_image from "../img/bxs_phone-call.png";
import email_image from "../img/email-unread.png";
import office_image from "../img/Office_contact.png";

const ContactUs = () => {
  return (
<div className="contact-page">
  {/* Background Shape */}
  <div className="shape-container">
    <img src={shape} alt="Background Shape" className="shape-image" />
  </div>

  {/* Contact Information Section */}
  <div className="contact-info-section">
    <div className="contacts-title">Os nossos dados de contato</div>
    <div className="contacts-container">
      <div className="contact-info-grid">
        <div className="contact-card">
          <img src={office_image} alt="Office Icon" className="contacts-icon" />
          <div className="contact-card-text">
          <h2>Endereço do escritório:</h2>
          <p>Rua Antero de Quental 18 C/V</p>
          <p>1150-043 Lisboa</p>
          <p>Portugal</p>
          </div>
        </div>
        <div className="contact-card">
          <img src={email_image} alt="Email Icon" className="contacts-icon" />
          <div className="contact-card-text">
          <h2>E-mail:</h2>
          <p>help@wowcleanpt.com</p>
        </div>
        </div>
        <div className="contact-card">
          <img src={phone_image} alt="Phone Icon" className="contacts-icon" />
          <div className="contact-card-text">
          <h2>Número de telefone:</h2>
          <p>Sede: +351 (93) 828-24-28</p>
        </div>
        </div>
      </div>
      <div className="google-map">
        <iframe
          title="Google Map of Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6225.62162272574!2d-9.138568788487317!3d38.72215235690758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19338512929eed%3A0xea9073249f71d026!2sR.%20Antero%20de%20Quental%2018%2C%201150-087%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2sus!4v1777227052816!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
  
    {/* Contact Form Section */}
    <div className="contact-form-section">
      <h1 className="form-title">Sinta-se à vontade para entrar em contacto connosco.</h1>
      <p className="form-description">
      Agradecemos o seu interesse em contratar os nossos serviços. Aguardamos o seu contacto.
      </p>
      <ContactForm />
    </div>
  </div>
  );
};

export default ContactUs;
