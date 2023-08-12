import React from 'react'

import { Container } from 'react-bootstrap'

import '../Styles/ComoAcessar.css'

const TextComoAcessar = () => {
  return (
    <Container>
      <div className="main-access">
        <h1 className='main-access__title'>Como <strong className='main-access__title__transform'>acessar</strong></h1>
      </div>
      <div className="conteudo-access">
        <p>
          Para acessar o produto que você comprou basta entrar em sua conta do Kiwify utilizando o e-mail que você recebeu quando efetuou o pagamento ou no próprio site da plataforma, que você pode acessar <a href="https://dashboard.kiwify.com.br/login" target='_blank' className='conteudo-access__link'>clicando aqui</a>
        </p>
        <div className="conteudo-access__images">
          <img src="./img/login-kiwify.png" alt="Página de login do kiwify" className='conteudo-access__images__image'/>
        </div>
        <p>
          Logo após finalizar o login na plataforma do Kiwify, você será redirecionado a página da sua conta. Onde irá conter todos os seus produtos comprados. Então é só clicar no botão Começar e assistir ao curso.
        </p>
        <div className="conteudo-access__images">
          <img src="./img/meus-cursos-kiwify.png" alt="Página principal de cursos comprados kiwify" className='conteudo-access__images__image'/>
        </div>
        <p>
          Ao clicar no botão Começar, você será redirecionado a página do e-book ou curso que comprou. Nele, terá os anexos que quando clicados, te levarão ao e-book ou curso.
        </p>
        <div className="conteudo-access__images">
          <img src="./img/pagina-curso-kiwify.png" alt="Página do curso" className='conteudo-access__images__image'/>
        </div>
        <p>
          Ao clicar no anexo, um pdf será aberto com o seu e-book e você poderar ler sem mais delongas.
        </p>
      </div>
    </Container>

  )
}

export default TextComoAcessar