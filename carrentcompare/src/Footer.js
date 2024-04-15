import React from 'react';
import './footer/css/ionicons.min.css';
import './footer/css/style.css';

const Footer = () => {
  return (
    <footer className="footer-07">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h2 className="footer-heading"><a href="#" className="logo">Colorlib.com</a></h2>
            <p className="menu">
              <a href="#">Home</a>
              <a href="#">Agent</a>
              <a href="#">About</a>
              <a href="#">Listing</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </p>
            <ul className="ftco-footer-social p-0">
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="ion-logo-twitter"></span></a></li>
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook"></span></a></li>
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram"></span></a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p className="copyright">
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright &copy;<script>document.write(new Date().getFullYear());</script>
              All rights reserved | This template is made with <i className="ion-ios-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
