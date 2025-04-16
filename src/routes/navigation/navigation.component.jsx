import React from "react";
import NavigationTopBar from "../../components/navigation-top-bar/navigation-top-bar.component";
import { Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <NavigationTopBar></NavigationTopBar>
      <Outlet />
    </>
  );
};

export default Navigation;
