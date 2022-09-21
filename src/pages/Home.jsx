import React from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import './Home.css';

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div id="content">
          <Navbar />
          <div className="p-3">
            {/* WELCOMING TEXT */}
            <div className="row mb-3">
              <div className="col-md-6">
                <p className="pages-title">DASHBOARD</p>
                <p>Welcome to EIS Agribusiness</p>
              </div>
              <div className="col-md-6">
                <p className="pages-date text-end">Rabu, 21 September 2022</p>
              </div>
            </div>

            {/* DASHBOARD PETA */}
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header p-3">
                    <b>Rekapitulasi Panen Tahun 2022 - PT Hasnur Citra Terpadu</b>
                  </div>
                  <div className="card-block p-3">
                    Ini peta
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header p-3">
                    <b>Rekapitulasi Panen Tahun 2022 - PT Barito Putera Plantation</b>
                  </div>
                  <div className="card-block p-3">
                    Ini peta
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overlay"></div>
    </>
  );
};

export default Home;