import React from "react";
import NavigationTopBar from "../../components/navigation-top-bar/navigation-top-bar.component";
import { Outlet } from "react-router-dom";
import Footer from "..//footer/footer.component.jsx";
const Navigation = () => {
  return (
    <>
      <NavigationTopBar></NavigationTopBar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
