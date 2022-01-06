import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';
import './index.css';
import './spectre-exp.css';
import './spectre-icons.css';
import './spectre.css';
import App from './App';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/my-portfolio" element={<App />}>
        <Route index element={<About />} />
        <Route exact path="/my-portfolio/about" element={<About />} />
        <Route path="/my-portfolio/portfolio" element={<Portfolio />} />
        <Route path="/my-portfolio/contact" element={<Contact />} />
        <Route path="/my-portfolio/resume" element={<Resume />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
