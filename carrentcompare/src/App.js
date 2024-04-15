import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import Content from './Content';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact'; 
import ChartComponent from './ChartComponent'

function App() {

  const [showContent, setShowContent] = useState(false);
  const [results, setResults] = useState([]);

  const handleButtonClick = () => {
    setShowContent(true); 
  };

  return (
    <Router>
      <div className='d-flex flex-column gap-3'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main onButtonClick={handleButtonClick} onResultsChange={setResults} />} />
          <Route path="/home"     element={<Home     />} />
          <Route path="/about"    element={<About    />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact"  element={<Contact  />} />
        </Routes>
        {showContent && (
          <div>
            <Content results={results} />
            <ChartComponent />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
