import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-wrapper">
      <h1>Cooking in progress</h1>
      <div className="cooking">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>

        <div className="area">
          <div className="sides">
            <div className="pan"></div>
            <div className="handle"></div>
          </div>
          <div className="pancake">
            <div className="pastry"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
