import React from 'react';

const MapDashboard = (props) => {
  return (
    <div className="card">
      <div className="card-header p-3">
        <b>Rekapitulasi Panen Tahun 2022 - PT {props.company}</b>
      </div>
      <div className="card-block p-3">
        Ini peta
      </div>
    </div>
  );
};

export default MapDashboard;