import React, { useContext } from "react";
import { Link } from "gatsby";
import { mainNavItem } from "./nav.module.css";

import Toggle from "react-toggle";

// Context
import { ThemeContext } from "../context/themeContext";

const MainNav = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className="main-nav w-full">
      <ul className="flex flex-row justify-end py-8 pr-8 gap-4">
        <li className={mainNavItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={mainNavItem}>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Toggle
            id="theme-toggle"
            checked={theme === "light" ? true : false}
            onChange={handleThemeToggle}
          />
          <label htmlFor="theme-toggle" className="text-accent hidden">
            Theme toggler
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
