import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Pastille from './Pastille';
import Content from './Content';

function App() {

  const [showContent, setShowContent] = useState(false);
  const [results, setResults] = useState([]);

  const handleButtonClick = () => {
    setShowContent(true); 
  };

  return (

    <div className='d-flex flex-column gap-3'>
      
      <Navbar/>

      <Main onButtonClick={handleButtonClick} onResultsChange={setResults} />

      {showContent && <Content results={results}/>}

    </div>
  
  );
}

export default App;
