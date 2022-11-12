import * as React from 'react';
import MainNav from "./nav";
import { container } from './layout.module.css';

const Layout = ({pageTitle, children}) => {
  return (
    <div className="gradient-background ">
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

export default Layout;