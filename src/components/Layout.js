import React from 'react';
import Header from './Header';

const Layout =({ pageTitle, children }) => {
  return (
    <div className="pt-14">
      <div className="gradient-background gradient-background__1"></div>
      <title>{pageTitle}</title>
      <Header />
      <main>
        <h1>{pageTitle}</h1>
        {children}
        {/* <div className="text-white text-3xl sticky isVisible">
          {isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}
        </div> */}
        <div className="h-screen"></div>
      </main>
      <footer className="bg-slate-900 py-2 text-center">
        <p className="text-white">
          Copyright {new Date().getUTCFullYear()} | Dale S Greve
        </p>
      </footer>
    </div>
  );
}

export default Layout;