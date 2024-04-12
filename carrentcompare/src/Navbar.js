import React from 'react'
const Navbar = () => {
    return (

            <nav className="navbar navbar-expand bg-transparent navbar-transparent">
                <div className='container'>
                    <a href="#" className="navbar-brand text-light fs-5 fw-bold">Car Rent Compare</a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="/Home" className="nav-link active text-light">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/About" className="nav-link text-light">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/Services" className="nav-link text-light">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="/Contact" className="nav-link text-light">Contact</a>
                        </li>
                        <li className="nav-item">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2 bg-transparent text-light" type="search" placeholder="" aria-label="Search"/>
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>

    );
}
 
export default Navbar;

