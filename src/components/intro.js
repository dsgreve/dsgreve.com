import * as React from "react";
import MainNav from "./nav";

const Intro = ({ pageTitle, children }) => {
  return (
    <div className="gradient-background ">
      <MainNav />
      <main className="h-50v md:h-70v flex align-middle justify-center items-center">
        <div className="text-center">
          <h1 className="text-6xl text-white">{pageTitle}</h1>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Intro;
