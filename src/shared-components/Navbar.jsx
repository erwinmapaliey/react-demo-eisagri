import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Backdrop from './Backdrop';
import SideDrawer from './SideDrawer';
import Sidebar from './Sidebar';

import './Navbar.css';

const Navbar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const openSidebarHandler = () => {
    setSidebarIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setSidebarIsOpen(false);
  }

  return (
    <>
      {sidebarIsOpen && <Backdrop onClick={closeDrawerHandler} />}  
        <SideDrawer show={sidebarIsOpen} onClick={closeDrawerHandler}>
          <Sidebar onClick={closeDrawerHandler} />
        </SideDrawer>

      <nav className="eis-navbar">
        <div className="row mx-0">
          <div className="col-1">
            <button onClick={openSidebarHandler} type="button" id="sidebarCollapse" className="btn text-white ms-3">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="col-9 eis-app-title">
            <Link to="#" className="text-decoration-none text-white">
              <img src="images/logo-hasnur.png" width="40px" alt="logo-hasnur" />
              <span className='ps-1'>&nbsp;Agribusiness Executive Information System</span> 
            </Link>
          </div>
          <div className="col-1 text-end text-white">Erwin M</div>
          <div className="col-1 text-end">
            <button type="button" className="btn text-white">
              <i className="fas fa-sign-out"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;