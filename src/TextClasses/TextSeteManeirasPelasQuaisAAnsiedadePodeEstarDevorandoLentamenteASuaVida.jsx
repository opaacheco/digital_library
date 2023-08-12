import React from 'react'

import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import '../Styles/PaginasCadaEbooksEAfiliacoes.css'

const TextSeteManeirasPelasQuaisAAnsiedadePodeEstarDevorandoLentamenteASuaVida = () => {
  return (
    <Container>
        <div className="main-page">
            <div className="main-imagem">
              <img src="./img/7-maneiras-pelas-quais-a-ansiedade-pode-estar-devorando-lentamente-a-sua-vida.png" />
            </div>
              <div className="main-title">
                <h1 className="title">7 Maneiras de que a ansiedade pode estar <strong className="title-transform">devorando lentamente a sua vida</strong></h1>
              </div>
                <div className="conteudo-ebooks">
                  <p>O e-book "7 Maneiras de que a ansiedade pode estar devorando lentamente a sua vida" é um guia completo que explora a 
                    forma como a ansiedade pode se infiltrar em diversos aspectos da vida, como relacionamentos, trabalho e bem-estar. 
                    Ele oferece insights valiosos sobre os sinais sutis que indicam a presença da ansiedade e apresenta estratégias eficazes 
                    para enfrentá-la.
                    <br/>
                    <br/>
                    O e-book "7 Maneiras de que a ansiedade pode estar devorando lentamente a sua vida" oferece uma abordagem abrangente 
                    para entender e lidar com a ansiedade. Com estratégias eficazes, como técnicas de autoconhecimento, meditação e mudanças de 
                    hábitos, ele oferece uma visão inspiradora e prática para retomar o controle da sua vida e encontrar um estado de equilíbrio 
                    mental e emocional. É uma leitura essencial para aqueles que desejam transformar a ansiedade em oportunidades de crescimento pessoal e 
                    alcançar uma vida plena e serena.
                    <strong className="conteudo-transform"> e comece a viver a vida que você sempre sonhou!</strong></p>
                </div>
                <br/>
                <hr/>
                <br/>
        </div>
            <div className="painel-compra conteudo-ebooks__compra">
              <p>Para acessar a página de compra e realizar a comprar do seu e-book, 
                você pode acessar <a href='https://pay.kiwify.com.br/n5u9cKv' className="buy-link" target='_blank'>clicando aqui</a> ou no botão no final da página</p>
              <br /><br />
              <p>Ao clicar no botão você será redirecionado a página de compra.</p>
            </div>
            <div className="main-botao">
              <p className="conteudo-botao">Transforme sua vida para melhor. <strong className="conteudo-transform" >garanta o seu agora!</strong></p>
              <Button href='https://pay.kiwify.com.br/n5u9cKv' target='_blank'>clique aqui</Button>
            </div>
    </Container>
  )
}

export default TextSeteManeirasPelasQuaisAAnsiedadePodeEstarDevorandoLentamenteASuaVida