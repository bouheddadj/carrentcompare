import React from 'react'

const Main = () => {
    return(
            <div className='container bg-dark corners containers-bottom-margin'>
                <div className='row bg-dark corners main-rows-padding btn-auto'>
                        <button className="btn btn-outline-light" type="submit">Véhicules</button>
                </div>
                <div className='row bg-dark corners main-rows-padding'>
                        <input className="form-control me-2 bg-dark text-light" type="search" placeholder="Search" aria-label="Search"/>
                </div>
            </div>  
    );
}
  
export default Main;