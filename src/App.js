import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div>
      <div className="hero hero-sm bg-custom-quaternary text-light">
        <div className="hero-body">
          <br />
          <h1>lawrence rivales</h1>
        </div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="hero hero-sm bg-custom-primary text-light footer">
        <div className="hero-body text-center">
          {/* <h4 className='text-center'>github&nbsp;&nbsp;&nbsp;&nbsp;linkedin</h4> */}
          <a href='https://github.com/lrivales' target='_blank' className='text-light'>github</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href='https://www.linkedin.com/in/lawrencerivales' target='_blank' className='text-light'>linkedin</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href='https://www.facebook.com/lrivales' target='_blank' className='text-light'>facebook</a>
        </div>
      </div>
    </div>
  );
}

export default App;
