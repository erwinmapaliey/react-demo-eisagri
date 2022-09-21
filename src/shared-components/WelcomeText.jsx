import React from 'react';

const WelcomeText = (props) => {
  return (
    <div className="row mx-0 my-3">
      <div className="col-md-6">
        <p className="pages-title">{props.title}</p>
        <p>Welcome to EIS Agribusiness</p>
      </div>
      <div className="col-md-6">
        <p className="pages-date text-end">Rabu, 21 September 2022</p>
      </div>
    </div>
  );
};

export default WelcomeText;