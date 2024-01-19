import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavMenu() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Nav className="p-2 justify-content-end">
          <p className='comment m-2'>// </p>
            <Nav.Link className="mx-3 comment" href="#about">About<span className='comment'>{'()'}</span></Nav.Link>
            <Nav.Link className="mx-3 comment" href="#projects">Projects<span className='comment'>{'()'}</span></Nav.Link>
            <Nav.Link className="mx-3 comment" href="#contact">Contact<span className='comment'>{'()'}</span></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}