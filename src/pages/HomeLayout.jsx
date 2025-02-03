import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default HomeLayout;
