import * as React from "react";
import { Link } from "gatsby";
import { mainNavItem } from "./nav.module.css";

const MainNav = () => {
  return (
    <nav className="main-nav w-full hidden">
      <ul className="flex flex-row justify-end py-8 pr-8 gap-4">
        <li className={mainNavItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={mainNavItem}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
};

export default MainNav;
