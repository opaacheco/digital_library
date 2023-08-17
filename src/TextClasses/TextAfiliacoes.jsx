import React from 'react'
import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../Styles/Afiliacoes.css'

function TextAfiliacoes() {
  return (
    <Container>
      <div className="main-afiliacoes">
        <h1 className='main-afiliacoes__title'>Todas as <strong className='main-afiliacoes__title__transform'>afiliações</strong></h1>
      </div>
      <div className="conteudo-afiliacoes">
        <Card>
          <Card.Img variant="top" src="./img/os-pequenos-cristos.png" />
          <Card.Body>
              <h3 className="card__title">Pequenos Cristos</h3>
              <p className="card__text">As crianças estão aprendendo a biblia 3x mais rápido apenas brincando e se divertindo...Ensinar a importância da palavra de Deus a crianças <strong className="card__text__transform">com atividades, conhecimentos da Bíblia e milagres de Jesus.</strong></p>
              <Button href='/pequenos-cristos'>Clique para saber mais</Button>
            </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="./img/psicanalise-e-racismo.png" />
          <Card.Body>
              <h3 className="card__title">Psicanálise e Racismo</h3>
              <p className="card__text">Examina a conexão entre psicanálise e racismo, abordando a <strong className="card__text__transform">dinâmica inconsciente e desenvolvendo terapias.</strong></p>
              <Button href='psicanalise-e-racismo'>Clique para saber mais</Button>
            </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="./img/verdadeiro-cristao.png" />
          <Card.Body>
              <h3 className="card__title">Verdadeiro Cristão</h3>
              <p className="card__text">Descubra, o verdadeiro significado de ser um cristão autêntico neste curso enriquecedor,<strong className="card__text__transform">explorando a fé cristã, os ensinamentos diários de Jesus, virtudes, sagrados e teológicos.</strong></p>
              <Button href='/verdadeiro-cristao'>Clique para saber mais</Button>
            </Card.Body>
        </Card>
      </div>
      <div className="conteudo-afiliacao__banner">
        <Card className='conteudo-afiliacao__banner__card'>
          <Card.Img src="./img/daqui-um-ano-voce-vai-desejar-ter-começado-hoje.png" className='conteudo-afiliacao__banner__card__image'/>
          <Card.Body>
              <h3 className="card__title">Guia prático para passar em concurso público em um ano</h3>
              <p className="card__text">Daqui um ano você vai desejar ter <strong className="card__text__transform">começado hoje!</strong></p>
              <Button href='daqui-um-ano-voce-vai-desejar-ter-comecado-hoje'>Clique para saber mais</Button>
            </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default TextAfiliacoes