import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import logo from "../../assets/logo-black.png";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav__content body">
          <li className="nav__item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <img className="header__logo" src={logo} />
            </Link>
          </li>
          <li className="nav__item nav__optional">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link
              activeClass="active"
              to="form"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Report Your Symptoms
            </Link>
          </li>
          <li className="nav__item">
            <Link
              activeClass="active"
              to="heatmap"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              View Virus Data
            </Link>
          </li>
        </div>
      </nav>
    );
  }
}

export default Navbar;
