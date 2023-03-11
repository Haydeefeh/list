
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';



function Menu() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
        <Container>
        <img src={logo} alt="Logo" width="50"/>
          <Navbar.Brand href="#home">Shopping List</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="option">                                                                          
              <Nav.Link href="#shopping list">My Shopping List</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Menu;