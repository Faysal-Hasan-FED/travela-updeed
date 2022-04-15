import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const MyNavbar = () => {
    return (
      <Navbar collapseOnSelect bg='dark' fixed='top' variant='dark' expand="lg" >
  <Container>
  <Navbar.Brand href="#home">Travela</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <p>
        <Link to="/home">Home</Link>
      </p>
      <p>
      <Link to="/about">About</Link>
      </p>
      <p>
      <Link to="/tour">Tour</Link>
      </p>
      <p>
      <Link to="/hotels">Hotels</Link>
      </p>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default MyNavbar;