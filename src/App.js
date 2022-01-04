import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div>
      <div className="hero bg-custom-quaternary text-light">
        <div className="hero-body">
          <h1>Lawrence Rivales</h1>
          <Navbar />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
