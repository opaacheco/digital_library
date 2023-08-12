import React from 'react'

import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import '../Styles/PaginasCadaEbooksEAfiliacoes.css'

const TextPequenosCristos = () => {
  return (
    <Container>
        <div className="main-page">
            <div className="main-imagem">
              <img src="./img/os-pequenos-cristos.png" />
            </div>
              <div className="main-title">
                <h1 className="title">os <strong className="title-transform">pequenos </strong>cristos</h1>
              </div>
                <div className="conteudo-ebooks">
                  <p>AS CRIANÇAS ESTÃO APRENDENDO A BIBLIA 3X MAIS RÁPIDO APENAS BRINCANDO E SE DIVERTINDO...
                    <br/>
                    <br/>
                    Criado com o objetivo de ensinar a importância da palavra de ​Deus as crianças por meio de atividades. Conheça grandes ​personagens da Bíblia e aprenda sobre os milagres de Jesus. ​Tudo de uma maneira simples: Brincando.
                    <strong className="conteudo-transform"> Repasse para as crianças a palavra de Jesus. </strong></p>
                </div>
        </div>
                <br/>
                <hr/>
                <br/>
            <div className="painel-compra conteudo-ebooks__compra">
              <p>Para acessar a página de compra e realizar a comprar do seu e-book, 
                você pode acessar <a href='https://pay.kiwify.com.br/yMqKTUv?afid=2M1PXbQu' className="buy-link" target='_blank'>clicando aqui</a> ou no botão no final da página</p>
                <br /><br />
              <p>Ao clicar no botão você será redirecionado a página de compra.</p>
            </div>
            <div className="main-botao">
              <p className="conteudo-botao">Mude o futuro das crianças. <strong className="conteudo-transform">garanta o seu agora!</strong></p>
              <Button href='https://pay.kiwify.com.br/yMqKTUv?afid=2M1PXbQu' target='_blank'>clique aqui</Button>
            </div>
    </Container>
  )
}

export default TextPequenosCristos