import React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>Copyright Dale S. Greve | 2021</footer>
    </div>
  );
}

export default Layout