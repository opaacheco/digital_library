import React from 'react'

import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import '../Styles/PaginasCadaEbooksEAfiliacoes.css'

const TextAVerdadeiraLeiDoCodigoDeAtracao = () => {
  return (
    <Container>
        <div className="main-page">
            <div className="main-imagem">
              <img src="./img/a-verdadeira-lei-do-codigo-da-atracao.png" />
            </div>
              <div className="main-title">
                <h1 className="title">A verdadeira lei do <strong className="title-transform">código de atração </strong></h1>
              </div>
                <div className="conteudo-ebooks">
                  <p>Bem-vindo ao e-book transformador que desvenda os segredos profundos da verdadeira lei do código de atração. 
                    Aqui, você aprenderá como manifestar seus desejos mais profundos e conquistar a vida dos seus sonhos. 
                    Neste guia revelador, oferecemos uma abordagem única e poderosa que mudará sua perspectiva, 
                    permitindo que você experimente abundância em todos os aspectos da sua vida.
                    <br/>
                    <br/>
                    Ao concluir este e-book transformador, você estará equipado com os segredos profundos da verdadeira lei do código de atração. 
                    Você aprenderá a manifestar seus desejos mais profundos e conquistar a vida dos seus sonhos. 
                    Lembre-se de que a prática e a perseverança são essenciais nessa jornada. 
                    Ao implementar esses princípios em sua vida, você abrirá um mundo de possibilidades e 
                    experimentará uma abundância em todos os aspectos da sua existência. Prepare-se para uma transformação significativa 
                    <strong className="conteudo-transform"> e comece a viver a vida que você sempre sonhou!</strong></p>
                </div>
                <br/>
                <hr/>
                <br/>
        </div>
            <div className="painel-compra conteudo-ebooks__compra">
              <p>Para acessar a página de compra e realizar a comprar do seu e-book, 
                você pode acessar <a href='https://pay.kiwify.com.br/z4IjfH1' className="buy-link" target='_blank'>clicando aqui</a> ou no botão no final da página</p>
              <br /><br />
              <p>Ao clicar no botão você será redirecionado a página de compra.</p>
            </div>
            <div className="main-botao">
              <p className="conteudo-botao">Se transforme em um homem melhor. <strong className="conteudo-transform">garanta o seu agora!</strong></p>
              <Button href='https://pay.kiwify.com.br/z4IjfH1' target='_blank'>clique aqui</Button>
            </div>
    </Container>
  )
}

export default TextAVerdadeiraLeiDoCodigoDeAtracao