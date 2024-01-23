import React from 'react';
import './App.css';
import NavMenu from './NavMenu';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Projects from './Projects'

function App() {
  return (
    <div className="App">
      <NavMenu />
      <header className="App-header">
       <Hero />
       <About />
       <Projects />
      <Contact />
      </header>
    </div>
  );
}

export default App;
