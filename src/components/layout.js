//import * as React from 'react';
import React, { useContext } from "react";
import PropTypes from "prop-types";

import MainNav from "./nav";
import { container } from './layout.module.css';


// Context
import { ThemeContext } from "../context/themeContext";

const Layout = ({pageTitle, children}) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
      } bg-primary text-main-text text-center transition-all duration-300 m-0 px-0 py-5 min-h-screen`}
    >
      
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