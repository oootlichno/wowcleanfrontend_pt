import React, { useState } from 'react';
import axios from 'axios';
import backendURL from "../components/config";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      await axios.post(`${backendURL}/api/messages`, formData);
      setStatus('Mensagem enviada com sucesso!');
      setFormData({ first_name: '', last_name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Falha ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className='contact-form-sections'>
      <div className='contact-form-column'>
      <label htmlFor="contact-form-label">Nome</label>
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="Nome"
        required
      />
      </div>
      <div className='contact-form-column'>
      <label htmlFor="contact-form-label">Sobrenome</label>
      <input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Sobrenome"
        required
      />
      </div>
      </div>
      <div className='contact-form-sections'>
      <div className='contact-form-column'>
      <label htmlFor="contact-form-label">E-mail</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="E-mail"
        required
      />
      </div>

      <div className='contact-form-column'>
      <label htmlFor="contact-form-label">Telefone</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Telefone"
        required
      />
      </div>
      </div>

      <div className='contact-form-sections'>
  <div className='contact-form-column full-width'>
    <label htmlFor="contact-form-label">Mensagem</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Introduza aqui a sua mensagem"
      required
    ></textarea>
  </div>
</div>

      <div className="quote-button-container">
      <button type="submit" className="quote-button-form">Enviar mensagem</button>
      {status && <p className="form-status">{status}</p>}
</div>


    </form>
    
  );
};

export default ContactForm;