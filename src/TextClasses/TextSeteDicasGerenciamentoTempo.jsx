import React from 'react'

import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import '../Styles/PaginasCadaEbooksEAfiliacoes.css'

const TextSeteDicasGerenciamentoTempo = () => {
  return (
    <Container>
        <div className="main-page">
            <div className="main-imagem">
              <img src="./img/7-dicas-gerenciamento-tempo.png" />
            </div>
              <div className="main-title">
                <h1 className="title">7 dicas de <strong className="title-transform">gerenciamento do tempo</strong></h1>
              </div>
                <div className="conteudo-ebooks">
                  <p>Bem-vindo ao guia prático que revela os segredos do gerenciamento eficaz do tempo! 
                    Aqui, você encontrará dicas enriquecedoras e estratégias poderosas para maximizar sua produtividade, 
                    conquistar equilíbrio e alcançar resultados surpreendentes em sua vida. Este guia é projetado para ajudá-lo a 
                    eliminar distrações, dominar a organização e estabelecer hábitos poderosos que transformarão sua vida. 
                    Prepare-se para embarcar em uma jornada de autotransformação e aproveite ao máximo seu tempo!
                    <br/>
                    <br/>
                    Ao concluir este guia prático de gerenciamento eficaz do tempo, você estará equipado com os segredos para 
                    maximizar sua produtividade, conquistar equilíbrio e alcançar resultados surpreendentes em sua vida. 
                    Lembre-se de que a transformação real ocorre com a prática consistente e a implementação gradual das estratégias aqui apresentadas. 
                    Ao eliminar distrações, dominar a organização e estabelecer hábitos poderosos, você terá as ferramentas necessárias para 
                    transformar sua vida e aproveitar ao máximo seu tempo. Não espere mais, comece a transformação agora mesmo e 
                    dê o primeiro passo em direção a uma vida mais produtiva e satisfatória!
                    <strong className="conteudo-transform"> Transforme sua vida agora! </strong></p>
                </div>
                <br/>
                <hr/>
                <br/>
        </div>
            <div className="painel-compra conteudo-ebooks__compra">
              <p>Para acessar a página de compra e realizar a comprar do seu e-book, 
                você pode acessar <a href='https://pay.kiwify.com.br/yRt5pKM' className="buy-link" target='_blank'>clicando aqui</a> ou no botão no final da página</p>
                <br /><br />
                <p>Ao clicar no botão você será redirecionado a página de compra.</p>
            </div>
            <div className="main-botao">
              <p className="conteudo-botao">Mude o seu futuro. <strong className="conteudo-transform">garanta o seu agora!</strong></p>
              <Button href='https://pay.kiwify.com.br/yRt5pKM' target='_blank'>clique aqui</Button>
            </div>
    </Container>
  )
}

export default TextSeteDicasGerenciamentoTempo