import React from "react";
import NavigationTopBar from "../../components/navigation-top-bar/navigation-top-bar.component";
import "./navigation.style.css";
import { Outlet } from "react-router-dom";
import Footer from "..//footer/footer.component.jsx";
const Navigation = () => {
  return (
    <div>
      <div className="navigation-bar">
        <NavigationTopBar></NavigationTopBar>
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Navigation;
