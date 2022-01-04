import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

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
        <Outlet />
      </div>
    </div>
  );
}

export default App;
