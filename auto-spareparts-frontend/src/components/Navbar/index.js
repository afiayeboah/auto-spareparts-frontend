import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from "./styles";

import logo_icon from "../../assets/images/logo.png";


const Navbar = () => {
  const navLinks = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/products",
      name: "Products"
    },
    {
      path: "/cart",
      name: "Cart"
    },
    {
      path: "/login",
      name: "Login"
    },
    {
      path: "/signup",
      name: "Sign Up"
    }
  ]


  return (
    <Styles className="nav-bar">
      <div className="nav-wrapper">
        <div id="logo">
          <img src={logo_icon} alt="logo" />
        </div>
        <div className="nav-links">
          {navLinks.map((link, index) =>
            <NavLink
              to={link.path}
              key={`${link.path}-${index}`}
              className={
                ({ isActive }) => `nav-link ${isActive ? ' active' : ""}`
              }
            >
              {link.name}
            </NavLink>
          )}
        </div>
      </div>
    </Styles>
  );
}

export default Navbar; 
