import React from "react";
import shape from "../img/Shape.png";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      {/* Background Shape */}
      <div class="shape-container">
        <img src={shape} alt="Background Shape" className="shape-image-about" />
      </div>
      <div className="policy-text">
        <h1>Política de Privacidade</h1>
        <p>
          Bem-vindo(a) ao WoWClean. Valorizamos a sua privacidade e estamos empenhados em proteger os seus dados pessoais. Esta Política de Privacidade descreve como recolhemos, utilizamos e protegemos os seus dados quando utiliza os nossos serviços.
        </p>

       <h3>1. Informações que recolhemos</h3>
<p>Recolhemos os seguintes tipos de informações:</p>
<ul>
  <li>
    <strong>Dados pessoais:</strong> O seu nome e apelido, endereço de e-mail,
    número de telefone e outros dados de contacto fornecidos através dos nossos
    formulários ou canais de comunicação.
  </li>
  <li>
    <strong>Informações relacionadas com os serviços:</strong> Detalhes sobre
    os serviços solicitados, incluindo preferências de limpeza, informações
    sobre o imóvel e dados de pagamento.
  </li>
  <li>
    <strong>Dados de utilização:</strong> Informações sobre as suas interações
    com o nosso website, tais como endereço IP, tipo de navegador e páginas
    visitadas, recolhidas através de cookies e tecnologias semelhantes.
  </li>
</ul>

<h3>2. Como utilizamos os seus dados</h3>
<p>As informações recolhidas são utilizadas para:</p>
<ul>
  <li>
    Prestar e gerir os nossos serviços, incluindo o planeamento e a execução
    dos serviços de limpeza.
  </li>
  <li>Comunicar consigo relativamente a pedidos, reservas e opiniões.</li>
  <li>
    Melhorar o nosso website e os nossos serviços através da análise de dados
    e do feedback dos utilizadores.
  </li>
  <li>
    Assegurar o cumprimento da legislação aplicável e proteger contra
    atividades fraudulentas.
  </li>
</ul>

<h3>3. Partilha dos seus dados</h3>
<p>
  Não vendemos nem partilhamos os seus dados pessoais com terceiros, exceto
  nas seguintes situações:
</p>
<ul>
  <li>
    Quando tal for exigido por lei ou necessário para fazer cumprir os nossos
    termos de utilização dos serviços.
  </li>
  <li>
    Quando colaboramos com prestadores de serviços de confiança (por exemplo,
    processadores de pagamentos) que nos ajudam a prestar os nossos serviços e
    que se comprometem a manter a confidencialidade dos seus dados.
  </li>
</ul>

<h3>4. Segurança dos dados</h3>
<p>
  Implementamos medidas técnicas e organizacionais adequadas para proteger os
  seus dados contra acesso não autorizado, perda ou utilização indevida.
  No entanto, nenhum método de transmissão ou armazenamento de dados é 100%
  seguro, pelo que não podemos garantir segurança absoluta.
</p>

<h3>5. Os seus direitos</h3>
<p>Tem o direito de:</p>
<ul>
  <li>
    Aceder aos seus dados pessoais e obter uma cópia dos mesmos.
  </li>
  <li>Solicitar a correção de inexatidões nos seus dados pessoais.</li>
  <li>
    Solicitar a eliminação dos seus dados pessoais, desde que em conformidade
    com a legislação aplicável.
  </li>
  <li>
    Retirar o consentimento para o tratamento de dados, sempre que tal seja
    possível.
  </li>
</ul>

<h3>6. Cookies</h3>
<p>
  O nosso website utiliza cookies para melhorar a experiência de navegação.
  Os cookies são pequenos ficheiros de texto armazenados no seu dispositivo
  que recolhem informações padrão sobre a utilização da internet e o
  comportamento dos utilizadores. Pode gerir as suas preferências de cookies
  nas definições do seu navegador.
</p>

<h3>7. Alterações à Política de Privacidade</h3>
<p>
  Poderemos atualizar periodicamente esta Política de Privacidade. Quaisquer
  alterações serão publicadas nesta página juntamente com a data de
  atualização.
</p>

<h3>8. Contacto</h3>
<p>
  Se tiver alguma questão ou preocupação relacionada com esta Política de
  Privacidade ou com as nossas práticas de proteção de dados, entre em contacto
  connosco através do seguinte endereço:
</p>

        <p>
          Email: <a href="mailto:help@wowcleanpt.com">help@wowcleanpt.com</a>
        </p>
        <p>Número de telefone: +351 (913) 474-676</p>
        <p>Coimbra, Portugal</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
