import * as React from 'react';
//import { Link } from 'gatsby';
import DsgLogo from '../assets/dsg_logo';
import TransitionLink from "gatsby-plugin-transition-link";
import { IoGlassesOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";


const Layout =({ pageTitle, children }) => {
  return (
    <div className="">
      <div className="gradient-background gradient-background__1"></div>
      <title>{pageTitle}</title>
      <div className="header__wrapper container flex pt-6 items-center justify-between">
        <div className="w-14">
          <DsgLogo />
        </div>
        <nav className="md:flex">
          <TransitionLink
            to="/"
            exit={{
              length: 1,
            }}
            entry={{}}
            className="text-white uppercase text-xl hover:text-rajah md:mr-4 flex items-center"
          >
            <FaHome className="mr-2" /> HOME
          </TransitionLink>
          <TransitionLink
            to="/about"
            exit={{
              length: 1,
            }}
            entry={{}}
            className="text-white uppercase text-xl hover:text-rajah md:mr-4 flex items-center"
            activeClassName="border-b-2 border-rajah"
          >
            <IoGlassesOutline className="mr-2" /> About
          </TransitionLink>
          <TransitionLink
            to="/contact"
            exit={{
              length: 1,
            }}
            entry={{}}
            className="text-white uppercase text-xl hover:text-rajah flex items-center"
            activeClassName="border-b-2 border-rajah "
          >
            <MdOutlineMarkunreadMailbox className="mr-2" /> Contact
          </TransitionLink>
        </nav>
      </div>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer className="bg-slate-900 py-2 text-center">
        <p className="text-white">Copyright {new Date().getUTCFullYear()} | Dale Greve</p>
      </footer>
    </div>
  );
}

export default Layout;