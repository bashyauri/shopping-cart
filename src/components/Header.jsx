import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shago Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart:2</span>
      </Link>
    </header>
  );
}

export default Header;
