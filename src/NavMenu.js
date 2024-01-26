import React from 'react';
import {Container, Stack} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavMenu() {
  return (
 <Stack direction="horizontal" className="justify-content-md-end justify-content-center pt-1" > 
      <Navbar  bg="dark" data-bs-theme="dark">
      <p className='comment my-2 '> // </p>  
        <Nav.Link className="ms-4  comment" href="#about">About<span className='comment'>{'()'}</span></Nav.Link>  
        <Nav.Link className="ms-4 comment" href="#projects">Projects<span className='comment'>{'()'}</span></Nav.Link> 
        <Nav.Link className="ms-4 comment" href="#contact">Contact<span className='comment'>{'()'}</span></Nav.Link> 
      </Navbar> 
  </Stack>
  );
}