import React from 'react';
import './App.css';
import NavMenu from './NavMenu';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Projects from './Projects'
import { Container, Stack } from 'react-bootstrap';

function App() {
  return (
  <div className='App'>
    <Stack className="col-sm-11 mx-auto" gap={3}>
      <NavMenu />
      <Hero />
       <About />
       <Projects />
     
      </Stack>
       <Contact />
       </div>
  );
}

export default App;
