//import * as React from 'react';
import React, { useContext } from "react";
import PropTypes from "prop-types";

import MainNav from "./nav";
import { container } from './layout.module.css';
import Toggle from "react-toggle";

// Context
import { ThemeContext } from "../context/themeContext";

const Layout = ({pageTitle, children}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };


  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
      } bg-primary text-main-text text-center transition-all duration-300 m-0 px-0 py-5 min-h-screen`}
    >
      <Toggle
        id="theme-toggle"
        checked={theme === "light" ? true : false}
        onChange={handleThemeToggle}
      />
      <label htmlFor="theme-toggle" className="text-accent hidden">
        Theme toggler
      </label>
      <MainNav />
      <div className={container}>
        <main>
          <h1 className="text-6xl">{pageTitle}</h1>
          {children}
        </main>
      </div>
    </div>
  );

}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;