import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavMenu() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">AMY CALLEJA</Navbar.Brand>
          <Nav className="p-2 justify-content-end">
            <Nav.Link className="mx-3" href="#about">About</Nav.Link>
            <Nav.Link className="mx-3" href="#projects">Projects</Nav.Link>
            <Nav.Link className="mx-3" href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}