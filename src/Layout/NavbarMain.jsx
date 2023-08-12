import React from "react"

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../Styles/NavBarMain.css'
import { Container } from "react-bootstrap";

const NavbarMain = () => {
  return (
    <Container>
      <Navbar>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/ebooks">E-Books</Nav.Link>
          <Nav.Link href="/afiliacoes">Afiliações</Nav.Link>
          <Nav.Link href="/como-acessar">Como Acessar</Nav.Link>
        </Nav>
    </Navbar>
    </Container>
  )
}

export default NavbarMain