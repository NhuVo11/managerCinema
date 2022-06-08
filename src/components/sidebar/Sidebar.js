import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const [active, setActive] = useState(1);
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
              <li
                onClick={() => setActive(1)}
                className={`sidebarListItem ${active === 1 ? "active" : ""}`}
              >
                <span className="sidebarIcon">
                  <i className="bi bi-bar-chart-line"></i>
                </span>
                Home
              </li>
            </Link>
            <Link to="/users" className="navLink">
              <li
                onClick={() => setActive(2)}
                className={`sidebarListItem ${active === 2 ? "active" : ""}`}
              >
                <span className="sidebarIcon">
                  <i className="bi bi-person"></i>
                </span>
                User
              </li>
            </Link>
            <Link to="/movies" className="navLink">
              <li
                onClick={() => setActive(3)}
                className={`sidebarListItem ${active === 3 ? "active" : ""}`}
              >
                <span className="sidebarIcon">
                  <i className="bi bi-film"></i>
                </span>
                Movie
              </li>
            </Link>
            <Link to="/rooms" className="navLink">
              <li
                onClick={() => setActive(4)}
                className={`sidebarListItem ${active === 4 ? "active" : ""}`}
              >
                <span className="sidebarIcon">
                  <i className="bi bi-grid-3x3-gap"></i>
                </span>
                Rooms
              </li>
            </Link>
            <Link to="/moviesList" className="navLink">
              <li
                onClick={() => setActive(5)}
                className={`sidebarListItem ${active === 5 ? "active" : ""}`}
              >
                <span className="sidebarIcon">
                  <i className="bi bi-calendar-week"></i>
                </span>
                Schedule
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
