import React from 'react'

import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import '../Styles/PaginasCadaEbooksEAfiliacoes.css'

const TextVerdadeiroCristao = () => {
  return (
    <Container>
        <div className="main-page">
            <div className="main-imagem">
              <img src="./img/verdadeiro-cristao.png" />
            </div>
              <div className="main-title">
                <h1 className="title">Verdadeiros <strong className="title-transform">cristãos</strong></h1>
              </div>
                <div className="conteudo-ebooks">
                  <p>"Verdadeiro Cristão" é um curso que explora os princípios fundamentais e as práticas do cristianismo autêntico. O curso tem como objetivo ajudar os participantes a aprofundar sua compreensão da fé cristã e desenvolver uma vivência prática de seus ensinamentos.
                    <br/>
                    <br/>
                    Durante o curso, serão abordados diversos aspectos relacionados à vida cristã, como a base teológica, os ensinamentos de Jesus Cristo, o estudo da Bíblia e a aplicação dos princípios cristãos no dia a dia. Os participantes serão incentivados a refletir sobre sua própria fé e a buscar uma conexão mais profunda com Deus e com a comunidade cristã.
                    <strong className="conteudo-transform"> Entenda o que é ser um verdadeiro cristão </strong></p>
                </div>
        </div>
                <br/>
                <hr/>
                <br/>
            <div className="painel-compra conteudo-ebooks__compra">
              <p>Para acessar a página de compra e realizar a comprar do seu e-book, 
                você pode acessar <a href='https://pay.kiwify.com.br/VZDqJHS?afid=KBw3oftX' className="buy-link" target='_blank'>clicando aqui</a> ou no botão no final da página</p>
                <br /><br />
              <p>Ao clicar no botão você será redirecionado a página de compra.</p>
            </div>  
            <br/>
            <div className="main-botao">
              <p className="conteudo-botao">Aprenda tudo sobre cristo. <strong className="conteudo-transform">garanta o seu agora!</strong></p>
              <Button href='https://pay.kiwify.com.br/VZDqJHS?afid=KBw3oftX' target='_blank'>clique aqui</Button>
            </div>
    </Container>
  )
}

export default TextVerdadeiroCristao