import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line,  RiCloseLine } from "react-icons/ri";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
const Menu = () => (
  <>
    <p>
      <Link to='/'> Home </Link> 
    </p>
    <p>
    <Link to='/practice'> Practice </Link> 
    </p>
    <p>
    <Link to='/resources'> Resources </Link> 
    </p>
    
    <p>
    <Link to='/free'> Free Resources </Link> 
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3_navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
