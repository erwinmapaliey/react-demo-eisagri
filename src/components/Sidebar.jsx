import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div className="navhead">
        <div id="dismiss"><i className="fa fa-times" aria-hidden="true"></i></div>
      </div>

      <ul className="list-unstyled components">
        <li>
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
          <ul className="collapse list-unstyled" id="homeSubmenu">
            <li>
              <a href="#">Home 1</a>
            </li>
            <li>
              <a href="#">Home 2</a>
            </li>
            <li>
              <a href="#">Home 3</a>
            </li>
          </ul>
        </li>

        <li>
          <Link to="#">About</Link>
        </li>

        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li>
                <a href="#">Page 1</a>
            </li>
            <li>
                <a href="#">Page 2</a>
            </li>
            <li>
                <a href="#">Page 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;