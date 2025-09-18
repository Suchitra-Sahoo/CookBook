import React from 'react';
import './Loader.css'; // We'll add animations here

function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="pizza">
        <div className="slice slice1"></div>
        <div className="slice slice2"></div>
        <div className="slice slice3"></div>
        <div className="slice slice4"></div>
        <div className="slice slice5"></div>
        <div className="slice slice6"></div>
      </div>
      <h1 className="loader-text">Cooking in progress...</h1>
    </div>
  );
}

export default Loader;
