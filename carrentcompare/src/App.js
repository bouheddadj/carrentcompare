import React from 'react'
import { useEffect } from 'react';
import Navbar from './Navbar';
import Main from './Main';


function App() {
  return (

  <div className='container containers-bottom-margin'>

    <div className='row'>
            <Navbar/>
    </div>

    <div className='row'>
          <Main/>
    </div>
    
  </div>
  
  );
}

export default App;
