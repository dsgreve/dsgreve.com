import * as React from 'react';
import { Link } from 'gatsby';
import DsgLogo from '../assets/dsg_logo';
import TransitionLink from "gatsby-plugin-transition-link";


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
      <div className="header__wrapper container flex items-center justify-between">
        <div className="w-20">
          <DsgLogo />
        </div>
        <nav className="md:flex">
          <TransitionLink
            to="/"
            exit={{
              length: 1,
            }}
            entry={{}}
            className="text-white uppercase hover:text-rajah md:mr-4"
          >
            HOME
          </TransitionLink>
          <TransitionLink
            to="/about"
            exit={{
              length: 1,
            }}
            entry={{}}
            className="text-white uppercase hover:text-rajah md:mr-4"
            activeClassName="border-b-2 border-rajah"
          >
            About
          </TransitionLink>
          <TransitionLink
            to="/contact"
            exit={{
              length: 1,
            }}
            entry={{}}
            className="text-white uppercase hover:text-rajah"
            activeClassName="border-b-2 border-rajah"
          >
            Contact
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