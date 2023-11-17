import React, { useEffect } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import NavMenu from './NavMenu';
import Hero from './Hero';

function App() {
  return (
    <div className="App">

      <NavMenu />
      <header className="App-header">
        
       <Hero />
        <Button variant="primary">Primary</Button>
     
      </header>

    </div>
  );
}

export default App;
