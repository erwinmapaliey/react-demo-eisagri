import React from 'react';

import Navbar from '../../shared-components/Navbar';
import WelcomeText from '../../shared-components/WelcomeText';
import MapDashboard from '../components/MapDashboard';

import './Home.css';

const Home = () => {
  return (
    <div id="content">
      <Navbar />
      <WelcomeText title="DASHBOARD" />

      {/* DASHBOARD PETA */}
      <div className="row mx-0">
        <div className="col-md-6">
          <MapDashboard company="Hasnur Citra Terpadu" />
        </div>
        <div className="col-md-6">
          <MapDashboard company="Barito Putera Plantation" />
        </div>
      </div>
    </div>
  );
};

export default Home;