import React from 'react';

import Container from 'react-bootstrap/Container';

import '../Styles/Home.css';

const TextHome = () => {
  return (
    <Container>
      <div className="main">
        <h1 className='main__title'>Desbloqueie um mundo de possibilidades com nossos produtos e transforme suas <strong className='main__title__transform'>compras online em experiências inesquecíveis!</strong></h1>
      </div>
      <div className="conteudo">
        <h4>
          Temos os melhores e-books e cursos para você aprimorar os seus conhecimentos. Venha conhecer os nossos produtos agora mesmo! <strong className='conteudo__transform'>Basta clicar em um dos botões abaixo para ser redirecionado a página do produto escolhido!</strong>
        </h4>
      </div>
      <div className="botoes">
        <a href='/ebooks' className='botoes__link'>Conheça nossos e-books</a>
        <a href='/afiliacoes' className='botoes__link'>Conheça nossas afiliações</a>
      </div>
    </Container>
  );
};

export default TextHome;
