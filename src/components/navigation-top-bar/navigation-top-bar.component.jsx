import React, { useState, useEffect } from "react";
import "./navigation-top-bar.style.css";
import { Link } from "react-router-dom";
import ProjectData from "../../data/project-data";

const NavigationTopBar = () => {
  const openResume = () => {
    window.open(ProjectData.resume, "_blank");
  };
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to={"/"}>
        Binh's Portfolio
      </Link>
      <div>
        {/* Add ms-auto here to push nav items to the right */}
        <ul>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={openResume}>
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationTopBar;
