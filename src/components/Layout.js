import * as React from 'react';
import { Link } from 'gatsby';
import DsgLogo from '../assets/dsg_logo';
import TransitionLink from "gatsby-plugin-transition-link";
import { IoGlassesOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";


const Layout =({ pageTitle, children }) => {
  return (
    <div className="relative h-screen py-2">
      <div className="gradient__background"></div>
      <div className="waves">
        <div className="wave__1"></div>
        <div className="wave_2">
          <svg className="absolute">
            <clipPath id="wave4">
              <path
                d="M1289.9 70.5371C1077.1 -11.3558 905.86 45.0023 728.36 66.1005C550.86 87.1986 430.248 25.3857 264.86 6.83957C99.4718 -11.7065 66.483 11.2198 -12.6395 31.0004C-12.6395 118.933 -12.6395 532.869 -12.6395 532.869L1516.96 532.869L1516 6.83949C1516 6.83949 1503.09 152.58 1289.9 70.5371Z"
                fill="url(#paint0_linear)"
              ></path>
            </clipPath>
          </svg>
        </div>
      </div>
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
    </div>
  );
}

export default Layout;