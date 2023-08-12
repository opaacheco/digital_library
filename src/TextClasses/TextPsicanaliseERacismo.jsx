import React from 'react'

import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import '../Styles/PaginasCadaEbooksEAfiliacoes.css'

const TextPsicanaliseERacismo = () => {
  return (
    <Container>
        <div className="main-page">
            <div className="main-imagem">
              <img src="./img/psicanalise-e-racismo.png" />
            </div>
              <div className="main-title">
                <h1 className="title">psicanálise e <strong className="title-transform">racismo</strong></h1>
              </div>
                <div className="conteudo-ebooks">
                  <p>"Psicanálise e Racismo" é um curso que explora as interseções entre a psicanálise e o fenômeno do racismo. O curso busca examinar as complexas dinâmicas psicológicas que sustentam o racismo e como a psicanálise pode contribuir para uma compreensão mais profunda desses processos.
                    <br/>
                    <br/>
                    Durante o curso, os participantes serão introduzidos aos conceitos fundamentais da psicanálise, como o inconsciente, o processo de formação de identidade e os mecanismos de defesa. Em seguida, eles irão explorar como esses conceitos podem ser aplicados ao estudo do racismo e das experiências raciais.
                    <strong className="conteudo-transform"> Saiba como se comporta o psicológico em torno deste assunto! </strong></p>
                </div>
        </div>
                <br/>
                <hr/>
                <br/>
            <div className="painel-compra conteudo-ebooks__compra">
              <p>Para acessar a página de compra e realizar a comprar do seu e-book, 
                você pode acessar <a href='https://pay.kiwify.com.br/630jQ77?afid=PJd1JPZ4' className="buy-link" target='_blank'>clicando aqui</a> ou no botão no final da página</p>
                <br /><br />
              <p>Ao clicar no botão você será redirecionado a página de compra.</p>
            </div>
            <div className="main-botao">
              <p className="conteudo-botao">Melhore seu jeito de pensar. <strong className="conteudo-transform">garanta o seu agora!</strong></p>
              <Button href='https://pay.kiwify.com.br/630jQ77?afid=PJd1JPZ4' target='_blank'>clique aqui</Button>
            </div>
    </Container>
  )
}

export default TextPsicanaliseERacismo