import React from 'react'

import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import '../Styles/PaginasCadaEbooksEAfiliacoes.css'

const TextDaquiUmAnoVoceVaiDesejarTerComecadoHoje = () => {
  return (
    <Container>
        <div className="main-page__banner">
            <div className="main-imagem__banner">
              <img src="./img/daqui-um-ano-voce-vai-desejar-ter-começado-hoje.png" />
            </div>
              <div className="main-title">
                <h1 className="title">Guia prático para passar em <strong className="title-transform">concurso público em um ano</strong></h1>
              </div>
                <div className="conteudo-ebooks">
                  <p>"Guia Prático para Passar em Concurso Público em um Ano" é um curso projetado para auxiliar os candidatos que desejam se preparar de forma eficiente e estratégica para concursos públicos em um período de tempo limitado. O curso oferece orientações práticas, dicas valiosas e um plano de estudos estruturado para maximizar as chances de sucesso dos participantes.
                    <br/>
                    <br/>
                    Durante o curso, os participantes serão apresentados a técnicas e estratégias comprovadas para otimizar sua preparação e aumentar sua competitividade nos processos seletivos de concursos públicos. Serão abordados aspectos como o planejamento do estudo, a gestão do tempo, a seleção de materiais adequados e a compreensão dos conteúdos-chave exigidos nos concursos.
                    <strong className="conteudo-transform">Venha ser implacável nos concursos!</strong></p>
                </div>
        </div>
                <br/>
                <hr/>
                <br/>
            <div className="painel-compra conteudo-ebooks__compra">
              <p>Para acessar a página de compra e realizar a comprar do seu e-book, 
                você pode acessar <a href='https://pay.kiwify.com.br/SSVUXRl?afid=XXk8Gl7Q' className="buy-link" target='_blank'>clicando aqui</a> ou no botão no final da página</p>
                <br /><br />
              <p>Ao clicar no botão você será redirecionado a página de compra.</p>
            </div>
            <div className="main-botao">
              <p className="conteudo-botao">Seja o melhor nos concursos. <strong className="conteudo-transform">garanta o seu agora!</strong></p>
              <Button href='https://pay.kiwify.com.br/SSVUXRl?afid=XXk8Gl7Q' target='_blank'>clique aqui</Button>
            </div>
    </Container>
  )
}

export default TextDaquiUmAnoVoceVaiDesejarTerComecadoHoje