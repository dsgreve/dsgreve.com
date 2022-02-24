import React, {useEffect, useRef, useState} from 'react';
//import { Link } from 'gatsby';
//import DsgLogo from '../assets/dsg_logo';
import Header from './Header';
import snowboard from "../images/220205-julia-marino-cc-0930p-eb95d8.webp";


const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};
const Layout =({ pageTitle, children }) => {

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  return (
    <div className="">
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
        <div className="box" ref={containerRef}>
          <img src={snowboard} alt="snowboarder" />
        </div>
      </main>
      <footer className="bg-slate-900 py-2 text-center">
        <p className="text-white">
          Copyright {new Date().getUTCFullYear()} | Dale Greve
        </p>
      </footer>
    </div>
  );
}

export default Layout;