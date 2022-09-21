import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="eis-navbar">
      <div className="row">
        <div className="col-1">
          <button type="button" id="sidebarCollapse" className="btn text-white ms-3">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="col-9 eis-app-title">
          <Link to="#" className='eis-link'>
            <img src="images/logo-hasnur.png" width="40px" className="me-3"/>
            <span>Agribusiness Executive Information System</span> 
          </Link>
        </div>
        <div className="col-1 text-white">Erwin M</div>
        <div className="col-1 text-center">
          <button type="button" className="btn text-white">
            <i className="fas fa-sign-out"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;