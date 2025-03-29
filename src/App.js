import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Controls from './components/Controls';
import ThemeButton from './components/ThemeButton';
import './styles/styles.scss';

function App() {
  const [lightMode, setLightMode] = useState(false);

  const toggleTheme = () => {
    setLightMode(!lightMode);
    document.body.classList.toggle('light-mode');
  };

  return (
    <Router>
      <div className={`main-content ${lightMode ? 'light-mode' : ''}`}>
        <ThemeButton toggleTheme={toggleTheme} />
        <Controls />
        
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;