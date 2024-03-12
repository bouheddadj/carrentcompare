import React from 'react'
const Navbar = () => {
    return (

        <nav className="navbar navbar-expand navbar-dark bg-dark corners containers-bottom-margin">
            <div className='container'>
                <a href="#" className="navbar-brand">Car Rent Compare</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/Home" className="nav-link active">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/About" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Services" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Contact" className="nav-link">Contact</a>
                    </li>
                    <li className="nav-item">
                    <div class="container-fluid">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 bg-dark text-light" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                    </li>
                </ul>
            </div>
        </nav>

    );
}
 
export default Navbar;

