import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <span className="siderbarAvatar">
            <i className="bi bi-person-circle"></i>
          </span>
          <h3 className="siderbarTitleAvavatar">Hello Admin</h3>
          <ul className="sidebarList">
            <Link to="/" className="navLink">
              <li className="sidebarListItem active">
                <span className="sidebarIcon">
                  <i className="bi bi-bar-chart-line"></i>
                </span>
                Home
              </li>
            </Link>
            <Link to="/users" className="navLink">
              <li className="sidebarListItem">
                <span className="sidebarIcon">
                  <i className="bi bi-person"></i>
                </span>
                User
              </li>
            </Link>
            <Link to="/movies" className="navLink">
              <li className="sidebarListItem">
                <span className="sidebarIcon">
                  <i className="bi bi-film"></i>
                </span>
                Movie
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
