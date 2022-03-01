import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
// import the icons you need
import { faSearch, faCrown, faSun } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="navBar">
      <div className="left-navbar">
        <Link href="/" className="wrap-logo">
          <a className="logo rainbow-text">
            Markintosh
            <FontAwesomeIcon className="icon-crown-nav" icon={faCrown} />{' '}
          </a>
          {/* <FontAwesomeIcon className="icon-crown" icon={faCrown} /> */}
        </Link>
        <ul>
          <li>
            <Link href="/posts">
              <a className="effect-underline">All posts</a>
            </Link>
          </li>
        </ul>
        <Link href="/">
          <a className="effect-underline">Write now</a>
        </Link>
      </div>

      <div className="right-navbar">
        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            name=""
            placeholder="Search"
          />
          <button className="searchButton" href="#">
            <FontAwesomeIcon className="" icon={faSearch} />
          </button>
        </div>
        <Link href="/">
          <a>
            <FontAwesomeIcon className="icon-sun" icon={faSun} />
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
