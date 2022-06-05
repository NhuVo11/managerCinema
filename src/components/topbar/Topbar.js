import React from "react";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWarpper">
        <div className="topLeft">
          <span className="logo">
            C<i className="bi bi-film"></i>nema
          </span>
        </div>
        <div className="topRight">
          <div className="toparIconContainer">
            <i className="bi bi-bell-fill"></i>
            <span className="topiconBag">2</span>
          </div>
          <div className="toparIconContainer">
            <i className="bi bi-gear-fill"></i>
          </div>
          <span className="topAvatar">
            <i className="bi bi-person-circle"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
