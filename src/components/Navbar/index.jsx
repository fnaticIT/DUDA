import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../images/logo.jpeg";
import logo2 from "../../images/logo5.png";
import {Link} from "react-scroll";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
          {/* <Link to="/">
            <img to="/" src={logo2} style={{width:"12%",height:"100%"}}></img>
          </Link> */}
            <NavLogo to="/" onClick={toggleHome}>DUDA</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  About us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  How it works
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  Book Session
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="domain" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  Discover Topics
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/contact">Contact us</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
