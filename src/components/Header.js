import React, { useState, useEffect } from "react";

import "../styles/global.css";
import { Link } from "gatsby";
import LogoComponent from "../assets/dale-greve-full-text-logo";
import TransitionLink from "gatsby-plugin-transition-link";
import { IoGlassesOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";



const Header = () => {

  const [scrollDir, setScrollDir] = useState("scrolling down");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      console.log(scrollY);
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(
        scrollY > lastScrollY ? "scrolling down": "scrolling up"
      );
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <header
      className={` header-global z-10 fixed top-0 flex justify-between ${
        window.pageYOffset !== 0 && scrollDir === "scrolling down"
          ? "scrolled__down"
          : "scrolled__up"
      }`}
    >
      <LogoComponent />

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
    </header>
  );
};

export default Header;
