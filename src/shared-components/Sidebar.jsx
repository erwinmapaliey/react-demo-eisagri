import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <div id="sidebar">
      <div className="navhead">
        <div id="dismiss" onClick={props.onClick}><i className="fa fa-times" aria-hidden="true"></i></div>
      </div>

      <ul className="list-unstyled components" id="accordionExample">
        <li><Link to="/home" className="text-decoration-none fw-bold">Rekapitulasi Produksi</Link></li>
        <li><Link to="/palms" className="text-decoration-none fw-bold">Penyataan Hektar</Link></li>
        <li className="accordion-item">
          <Link className="text-decoration-none fw-bold" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Produksi TBS
          </Link>
          <ul className="list-unstyled accordion-collapse collapse" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
            <li><Link to="#" className="text-decoration-none">Dashboard Produksi</Link></li>
            <li><Link to="#" className="text-decoration-none">Performa Kebun</Link></li>
          </ul>
        </li>
        <li><Link className="text-decoration-none fw-bold">Water Management System</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;