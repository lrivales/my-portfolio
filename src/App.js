// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  return (
    <div>
      <div className="hero bg-custom-primary">
        <div className="hero-body">
          <h1>Lawrence Rivales</h1>
          <p>Welcome to my portfolio.</p>
        </div>
      </div>
      <div className="bg-custom-secondary">
        <Navbar />
        <About />
        <Portfolio />
        <Contact />
        <Resume />
      </div>
    </div>
  );
}

export default App;